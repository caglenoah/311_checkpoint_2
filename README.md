# 311_checkpoint_2

****\*\*\*\*****\*****\*\*\*\*****RUBRIC**\*\*\*\***\*\*\***\*\*\*\***
● 15 pts
Create a new repo ("name it whatever you like - (311-Checkpoint2, Capstone-Backend") with:
A package.json file with the modules you intend to use (look at previous assignments)
Use dotenv with secrets for your database connection
.gitignore file with node_modules and .env
Any assets you want to use (images, links, notes on folder structure, auth integration process, external APIs, etc.)
● 30 pts

Database Layout Diagram (ERD)
This can be done using Excel, Pen and Paper, UML diagrams, or any other way that includes the following:
What tables you have
What kind of data the tables hold (columns and data types)
How are the tables related to each other
Appropriate "CREATE TABLE" sql statements that can be used to create your tables

● 25 pts
README.md page that lists the routes you think you’ll need and a description.
Include all the routes you plan to support and what the expected input and output of each route is. For example:
GET /recipes - This route returns an array of recipe objects that hold the id, name and description of each recipe. This route does not need any input
GET /recipes/:recipeId - This route returns a single recipe object that includes all the details of a recipe including the list of ingredients and instructions. This route takes in the recipe id as a path parameter.
POST /recipe - This route adds a new recipe to the database. It takes in the details of the recipe as input in the request body. The body of the recipe includes the name and the description of the recipe.
PUT /recipe/:recipeId - This route updates an existing recipe. It takes in the id of the recipe to update as a path parameter, and the new recipe name and description in the request body.
DELETE /recipe/:recipeId - This route deletes an existing recipe. It takes in the id of the recipe to delete as a path parameter.

All capstone projects must have register and login routes
POST /register (You can either store authentication info (password/password hash) in your own database or use an Auth0 provider
POST /login

● 20 pts
Implement the majority of your routes.
You do not need to implement all the possible routes you will need, but implement enough of them to have a good starting point for your front end to use.
● 10 pts
Presentation
Present your application idea, database layout and design on the last day of class for discussion.

The goal of this checkpoint is to give you a solid foundation for your capstone backend, not a fully functional app. I realize things will change as you develop your frontend.
