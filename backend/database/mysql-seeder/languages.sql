CREATE DATABASE IF NOT EXISTS technology DEFAULT CHARACTER SET = 'utf8';
USE technology;
CREATE TABLE IF NOT EXISTS `language` (name VARCHAR(25), creator VARCHAR(25));
INSERT INTO
  `language` (name, creator)
VALUES
  ('Java', 'James Gosling'),
  ('Javascript', 'Brendan Eich'),
  ('PHP', 'Rasmus Lerdorf'),
  ('Python', 'Guido van Rossum'),
  ('C#', 'Anders Hejlsberg')