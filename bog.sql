-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT '',
  `count` int(11) DEFAULT NULL,
  `created` timestamp NULL DEFAULT NULL,
  `updated` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES (3,'随笔',123,'2019-09-05 14:47:11','2019-09-05 14:47:25'),(4,'吐槽',9999,'2019-09-05 14:47:11','2019-09-05 14:47:26'),(5,'客户端',99999,'2019-09-05 14:48:11','2019-09-05 14:47:44');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Notepad`
--

DROP TABLE IF EXISTS `Notepad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Notepad` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` text,
  `created` timestamp NULL DEFAULT NULL,
  `updated` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Notepad`
--

LOCK TABLES `Notepad` WRITE;
/*!40000 ALTER TABLE `Notepad` DISABLE KEYS */;
INSERT INTO `Notepad` VALUES (1,'12312311231231',NULL,'2019-09-09 15:30:37'),(2,'adsfasdf',NULL,NULL);
/*!40000 ALTER TABLE `Notepad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Post`
--

DROP TABLE IF EXISTS `Post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `category` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `brief` text,
  `content` text,
  `postPath` varchar(255) NOT NULL,
  `picPath` varchar(255) DEFAULT NULL,
  `created` timestamp NULL DEFAULT NULL,
  `updated` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`) USING BTREE,
  KEY `title` (`title`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Post`
--

LOCK TABLES `Post` WRITE;
/*!40000 ALTER TABLE `Post` DISABLE KEYS */;
INSERT INTO `Post` VALUES (53,'test1','test-category',NULL,'test content','test content','/post/2019/09/05/test1','/images/2019/09/05/test1.jpg','2019-09-05 14:01:21','2019-09-05 14:59:23'),(54,'test2','test-category',NULL,'test content','test content','/post/2019/09/05/test2','/images/2019/09/05/test2.jpg','2019-09-05 14:01:27','2019-09-05 14:58:21'),(55,'test3','test-category',NULL,'test content','test content','/post/2019/09/05/test3','/images/2019/09/05/test3.jpg','2019-09-05 14:01:29','2019-09-05 14:58:25'),(56,'test4','test-category',NULL,'test content','test content','/post/2019/09/05/test4','/images/2019/09/05/test4.jpg','2019-09-05 14:01:32','2019-09-05 14:58:28'),(57,'test5','test-category',NULL,'test content','test content','/post/2019/09/05/test5','/images/2019/09/05/test5.jpg','2019-09-05 14:01:34','2019-09-05 14:58:32'),(58,'test6','test-category',NULL,'test content','test content','/post/2019/09/05/test6','/images/2019/09/05/test6.jpg','2019-09-05 14:01:38','2019-09-05 14:58:36'),(59,'test6','test-category',NULL,'test content','test content','/post/2019/09/05/test6','/images/2019/09/05/test6.jpg','2019-08-05 14:01:38','2019-09-05 14:58:36'),(60,'test6','test-category',NULL,'test content','test content','/post/2019/09/05/test6','/images/2019/09/05/test6.jpg','2019-07-05 14:01:38','2019-09-05 14:58:36');
/*!40000 ALTER TABLE `Post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-09 15:34:06
