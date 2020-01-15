-- Drop the database if it exists
DROP DATABASE IF EXISTS;

-- Creates new database
CREATE DATABASE burgers_db;

-- uses this database
USE DATABASE burgers_db;

-- Creates a new table called burgers
CREATE TABLE burgers (
  -- adds elements id, 
  id INT NOT NULL AUTO_INCREMENT,
  -- burger_name (string)
  burger_name VARCHAR(50) NOT NULL,
  -- devored(boolean)
  devoured BOOLEAN,
  PRIMARY KEY(id)
);