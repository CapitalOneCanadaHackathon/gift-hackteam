-- Vasuthan Vinayagamoorthy
-- Create gift the code tables
-- base_table_creation.sql

CREATE TABLE userAccount	
(userId INT NOT NULL,
 userType VARCHAR(20),
 userEmail VARCHAR(20) UNIQUE,
 userPassword VARCHAR(15),
 firstName VARCHAR (20),
 lastName VARCHAR (20),
 uphone VARCHAR(13),
 location VARCHAR(20),
 description TEXT,
 imagePortrait BLOB,
 PRIMARY KEY (userId)
 );
 
 CREATE TABLE adminKey	
(genDate DATE,
 accountCreationKey VARCHAR(20)
 );
 
 CREATE TABLE loginLogs
(logId INT NOT NULL,
 userId INT NOT NULL,
 loginDate VARCHAR(8),
 loginTime VARCHAR(8),
 PRIMARY KEY(logId),
 FOREIGN KEY(userId) REFERENCES userAccount(userId)
 );
 
 CREATE TABLE tags(
 tagId INT NOT NULL,
 tagName VARCHAR(20),
 PRIMARY KEY(tagId)
 );
 
 CREATE TABLE userTags
(userId INT NOT NULL,
 tagId INT NOT NULL,
 FOREIGN KEY (userId) REFERENCES userAccount(userId),
 FOREIGN KEY (tagId) REFERENCES tags(tagId),
 PRIMARY KEY (userId,tagId));
 
 CREATE TABLE eventsLog
(eventId INT NOT NULL,
 eventTitle VARCHAR(20),
 eventStart VARCHAR(40),
 eventEnd VARCHAR(40),
 eventType VARCHAR(20),
 eventDescription TEXT,
 eventAddress VARCHAR (30),
 eventViews INT,
 userId INT,
 numVolunNeeded INT,
 numAttendees INT,
 FOREIGN KEY (userId) REFERENCES userAccount(userId),
 PRIMARY KEY (eventId)
 );

CREATE TABLE eventAttendance
(eventId INT NOT NULL, 
 userId INT NOT NULL, 
 willAttend TINYINT(1),
 FOREIGN KEY (eventId) REFERENCES eventsLog(eventId),
 FOREIGN KEY (userId) REFERENCES userAccount(userId),
 PRIMARY KEY (eventId,userId));
