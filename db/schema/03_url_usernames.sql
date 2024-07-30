DROP TABLE IF EXISTS url_usernames CASCADE;
CREATE TABLE url_usernames (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  category VARCHAR(255),
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE
);