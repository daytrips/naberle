DROP DATABASE naberle;

CREATE DATABASE naberle;

USE naberle;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(30) NOT NULL UNIQUE,
  `password` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `issues`;

CREATE TABLE `issues` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `type` VARCHAR(30) NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `lat` INTEGER NOT NULL,
  `lng` INTEGER NOT NULL,
  `votes` INTEGER NOT NULL DEFAULT 0,
  `user_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `users_votes`;

  CREATE TABLE `users_votes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `issue_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    PRIMARY KEY (`id`)
  );

ALTER TABLE `issues` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `users_votes` ADD FOREIGN KEY (issue_id) REFERENCES `issues` (`id`);
ALTER TABLE `users_votes` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
