-- DROP DATABASE naberle;

CREATE DATABASE naberle;

USE naberle;

-- default [status] is set to "Reported": 
-- some Admin would be responsible to 
-- change the status to 'Resolved' (not implemented).

CREATE TABLE reported_issues (
  user_id INT UNSIGNED NOT NULL,
  reporter VARCHAR (25) NOT NULL,
  description VARCHAR (200) NOT NULL,
  lat VARCHAR (20) NOT NULL,
  lng VARCHAR(20) NOT NULL,
  type ENUM ('Trash', 'Road Work', 'Traffic Sign') NOT NULL,
  status ENUM ('Reported', 'Resolved') NOT NULL,
	rep_issue_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE users (
  username VARCHAR (20) NOT NULL UNIQUE,
  password VARCHAR (20) NOT NULL,
  user_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

-- NOTE: we should keep track of who voted on what issue
-- and how many votes an issue has with a single table:
-- it is customary and safer to only retain one 
-- 'source' of truth for any given data point; i.e., 
-- we should not also have a 'number of votes' column 
-- in the reported_issues table.
CREATE TABLE votes (
  rep_issue_id INT UNSIGNED NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  vote_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);