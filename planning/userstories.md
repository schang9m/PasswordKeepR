## Requirements:
- user can be assigned to an organization
- an organization has many users
- user can add a new username and password for a specific website
- app can generate passwords based on the criteria specified (password length, contains lowercase, contairs uppercase, contains numbers, etc)
- user can edit and change their password any time
- user has a convinient copy to clipboard button so they dont have to select the password
- sites can be categoried, to, social (fb, linkedin), work related (bamboo, harvest), entertainment (snapchat, reddit), etc, etc


## User stories
- As a user, I want to add new username for specific website, because I won't forget later on.
- As a user, I want to change password , because I want to update it on regular bases
- As a user, I want to copy password to clipboard, because it's faster
- As a user, I want to generate password, because I can't think of unique passwords on all the sites
- As a user, I want to categorized the urls, because it's easier to navigate  
- As a user, I want to see other users, because I need to access their username + password too 

## stretch: 
- maybe admin and regular user? (admin can add other users)
- encrypt the password
- refresh generated password if user don't like it

## Routes:
- / (homepage)
- /organization (GET all the organizations)
- /organization/:id (GET locate one organization)
- /generate ( generate password use js to generate)
- /url_username (POST save username and password to db)
- /url_username/:id/edit (POST edit the password)
- /url_username/delete (POST delete the url) STRETCH
*2 orgs 2 users (maybe 3 users with 1 admin) 