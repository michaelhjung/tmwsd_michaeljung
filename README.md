# This message will self-destruct 🧨

A NodeJS programming challenge.

The goal here is to create a simple web application that allows someone to create a message, view that message at a unique URL, and destroy the message upon viewing it. Just like the title states, this message will self-destruct!

## Step 1: ⚙️ Installation and Setup

<p>Feel free to watch the 4 minute video walkthrough or use the written instructions below!</p>

### Video Walkthrough:
<a href="https://youtu.be/ISIF3iUrzN4"><img src="https://i.imgur.com/BlRX21R.png" style="width:450px;" target="_blank" /></a>
<!-- [![Setup Walkthrough](https://i.imgur.com/BlRX21R.png)](https://youtu.be/ISIF3iUrzN4) -->


### Written Walkthrough:
 - <b><u>If you do 🙅NOT have PostgreSQL installed:</u></b>
    - Install it first. Here are some resources:
      - https://www.postgresql.org/download/
      - https://postgresapp.com/
    - Then, follow the instructions below.

<br>

   - Make sure you're in the project root directory. Install dependencies, then create the environment variables by using .env.example.
      ``` bash
      npm install
      cp .env.example .env
      ```
   - Create a user and database in PostgreSQL using the environment variables in the .env file.
      ``` bash
      psql

      CREATE USER tmwsd_dev WITH PASSWORD 'tmwsd_pw' SUPERUSER;
      CREATE DATABASE tmwsd_db WITH OWNER tmwsd_dev;
      \q
      ```
   - Cd into the sequelize directory and migrate and seed the database.
      ``` bash
      cd sequelize/
      npx sequelize-cli db:migrate
      npx sequelize-cli db:seed:all
      ```
   - If you ever need to reset the seeds and migration, you can use the following commands to undo the seed and migrations, then re-migrate and re-seed with the above commands. Make sure you are in the sequelize directory before running the commands.
      ``` bash
      npx sequelize-cli db:seed:undo:all
      npx sequelize-cli db:migrate:undo
      ```
   - Once everything has been seeded correctly, run it, then open http://localhost:3000/
      ``` bash
      npm start
      ```


## Step 2: ✅ Complete the Requirements

Complete the following requirements by using any database engine of your choice. Update this readme by checking the following boxes as you go.

- [x] As a user, I should see a form to create a new message on the homepage.
- [x] As a user, I should see a list of links for all created messages below the 'new message' form on the homepage.
- [x] As a user, when I click a link in the message list, I should be able to view the message at a unique URL.
- [x] As a user, when I open a message, the message should self-destruct (delete from the database).
- [x] As a user, I should no longer see messages on the homepage that have been viewed.

Two more things:
* Remember to add documentation to your README so the app can be installed and run locally for review.
* Bonus points for making it look pretty :sparkles:

## Step 3: 🚀 Submit

Send an email with a link to your fork when finished. Thanks!
