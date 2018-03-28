# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: aliengame
# Generation Time: 2018-03-28 22:36:02 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table characters
# ------------------------------------------------------------

DROP TABLE IF EXISTS `characters`;

CREATE TABLE `characters` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `character` varchar(255) NOT NULL DEFAULT '',
  `picture` varchar(255) NOT NULL DEFAULT '',
  `experience` varchar(20) NOT NULL DEFAULT '',
  `time` varchar(255) NOT NULL DEFAULT '',
  `level` varchar(11) NOT NULL DEFAULT '',
  `location` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;

INSERT INTO `characters` (`id`, `character`, `picture`, `experience`, `time`, `level`, `location`)
VALUES
	(1,'Panther ','','0','','',NULL),
	(2,'Nakia ','assets/players/char1.jpg','100','','1',NULL),
	(7,'Shuri','','','','',NULL),
	(8,'t\'challa','assets/players/char1.jpg','','','',NULL),
	(9,'Nakia2','assets/players/char4.jpg','100','','1',NULL);

/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table players
# ------------------------------------------------------------

DROP TABLE IF EXISTS `players`;

CREATE TABLE `players` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `username` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `character` varchar(255) NOT NULL DEFAULT '',
  `token` varchar(25) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;

INSERT INTO `players` (`id`, `email`, `username`, `password`, `character`, `token`)
VALUES
	(69,'carla.severe@gmail.com','krusnik','$2a$10$Hyp9K18y7E1dBoorfSb.c.5s/m1RBECdDOHyiIpuxMBzFKAG2osEC','Sakura ','vaYePA0UY6Vvcfb957JGdAP0a'),
	(70,'123test@gmail.com','Panther','$2a$10$YGzC/UpTaBxljswZ37r0VuooMVxglYOxSOKiRFc0AhevxC18I5/PG','Panther ','AOqugWeEqfNF0TFLl0yeHyabi'),
	(71,'nakia@gmail.com','Nakia','$2a$10$L36dsxV3vgUL44i.V7CzyO.mUykiAhf6ZI.11XIaEn7mG3Lhse0qW','Nakia ','QizDf6u85mIF58nCVhmZ9amTs'),
	(72,'shuri@gmail.com','Shuri','$2a$10$xnTryHd83lMa96Ha46/D5O0uDktTgW9uPgw6/Qgp7GPNF7PoW/bXO','Shuri','0NJoL2PR9XbP9OYeSbCMOSOmp'),
	(73,'panther@gmail.com','BlackPanther','$2a$10$jVwzHEewoTR1zmzlYRhcg.n4m65znFaBJkizQLYndQ7YfjYzTLjvW','t\'challa','x975QHVe8EpFKll46qc3uCyoG'),
	(74,'nakia2@gmail.com','Nakia2','$2a$10$j7k4GMArt5Jt0iEWVK5nWO7yLjgK0Zcm6f8lUYeJTPyD0ZiMQNgRe','Nakia2','c9iUHmz1I5D906dttsn4tPyht');

/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
