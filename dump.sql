-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: usafeV2
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.17.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoryReport`
--

DROP TABLE IF EXISTS `categoryReport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoryReport` (
  `idcategoryReport` int(11) NOT NULL,
  `nameCategory` varchar(45) NOT NULL,
  `descriptionCategory` varchar(4500) NOT NULL,
  `createdCategory` datetime NOT NULL,
  `modifiedCategory` datetime NOT NULL,
  PRIMARY KEY (`idcategoryReport`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoryReport`
--

LOCK TABLES `categoryReport` WRITE;
/*!40000 ALTER TABLE `categoryReport` DISABLE KEYS */;
INSERT INTO `categoryReport` VALUES (2,'INFRAESTRUCTURA','Eventos relacionados al manejo de equipamiento, mantenimiento, etc','2017-12-03 07:44:26','2017-12-03 07:44:26'),(1512306369,'ACOSO','Eventos relacionados a actos de violencia psicolÃ³gica o fÃ­sica hacia una persona','2017-12-03 10:06:10','2018-01-18 10:09:07'),(1512321831,'FALLA INFRAESTRUCTURA','Eventos relacionados a fallas en cualquier sector de la instituciÃ³n','2017-12-03 14:23:51','2017-12-03 14:23:51'),(1512321876,'ACCIDENTE','Eventos asociados a accidentes donde estÃ© involucrada la integridad fÃ­sica de las personas','2017-12-03 14:24:36','2018-01-24 19:42:55'),(1512321924,'VANDALISMO','Eventos asociados a actos de hostilidad por parte de terceros hacia alguien o edificios y monumentos','2017-12-03 14:25:24','2017-12-18 11:42:20'),(1512321980,'OBJETO PERDIDO','Eventos relacionados a objetos que han sido encontrados y se intenta recuperarlos','2017-12-03 14:26:20','2017-12-03 14:26:20'),(1512322099,'ROBO','Eventos asociados a roboos, hurtos o lanzazos.','2017-12-03 14:28:19','2017-12-18 11:41:02'),(1512322155,'OTROS','Eventos de poca concurrencia que no pueden clasificarse predefinidamente','2017-12-03 14:29:15','2017-12-03 14:29:15'),(1513273316,'AVISO DE BOMBA','Evento asociado a posibles artefactos explosivos en la facultad.','2017-12-14 12:41:56','2017-12-14 12:41:56'),(1513615562,'SUGERENCIA','Si crees que debiese existir una nueva categorÃ­a.','2017-12-18 11:46:02','2017-12-18 11:48:36'),(1513615768,'SOSPECHOSO/A','Eventos asociado a avistamiento de terceros con intenciones sospechosas.','2017-12-18 11:49:28','2017-12-18 11:49:52');
/*!40000 ALTER TABLE `categoryReport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventsReport`
--

DROP TABLE IF EXISTS `eventsReport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eventsReport` (
  `ideventsReport` int(11) NOT NULL,
  `nameEvent` varchar(450) NOT NULL,
  `descriptionEvent` varchar(4500) NOT NULL,
  `stageEvent` varchar(45) NOT NULL,
  `createdEvent` datetime NOT NULL,
  `modifiedEvent` datetime NOT NULL,
  `categoryReport` int(11) NOT NULL,
  PRIMARY KEY (`ideventsReport`),
  KEY `fk_eventsReport_categoryReport1_idx` (`categoryReport`),
  CONSTRAINT `fk_eventsReport_categoryReport1` FOREIGN KEY (`categoryReport`) REFERENCES `categoryReport` (`idcategoryReport`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventsReport`
--

LOCK TABLES `eventsReport` WRITE;
/*!40000 ALTER TABLE `eventsReport` DISABLE KEYS */;
INSERT INTO `eventsReport` VALUES (1512943530,'Evento P','Detalle','FINALIZADO','2017-12-10 19:05:30','2017-12-14 12:29:20',2),(1512944077,'Evento','12343123213','INICIADO','2017-12-10 19:14:37','2017-12-10 19:52:53',2),(1513015545,'Un Accidente','El primer accidente que ocurre','INICIADO','2017-12-11 15:05:45','2017-12-11 15:05:45',1512321876),(1513015598,'Cosas Perdidas','Se han encontrado cosas','EN PROCESO','2017-12-11 15:06:38','2017-12-11 16:44:04',1512321980),(1513015795,'Ladrones Robando :/','Gente ladrona XD','INICIADO','2017-12-11 15:09:55','2017-12-11 15:09:55',1512322099),(1513015834,'Evento de otros','Cosas que no ocurren casi nunca','INICIADO','2017-12-11 15:10:34','2017-12-11 15:10:34',1512322155),(1516288781,'Acosadores','Nuevo Evento de Acosadores','INICIADO','2018-01-18 12:19:41','2018-01-18 12:19:41',1512306369);
/*!40000 ALTER TABLE `eventsReport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificationEvent`
--

DROP TABLE IF EXISTS `notificationEvent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notificationEvent` (
  `idnotificationEvent` int(11) NOT NULL,
  `nameNotificador` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `createdNotificationEvent` datetime NOT NULL,
  `modifiedNotificationEvent` datetime NOT NULL,
  PRIMARY KEY (`idnotificationEvent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificationEvent`
--

LOCK TABLES `notificationEvent` WRITE;
/*!40000 ALTER TABLE `notificationEvent` DISABLE KEYS */;
INSERT INTO `notificationEvent` VALUES (1,'David Medina Ortiz','d.medina@imserltda.com','+569 50966879','2017-12-02 21:46:21','2017-12-02 21:46:21');
/*!40000 ALTER TABLE `notificationEvent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificationEventIncategoryReport`
--

DROP TABLE IF EXISTS `notificationEventIncategoryReport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notificationEventIncategoryReport` (
  `notificationEvent` int(11) NOT NULL,
  `categoryReport` int(11) NOT NULL,
  `createdAssign` datetime NOT NULL,
  `modifiedAssign` datetime NOT NULL,
  PRIMARY KEY (`notificationEvent`,`categoryReport`),
  KEY `fk_notificationEvent_has_categoryReport_categoryReport1_idx` (`categoryReport`),
  KEY `fk_notificationEvent_has_categoryReport_notificationEvent1_idx` (`notificationEvent`),
  CONSTRAINT `fk_notificationEvent_has_categoryReport_categoryReport1` FOREIGN KEY (`categoryReport`) REFERENCES `categoryReport` (`idcategoryReport`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_notificationEvent_has_categoryReport_notificationEvent1` FOREIGN KEY (`notificationEvent`) REFERENCES `notificationEvent` (`idnotificationEvent`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificationEventIncategoryReport`
--

LOCK TABLES `notificationEventIncategoryReport` WRITE;
/*!40000 ALTER TABLE `notificationEventIncategoryReport` DISABLE KEYS */;
INSERT INTO `notificationEventIncategoryReport` VALUES (1,2,'2017-12-04 09:18:17','2017-12-04 09:18:17');
/*!40000 ALTER TABLE `notificationEventIncategoryReport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pictureCategory`
--

DROP TABLE IF EXISTS `pictureCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pictureCategory` (
  `idpicture` int(11) NOT NULL,
  `namePictureCategory` varchar(45) NOT NULL,
  `createdPictureCategory` datetime NOT NULL,
  `modifiedPictureCategory` datetime NOT NULL,
  `categoryReport` int(11) NOT NULL,
  PRIMARY KEY (`idpicture`),
  KEY `fk_pictureReport_categoryReport1_idx` (`categoryReport`),
  CONSTRAINT `fk_pictureReport_categoryReport1` FOREIGN KEY (`categoryReport`) REFERENCES `categoryReport` (`idcategoryReport`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pictureCategory`
--

LOCK TABLES `pictureCategory` WRITE;
/*!40000 ALTER TABLE `pictureCategory` DISABLE KEYS */;
INSERT INTO `pictureCategory` VALUES (1512306369,'signo-de-interrogacion_318-52837.jpg','2017-12-03 10:06:10','2017-12-03 10:06:10',1512306369),(1512321831,'suggestions_white.png','2017-12-03 14:23:51','2017-12-03 14:23:51',1512321831),(1512321876,'1.png','2017-12-03 14:24:36','2017-12-03 14:24:36',1512321876),(1512321924,'vandalism.png','2017-12-03 14:25:25','2017-12-03 14:25:25',1512321924),(1512321980,'lost_object_white.png','2017-12-03 14:26:20','2017-12-03 14:26:20',1512321980),(1512322099,'stole.png','2017-12-03 14:28:19','2017-12-03 14:28:19',1512322099),(1512322155,'question_white.png','2017-12-03 14:29:15','2017-12-03 14:29:15',1512322155),(1513273316,'question_white.png','2017-12-14 12:41:56','2017-12-14 12:41:56',1513273316),(1513615562,'question_white.png','2017-12-18 11:46:02','2017-12-18 11:46:02',1513615562),(1513615768,'question_white.png','2017-12-18 11:49:28','2017-12-18 11:49:28',1513615768);
/*!40000 ALTER TABLE `pictureCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pictureReport`
--

DROP TABLE IF EXISTS `pictureReport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pictureReport` (
  `idpictureData` int(11) NOT NULL,
  `namePictureReport` varchar(45) NOT NULL,
  `createdPictureReport` datetime NOT NULL,
  `modifiedPictureReport` datetime NOT NULL,
  `reportUser` int(11) NOT NULL,
  PRIMARY KEY (`idpictureData`),
  KEY `fk_pictureData_reportUser1_idx` (`reportUser`),
  CONSTRAINT `fk_pictureData_reportUser1` FOREIGN KEY (`reportUser`) REFERENCES `reportUser` (`idreportUser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pictureReport`
--

LOCK TABLES `pictureReport` WRITE;
/*!40000 ALTER TABLE `pictureReport` DISABLE KEYS */;
INSERT INTO `pictureReport` VALUES (1,'3.jpg','2018-01-14 11:14:36','2018-01-14 11:14:36',3),(1515935978,'1.png','2018-01-14 10:19:38','2018-01-14 10:19:38',1515935978),(1516285956,'1.png','2018-01-18 11:32:36','2018-01-18 11:32:36',1516285956),(1516286515,'1.png','2018-01-18 11:41:55','2018-01-18 11:41:55',1516286515),(1516286564,'1q2w3e','2018-01-18 11:42:44','2018-01-18 11:42:44',1516286564),(1516288226,'1q2w3e','2018-01-18 12:11:11','2018-01-18 12:11:11',1516288226),(1516288354,'1q2w3e','2018-01-18 12:12:34','2018-01-18 12:12:34',1516288354),(1516288372,'1q2w3e','2018-01-18 12:12:52','2018-01-18 12:12:52',1516288372),(1516288396,'1q2w3e','2018-01-18 12:13:16','2018-01-18 12:13:16',1516288396),(1516306470,'1q2w3e','2018-01-18 17:14:31','2018-01-18 17:14:31',1516306470),(1516309161,'ImageServlet.jpeg','2018-01-18 17:59:21','2018-01-18 17:59:21',1516309161),(1516309221,'1q2w3e','2018-01-18 18:00:21','2018-01-18 18:00:21',1516309221),(1516309954,'accidenteportada.jpg','2018-01-18 18:12:34','2018-01-18 18:12:34',1516309954),(1516834060,'1q2w3e','2018-01-24 19:47:41','2018-01-24 19:47:41',1516834060);
/*!40000 ALTER TABLE `pictureReport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportAssign`
--

DROP TABLE IF EXISTS `reportAssign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportAssign` (
  `eventsReport` int(11) NOT NULL,
  `reportUser` int(11) NOT NULL,
  `createdReportAssign` datetime NOT NULL,
  `modifiedReportAssign` datetime NOT NULL,
  PRIMARY KEY (`eventsReport`,`reportUser`),
  KEY `fk_eventsReport_has_reportUser_reportUser1_idx` (`reportUser`),
  KEY `fk_eventsReport_has_reportUser_eventsReport1_idx` (`eventsReport`),
  CONSTRAINT `fk_eventsReport_has_reportUser_eventsReport1` FOREIGN KEY (`eventsReport`) REFERENCES `eventsReport` (`ideventsReport`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_eventsReport_has_reportUser_reportUser1` FOREIGN KEY (`reportUser`) REFERENCES `reportUser` (`idreportUser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportAssign`
--

LOCK TABLES `reportAssign` WRITE;
/*!40000 ALTER TABLE `reportAssign` DISABLE KEYS */;
INSERT INTO `reportAssign` VALUES (1512943530,3,'2017-12-11 15:06:05','2017-12-11 15:06:05'),(1512943530,14,'2017-12-11 15:12:00','2017-12-11 15:12:00'),(1512943530,21,'2017-12-11 15:11:20','2017-12-11 15:11:20'),(1512943530,22,'2017-12-14 12:14:51','2017-12-14 12:14:51'),(1512943530,1516834060,'2018-01-24 19:52:26','2018-01-24 19:52:26'),(1512944077,1,'2017-12-11 15:04:48','2017-12-11 15:04:48'),(1512944077,13,'2017-12-11 15:11:47','2017-12-11 15:11:47'),(1512944077,16,'2017-12-13 00:54:55','2017-12-13 00:54:55'),(1512944077,20,'2017-12-11 15:11:27','2017-12-11 15:11:27'),(1513015545,2,'2017-12-11 15:06:00','2017-12-11 15:06:00'),(1513015598,4,'2017-12-11 15:07:01','2017-12-11 15:07:01'),(1513015598,5,'2017-12-11 15:07:06','2017-12-11 15:07:06'),(1513015598,6,'2017-12-11 15:07:14','2017-12-11 15:07:14'),(1513015598,9,'2017-12-11 15:10:52','2017-12-11 15:10:52'),(1513015598,11,'2017-12-11 15:11:09','2017-12-11 15:11:09'),(1513015795,7,'2017-12-11 15:10:15','2017-12-11 15:10:15'),(1513015795,12,'2017-12-11 15:11:40','2017-12-11 15:11:40'),(1513015834,8,'2017-12-11 15:10:46','2017-12-11 15:10:46'),(1513015834,10,'2017-12-11 15:10:59','2017-12-11 15:10:59'),(1513015834,1515935978,'2018-01-14 11:27:16','2018-01-14 11:27:16'),(1516288781,1516288226,'2018-01-18 12:20:01','2018-01-18 12:20:01');
/*!40000 ALTER TABLE `reportAssign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportInSector`
--

DROP TABLE IF EXISTS `reportInSector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportInSector` (
  `reportUser` int(11) NOT NULL,
  `subSector` int(11) NOT NULL,
  `createdReportInSector` datetime NOT NULL,
  `modifiedReportInSector` datetime NOT NULL,
  PRIMARY KEY (`reportUser`,`subSector`),
  KEY `fk_reportUser_has_subSector_subSector1_idx` (`subSector`),
  KEY `fk_reportUser_has_subSector_reportUser1_idx` (`reportUser`),
  CONSTRAINT `fk_reportUser_has_subSector_reportUser1` FOREIGN KEY (`reportUser`) REFERENCES `reportUser` (`idreportUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_reportUser_has_subSector_subSector1` FOREIGN KEY (`subSector`) REFERENCES `subSector` (`idsubSector`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportInSector`
--

LOCK TABLES `reportInSector` WRITE;
/*!40000 ALTER TABLE `reportInSector` DISABLE KEYS */;
INSERT INTO `reportInSector` VALUES (1,1,'2017-12-04 09:30:07','2017-12-04 09:30:07'),(2,1,'2017-12-04 09:30:13','2017-12-04 09:30:13'),(3,1,'2017-12-04 09:30:13','2017-12-04 09:30:13'),(4,1,'2017-12-04 09:30:13','2017-12-04 09:30:13'),(5,1,'2017-12-04 09:30:13','2017-12-04 09:30:13'),(6,1512313223,'2017-12-04 09:30:13','2017-12-04 09:30:13'),(7,1512313223,'2017-12-04 09:30:13','2017-12-04 09:30:13'),(8,1512313223,'2017-12-04 09:30:13','2017-12-04 09:30:13'),(9,1512313223,'2017-12-04 09:30:13','2017-12-04 09:30:13'),(10,1512313223,'2017-12-04 09:30:13','2017-12-04 09:30:13'),(11,1513025436,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(12,1513025436,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(13,1513025436,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(14,1513025436,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(15,1513025436,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(16,1513025449,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(17,1513025449,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(18,1513025449,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(19,1513025449,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(20,1513025449,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(21,1513025607,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(22,1513025607,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(23,1513025607,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(24,1513025607,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(25,1513025607,'2017-12-04 09:30:14','2017-12-04 09:30:14'),(26,1513025607,'2017-12-04 09:30:16','2017-12-04 09:30:16'),(1514462652,1,'2017-12-28 09:04:12','2017-12-28 09:04:12'),(1514462721,1,'2017-12-28 09:05:22','2017-12-28 09:05:22'),(1514462878,1,'2017-12-28 09:07:58','2017-12-28 09:07:58'),(1514536445,1,'2017-12-29 05:34:05','2017-12-29 05:34:05'),(1515935978,1,'2018-01-14 10:19:38','2018-01-14 10:19:38'),(1516285956,1,'2018-01-18 11:32:36','2018-01-18 11:32:36'),(1516286515,1,'2018-01-18 11:41:55','2018-01-18 11:41:55'),(1516286564,1,'2018-01-18 11:42:44','2018-01-18 11:42:44'),(1516288226,1,'2018-01-18 12:10:58','2018-01-18 12:10:58'),(1516288354,1,'2018-01-18 12:12:34','2018-01-18 12:12:34'),(1516288372,1,'2018-01-18 12:12:52','2018-01-18 12:12:52'),(1516288396,1,'2018-01-18 12:13:16','2018-01-18 12:13:16'),(1516306470,1,'2018-01-18 17:14:30','2018-01-18 17:14:30'),(1516309161,1513025449,'2018-01-18 17:59:21','2018-01-18 17:59:21'),(1516309221,1513025449,'2018-01-18 18:00:21','2018-01-18 18:00:21'),(1516309954,1513025436,'2018-01-18 18:12:34','2018-01-18 18:12:34'),(1516834060,1,'2018-01-24 19:47:41','2018-01-24 19:47:41');
/*!40000 ALTER TABLE `reportInSector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportUser`
--

DROP TABLE IF EXISTS `reportUser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportUser` (
  `idreportUser` int(11) NOT NULL,
  `dateReport` datetime NOT NULL,
  `priority` varchar(45) NOT NULL,
  `message` varchar(4500) NOT NULL,
  `stageReport` varchar(45) NOT NULL,
  `createdReport` datetime NOT NULL,
  `modifiedReport` datetime NOT NULL,
  `user` int(11) NOT NULL,
  `categoryName` varchar(45) NOT NULL,
  PRIMARY KEY (`idreportUser`),
  KEY `fk_reportUser_user1_idx` (`user`),
  CONSTRAINT `fk_reportUser_user1` FOREIGN KEY (`user`) REFERENCES `user` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportUser`
--

LOCK TABLES `reportUser` WRITE;
/*!40000 ALTER TABLE `reportUser` DISABLE KEYS */;
INSERT INTO `reportUser` VALUES (1,'2016-10-22 19:23:00','NO URGENTE','Ascensores de 1er piso Nro 4 y 5 botonera se encuentra con problemas en el boton hacia arriba','ENVIADO','2016-10-22 00:00:00','2016-10-22 00:00:00',1,'2'),(2,'2016-11-30 11:27:00','URGENTE','Se presta silla de ruedas para traslado de estudiante a SEMDA','FINALIZADO','2016-11-30 00:00:00','2017-12-18 11:56:14',1,'1512321876'),(3,'2016-10-01 11:00:00','URGENTE','Fernanda Munoz, directora de logistica de la feria D24mpresarial, detecta en patio un bandejon, de los que protejen los arboles, roto en una de sus puntas. Concurrimos con ella a sala de control para identificar a los culpables del hecho, pero en ese momento las camaras estaban apuntando hacia la zona del bicicletero.','ENVIADO','2016-10-01 00:00:00','2016-10-01 00:00:00',1,'2'),(4,'2016-10-04 10:43:00','URGENTE','Se encuentran 3 bolsos en camarines sin candado','ENVIADO','2017-12-03 15:03:59','2017-12-03 15:03:59',1,'1512321980'),(5,'2016-10-04 17:41:00','URGENTE','Se encuentra bicicleta Oxford blanca mujer con canasto mas casco azul','ENVIADO','2017-12-03 15:04:58','2017-12-03 15:04:58',1,'1512321980'),(6,'2016-10-07 11:25:00','URGENTE','Se encuentra Iphone en el patio','ENVIADO','2017-12-03 15:05:21','2017-12-03 15:05:21',1,'1512321980'),(7,'2016-10-09 16:00:00','URGENTE','Microondas en comedores','ENVIADO','2017-12-03 15:05:43','2017-12-03 15:05:43',1,'1512322099'),(8,'2016-10-10 19:31:00','URGENTE','Ocupacion ilegal de dependencia de la Universidad de Chile en Club Hipico 946','FINALIZADO','2017-12-03 15:06:07','2017-12-18 11:57:11',1,'1512322155'),(9,'2016-10-10 19:53:00','URGENTE','Se encuentra billetera de Guillermo Valenzuela con 33.000','ENVIADO','2017-12-03 15:06:28','2017-12-03 15:06:28',1,'1512321980'),(10,'2016-10-18 10:35:00','URGENTE','Se llama a Municipalidad por los indigentes que se encuentran obstaculizando las salidas de emergencias','ENVIADO','2017-12-03 15:06:47','2017-12-03 15:06:47',1,'1512322155'),(11,'2016-10-20 16:14:00','URGENTE','Se encuentra mochila en -3 a nombre de Enzo Olivares','ENVIADO','2017-12-03 15:07:30','2017-12-03 15:07:30',1,'1512321980'),(12,'2016-10-22 14:00:00','URGENTE','En sala B104 se encuentra una chapa forzada','ENVIADO','2017-12-03 15:07:54','2017-12-03 15:07:54',1,'1512322099'),(13,'2016-10-22 21:02:00','URGENTE','Cristal del piso trizado aparte del 1ero que ya estaba trizado','EN PROCESO','2017-12-03 15:08:15','2017-12-12 23:53:57',1,'1512321831'),(14,'2016-10-24 20:00:00','URGENTE','Enchufe haciendo corto circuito -313-312','ENVIADO','2017-12-03 15:08:33','2017-12-03 15:08:33',1,'1512321831'),(15,'2016-10-29 12:00:00','URGENTE','Camarin varones nro 4 del -3 sector duchas se encuentra inundado, se cierra y se dota de otro camarin para varones','ENVIADO','2017-12-03 15:08:49','2017-12-03 15:08:49',1,'1512321831'),(16,'2016-11-04 20:00:00','URGENTE','Filtracion de agua piso 7 Torre Poniente','RECIBIDO','2017-12-03 15:09:08','2017-12-13 00:54:55',1,'1512321831'),(17,'2016-11-07 18:40:00','URGENTE','Robo de bicicleta a estudiante desde el sector sur poniente, rompiendole su cadena que no era segura para bicicletas.','ENVIADO','2017-12-03 15:09:29','2017-12-03 15:09:29',1,'1512322099'),(18,'2016-11-17 18:44:00','URGENTE','Magneto de las puertas de acceso a los laboratorios del piso -2 lado oriente norte, se encuentra en mal estado, hay que forzar hacia adentro para que queden cerradas.','ENVIADO','2017-12-03 15:09:48','2017-12-03 15:09:48',1,'1512321831'),(19,'2016-11-18 16:15:00','URGENTE','Vidrio del Piso 6 Torre Oriente Industrias que da hacia el patio esta quebrado, se pone cinta de peligro para cerrar perimetro.','ENVIADO','2017-12-03 15:10:08','2017-12-03 15:10:08',1,'1512321831'),(20,'2016-11-18 00:35:00','URGENTE','Se activa alarma de ascensor montacarga, encontrando al senor Richard Ruiz de CCTV atrapado en el piso -1. Se procede a romper el seguro de la puerta de la entrada a CCTV para sacar llaves de emergencia, ayudando al afectado a salir en buen estado.','ENVIADO','2017-12-03 15:10:26','2017-12-03 15:10:26',1,'1512321831'),(21,'2016-12-18 03:00:00','URGENTE','Inundacion del Hall de acceso principal mas caseta de guardias hall completo de los ascensores nor-oriente','ENVIADO','2017-12-03 15:10:47','2017-12-03 15:10:47',1,'1512321831'),(22,'2016-12-18 11:00:00','URGENTE','Cancha de -3 tiene una palmeta suelta y afrimada solamente por cableado electrico','RECIBIDO','2017-12-03 15:11:06','2017-12-14 12:14:51',1,'1512321831'),(23,'2016-12-30 16:29:00','URGENTE','Bano del 2do piso Torre Norte se encuentra cerrado por filtracion de agua','ENVIADO','2017-12-03 15:11:22','2017-12-03 15:11:22',1,'1512321831'),(24,'2017-10-02 13:00:00','URGENTE','Torre poniente, septimo piso, 7 palmetas caidas en laboratorios de docencia. Encargado de salas de control tomo fotos de la situacion','ENVIADO','2017-12-03 15:11:43','2017-12-03 15:11:43',1,'1512321831'),(25,'2017-03-13 19:19:00','URGENTE','Vehiculo de un administrador sufre robo desde su vehiculo a traves de la ventana del piloto, la cual fue quebrada','ENVIADO','2017-12-03 15:12:00','2017-12-03 15:12:00',1,'1512322099'),(26,'2017-03-24 13:39:00','URGENTE','Caida de puerta en sala Beauchef, rompiendose el vidrio, quedando restos desparramados por el lugar.','ENVIADO','2017-12-03 15:12:07','2017-12-03 15:12:07',1,'1512321831'),(1514462652,'2017-12-28 20:00:00','URGENTE','123321','ENVIADO','2017-12-28 09:04:12','2017-12-28 09:04:12',1,'1512306369'),(1514462721,'2017-12-28 20:00:00','URGENTE','213123','ENVIADO','2017-12-28 09:05:21','2017-12-28 09:05:21',1,'1512306369'),(1514462878,'2017-12-28 20:00:00','URGENTE','213123213','ENVIADO','2017-12-28 09:07:58','2017-12-28 09:07:58',1,'1512306369'),(1514536445,'2017-12-29 05:30:00','URGENTE','eqweqwe','ENVIADO','2017-12-29 05:34:05','2017-12-29 05:34:05',1,'1512306369'),(1515935978,'2018-01-14 10:15:00','URGENTE','Este es el nuevo detalle del reporte con figura!','RECIBIDO','2018-01-14 10:19:38','2018-01-14 11:27:16',1,'1512306369'),(1516285956,'2018-01-18 11:30:00','URGENTE','Bueno, la verdad, no sÃ© lo que me ocurriÃ³, peeeero fue grave!!!!','ENVIADO','2018-01-18 11:32:36','2018-01-18 11:32:36',1,'1512306369'),(1516286515,'2018-01-18 11:45:00','URGENTE','He creado un nuevo reporte para probar!!!!','ENVIADO','2018-01-18 11:41:55','2018-01-18 11:41:55',1,'1512306369'),(1516286564,'2018-01-18 11:45:00','NO URGENTE','Este es mi nuevo reporte!!!','ENVIADO','2018-01-18 11:42:44','2018-01-18 11:42:44',1,'1512306369'),(1516288226,'2018-01-18 12:15:00','NO URGENTE','dsadsdfsf','RECIBIDO','2018-01-18 12:10:49','2018-01-18 12:20:01',1,'1512306369'),(1516288296,'2018-01-18 00:15:00','URGENTE','vfccccccccc','ENVIADO','2018-01-18 12:11:59','2018-01-18 12:11:59',1,'1512306369'),(1516288354,'2018-01-18 00:15:00','URGENTE','Mi detalle es muy importante','ENVIADO','2018-01-18 12:12:34','2018-01-18 12:12:34',1,'1512306369'),(1516288372,'2018-01-18 00:15:00','URGENTE','Detalle Importante','ENVIADO','2018-01-18 12:12:52','2018-01-18 12:12:52',1,'1512306369'),(1516288396,'2018-01-18 00:15:00','URGENTE','dadasdsadsada','ENVIADO','2018-01-18 12:13:16','2018-01-18 12:13:16',1,'1512306369'),(1516306470,'2018-01-18 17:15:00','URGENTE','Vi a alguien intentando romper una taza a un profesor XD','ENVIADO','2018-01-18 17:14:30','2018-01-18 17:14:30',1,'1512321924'),(1516309161,'2018-01-18 18:00:00','URGENTE','Noooooooooooo','ENVIADO','2018-01-18 17:59:21','2018-01-18 17:59:21',1514319121,'1512306369'),(1516309221,'2018-01-18 18:00:00','URGENTE','dsadasdsad','ENVIADO','2018-01-18 18:00:21','2018-01-18 18:00:21',1514319121,'1512306369'),(1516309954,'2018-01-18 18:15:00','URGENTE','rrrrrr','ENVIADO','2018-01-18 18:12:34','2018-01-18 18:12:34',1514319121,'1512321876'),(1516834060,'2018-01-24 20:00:00','URGENTE','lksdajfsdklfljkfdsjkldsfkjdsfkljfdsjklfdskljdskljf','RECIBIDO','2018-01-24 19:47:41','2018-01-24 19:52:26',1,'1512321876');
/*!40000 ALTER TABLE `reportUser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `responseEvent`
--

DROP TABLE IF EXISTS `responseEvent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `responseEvent` (
  `idresponseEvent` int(11) NOT NULL,
  `nameResponse` varchar(450) NOT NULL,
  `resolutionDetail` varchar(4500) NOT NULL,
  `createdResponseEvent` datetime NOT NULL,
  `modifiedResponseEvent` datetime NOT NULL,
  `eventsReport` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  PRIMARY KEY (`idresponseEvent`),
  KEY `fk_responseEvent_eventsReport1_idx` (`eventsReport`),
  KEY `fk_responseEvent_user1_idx` (`user`),
  CONSTRAINT `fk_responseEvent_eventsReport1` FOREIGN KEY (`eventsReport`) REFERENCES `eventsReport` (`ideventsReport`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_responseEvent_user1` FOREIGN KEY (`user`) REFERENCES `user` (`iduser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `responseEvent`
--

LOCK TABLES `responseEvent` WRITE;
/*!40000 ALTER TABLE `responseEvent` DISABLE KEYS */;
/*!40000 ALTER TABLE `responseEvent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol` (
  `idrol` int(11) NOT NULL,
  `nameRol` varchar(45) NOT NULL,
  `descriptionRol` varchar(450) NOT NULL,
  `createdRol` datetime NOT NULL,
  `modifiedRol` datetime NOT NULL,
  PRIMARY KEY (`idrol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'ADMINISTRADOR','Administrador del sistema, posee todas las facultades y permisos para ejecutar cualquier accion','2017-12-02 17:31:15','2017-12-02 17:31:15'),(2,'ENCARGADO REPORTES','Sub Administrador del sistema, posee facultades y permisos para ejecutar acciones especificas relacionadas al manejo de reportes','2017-12-02 17:31:46','2017-12-02 17:31:46'),(3,'REPORTADOR','Usuario que solo pueder reportar sucesos y ver los estados de sus reportes','2017-12-22 16:13:45','2017-12-22 16:13:45');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sector`
--

DROP TABLE IF EXISTS `sector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sector` (
  `idsector` int(11) NOT NULL,
  `nameSector` varchar(45) NOT NULL,
  `namePictureSector` varchar(45) NOT NULL,
  `createdSector` datetime NOT NULL,
  `modifiedSector` datetime NOT NULL,
  PRIMARY KEY (`idsector`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sector`
--

LOCK TABLES `sector` WRITE;
/*!40000 ALTER TABLE `sector` DISABLE KEYS */;
INSERT INTO `sector` VALUES (1,'Sector 2','2.jpg','2017-12-03 11:07:45','2017-12-18 09:57:43'),(1513025401,'Sector Editado','1.png','2017-12-11 17:50:01','2018-01-14 13:27:20'),(1513613906,'Sector 3','3.jpg','2017-12-18 11:18:26','2017-12-18 11:18:26'),(1513614025,'Sector 4','4.jpg','2017-12-18 11:20:25','2017-12-18 11:20:25'),(1513614108,'Sector 5','5.jpg','2017-12-18 11:21:48','2017-12-18 11:21:48'),(1513614558,'Sector 6 ','6.jpg','2017-12-18 11:29:18','2017-12-18 11:29:18'),(1514123849,'Sector 7','7.jpg','2017-12-24 10:57:29','2017-12-24 10:57:29');
/*!40000 ALTER TABLE `sector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subSector`
--

DROP TABLE IF EXISTS `subSector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subSector` (
  `idsubSector` int(11) NOT NULL,
  `nombreSubSector` varchar(450) NOT NULL,
  `nombreImagen` varchar(450) NOT NULL,
  `createdSubSector` datetime NOT NULL,
  `modifiedSubSector` datetime NOT NULL,
  `sector` int(11) NOT NULL,
  PRIMARY KEY (`idsubSector`),
  KEY `fk_subSector_sector1_idx` (`sector`),
  CONSTRAINT `fk_subSector_sector1` FOREIGN KEY (`sector`) REFERENCES `sector` (`idsector`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subSector`
--

LOCK TABLES `subSector` WRITE;
/*!40000 ALTER TABLE `subSector` DISABLE KEYS */;
INSERT INTO `subSector` VALUES (1,'Patio Central','1.jpg','2017-12-03 11:55:00','2017-12-03 11:55:00',1),(1512313223,'Terraza (\"Ebria\")','3.jpg','2017-12-03 12:00:23','2017-12-03 12:00:23',1),(1513025436,'Frontis','if_cmyk_406720.png','2017-12-11 17:50:36','2017-12-11 17:50:36',1513025401),(1513025449,'GuardarropÃ­a','if_barchart_406826.png','2017-12-11 17:50:49','2017-12-11 17:50:49',1513025401),(1513025607,'Torre Central','if_news_406744.png','2017-12-11 17:53:27','2017-12-11 17:53:27',1),(1513608241,'Biblioteca','if_news_406744.png','2017-12-18 09:44:01','2017-12-18 09:44:01',1513025401),(1513608254,'Hall Sur','if_news_406744.png','2017-12-18 09:44:14','2017-12-18 09:44:14',1513025401),(1513608263,'Pajarera','if_news_406744.png','2017-12-18 09:44:23','2017-12-18 09:44:23',1513025401),(1513608484,'Ãrea de inglÃ©s','if_news_406744.png','2017-12-18 09:48:04','2017-12-18 09:48:04',1513025401),(1513608498,'CafeterÃ­a','if_news_406744.png','2017-12-18 09:48:18','2017-12-18 09:48:18',1513025401),(1513608522,'Terraza (\"Sobria\")','if_news_406744.png','2017-12-18 09:48:42','2017-12-18 09:48:42',1513025401),(1513608537,'Auditorio Gorbea','if_news_406744.png','2017-12-18 09:48:57','2017-12-18 09:48:57',1513025401),(1513608685,'ZÃ³calo','if_news_406744.png','2017-12-18 09:51:25','2017-12-18 09:51:25',1513025401),(1513608715,'Otros','if_news_406744.png','2017-12-18 09:51:55','2017-12-18 09:51:55',1513025401),(1513613859,'Edificio QuÃ­mica','if_news_406744.png','2017-12-18 11:17:39','2017-12-18 11:17:39',1),(1513613873,'Edificio FÃ­sica','if_news_406744.png','2017-12-18 11:17:53','2017-12-18 11:17:53',1),(1513613883,'Cancha','cancha-los-angeles-2.jpg','2017-12-18 11:18:03','2018-01-14 13:42:30',1),(1513613891,'Otros','if_news_406744.png','2017-12-18 11:18:11','2017-12-18 11:18:11',1),(1513613930,'Edificio Civil','if_news_406744.png','2017-12-18 11:18:50','2017-12-18 11:18:50',1513613906),(1513613945,'Edificio ElÃ©ctrica','if_news_406744.png','2017-12-18 11:19:05','2017-12-18 11:19:05',1513613906),(1513613974,'Patio Civil','if_news_406744.png','2017-12-18 11:19:34','2017-12-18 11:19:34',1513613906),(1513613988,'Patio ElÃ©ctrica','if_news_406744.png','2017-12-18 11:19:48','2017-12-18 11:19:48',1513613906),(1513614009,'Pileta','if_news_406744.png','2017-12-18 11:20:09','2017-12-18 11:20:09',1513613906),(1513614016,'Otros','if_news_406744.png','2017-12-18 11:20:16','2017-12-18 11:20:16',1513613906),(1513614042,'Edificio GeologÃ­a','if_news_406744.png','2017-12-18 11:20:42','2017-12-18 11:20:42',1513614025),(1513614055,'Patio GeologÃ­a','if_news_406744.png','2017-12-18 11:20:55','2017-12-18 11:20:55',1513614025),(1513614070,'Laboratorio IQBT','if_news_406744.png','2017-12-18 11:21:10','2017-12-18 11:21:10',1513614025),(1513614079,'IDIEM','if_news_406744.png','2017-12-18 11:21:19','2017-12-18 11:21:19',1513614025),(1513614086,'Otros','if_news_406744.png','2017-12-18 11:21:26','2017-12-18 11:21:26',1513614025),(1513614120,'CEC','if_news_406744.png','2017-12-18 11:22:00','2017-12-18 11:22:00',1513614108),(1513614129,'Patio 851','if_news_406744.png','2017-12-18 11:22:09','2017-12-18 11:22:09',1513614108),(1513614294,'Camarines','if_news_406744.png','2017-12-18 11:24:54','2017-12-18 11:24:54',1513614108),(1513614382,'Bicicletero','if_news_406744.png','2017-12-18 11:26:22','2017-12-18 11:26:22',1513614108),(1513614396,'Depto. MecÃ¡nica','if_news_406744.png','2017-12-18 11:26:36','2017-12-18 11:26:36',1513614108),(1513614410,'Depto. Industrias','if_news_406744.png','2017-12-18 11:26:50','2017-12-18 11:26:50',1513614108),(1513614425,'Depto.  IQBT','if_news_406744.png','2017-12-18 11:27:05','2017-12-18 11:27:05',1513614108),(1513614455,'Depto. DCC','if_news_406744.png','2017-12-18 11:27:35','2017-12-18 11:27:35',1513614108),(1513614490,'Sala de estudio','if_news_406744.png','2017-12-18 11:28:10','2017-12-18 11:28:10',1513614108),(1513614508,'Estacionamientos','if_news_406744.png','2017-12-18 11:28:28','2017-12-18 11:28:28',1513614108),(1513614532,'Otros','if_news_406744.png','2017-12-18 11:28:52','2017-12-18 11:28:52',1513614108),(1513614574,'Calle Beauchef','if_news_406744.png','2017-12-18 11:29:34','2017-12-18 11:29:34',1513614558),(1513614584,'Calle Blanco Encalada','if_news_406744.png','2017-12-18 11:29:44','2017-12-18 11:29:44',1513614558),(1513614591,'Calle Tupper','if_news_406744.png','2017-12-18 11:29:51','2017-12-18 11:29:51',1513614558),(1513614602,'Calle Club HÃ­pico','if_news_406744.png','2017-12-18 11:30:02','2017-12-18 11:30:02',1513614558),(1513614613,'Estacionamientos Tupper','if_news_406744.png','2017-12-18 11:30:13','2017-12-18 11:30:13',1513614558),(1513614634,'Gimnasio Domeyko','if_news_406744.png','2017-12-18 11:30:34','2017-12-18 11:30:34',1513614558),(1513614649,'Casino','if_news_406744.png','2017-12-18 11:30:49','2017-12-18 11:30:49',1513614558),(1513614656,'CEI','if_news_406744.png','2017-12-18 11:30:56','2017-12-18 11:30:56',1513614558),(1513614716,'Plaza Ercilla','if_news_406744.png','2017-12-18 11:31:56','2017-12-18 11:31:56',1513614558),(1513614737,'SEMDA','if_news_406744.png','2017-12-18 11:32:17','2017-12-18 11:32:17',1513614558),(1513614750,'Edificio RepÃºblica','if_news_406744.png','2017-12-18 11:32:30','2017-12-18 11:32:30',1513614558),(1513614763,'Otros','if_news_406744.png','2017-12-18 11:32:43','2017-12-18 11:32:43',1513614558);
/*!40000 ALTER TABLE `subSector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `nameUser` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `dni` varchar(45) NOT NULL,
  `emailUser` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `last_login` datetime NOT NULL,
  `avatarName` varchar(45) NOT NULL,
  `createdUser` datetime NOT NULL,
  `modifiedUser` datetime NOT NULL,
  `rol` int(11) NOT NULL,
  `passwd` varchar(45) NOT NULL,
  PRIMARY KEY (`iduser`),
  KEY `fk_user_rol_idx` (`rol`),
  CONSTRAINT `fk_user_rol` FOREIGN KEY (`rol`) REFERENCES `rol` (`idrol`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'David Alfredo','Medina','18228843','d.medina@imserltda.com','ACTIVADO','2017-12-02 19:03:28','11.png','2017-12-02 19:03:28','2017-12-02 20:44:47',1,'123ewq'),(1514319121,'MarÃ­a Joaquina','BeltrÃ¡n Leiva','17323123','juaki747@gmail.com','ACTIVADO','2017-12-26 17:12:01','1.png','2017-12-26 17:12:01','2017-12-26 17:12:01',3,'1514319121'),(1516307505,'JosÃ©','Medina','15993323','d.medina@imserltda.com','ACTIVADO','2018-01-18 17:31:45','1.png','2018-01-18 17:31:45','2018-01-18 17:31:45',2,'1516307505');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-26 12:03:01
