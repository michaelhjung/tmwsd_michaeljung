# INSTALL DEPENDENCIES
npm install


# CREATE ENVIRONMENT VARIABLES
cp .env.example .env


# CREATE POSTGRESQL DATABASE
psql
CREATE USER tmwsd_dev WITH PASSWORD 'tmwsd_pw' SUPERUSER;
CREATE DATABASE tmwsd_db WITH OWNER tmwsd_dev;
\q


# MIGRATE AND SEED DATABASE
cd sequelize/
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all


# CD BACK TO ROOT DIRECTORY AND RUN THE SERVER
cd ..
npm start
