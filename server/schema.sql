CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */
CREATE TABLE `Messages` (
  `UserName` VARCHAR(40),
  `MessageContent` VARCHAR(250),
  `Date` DATE,
  `ChatRoom` VARCHAR(20),
  `MessageID` INT(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY  (`MessageID`)
);

CREATE TABLE `Users` (
  `UserName` VARCHAR(40),
  `UserID` INT(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`UserID`)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

