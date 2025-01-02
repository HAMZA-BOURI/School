-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: school
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `registredescongespayes`
--

DROP TABLE IF EXISTS `registredescongespayes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registredescongespayes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `matriculeCNSS` varchar(255) NOT NULL,
  `carteCarnet` varchar(255) DEFAULT NULL,
  `dorder` varchar(255) DEFAULT NULL,
  `prenomNom` varchar(255) NOT NULL,
  `dateNaissanceAge` varchar(255) DEFAULT NULL,
  `qualificationProfessionnelle` varchar(255) DEFAULT NULL,
  `dateEntreeService` date DEFAULT NULL,
  `dateDepartConge` date DEFAULT NULL,
  `dateRetourConge` date DEFAULT NULL,
  `joursPayes` int DEFAULT NULL,
  `indemnitesJournalieres` decimal(10,2) DEFAULT NULL,
  `indemnitesAvantages` decimal(10,2) DEFAULT NULL,
  `indemnitesTotales` decimal(10,2) DEFAULT NULL,
  `dateVersements` date DEFAULT NULL,
  `congesReportes` varchar(255) DEFAULT NULL,
  `signatureInteresse` varchar(255) DEFAULT NULL,
  `observations` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registredescongespayes`
--

LOCK TABLES `registredescongespayes` WRITE;
/*!40000 ALTER TABLE `registredescongespayes` DISABLE KEYS */;
INSERT INTO `registredescongespayes` VALUES (1,'test','test','test','John Doe','1980-01-01','Engineer','2024-01-01','2024-01-10','2024-01-20',10,100.00,50.00,150.00,'2024-01-15','No','Signature','No observations.');
/*!40000 ALTER TABLE `registredescongespayes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-30  3:23:26
