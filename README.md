SafePass
=========

SafePass is your company's internal solution for managing and generating secure passwords. Designed to enhance the security of internal systems, SafePass allows team members to create strong, unique passwords and store them securely for easy access. This tool ensures that sensitive company data remains protected while simplifying password management for employees.


## Screenshots 

![About US](public/images/us.png)

![Create a password](public/images/generate%20password.png)

![Users Passwords](public/images/users%20passwords.png)

![Only Social](public/images/only%20social.png)

![Users](public/images/users.png)


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`
9. Go to http://localhost:8080/users/1  or http://localhost:8080/users/3 first to get the cooki


## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`.
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`.
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples. 
- Use helper functions to run your SQL queries and clean up any data coming back from the database. See `db/queries` for pre-populated examples.
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.
- go to http://localhost:8080/users/1  or http://localhost:8080/users/3 first to get the cookie

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
