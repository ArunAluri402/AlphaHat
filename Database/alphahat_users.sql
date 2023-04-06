-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: alphahat
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2023-03-13 13:25:21.686000','2023-03-13 13:25:21.686000','arun.prakash421@gmail.com','Arun','$2a$10$llcy/SHQlqBqM1AyDEk8..RrxHXwxcIkJkAzXoSsKu/wdW9VMtGoe','Arun402'),(3,'2023-03-14 03:57:41.859000','2023-03-14 03:57:41.859000','Gopal421@gmail.com','Gopal','$2a$10$ssnNbYZe3XdQIPbZZIuCEeHLFdcHMiylNpxaBIV5BAd5B944sZZdC','Gopal402'),(4,'2023-03-14 11:05:59.049000','2023-03-14 11:05:59.049000','Gokul@gmail.com','Gokul Hari','$2a$10$9Ug.1gVUr86610jVx2vV0egqmOJTVrZFgIGaNy1Voz18./4yHymRO','Gokul402'),(5,'2023-03-14 11:15:21.894000','2023-03-14 11:15:21.894000','Raja@gamil.com','raja Surya','$2a$10$8Oa5sfwaHabkMXomTX78RubnYwu9I/Vznb3aLzFCnaz7hhdXrUpL2','Surya98'),(6,'2023-03-14 14:33:37.060000','2023-03-14 14:33:37.060000','sundarkannan393@gmail.com','sundatr','$2a$10$PMcD/ZH5161NUIYh1G12w.pVj9OxKtVERbaxIvYNw.0LFuTe3Er56','sundar'),(7,'2023-03-14 14:46:30.103000','2023-03-14 14:46:30.103000','hrishikeshshlke9@gmail.com','hrishi','$2a$10$76orfjW4lJsgPgQIc6GK2e.tz8sC14Iz7dRrcyJMVW96L/58JkHzK','hrishiksh');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-15  9:59:10
