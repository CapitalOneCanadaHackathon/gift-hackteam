INSERT INTO useraccount (userId, userType, userEmail, userPassword, firstName, lastName, uphone, location, description, imagePortrait) VALUES ('1', 'admin', 'admin@gmail.com', '123456', 'Anne', 'Smithers', '416-908-7689', 'Toronto', 'lkasjdflaksjfalkdsjfalkdsjf;alskdfja;lkdsfjalkfdsjaslkdfj', NULL);

INSERT INTO adminkey (genDate, accountCreationKey) VALUES ('2016-10-11', 'dfalksdjfaksldj1312');

INSERT INTO loginlogs (logId, userId, loginDate, loginTime) VALUES ('1', '1', '10/11/16', '10:12:45');

INSERT INTO tags (tagId, tagName) VALUES ('1', 'Parent');

INSERT INTO usertags (userId, tagId) VALUES ('1', '1');

INSERT INTO  eventslog  (eventId,  eventTitle,  eventStart,  eventEnd,  eventType,  eventDescription,  eventAddress,  eventViews,  userId,  numVolunNeeded, numAttendees) VALUES ('1', 'All day Event', '2016-10-17T04:00:00.000Z', '2016-10-17T04:00:00.000Z', 'volunteer-meeting', 'lasdjflksa;jflaksdjf;lksajfd;lkj', '123 address street', '3', '1', '5',5);

INSERT INTO  eventslog  (eventId,  eventTitle,  eventStart,  eventEnd,  eventType,  eventDescription,  eventAddress,  eventViews,  userId,  numVolunNeeded, numAttendees) VALUES ('2', 'Long Event', '2016-10-18T04:00:00.000Z', '2016-10-18T04:00:00.000Z', 'social', 'lasdjflksa;jflaksdjf;lksajfd;lkj', '123 address street', '3', '1', '5', 4);

INSERT INTO  eventslog  (eventId,  eventTitle,  eventStart,  eventEnd,  eventType,  eventDescription,  eventAddress,  eventViews,  userId,  numVolunNeeded, numAttendees) VALUES ('3', 'R Event', '2016-10-19T04:00:00.000Z', '2016-10-19T04:00:00.000Z', 'lunch', 'lasdjflksa;jflaksdjf;lksajfd;lkj', '123 address street', '3', '1', '5', 5);

INSERT INTO  eventslog  (eventId,  eventTitle,  eventStart,  eventEnd,  eventType,  eventDescription,  eventAddress,  eventViews,  userId,  numVolunNeeded, numAttendees) VALUES ('4', 'Birthday Event', '2016-10-20T04:00:00.000Z', '2016-10-20T04:00:00.000Z', 'family-meeting', 'lasdjflksa;jflaksdjf;lksajfd;lkj', '123 address street', '3', '1', '5', 3);

INSERT INTO  eventslog  (eventId,  eventTitle,  eventStart,  eventEnd,  eventType,  eventDescription,  eventAddress,  eventViews,  userId,  numVolunNeeded, numAttendees) VALUES ('5', 'Cap One Event', '2016-10-21T04:00:00.000Z', '2016-10-21T04:00:00.000Z', 'board-meeting', 'lasdjflksa;jflaksdjf;lksajfd;lkj', '123 address street', '3', '1', '5', 2);


INSERT INTO eventattendance(eventId, userId, willAttend) VALUES (1,1,1);

