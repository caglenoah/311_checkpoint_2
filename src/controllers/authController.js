let db = require("../utils/db");
let argon2 = require("argon2"); // this is the pwd hash tool
let jwt = require("jsonwebtoken");
require('dotenv').config();

let register = async (request, res) => {
    let username = request.body.username;
    let password = request.body.password;
    let full_name = request.body.full_name;
    let passwordHash;

    try {
        passwordHash = await argon2.hash(password);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
        return;
    }
    let params = [username, passwordHash, full_name]
    let sql = "insert into regUsers (username, password_hash, full_name) values (?, ?, ?)"

    try {
        let results = await db.queryPromise(sql, params); //calling function from db.js
        // since I don't need to see any results, I don't need to use querySync 
        res.sendStatus(200);

    } catch (err) {
        console.log(err);
        if (err.code == 'ER_DUP_ENTRY') {
            res.status(400).send("That user name is taken. Please select another.")
        } else {
            res.sendStatus(500);
        }
        return; // stops execution of any ore code in this function
    }
};

let login = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    let sql = "select id, full_name, password_hash from regUsers where username = ?"
    let params = [username];

    db.query(sql, params, async (err, rows) => {
        if (err) {
            console.log("Could not find username", err)
            res.sendStatus(500);
        } else {
            // we found someone, make sure it's just one row
            if (rows.length > 1) {
                console.log("Returned too many rows for username", username)
                res.sendStatus(500);
            } else if (rows.length == 0) {
                console.log("username does not exist")
                res.status(400).send("That user name doesn't exist. Please sign up for an account")
            } else {
                // we have one good row
                //it comes back as an array with an object, so you have to get the row values by it's index

                let passwordHash = rows[0].password_hash;
                let full_name = rows[0].full_name;
                let userId = rows[0].id;

                let goodPass = false;

                try {
                    goodPass = await argon2.verify(passwordHash, password) // return a boolean, so if it's good here, then goodPass = true //uses the argon2 (beautiful) verify() method
                } catch (err) {
                    console.log("failed to verify password", err)
                    res.status(400).send("Invalid Password")
                }

                if (goodPass) {
                    //make an unsigned token
                    let token = {    // usuallly do as little as possible with this
                        "full_name": full_name,
                        "userId": userId
                    }

                  // unsigned token, so I'm just testing to see if this works so far

                    // now we need to sign the token
                    let signedToken = jwt.sign(token, process.env.JWT_SECRET);
                    // show this just for testing
                    // in real life, you'll send this token to the front end, and the front end will sore it in session storage, local storage, or a cookie
                    // res.json(signedToken) 


                    // cannot have line 109 and 113 ran at the same time

                   res.sendStatus(200) // this is what you will send in a real life situation (production)

                } else {
                    res.sendStatus(400) //
                }

            }
        }
    })
}

module.exports = { register, login };