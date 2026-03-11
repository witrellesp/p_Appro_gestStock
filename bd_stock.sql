-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 12 Novembre 2021 à 06:50
-- Version du serveur :  5.7.11
-- Version de PHP :  7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bd_stock`
--

-- --------------------------------------------------------

--
-- Structure de la table `t_articles`
--

CREATE TABLE `t_articles` (
  `id_arti` int(11) NOT NULL,
  `arti_label` varchar(20) NOT NULL,
  `arti_purchase_date` date DEFAULT NULL,
  `arti_price` decimal(10,0) DEFAULT NULL,
  `arti_note` text,
  `fk_product` int(11) NOT NULL,
  `fk_chest` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `t_articles`
--

INSERT INTO `t_articles` (`id_arti`, `arti_label`, `arti_purchase_date`, `arti_price`, `arti_note`, `fk_product`, `fk_chest`) VALUES
(1, 'INF-0015', '1900-03-20', NULL, NULL, 1, 1),
(2, 'INF-0016', '1900-03-20', NULL, NULL, 1, 1),
(3, 'INF-0017', '1900-03-20', NULL, NULL, 1, 1),
(4, 'INF-0020', '1900-03-20', NULL, NULL, 1, 1),
(5, 'INF-0021', '1900-03-20', NULL, NULL, 1, 1),
(6, 'INF-0022', '1900-03-20', NULL, NULL, 1, 1),
(7, 'INF-0023', '1900-02-18', NULL, NULL, 7, 1),
(8, 'INF-0024', '1900-02-18', NULL, NULL, 7, 1),
(9, 'INF-0025', '1900-02-18', NULL, NULL, 7, 1),
(10, 'INF-0026', '1900-02-18', NULL, NULL, 7, 1),
(11, 'INF-0028', '1900-11-25', NULL, NULL, 11, 1),
(12, 'INF-0029', '1900-01-29', NULL, NULL, 12, 1),
(13, 'INF-0030', '1903-04-01', NULL, NULL, 13, 1),
(14, 'INF-0031', '1903-04-01', NULL, NULL, 13, 1),
(15, 'INF-0032', '1903-04-01', NULL, NULL, 13, 1),
(16, 'INF-0033', '1906-06-06', NULL, NULL, 16, 1),
(17, 'INF-0034', '1906-06-06', NULL, NULL, 16, 1),
(18, 'INF-0035', '1906-06-06', NULL, NULL, 16, 1),
(19, 'INF-0036', '1906-06-06', NULL, NULL, 16, 1),
(20, 'INF-0037', '1906-06-06', NULL, NULL, 16, 1),
(21, 'INF-0038', '1906-06-06', NULL, NULL, 16, 1),
(22, 'INF-0039', '1906-06-06', NULL, NULL, 16, 1),
(23, 'INF-0040', '1906-06-06', NULL, NULL, 16, 1),
(24, 'INF-0041', '1906-06-06', NULL, NULL, 16, 1),
(25, 'INF-0042', '1906-11-04', NULL, NULL, 16, 1),
(26, 'INF-0043', '1906-11-04', NULL, NULL, 26, 1),
(27, 'INF-0044', '1900-01-19', NULL, NULL, 27, 1),
(28, 'INF-0045', '1899-12-30', NULL, NULL, 28, 1),
(29, 'INF-0046', '1901-01-24', NULL, NULL, 29, 1),
(30, 'INF-0047', '1900-03-10', NULL, NULL, 30, 1),
(31, 'INF-0048', '1900-09-06', NULL, NULL, 31, 1),
(32, 'INF-0049', '1901-05-14', NULL, NULL, 32, 1),
(33, 'INF-0050', '1901-05-14', NULL, NULL, 32, 1),
(34, 'INF-0051', '1900-02-18', NULL, NULL, 34, 1),
(35, 'INF-0052', '1900-02-18', NULL, NULL, 35, 1),
(36, 'INF-0053', '1900-02-18', NULL, NULL, 35, 1),
(37, 'INF-0054', '1900-02-18', NULL, NULL, 37, 1),
(38, 'INF-0055', '1900-02-18', NULL, NULL, 38, 1),
(39, 'INF-0056', '1900-02-18', NULL, NULL, 38, 1),
(40, 'INF-0057', '1900-02-18', NULL, NULL, 40, 1),
(41, 'INF-0058', '1900-02-18', NULL, NULL, 40, 1),
(42, 'INF-0059', '1900-04-09', NULL, NULL, 42, 1),
(43, 'INF-0060', '1900-01-19', NULL, NULL, 43, 1),
(44, 'INF-0061', '1900-01-19', NULL, NULL, 43, 1),
(45, 'INF-0062', '1900-01-19', NULL, NULL, 45, 1),
(46, 'INF-0063', '1900-02-18', NULL, NULL, 46, 1),
(47, 'INF-0064', '1900-02-18', NULL, NULL, 46, 1),
(48, 'INF-0065', '1900-02-18', NULL, NULL, 46, 1),
(49, 'INF-0066', '1900-02-18', NULL, NULL, 49, 1),
(50, 'INF-0067', '1900-02-18', NULL, NULL, 49, 1),
(51, 'INF-0068', '1900-04-09', NULL, NULL, 51, 1),
(52, 'INF-0069', '1900-04-09', NULL, NULL, 51, 1),
(53, 'INF-0070', '1900-05-29', NULL, NULL, 53, 1),
(54, 'INF-0071', '1900-05-29', NULL, NULL, 53, 1),
(55, 'INF-0072', '1900-02-18', NULL, NULL, 55, 1),
(56, 'INF-0073', '1900-02-18', NULL, NULL, 55, 1),
(57, 'INF-0074', '1900-02-18', NULL, NULL, 55, 1),
(58, 'INF-0075', '1900-02-18', NULL, NULL, 55, 1),
(59, 'INF-0076', '1901-10-01', NULL, NULL, 59, 1),
(60, 'INF-0077', '1901-10-01', NULL, NULL, 59, 1),
(61, 'INF-0078', '1900-12-15', NULL, NULL, 61, 1),
(62, 'INF-0079', '1900-12-15', NULL, NULL, 61, 1),
(63, 'INF-0080', '1900-07-18', NULL, NULL, 63, 1),
(64, 'INF-0081', '1900-07-18', NULL, NULL, 63, 1),
(65, 'INF-0082', '1900-07-18', NULL, NULL, 63, 1),
(66, 'INF-0083', '1901-05-14', NULL, NULL, 66, 1),
(67, 'INF-0084', '1900-02-18', NULL, NULL, 67, 1),
(68, 'INF-0085', '1900-07-18', NULL, NULL, 68, 1),
(69, 'INF-0086', '1900-07-18', NULL, NULL, 68, 1),
(70, 'INF-0087', '1900-07-18', NULL, NULL, 68, 1),
(71, 'INF-0088', '1900-07-18', NULL, NULL, 68, 1),
(72, 'INF-0089', '1900-07-18', NULL, NULL, 68, 1),
(73, 'INF-0090', '1900-07-18', NULL, NULL, 68, 1),
(74, 'INF-0091', '1900-07-18', NULL, NULL, 68, 1),
(75, 'INF-0092', '1900-10-16', NULL, NULL, 75, 1),
(76, 'INF-0093', '1900-10-16', NULL, NULL, 75, 1),
(77, 'INF-0094', '1901-06-03', NULL, NULL, 77, 1),
(78, 'INF-0095', '1901-06-03', NULL, NULL, 77, 1),
(79, 'INF-0096', '1901-06-03', NULL, NULL, 79, 1),
(80, 'INF-0097', '1901-06-03', NULL, NULL, 79, 1),
(81, 'INF-0098', '1901-06-03', NULL, NULL, 79, 1),
(82, 'INF-0099', '1901-06-03', NULL, NULL, 79, 1),
(83, 'INF-0100', '1901-03-25', NULL, NULL, 83, 1),
(84, 'INF-0101', '1901-03-25', NULL, NULL, 83, 1),
(85, 'INF-0102', '1901-03-25', NULL, NULL, 83, 1),
(86, 'INF-0103', '1901-02-13', NULL, NULL, 86, 1),
(87, 'INF-0104', '1901-02-13', NULL, NULL, 86, 1),
(88, 'INF-0105', '1901-02-13', NULL, NULL, 86, 1),
(89, 'INF-0106', '1900-07-08', NULL, NULL, 89, 1),
(90, 'INF-0107', '1900-07-08', NULL, NULL, 89, 1),
(91, 'INF-0108', '1900-07-08', NULL, NULL, 89, 1),
(92, 'INF-0109', '1900-07-08', NULL, NULL, 89, 1),
(93, 'INF-0110', '1900-07-08', NULL, NULL, 89, 1),
(94, 'INF-0111', '1900-07-08', NULL, NULL, 89, 1),
(95, 'INF-0112', '1900-11-10', NULL, NULL, 95, 1),
(96, 'INF-0113', '1900-11-10', NULL, NULL, 95, 1),
(97, 'INF-0114', '1900-11-10', NULL, NULL, 95, 1),
(98, 'INF-0115', '1900-06-13', NULL, NULL, 98, 1),
(99, 'INF-0116', '1900-06-13', NULL, NULL, 98, 1),
(100, 'INF-0117', '1900-06-13', NULL, NULL, 98, 1),
(101, 'INF-0118', '1900-06-13', NULL, NULL, 98, 1),
(102, 'INF-0119', '1900-06-13', NULL, NULL, 98, 1),
(103, 'INF-0120', '1901-08-22', NULL, NULL, 103, 1),
(104, 'INF-0121', '1901-08-22', NULL, NULL, 104, 1),
(105, 'INF-0122', '1901-08-22', NULL, NULL, 105, 1),
(106, 'INF-0123', '1901-08-22', NULL, NULL, 106, 1),
(107, 'INF-0124', '1901-08-22', NULL, NULL, 107, 1),
(108, 'INF-0125', '1901-08-22', NULL, NULL, 108, 1),
(109, 'INF-0126', '1901-11-30', NULL, NULL, 109, 1),
(110, 'INF-0127', '1901-11-30', NULL, NULL, 110, 1),
(111, 'INF-0128', '1901-08-22', NULL, NULL, 111, 1),
(112, 'INF-0129', '1901-08-22', NULL, NULL, 112, 1),
(113, 'INF-0130', '1902-03-10', NULL, NULL, 113, 1),
(114, 'INF-0131', '1902-03-10', NULL, NULL, 114, 1),
(115, 'INF-0132', '1901-11-30', NULL, NULL, 115, 1),
(116, 'INF-0133', '1901-11-30', NULL, NULL, 116, 1),
(117, 'INF-0134', '1901-11-30', NULL, NULL, 117, 1),
(118, 'INF-0135', '1901-11-30', NULL, NULL, 118, 1),
(119, 'INF-0136', '1902-06-18', NULL, NULL, 119, 1),
(120, 'INF-0137', '1902-06-18', NULL, NULL, 120, 1),
(121, 'INF-0138', '1902-06-18', NULL, NULL, 121, 1),
(122, 'INF-0139', '1902-06-18', NULL, NULL, 122, 1),
(123, 'INF-0140', '1902-06-18', NULL, NULL, 123, 1),
(124, 'INF-0141', '1900-10-16', NULL, NULL, 124, 1),
(125, 'INF-0142', '1900-08-17', NULL, NULL, 125, 1),
(126, 'INF-0143', '1900-08-17', NULL, NULL, 125, 1),
(127, 'INF-0144', '1901-06-03', NULL, NULL, 127, 1),
(128, 'INF-0145', '1901-06-03', NULL, NULL, 127, 1),
(129, 'INF-0146', '1901-06-03', NULL, NULL, 127, 1),
(130, 'INF-0147', '1900-02-18', NULL, NULL, 130, 1),
(131, 'INF-0148', '1900-02-18', NULL, NULL, 131, 1),
(132, 'INF-0149', '1900-02-18', NULL, NULL, 132, 1),
(133, 'INF-0150', '1900-02-18', NULL, NULL, 133, 1),
(134, 'INF-0151', '1900-02-18', NULL, NULL, 133, 1),
(135, 'INF-0152', '1900-01-19', NULL, NULL, 135, 1),
(136, 'INF-0153', '1900-01-19', NULL, NULL, 136, 1),
(137, 'INF-0154', '1900-01-19', NULL, NULL, 136, 1),
(138, 'INF-0155', '1900-01-19', NULL, NULL, 136, 1),
(139, 'INF-0156', '1900-01-19', NULL, NULL, 139, 1),
(140, 'INF-0157', '1900-01-19', NULL, NULL, 140, 1),
(141, 'INF-0158', '1900-01-19', NULL, NULL, 140, 1),
(142, 'INF-0159', '1900-01-19', NULL, NULL, 140, 1),
(143, 'INF-0160', '1900-01-19', NULL, NULL, 140, 1),
(144, 'INF-0161', '1900-01-19', NULL, NULL, 140, 1),
(145, 'INF-0162', '1900-01-19', NULL, NULL, 145, 1),
(146, 'INF-0163', '1900-01-19', NULL, NULL, 145, 1),
(147, 'INF-0164', '1900-01-19', NULL, NULL, 147, 1),
(148, 'INF-0165', '1900-01-19', NULL, NULL, 147, 1),
(149, 'INF-0166', '1900-01-19', NULL, NULL, 149, 1),
(150, 'INF-0167', '1900-01-19', NULL, NULL, 149, 1),
(151, 'INF-0168', '1900-01-19', NULL, NULL, 151, 1),
(152, 'INF-0169', '1900-01-19', NULL, NULL, 151, 1),
(153, 'INF-0170', '1900-01-19', NULL, NULL, 153, 1),
(154, 'INF-0171', '1900-01-29', NULL, NULL, 154, 1),
(155, 'INF-0172', '1900-01-19', NULL, NULL, 155, 1),
(156, 'INF-0173', '1900-01-29', NULL, NULL, 156, 1),
(157, 'INF-0174', '1900-01-19', NULL, NULL, 157, 1),
(158, 'INF-0175', '1900-01-19', NULL, NULL, 158, 1),
(159, 'INF-0176', '1899-12-30', NULL, NULL, 159, 1),
(160, 'INF-0177', '1900-01-19', NULL, NULL, 160, 1),
(161, 'INF-0178', '1900-02-18', NULL, NULL, 161, 1),
(162, 'INF-0179', '1900-04-09', NULL, NULL, 162, 1),
(163, 'INF-0180', '1900-04-09', NULL, NULL, 162, 1),
(164, 'INF-0181', '1900-03-20', NULL, NULL, 164, 1),
(165, 'INF-0182', '1900-03-20', NULL, NULL, 164, 1),
(166, 'INF-0183', '1900-03-20', NULL, NULL, 164, 1),
(167, 'INF-0184', '1900-03-20', NULL, NULL, 164, 1),
(168, 'INF-0185', '1900-03-20', NULL, NULL, 164, 1),
(169, 'INF-0186', '1900-03-20', NULL, NULL, 164, 1),
(170, 'INF-0187', '1900-06-28', NULL, NULL, 170, 1),
(171, 'INF-0188', '1900-06-28', NULL, NULL, 170, 1),
(172, 'INF-0189', '1900-06-28', NULL, NULL, 170, 1),
(173, 'INF-0190', '1900-06-28', NULL, NULL, 170, 1),
(174, 'INF-0191', '1900-06-28', NULL, NULL, 170, 1),
(175, 'INF-0192', '1900-06-28', NULL, NULL, 170, 1),
(176, 'INF-0193', '1900-06-28', NULL, NULL, 170, 1),
(177, 'INF-0194', '1900-06-28', NULL, NULL, 170, 1),
(178, 'INF-0195', '1900-06-28', NULL, NULL, 170, 1),
(179, 'INF-0196', '1900-06-08', NULL, NULL, 179, 1),
(180, 'INF-0197', '1900-06-08', NULL, NULL, 179, 1),
(181, 'INF-0198', '1900-06-08', NULL, NULL, 179, 1),
(182, 'INF-0199', '1900-06-08', NULL, NULL, 179, 1),
(183, 'INF-0200', '1900-06-08', NULL, NULL, 179, 1),
(184, 'INF-0201', '1900-06-08', NULL, NULL, 179, 1),
(185, 'INF-0202', '1901-01-14', NULL, NULL, 185, 1),
(186, 'INF-0203', '1901-01-14', NULL, NULL, 185, 1),
(187, 'INF-0204', '1901-01-14', NULL, NULL, 185, 1),
(188, 'INF-0205', '1900-05-29', NULL, NULL, 188, 1),
(189, 'INF-0206', '1900-05-29', NULL, NULL, 188, 1),
(190, 'INF-0207', '1900-05-29', NULL, NULL, 188, 1),
(191, 'INF-0208', '1900-05-29', NULL, NULL, 188, 1),
(192, 'INF-0209', '1900-09-06', NULL, NULL, 192, 1),
(193, 'INF-0210', '1900-09-06', NULL, NULL, 192, 1),
(194, 'INF-0211', '1900-09-06', NULL, NULL, 192, 1),
(195, 'INF-0212', '1900-09-06', NULL, NULL, 192, 1),
(196, 'INF-0213', '1900-09-06', NULL, NULL, 192, 1),
(197, 'INF-0214', '1900-09-06', NULL, NULL, 192, 1),
(198, 'INF-0215', '1900-09-06', NULL, NULL, 192, 1),
(199, 'INF-0216', '1900-09-06', NULL, NULL, 192, 1),
(200, 'INF-0217', '1900-09-06', NULL, NULL, 192, 1),
(201, 'INF-0218', '1900-04-09', NULL, NULL, 201, 1),
(202, 'INF-0219', '1900-04-09', NULL, NULL, 201, 1),
(203, 'INF-0220', '1900-04-09', NULL, NULL, 201, 1),
(204, 'INF-0221', '1900-04-09', NULL, NULL, 201, 1),
(205, 'INF-0222', '1900-04-09', NULL, NULL, 201, 1),
(206, 'INF-0223', '1900-04-09', NULL, NULL, 201, 1),
(207, 'INF-0224', '1900-02-18', NULL, NULL, 207, 1),
(208, 'INF-0225', '1900-02-18', NULL, NULL, 207, 1),
(209, 'INF-0226', '1900-02-18', NULL, NULL, 207, 1),
(210, 'INF-0227', '1900-02-18', NULL, NULL, 207, 1),
(211, 'INF-0228', '1900-02-08', NULL, NULL, 211, 1),
(212, 'INF-0229', '1900-02-08', NULL, NULL, 211, 1),
(213, 'INF-0230', '1900-02-08', NULL, NULL, 213, 1),
(214, 'INF-0231', '1900-02-08', NULL, NULL, 213, 1),
(215, 'INF-0232', '1900-02-08', NULL, NULL, 213, 1),
(216, 'INF-0233', '1900-02-08', NULL, NULL, 213, 1),
(217, 'INF-0234', '1900-02-08', NULL, NULL, 213, 1),
(218, 'INF-0235', '1900-02-08', NULL, NULL, 213, 1),
(219, 'INF-0236', '1900-02-08', NULL, NULL, 213, 1),
(220, 'INF-0237', '1900-02-08', NULL, NULL, 213, 1),
(221, 'INF-0238', '1900-02-08', NULL, NULL, 213, 1),
(228, 'INF-0245', '1900-01-19', NULL, NULL, 228, 1),
(229, 'INF-0246', '1900-01-19', NULL, NULL, 228, 1),
(230, 'INF-0247', '1900-01-19', NULL, NULL, 228, 1),
(231, 'INF-0248', '1900-01-19', NULL, NULL, 228, 1),
(232, 'INF-0249', '1900-05-29', NULL, NULL, 232, 1),
(233, 'INF-0250', '1900-05-29', NULL, NULL, 232, 1),
(234, 'INF-0251', '1900-05-29', NULL, NULL, 232, 1),
(235, 'INF-0252', '1900-05-29', NULL, NULL, 232, 1),
(236, 'INF-0253', '1900-05-29', NULL, NULL, 232, 1),
(237, 'INF-0254', '1900-05-29', NULL, NULL, 232, 1),
(238, 'INF-0255', '1900-05-29', NULL, NULL, 232, 1),
(239, 'INF-0256', '1900-05-29', NULL, NULL, 232, 1),
(240, 'INF-0257', '1900-05-29', NULL, NULL, 232, 1),
(241, 'INF-0258', '1900-05-29', NULL, NULL, 232, 1),
(242, 'INF-0259', '1900-02-03', NULL, NULL, 242, 1),
(243, 'INF-0260', '1900-02-03', NULL, NULL, 242, 1),
(244, 'INF-0261', '1900-02-03', NULL, NULL, 242, 1),
(245, 'INF-0262', '1900-02-03', NULL, NULL, 242, 1),
(246, 'INF-0263', '1900-02-03', NULL, NULL, 242, 1),
(247, 'INF-0264', '1900-02-03', NULL, NULL, 242, 1),
(248, 'INF-0265', '1900-02-03', NULL, NULL, 242, 1),
(249, 'INF-0266', '1900-02-03', NULL, NULL, 242, 1),
(250, 'INF-0267', '1900-02-23', NULL, NULL, 250, 1),
(251, 'INF-0268', '1900-02-23', NULL, NULL, 250, 1),
(252, 'INF-0269', '1900-02-23', NULL, NULL, 250, 1),
(253, 'INF-0270', '1900-02-23', NULL, NULL, 250, 1),
(254, 'INF-0271', '1900-02-23', NULL, NULL, 250, 1),
(255, 'INF-0272', '1900-02-23', NULL, NULL, 250, 1),
(256, 'INF-0273', '1900-02-23', NULL, NULL, 250, 1),
(257, 'INF-0274', '1900-02-23', NULL, NULL, 250, 1),
(258, 'INF-0275', '1900-02-23', NULL, NULL, 250, 1),
(259, 'INF-0276', '1900-02-23', NULL, NULL, 250, 1),
(260, 'INF-0277', '1900-02-23', NULL, NULL, 250, 1),
(261, 'INF-0278', '1900-02-23', NULL, NULL, 250, 1),
(262, 'INF-0279', '1900-02-28', NULL, NULL, 262, 1),
(263, 'INF-0280', '1900-02-28', NULL, NULL, 262, 1),
(264, 'INF-0281', '1900-02-28', NULL, NULL, 262, 1),
(265, 'INF-0282', '1900-02-28', NULL, NULL, 262, 1),
(266, 'INF-0283', '1900-01-29', NULL, NULL, 266, 1),
(267, 'INF-0284', '1900-01-29', NULL, NULL, 266, 1),
(268, 'INF-0285', '1900-01-29', NULL, NULL, 266, 1),
(269, 'INF-0286', '1900-01-29', NULL, NULL, 266, 1),
(270, 'INF-0287', '1900-01-29', NULL, NULL, 266, 1),
(271, 'INF-0288', '1900-01-29', NULL, NULL, 266, 1),
(272, 'INF-0289', '1900-01-29', NULL, NULL, 266, 1),
(273, 'INF-0290', '1900-01-29', NULL, NULL, 266, 1),
(274, 'INF-0291', '1900-01-19', NULL, NULL, 274, 1),
(275, 'INF-0292', '1900-01-19', NULL, NULL, 274, 1),
(276, 'INF-0293', '1900-01-19', NULL, NULL, 274, 1),
(277, 'INF-0294', '1900-01-19', NULL, NULL, 274, 1),
(278, 'INF-0295', '1900-08-07', NULL, NULL, 278, 1),
(279, 'INF-0296', '1900-08-07', NULL, NULL, 278, 1),
(280, 'INF-0297', '1900-07-28', NULL, NULL, 280, 1),
(281, 'INF-0298', '1900-07-28', NULL, NULL, 280, 1),
(282, 'INF-0299', '1900-10-11', NULL, NULL, 282, 1),
(283, 'INF-0300', '1900-10-11', NULL, NULL, 282, 1),
(284, 'INF-0301', '1900-10-11', NULL, NULL, 282, 1),
(285, 'INF-0302', '1900-10-11', NULL, NULL, 282, 1),
(286, 'INF-0303', '1900-10-11', NULL, NULL, 282, 1),
(287, 'INF-0304', '1901-02-03', NULL, NULL, 287, 1),
(288, 'INF-0305', '1901-02-03', NULL, NULL, 287, 1),
(289, 'INF-0306', '1901-02-03', NULL, NULL, 287, 1),
(290, 'INF-0307', '1901-11-30', NULL, NULL, 290, 1),
(291, 'INF-0308', '1901-11-30', NULL, NULL, 290, 1),
(292, 'INF-0309', '1900-11-05', NULL, NULL, 292, 1),
(293, 'INF-0310', '1900-11-05', NULL, NULL, 292, 1),
(294, 'INF-0311', '1900-11-05', NULL, NULL, 292, 1),
(295, 'INF-0312', '1900-11-15', NULL, NULL, 295, 1),
(296, 'INF-0313', '1900-11-15', NULL, NULL, 295, 1),
(297, 'INF-0314', '1900-12-05', NULL, NULL, 297, 1),
(298, 'INF-0315', '1900-12-05', NULL, NULL, 297, 1),
(299, 'INF-0316', '1901-08-07', NULL, NULL, 299, 1),
(300, 'INF-0317', '1901-08-07', NULL, NULL, 299, 1),
(301, 'INF-0318', '1901-08-07', NULL, NULL, 299, 1),
(302, 'INF-0319', '1900-07-08', NULL, NULL, 302, 1),
(303, 'INF-0320', '1900-07-08', NULL, NULL, 302, 1),
(304, 'INF-0321', '1900-07-08', NULL, NULL, 302, 1),
(305, 'INF-0322', '1900-07-08', NULL, NULL, 302, 1),
(306, 'INF-0323', '1900-07-08', NULL, NULL, 302, 1),
(307, 'INF-0324', '1900-07-08', NULL, NULL, 302, 1),
(308, 'INF-0325', '1900-02-18', NULL, NULL, 308, 1),
(309, 'INF-0326', '1900-02-18', NULL, NULL, 308, 1),
(310, 'INF-0327', '1900-02-18', NULL, NULL, 308, 1),
(311, 'INF-0328', '1900-02-18', NULL, NULL, 308, 1),
(312, 'INF-0329', '1900-02-18', NULL, NULL, 308, 1),
(313, 'INF-0330', '1900-02-18', NULL, NULL, 308, 1),
(314, 'INF-0331', '1900-02-18', NULL, NULL, 308, 1),
(315, 'INF-0332', '1900-02-18', NULL, NULL, 308, 1),
(316, 'INF-0333', '1900-02-18', NULL, NULL, 308, 1),
(317, 'INF-0334', '1900-02-18', NULL, NULL, 308, 1),
(318, 'INF-0335', '1900-02-18', NULL, NULL, 308, 1),
(319, 'INF-0336', '1900-02-18', NULL, NULL, 308, 1),
(320, 'INF-0337', '1900-02-18', NULL, NULL, 308, 1),
(321, 'INF-0338', '1900-02-18', NULL, NULL, 308, 1),
(322, 'INF-0339', '1899-12-30', NULL, NULL, 322, 1),
(323, 'INF-0340', '1899-12-30', NULL, NULL, 322, 1),
(324, 'INF-0341', '1899-12-30', NULL, NULL, 322, 1),
(325, 'INF-0342', '1899-12-30', NULL, NULL, 322, 1),
(326, 'INF-0343', '1899-12-30', NULL, NULL, 322, 1),
(327, 'INF-0344', '1899-12-30', NULL, NULL, 322, 1),
(328, 'INF-0345', '1899-12-30', NULL, NULL, 322, 1),
(329, 'INF-0346', '1899-12-30', NULL, NULL, 322, 1),
(330, 'INF-0347', '1899-12-30', NULL, NULL, 322, 1),
(331, 'INF-0348', '1899-12-30', NULL, NULL, 322, 1),
(332, 'INF-0349', '1900-03-10', NULL, NULL, 332, 1),
(333, 'INF-0350', '1900-03-10', NULL, NULL, 332, 1),
(334, 'INF-0351', '1900-03-10', NULL, NULL, 332, 1),
(335, 'INF-0352', '1900-03-10', NULL, NULL, 332, 1),
(336, 'INF-0353', '1900-03-10', NULL, NULL, 332, 1),
(337, 'INF-0354', '1900-02-28', NULL, NULL, 337, 1),
(338, 'INF-0355', '1900-02-28', NULL, NULL, 337, 1),
(339, 'INF-0356', '1900-02-28', NULL, NULL, 337, 1),
(340, 'INF-0357', '1900-02-28', NULL, NULL, 337, 1),
(341, 'INF-0358', '1900-02-28', NULL, NULL, 337, 1),
(342, 'INF-0359', '1900-02-28', NULL, NULL, 337, 1),
(343, 'INF-0360', '1900-02-28', NULL, NULL, 337, 1),
(344, 'INF-0361', '1900-02-28', NULL, NULL, 337, 1),
(345, 'INF-0362', '1900-02-28', NULL, NULL, 337, 1),
(346, 'INF-0363', '1900-02-28', NULL, NULL, 337, 1),
(347, 'INF-0364', '1900-04-09', NULL, NULL, 347, 1),
(348, 'INF-0365', '1901-05-14', NULL, NULL, 348, 1),
(349, 'INF-0366', '1902-09-26', NULL, NULL, 349, 1),
(350, 'INF-0367', '1900-04-09', NULL, NULL, 350, 1),
(351, 'INF-0368', '1900-02-18', NULL, NULL, 351, 1),
(352, 'INF-0369', '1900-04-09', NULL, NULL, 352, 1),
(353, 'INF-0370', '1900-04-09', NULL, NULL, 353, 1),
(354, 'INF-0371', '1900-04-09', NULL, NULL, 353, 1),
(355, 'INF-0372', '1900-04-09', NULL, NULL, 353, 1),
(356, 'INF-0373', '1900-04-09', NULL, NULL, 353, 1),
(357, 'INF-0374', '1900-04-09', NULL, NULL, 353, 1),
(358, 'INF-0375', '1900-04-09', NULL, NULL, 353, 1),
(359, 'INF-0376', '1900-04-09', NULL, NULL, 353, 1),
(360, 'INF-0377', '1900-04-09', NULL, NULL, 353, 1),
(361, 'INF-0378', '1900-04-09', NULL, NULL, 353, 1),
(362, 'INF-0379', '1900-04-09', NULL, NULL, 353, 1),
(363, 'INF-0380', '1900-04-09', NULL, NULL, 353, 1),
(364, 'INF-0381', '1900-04-09', NULL, NULL, 353, 1),
(365, 'INF-0382', '1900-04-09', NULL, NULL, 353, 1),
(366, 'INF-0383', '1900-04-09', NULL, NULL, 353, 1),
(367, 'INF-0384', '1900-04-09', NULL, NULL, 353, 1),
(368, 'INF-0385', '1900-04-09', NULL, NULL, 353, 1),
(369, 'INF-0386', '1900-04-09', NULL, NULL, 353, 1),
(370, 'INF-0387', '1900-04-09', NULL, NULL, 353, 1),
(371, 'INF-0388', '1900-04-09', NULL, NULL, 353, 1),
(372, 'INF-0389', '1900-04-09', NULL, NULL, 353, 1),
(373, 'INF-0390', '1900-04-09', NULL, NULL, 353, 1),
(374, 'INF-0391', '1900-04-09', NULL, NULL, 353, 1),
(375, 'INF-0392', '1900-04-09', NULL, NULL, 353, 1),
(376, 'INF-0393', '1900-04-09', NULL, NULL, 353, 1),
(377, 'INF-0394', '1900-04-09', NULL, NULL, 353, 1),
(378, 'INF-0395', '1900-04-09', NULL, NULL, 353, 1),
(379, 'INF-0396', '1900-04-09', NULL, NULL, 353, 1),
(380, 'INF-0397', '1900-04-09', NULL, NULL, 353, 1),
(381, 'INF-0398', '1900-04-09', NULL, NULL, 353, 1),
(382, 'INF-0399', '1900-04-09', NULL, NULL, 353, 1),
(383, 'INF-0400', '1900-04-09', NULL, NULL, 353, 1),
(384, 'INF-0401', '1900-04-09', NULL, NULL, 353, 1),
(385, 'INF-0402', '1900-04-09', NULL, NULL, 353, 1),
(386, 'INF-0403', '1900-04-09', NULL, NULL, 353, 1),
(387, 'INF-0404', '1900-04-09', NULL, NULL, 353, 1),
(388, 'INF-0405', '1900-04-09', NULL, NULL, 353, 1),
(389, 'INF-0406', '1900-04-09', NULL, NULL, 353, 1),
(390, 'INF-0407', '1900-04-09', NULL, NULL, 353, 1),
(391, 'INF-0408', '1900-04-09', NULL, NULL, 353, 1),
(392, 'INF-0409', '1900-04-09', NULL, NULL, 353, 1),
(393, 'INF-0410', '1900-04-09', NULL, NULL, 353, 1),
(394, 'INF-0411', '1900-04-09', NULL, NULL, 353, 1),
(395, 'INF-0412', '1900-04-09', NULL, NULL, 353, 1),
(396, 'INF-0413', '1900-04-09', NULL, NULL, 353, 1),
(397, 'INF-0414', '1900-04-09', NULL, NULL, 353, 1),
(398, 'INF-0415', '1900-04-09', NULL, NULL, 353, 1),
(399, 'INF-0416', '1900-04-09', NULL, NULL, 353, 1),
(400, 'INF-0417', '1900-04-09', NULL, NULL, 400, 1),
(401, 'INF-0418', '1900-04-09', NULL, NULL, 400, 1),
(402, 'INF-0419', '1900-04-09', NULL, NULL, 400, 1),
(403, 'INF-0420', '1900-04-09', NULL, NULL, 400, 1),
(404, 'INF-0421', '1900-06-28', NULL, NULL, 404, 1),
(405, 'INF-0422', '1900-06-28', NULL, NULL, 404, 1),
(406, 'INF-0423', '1900-06-28', NULL, NULL, 404, 1),
(407, 'INF-0424', '1900-06-28', NULL, NULL, 404, 1),
(408, 'INF-0425', '1900-06-28', NULL, NULL, 404, 1),
(409, 'INF-0426', '1900-06-28', NULL, NULL, 404, 1),
(410, 'INF-0427', '1900-04-09', NULL, NULL, 410, 1),
(411, 'INF-0428', '1900-04-09', NULL, NULL, 410, 1),
(412, 'INF-0429', '1900-04-09', NULL, NULL, 410, 1),
(413, 'INF-0430', '1900-04-09', NULL, NULL, 410, 1),
(414, 'INF-0431', '1900-04-09', NULL, NULL, 410, 1),
(415, 'INF-0432', '1900-04-09', NULL, NULL, 415, 1),
(416, 'INF-0433', '1900-12-15', NULL, NULL, 416, 1),
(417, 'INF-0434', '1900-04-29', NULL, NULL, 417, 1),
(418, 'INF-0435', '1900-04-29', NULL, NULL, 417, 1),
(419, 'INF-0436', '1900-02-18', NULL, NULL, 419, 1),
(420, 'INF-0437', '1900-02-18', NULL, NULL, 420, 1),
(421, 'INF-0438', '1900-02-18', NULL, NULL, 420, 1),
(422, 'INF-0439', '1900-02-18', NULL, NULL, 420, 1),
(423, 'INF-0440', '1900-01-29', NULL, NULL, 423, 1),
(424, 'INF-0441', '1900-02-18', NULL, NULL, 424, 1),
(425, 'INF-0442', '1900-04-09', NULL, NULL, 425, 1),
(426, 'INF-0443', '1900-04-09', NULL, NULL, 426, 1),
(427, 'INF-0444', '1900-04-09', NULL, NULL, 427, 1),
(428, 'INF-0445', '1899-12-30', NULL, NULL, 428, 1),
(429, 'INF-0446', '1900-02-18', NULL, NULL, 429, 1),
(430, 'INF-0447', '1899-12-30', NULL, NULL, 430, 1),
(431, 'INF-0448', '1900-04-09', NULL, NULL, 431, 1),
(432, 'INF-0449', '1900-04-09', NULL, NULL, 431, 1),
(433, 'INF-0450', '1900-01-19', NULL, NULL, 433, 1),
(434, 'INF-0451', '1900-01-19', NULL, NULL, 433, 1),
(435, 'INF-0452', '1900-01-19', NULL, NULL, 433, 1),
(436, 'INF-0453', '1900-01-19', NULL, NULL, 433, 1),
(437, 'INF-0454', '1900-02-18', NULL, NULL, 437, 1),
(438, 'INF-0455', '1900-02-18', NULL, NULL, 437, 1),
(439, 'INF-0456', '1900-01-19', NULL, NULL, 439, 1),
(440, 'INF-0457', '1900-01-19', NULL, NULL, 439, 1),
(441, 'INF-0458', '1900-02-18', NULL, NULL, 441, 1),
(444, 'INF-0461', '1900-04-09', NULL, NULL, 444, 1),
(445, 'INF-0462', '1900-01-19', NULL, NULL, 445, 1),
(446, 'INF-0463', '1900-01-19', NULL, NULL, 446, 1),
(447, 'INF-0464', '1900-01-19', NULL, NULL, 447, 1),
(448, 'INF-0465', '1900-01-19', NULL, NULL, 448, 1),
(449, 'INF-0466', '1900-01-19', NULL, NULL, 449, 1),
(450, 'INF-0467', '1900-01-29', NULL, NULL, 450, 1),
(451, 'INF-0468', '1900-01-29', NULL, NULL, 450, 1),
(452, 'INF-0469', '1900-01-29', NULL, NULL, 450, 1),
(453, 'INF-0470', '1900-02-18', NULL, NULL, 453, 1),
(454, 'INF-0471', '1900-02-18', NULL, NULL, 454, 1),
(455, 'INF-0472', '1900-02-18', NULL, NULL, 454, 1),
(456, 'INF-0473', '1900-02-18', NULL, NULL, 454, 1),
(457, 'INF-0474', '1900-02-18', NULL, NULL, 454, 1),
(458, 'INF-0475', '1901-03-25', NULL, NULL, 458, 1),
(459, 'INF-0476', '1901-03-25', NULL, NULL, 458, 1),
(460, 'INF-0477', '1900-12-15', NULL, NULL, 460, 1),
(461, 'INF-0478', '1900-12-15', NULL, NULL, 460, 1),
(462, 'INF-0479', '1899-12-30', NULL, NULL, 462, 1),
(463, 'INF-0480', '1899-12-30', NULL, NULL, 463, 1);

-- --------------------------------------------------------

--
-- Structure de la table `t_borrows`
--

CREATE TABLE `t_borrows` (
  `id_borr` int(11) NOT NULL,
  `borr_owner` varchar(15) NOT NULL,
  `borr_forwho` varchar(20) NOT NULL,
  `borr_taken_date` date DEFAULT NULL,
  `borr_returned_visa` varchar(15) DEFAULT NULL,
  `borr_returned_date` date DEFAULT NULL,
  `borr_reason` varchar(50) DEFAULT NULL,
  `borr_location` varchar(20) NOT NULL,
  `borr_note` text,
  `fk_article` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `t_borrows`
--

INSERT INTO `t_borrows` (`id_borr`, `borr_owner`, `borr_forwho`, `borr_taken_date`, `borr_returned_visa`, `borr_returned_date`, `borr_reason`, `borr_location`, `borr_note`, `fk_article`) VALUES
(1, 'dimlymberis', 'denis', '2019-02-22', 'bersahli', '2019-02-25', 'tpi', 'n501', 'rayé sur le côté droite .. ', 1),
(2, 'sheoliveira', 'victor', '2019-02-28', 'robferrari', '2019-03-09', 'test', 'n512', 'pas au normes', 1),
(3, 'dimlymberis', 'Dimi', '2019-03-09', 'robferrari', '2019-03-09', 'projet', 'n501', 'test', 4),
(4, 'robferrari', 'zola', '2019-03-09', 'dimlymberis', '2019-03-09', 'privée', '567', 'retour test', 5),
(5, 'robferrari', 'dimi', '2019-03-09', 'dimlymberis', '2019-03-09', 'faire plaisir', 'chez lui', 'retour dimi', 3),
(6, 'dimlymberis', 'karim', '2019-03-09', 'dimlymberis', '2019-03-11', 'privée', 'chez lui', 'ras', 4),
(7, 'dimlymberis', 'pache', '2019-03-15', 'dimlymberis', '2019-03-15', 'test', 'n501', 'defectueux', 3),
(8, 'dimlymberis', 'pache', '2019-03-15', 'bersahli', '2019-03-15', 'tpi 2019', 'n501', 'pas de cable', 3),
(9, 'dimlymberis', 'zer', '2019-03-15', 'dimlymberis', '2019-03-15', 'asdf', 'rrr', 'ras', 3),
(10, 'dimlymberis', 'toi', '2019-03-15', 'dimlymberis', '2019-03-15', 'jre sais pas', '567ghh', 'asfasdfds', 3),
(11, 'dimlymberis', 'xb', '2019-03-15', NULL, NULL, 'sd', 'd', NULL, 2),
(12, 'dimlymberis', 'dsdf', '2019-03-15', 'dimlymberis', '2019-03-15', 'asdfa', 'sss', '', 3),
(13, 'dimlymberis', 'sdgdfsg', '2019-03-15', 'sheoliveira', '2019-03-15', 'sdgdsfgsdfg', 'sdgdsfgfdsg', '', 3),
(14, 'dimlymberis', 'sahli', '2020-01-25', 'dimlymberis', '2021-02-12', 'privée', 'maison', 'attention coin haut droite abîmer', 3),
(15, 'dimlymberis', 'toto', '2020-02-26', 'dimlymberis', '2020-02-26', 'privée', 'maison', 'perdu', 1),
(16, 'dimlymberis', 'toto', '2021-02-01', 'sheoliveira', '2021-02-10', 'test', 'n501', '', 4),
(17, 'dimlymberis', 'garraux', '2021-02-01', 'dimlymberis', '2021-02-01', 'test', 'n512A', 'rien à signaler', 19),
(19, 'bersahli', 'stouder', '2021-02-04', 'bersahli', '2021-02-04', 'tpi', 'n501', 'ras', 6),
(20, 'bersahli', 'esteban', '2021-02-04', NULL, NULL, 'tpi', 'n51', NULL, 1),
(21, 'dimlymberis', 'garraux', '2021-02-08', 'bersahli', '2021-02-10', 'tpi', 'n104', 'test retour', 5),
(22, 'dimlymberis', 'garraux', '2021-02-12', NULL, NULL, 'tpi', 'n512a', NULL, 3),
(23, 'bersahli', 'fortuna', '2021-03-04', NULL, NULL, 'tpi', 'privé', NULL, 4),
(24, 'dimlymberis', 'gilbert', '2021-03-08', NULL, NULL, 'tpi', 'n512', NULL, 5),
(25, 'robferrari', 'dimi', '2021-03-09', NULL, NULL, 'test', 'n501', NULL, 350),
(26, 'robferrari', 'dimi', '2021-03-09', NULL, NULL, 'test', 'n104', NULL, 6),
(27, 'robferrari', 'dimi', '2021-03-09', NULL, NULL, 'test emprunt', 'privé', NULL, 16),
(28, 'dimlymberis', 'por', '2021-03-30', NULL, NULL, 'privé', 'maison', NULL, 14);

-- --------------------------------------------------------

--
-- Structure de la table `t_categories`
--

CREATE TABLE `t_categories` (
  `id_cate` int(11) NOT NULL,
  `cate_name` varchar(30) NOT NULL,
  `fk_kind` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `t_categories`
--

INSERT INTO `t_categories` (`id_cate`, `cate_name`, `fk_kind`) VALUES
(1, 'Disques durs', 1),
(2, 'Lecteur de code Barre', 1),
(3, 'Sondes', 2),
(4, 'iPad', 8),
(5, 'Portables', 2),
(6, 'Câbles & Multiprises', 3),
(7, 'Switch-Box', 3),
(8, 'Alimentations', 4),
(9, 'Cartes contrôleur SCSI', 4),
(10, 'Cartes d\'aquisition', 4),
(11, 'Cartes mères', 4),
(12, 'Cartes Raid', 4),
(13, 'Cartes réseaux', 4),
(14, 'Cartes USB', 4),
(15, 'CD / DVD', 4),
(16, 'Communication', 4),
(17, 'Disques durs / SSD', 4),
(18, 'Mémoire', 4),
(19, 'Processeurs / CPU', 4),
(20, 'Refroidisseurs', 4),
(21, 'Camera', 5),
(22, 'Robotique', 5),
(23, 'CD / DVD', 6),
(24, 'Disques durs externes', 6),
(25, 'Ecrans', 6),
(26, 'Haut-parleurs', 6),
(27, 'Lecteur de cartes', 6),
(28, 'Lecteur Zip', 6),
(29, 'Stockage', 6),
(30, 'Access Point', 7),
(31, 'Bluetooth', 7),
(32, 'Ethernet', 7),
(33, 'HUB / Switch', 7),
(34, 'Modem', 7),
(35, 'Wifi', 7),
(36, 'Android', 8),
(37, 'Windows 7', 8),
(38, 'Modem', 9),
(39, 'Baie', 1),
(40, 'test dimi', 10),
(41, 'test', 1),
(42, 'test 4', 1);

-- --------------------------------------------------------

--
-- Structure de la table `t_chests`
--

CREATE TABLE `t_chests` (
  `id_ches` int(11) NOT NULL,
  `ches_name` varchar(15) NOT NULL,
  `fk_room` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `t_chests`
--

INSERT INTO `t_chests` (`id_ches`, `ches_name`, `fk_room`) VALUES
(1, '11', 1),
(2, '1', 2);

-- --------------------------------------------------------

--
-- Structure de la table `t_kinds`
--

CREATE TABLE `t_kinds` (
  `id_kind` int(11) NOT NULL,
  `kind_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `t_kinds`
--

INSERT INTO `t_kinds` (`id_kind`, `kind_name`) VALUES
(1, 'Accessoires'),
(2, 'Apple'),
(3, 'Câbles & Adaptateurs'),
(4, 'Composants PC'),
(5, 'Electronique de Loisir'),
(6, 'Périphériques PC'),
(7, 'Réseaux'),
(8, 'Tablet / Smartphone'),
(9, 'Télécommunication'),
(10, 'dimi ');

-- --------------------------------------------------------

--
-- Structure de la table `t_makers`
--

CREATE TABLE `t_makers` (
  `id_make` int(11) NOT NULL,
  `make_name` varchar(30) NOT NULL,
  `make_picture` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `t_makers`
--

INSERT INTO `t_makers` (`id_make`, `make_name`, `make_picture`) VALUES
(1, '3com', ''),
(2, 'Adaptec', '1616769174.png'),
(3, 'ALUMINIUM', ''),
(4, 'AMD', '1616747174.png'),
(5, 'APACER', ''),
(6, 'Apple', ''),
(7, 'ARD', ''),
(8, 'ASUS', ''),
(9, 'ATEN', ''),
(10, 'BELKIN', ''),
(11, 'BEN-Q', ''),
(12, 'CASTLEWOOD', ''),
(13, 'CISCO', ''),
(14, 'CoolerMaster', ''),
(15, 'CORSAIR', ''),
(16, 'COWORLD', ''),
(17, 'DATALOGIC', ''),
(18, 'DeLock', ''),
(19, 'Devolo', ''),
(20, 'Enermax', ''),
(21, 'ETML', ''),
(22, 'EVGA', ''),
(23, 'EXSYS', ''),
(24, 'Fritz', ''),
(25, 'GigaByte', ''),
(26, 'HIS', ''),
(27, 'Hitachi/IBM', ''),
(28, 'HP', ''),
(29, 'HTC', ''),
(30, 'INFRATEC', ''),
(31, 'Intel', ''),
(32, 'INTELLINET', ''),
(33, 'iomega', ''),
(34, 'KINGSTON', ''),
(35, 'LaCie', ''),
(36, 'LEGO', ''),
(37, 'LG', ''),
(38, 'LITE-ON', ''),
(39, 'Logitech', ''),
(40, 'Lynksys', ''),
(41, 'Maxxtro', ''),
(42, 'Micronet', ''),
(43, 'NEC', ''),
(44, 'OCZ', ''),
(45, 'PALIT', ''),
(46, 'PANASONIC', ''),
(47, 'PATRIOT', ''),
(48, 'Pinnacle', ''),
(49, 'Pioneer', ''),
(50, 'PLEXTOR', ''),
(51, 'PMI', ''),
(52, 'Profront', ''),
(53, 'PROMISE', ''),
(54, 'RAPTOXX', ''),
(55, 'SAILOR', ''),
(56, 'SAMSUNG', ''),
(57, 'SAPPHIRE', ''),
(58, 'SEAGATE', ''),
(59, 'SHARKOON', ''),
(60, 'SMC', ''),
(61, 'Soho', ''),
(62, 'SONY', ''),
(63, 'Tekram', ''),
(64, 'Thermaltake', ''),
(65, 'Toshiba', ''),
(66, 'TRAXDATA', ''),
(67, 'TrendNet', ''),
(68, 'Western Digital', ''),
(69, 'XFX', ''),
(70, 'Zalman', ''),
(71, 'ZyXEL', ''),
(84, 'test', '1613855690.png'),
(85, 'test3', NULL),
(86, 'a110', '1614594423.png'),
(87, 'a1', NULL),
(88, 'a111', '1614595027.png');

-- --------------------------------------------------------

--
-- Structure de la table `t_notes`
--

CREATE TABLE `t_notes` (
  `id_note` int(11) NOT NULL,
  `date` date NOT NULL,
  `note_author` varchar(20) NOT NULL,
  `note_description` text NOT NULL,
  `fk_borrow` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `t_products`
--

CREATE TABLE `t_products` (
  `id_prod` int(11) NOT NULL,
  `prod_name` varchar(40) NOT NULL,
  `prod_description` text,
  `prod_picture` varchar(50) DEFAULT NULL,
  `prod_note` text,
  `fk_maker` int(11) DEFAULT NULL,
  `fk_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `t_products`
--

INSERT INTO `t_products` (`id_prod`, `prod_name`, `prod_description`, `prod_picture`, `prod_note`, `fk_maker`, `fk_category`) VALUES
(1, 'Barracuda 7200.10', 'HDD et tiroir, 160 GB, 8MB Cache, 7200 rpm, SATA, 150 MB/s', '1613777615', 'Merci de formater le disque une fois remis à sa place', 58, 1),
(7, 'Rapid-Case 2.5"', 'Boîtier de disque dur externe pour HDD 2.5", USB2.0 et eSATA', NULL, NULL, 59, 1),
(11, 'RMS-200-TH', 'Concentrateur de sondes pour surveillance Temp/Humidité via IP', NULL, 'test', 30, 3),
(12, 'RMS-ST-NTC', 'Sonde de température', NULL, NULL, 30, 3),
(13, 'iPad Wi-Fi + 3G', 'Puce Apple A4 1GHz, 64Go + clavier + fourre de rangement', NULL, NULL, 6, 4),
(14, 'iPad Wi-Fi + 3G', 'Puce Apple A4 1GHz, 64Go + clavier + fourre de rangement', NULL, NULL, 6, 4),
(15, 'iPad Wi-Fi + 3G', 'Puce Apple A4 1GHz, 64Go + clavier + fourre de rangement', NULL, NULL, 6, 4),
(16, 'MacBook Pro', '2x2Go DDR3, SATA 500Go,  Intel Core i5 2,53GHz, W80371PCAGY', NULL, NULL, 6, 5),
(25, 'MacBook Pro', '1Go DDR2,  Core 2 Duo 2,16GHz, W86422QNW0G', NULL, NULL, 6, 5),
(26, 'MacBook Air', '2x1Go DDR2 Core 2 Duo 2,16 GHz, W8812Q09YS1', NULL, NULL, 6, 5),
(27, 'F5U103', 'Adaptateur USB-RS232-PS/2, avec câbles', NULL, NULL, 10, 6),
(28, 'EX-1341', 'Adaptateur USB 2.0 vers Centronics (parallèle)', NULL, NULL, 23, 6),
(29, 'PM 4-IP', 'Multiprise 4 x 230V, commandé via IP', NULL, NULL, 30, 6),
(30, 'USB TO SATA/IDE', 'Adaptateur de disque dur Ide et SATA pour port USB2', NULL, NULL, 41, 6),
(31, 'CS1782', 'Communtateur USB-DVI pour piloter 2 PC', NULL, NULL, 9, 7),
(32, 'CS1784', 'Communtateur USB-DVI pour piloter 4 PC', NULL, NULL, 9, 7),
(33, 'CS1784', 'Communtateur USB-DVI pour piloter 4 PC', NULL, NULL, 9, 7),
(34, 'EG465P-VE', 'Alimentation ATX 1.3, 465 W', NULL, NULL, 20, 8),
(35, 'RT-450 PSP', 'Alimentation ATX 1.3, 450 W', NULL, NULL, 54, 8),
(37, 'Fanless 350W', 'Alimentation ATX 1.3, 350 W, sans ventilateur', NULL, NULL, 64, 8),
(38, 'Toughpower 600W', 'Alimentation ATX 2.2, 600 W', NULL, NULL, 64, 8),
(40, 'DC390U2W', 'Carte PCI, contrôleur SCSI, Ultra2 Wide, 80 MB/s', NULL, NULL, 63, 9),
(42, 'DC390U4W', 'Carte PCI, contrôleur SCSI, Ultra320, 320 MB/s', NULL, NULL, 63, 9),
(43, 'EX-6500', 'Carte PCI, pour d\'aquistion DV munie de 3 ports FireWire', NULL, NULL, 23, 10),
(45, 'Studio DV 7', 'Carte PCI, pour aquisition DV munie de 2 ports FireWire, avec acc.', NULL, NULL, 48, 10),
(46, 'Radeon 9200 SE', 'Carte AGP, 8x, 128 MB, TV-OUT', NULL, NULL, 8, 10),
(49, 'Radeon A9550', 'Carte AGP, 8x, 128 MB, TV-OUT, Dual VGA / DVI', NULL, NULL, 8, 10),
(51, 'EN7900GS', 'Carte PCIe, 16x, 256 MB, HDTV-OUT, VGA / Dual DVI, SLI', NULL, NULL, 8, 10),
(53, 'EAX1950XTX', 'Carte PCIe, 16x, 512 MB, HDTV-OUT, Dual VGA / Dual DVI, CrossFire', NULL, NULL, 8, 10),
(55, 'EAH2400PRO/HTTP', 'Carte PCIe, 16x, 256 MB, HDTV-OUT, DVI', NULL, NULL, 8, 10),
(59, 'HD 7970', 'Carte PCIe, 16x, Radeon HD7970 3064 MB, 1xDVI, HDMI, 2x mini D-Port', NULL, NULL, 8, 10),
(61, 'GTX 570 HD', 'Carte PCIe, 16x, Nvidia GTX570,1280MB GDDR5, 950/732MHz\n', NULL, NULL, 22, 10),
(63, 'NX8800GTS', 'Carte PCIe, 16x, 512MB, TV-Out, 2xDVI, DDR3, SLI', NULL, NULL, 25, 10),
(66, 'GTX 580 UD', 'Carte PCIe, 16x, Nvidia GTX580,1536MB GDDR5, 1002/795MHz\n', NULL, NULL, 25, 10),
(67, 'Radeon X300SE', 'Carte PCIe, 16x, 128 MB, TV-OUT, VGA / DVI', NULL, NULL, 26, 10),
(68, 'HD3870 IceQ', 'Carte PCIe, 16x, 512 MB, HDMI, 2x DVI, DDR4, CrossFire', NULL, NULL, 26, 10),
(75, 'HD4870 IceQ4+', 'Carte PCIe, 16x, 512 MB, HDMI, 2x DVI, TV-Out', NULL, NULL, 26, 10),
(77, 'HD5870 ', 'Carte PCIe, 16x, 1 GB (256 bits), HDMI, 2xDVI', NULL, NULL, 26, 10),
(79, 'GeForce GTX285', 'Carte PCIe, 16x, 1 GB, HDMI, DVI', NULL, NULL, 45, 10),
(83, 'Radeon HD4850X2', 'Carte PCIe, 16x, 1024 MB, HDMI, 4x DVI (HDCP HDTV)', NULL, NULL, 57, 10),
(86, 'HD-697A-CNFC', 'Carte PCIe, 16x, Radeon HD6970 2048 MB, 2xDVI, HDMI, D-Port, HDCP', NULL, NULL, 69, 10),
(89, 'Sabertooth P67', 'Intel P67 Chipset, 1155Pin, DDR3-1333, SATA3, USB3 (KITS)', NULL, NULL, 8, 11),
(95, 'Sabertooth X79', 'Intel X79 Chipset, 2011Pin, DDR3-1866, SATA3, USB3 (KITS)', NULL, NULL, 8, 11),
(98, 'Sabertooth 990FX', 'AMD 990FX Chipset, AM3+, DDR3-1866, SATA3, USB3 (KITS)', NULL, NULL, 8, 11),
(103, 'KIT#1', 'Enermax Chakra (…) / Carte mère: ASUS P5E3-DLX, FSB1600, DDR3', NULL, NULL, 21, 11),
(104, 'KIT#2', 'Enermax Chakra (…) / Carte mère: ASUS P5E3-DLX, FSB1600, DDR3', NULL, NULL, 21, 11),
(105, 'KIT#3', 'Enermax Chakra (…) / Carte mère: ASUS P5E3-DLX, FSB1600, DDR3', NULL, NULL, 21, 11),
(106, 'KIT#4', 'Enermax Chakra (…) / Carte mère: ASUS P5E3-DLX, FSB1600, DDR3', NULL, NULL, 21, 11),
(107, 'KIT#5', 'Enermax Chakra (…) / Carte mère: ASUS P5E3-DLX, FSB1600, DDR3', NULL, NULL, 21, 11),
(108, 'KIT#6', 'Enermax Chakra (…) / Carte mère: ASUS P5E3-DLX, FSB1600, DDR3', NULL, NULL, 21, 11),
(109, 'KIT#7', 'Enermax Chakra (…) / Carte mère: GIGABYTE GA-790FXTA-UD5, HT 5200 MT/s, DDR3', NULL, NULL, 21, 11),
(110, 'KIT#8', 'Enermax Chakra (…) / Carte mère: GIGABYTE GA-790FXTA-UD5, HT 5200 MT/s, DDR3', NULL, NULL, 21, 11),
(111, 'KIT#9', 'Enermax Chakra (…) / Carte mère: ASUS M2N-SLI DLX, FSB1000, DDR2', NULL, NULL, 21, 11),
(112, 'KIT#10', 'Enermax Chakra (…) / Carte mère: ASUS M2N-SLI DLX, FSB1000, DDR2', NULL, NULL, 21, 11),
(113, 'KIT#11', 'Enermax Chakra (…) / Carte mère: GIGABYTE GA-P55A-UD6, QPI 6400 MT/s, DDR3', NULL, NULL, 21, 11),
(114, 'KIT#12', 'Enermax Chakra (…) / Carte mère: GIGABYTE GA-P55A-UD6, QPI 6400 MT/s, DDR3', NULL, NULL, 21, 11),
(115, 'KIT#13', 'Enermax Chakra (…) / Carte mère: ASROCK 4Core1600Twins-P35, DDR2/3', NULL, NULL, 21, 11),
(116, 'KIT#14', 'Enermax Chakra (…) / Carte mère: ASROCK 4Core1600Twins-P35, DDR2/3', NULL, NULL, 21, 11),
(117, 'KIT#15', 'Enermax Chakra (…) / Carte mère: ASROCK 4Core1600Twins-P35, DDR2/3', NULL, NULL, 21, 11),
(118, 'KIT#16', 'Enermax Chakra (…) / Carte mère: ASROCK 4Core1600Twins-P35, DDR2/3', NULL, NULL, 21, 11),
(119, 'KIT#17', 'Enermax Chakra (…) / Carte mère: ASROCK X58 SuperComputer, QPI, DDR3', NULL, NULL, 21, 11),
(120, 'KIT#18', 'Enermax Chakra (…) / Carte mère: ASROCK X58 SuperComputer, QPI, DDR3', NULL, NULL, 21, 11),
(121, 'KIT#19', 'Enermax Chakra (…) / Carte mère: ASROCK X58 SuperComputer, QPI, DDR3', NULL, NULL, 21, 11),
(122, 'KIT#20', 'Enermax Chakra (…) / Carte mère: ASROCK X58 SuperComputer, QPI, DDR3', NULL, NULL, 21, 11),
(123, 'KIT#21', 'Enermax Chakra (…) / Carte mère: ASROCK X58 SuperComputer, QPI, DDR3', NULL, NULL, 21, 11),
(124, 'RAID 6805E', 'PCIE-Card x4, 8x SAS/SATA3 6Gbit/s', NULL, NULL, 2, 12),
(125, 'RAID 6405E', 'PCIE-Card x4, 4x SAS/SATA3 6Gbit/s', NULL, NULL, 2, 12),
(127, 'RevoDrive X2', 'Carte PCIe, SSD, 4 x 25 GB RAID 0 interne, PCIe 4x, MLC NAND ', NULL, NULL, 44, 12),
(130, 'FastTrak 100 TX2', 'Carte PCI, contrôleur RAID IDE, 100 MB/s, 2 ports, avec accessoires', NULL, NULL, 53, 12),
(131, 'FastTrak TX2000', 'Carte PCI, contrôleur RAID IDE, 100 MB/s, 2 ports, avec accessoires', NULL, NULL, 53, 12),
(132, 'Ultra133 TX2', 'Carte PCI, contrôleur RAID IDE, 133 MB/s, 2 ports,  avec accessoires', NULL, NULL, 53, 12),
(133, 'FastTrak S150 TX4', 'Carte PCI, contrôleur RAID SATA, 150 MB/s, 4 ports,  avec accessoires', NULL, NULL, 53, 12),
(135, '3C905CX-TXM', 'Carte PCI, Ethernet 10/100, RJ45', NULL, NULL, 1, 13),
(136, '3C2000-T', 'Carte PCI, Ethernet 10/100/100, RJ45', NULL, NULL, 1, 13),
(139, 'PRO/100 S', 'Carte PCI, Ethernet 10/100, RJ45', NULL, NULL, 31, 13),
(140, 'ICC-IO-41-P', 'Carte PCI, Ethernet 10/100, RJ45', NULL, NULL, 32, 13),
(145, '9432TX', 'Carte PCI, Ethernet 10/100, RJ45', NULL, NULL, 60, 13),
(147, 'AUA-3100LP/EFIGS', 'Carte PCI, pour extension de 3 ports USB2', NULL, NULL, 2, 14),
(149, 'USB2 Host Adapter', 'Carte PCI, pour extension de 5 ports USB2', NULL, NULL, 18, 14),
(151, 'DC USB2/3-1394/3', 'Carte PCI, pour extension de 3 ports USB2 & 3 ports Firewire 400', NULL, NULL, 43, 14),
(153, 'LTD-163', 'Lecteur de DVD 8x et CD 52x, IDE', NULL, NULL, 38, 15),
(154, 'LTR-52327S', 'Graveur de CD 52x32x52x, IDE', NULL, NULL, 38, 15),
(155, 'DVD-305S', 'Lecteur DVD 10x, Ultra SCSI', NULL, NULL, 49, 15),
(156, 'PX-W4012TA', 'Graveur de CD 40x12x40x, IDE', NULL, NULL, 50, 15),
(157, 'XM6201B', 'Lecteur CD 40x, Ultra SCSI', NULL, NULL, 65, 15),
(158, 'CDRW241040Plus', 'Graveur de CD 24x10x40x, IDE', NULL, NULL, 66, 15),
(159, 'EX-43092', 'Carte PCI vers 2 ports RS-232', NULL, NULL, 23, 16),
(160, 'DDYS-9/LVD', 'Disque dur, Ultrastar, 9 GB, 10 krpm, Ultra160, avec câbles et ventilateur', NULL, NULL, 27, 17),
(161, '73LZX/LVD', 'Disque dur, Ultrastar, 18 GB, 10 krpm, Ultra160, avec câbles et ventilateur', NULL, NULL, 27, 17),
(162, '146Z10', 'Disque dur, Ultrastar, 36 GB, 10 krpm, Ultra320, avec câbles', NULL, NULL, 27, 17),
(164, 'SpinPoint SP1213C', 'HDD, 120 GB, 8MB Cache, 7200 rpm, SATA, 150 MB/s', NULL, NULL, 56, 17),
(170, 'Extreme X32', 'SSD, 32 GB, SATA2, 240 MB/S R, 170 MB/s W, avec support 3.5"', NULL, NULL, 15, 17),
(179, 'Force Series 3', 'SSD, 120 GB, SATA3, 550 MB/S R, 510 MB/s W, avec support 3.5"', NULL, NULL, 15, 17),
(185, 'RevoDrive3', 'SSD, PCIe x4, 120 GB RAID 0, MLC NAND, 2xSandForce SF-2281', NULL, NULL, 44, 17),
(188, 'WD360ADFD', 'HDD, 36 GB, 16 MB, 10000 rpm (raptor), SATA 150 MB/s', NULL, NULL, 68, 17),
(192, 'WD4500HLHX', 'HDD, 450 GB, 32 MB, 10000 rpm (velociraptor), SATA3 600 MB/s', NULL, NULL, 68, 17),
(201, 'Caviar Green', 'HDD, 500 GB, 32 MB, 5400 rpm, SATA2 300 MB/s', NULL, NULL, 68, 17),
(207, 'UNB PC2-5300 CL5', 'DDR2 SDRAM, 667 MHz, 1GB', NULL, NULL, 5, 18),
(211, 'CM72SD512RLP/S', 'DDR SDRAM, 400 MHz, 512MB, ECC', NULL, NULL, 15, 18),
(213, 'TR3X3G1600C9', 'DDR3 SDRAM, 1600 MHz, 1 GB (Kit de 3 divisé par 3)', NULL, NULL, 15, 18),
(228, 'KVR266X6C25/256', 'DDR SDRAM, 266 MHz, 256MB', NULL, NULL, 34, 18),
(229, 'KVR266X6C25/256', 'DDR SDRAM, 266 MHz, 256MB', NULL, NULL, 34, 18),
(232, 'KVR1066D3N7/1G', 'DDR3 SDRAM, 1066 MHz, 1 GB', NULL, NULL, 34, 18),
(242, 'KHX8500D2K2/2G', 'DDR2 SDRAM, 1066 MHz, 1 GB (Kit de 2 divisé par 2)', NULL, NULL, 34, 18),
(250, 'KHX2000C9D3K3/3GX', 'DDR3 SDRAM, 2000 MHz, 1 GB (Kit de 3 divisé par 3)', NULL, NULL, 34, 18),
(262, 'Division2 ViperExtreme', 'DDR3 1866MHz 4GB (2x2GB)', NULL, NULL, 47, 18),
(266, 'Sector5', 'DDR3 1600MHz 4GB (2x2GB)', NULL, NULL, 47, 18),
(274, 'MEAB-223HA', 'DDR2 SDRAM, 533 MHz, 256MB', NULL, NULL, 51, 18),
(278, 'Phenom II X4 965', 'CPU, Quad Core, 3.4 GHz, soAM3, 4 x 512kB cache', NULL, NULL, 4, 19),
(280, 'Phenom II X6 1055T', 'CPU, Six Core, 2.8 GHz, soAM3, 6 x 512kB cache', NULL, NULL, 4, 19),
(282, 'FX-8150', 'CPU, Octa Core, CPU 3.60 GHz, soAM3+, 4000MT/s, 8MB L3', NULL, NULL, 4, 19),
(287, 'i7-920', 'CPU, Quad Core, 2.66 GHz, so1366, QPI 4800 MT/s, 8MB L3', NULL, NULL, 31, 19),
(290, 'i7-940', 'CPU, Quad Core, 2.93 GHz, so1366, QPI 4800 MT/s, 8MB L3', NULL, NULL, 31, 19),
(292, 'i7-950', 'CPU, Quad Core 3.06 GHz, so1366, QPI 4800 MT/s, 8MB L3', NULL, NULL, 31, 19),
(295, 'i5-680', 'CPU, Dual Core, 3.6 GHz, so1156, DMI 2.5 GT/s, 4MB L3', NULL, NULL, 31, 19),
(297, 'i7-860', 'CPU, Quad Core, 2.8 GHz, so1156, QPI 4800 MT/s, 8MB L3', NULL, NULL, 31, 19),
(299, 'i7-3930K', 'CPU, Hexa Core, CPU 3.20 GHz, so2011, DMI 5.0 GT/s, 12MB L3', NULL, NULL, 31, 19),
(302, 'i5-2320', 'CPU, Quad Core, CPU 3.00GHz, so10155, DMI 5.0 GT/s, 6MB L3', NULL, NULL, 31, 19),
(308, 'Hyper 412S', 'Refroidisseur CPU, AM2,AM3, AM3+, 775, 1155, 1156, 1366, 2011', NULL, NULL, 14, 20),
(322, 'Boxed P4B', 'Refroidisseur CPU, so478, up to P4E 3.2 GHz', NULL, NULL, 31, 20),
(332, 'V1 / CL-P0548', 'Refroidisseur CPU, soAM2-so775-so939-so1366', NULL, NULL, 64, 20),
(337, 'CNPS59900A LED', 'Refroidisseur CPU, soAM2-soAM2+-soAM3-so775-so1156-so1366', NULL, NULL, 70, 20),
(347, 'SA-6120', 'Système de surveillance vidéo', NULL, NULL, 55, 21),
(348, 'DCR-TRV130E', 'Camescope numérique DV-8', NULL, NULL, 62, 21),
(349, '9797', 'Kit robotique LEGO Mindstorm, avec livre Microsoft Robotics Studio\net avec dongle D-Link USB2 <-> Bluetooth', NULL, NULL, 36, 22),
(350, 'DVD200e', 'Lecteur/graveur de DVD+R/RW - USB2', NULL, NULL, 28, 23),
(351, 'SureStoreR8210e', 'Lecteur/graveur de CD-R/RW - USB', NULL, NULL, 28, 23),
(352, 'PX-708UF', 'Lecteur/graveur de DVD±R/RW - USB2 & FireWire', NULL, NULL, 50, 23),
(353, 'Rugged 250', 'HDD externe de 2.5 pouces, USB2-FW4-FW8, 250 GB avec sacoche', NULL, NULL, 35, 17),
(400, 'Rugged 320', 'HDD externe de 2.5 pouces, USB2-FW4-FW8, 320 GB avec sacoche', NULL, NULL, 35, 17),
(404, 'MyBook Studio', 'HDD externe de 3,5 pouces, USB2 - FW4 - FW8, 2To avec câbles', NULL, NULL, 68, 17),
(410, 'MyPasseport 0730', 'HDD externe 2,5 pouces, USB2&USB3, 320 GB avec câble et housse', NULL, NULL, 68, 17),
(415, 'A250CP', 'Disque dur externe de 80 GB, USB 2.0 & IEEE1394', NULL, NULL, 3, 24),
(416, 'BL2400PT', 'Ecran LED 24" , 1920x1080, Pitch 0.276 mm, D-sub, DVI-D, D-Port', NULL, NULL, 11, 25),
(417, 'Z-4', 'Haut-parleur de 40W en configuration 2.1', NULL, NULL, 39, 26),
(419, 'Flash Card Reader', 'Lecteur de carte mémoire 6 en 1 - USB', NULL, NULL, 7, 27),
(420, 'Floppy & 7-in-1 ', 'Lecteur Floppy et carte mémoire - USB', NULL, NULL, 33, 28),
(423, 'zip 100', 'Lecteur zip pour disquette de 100MB - //', NULL, NULL, 33, 28),
(424, 'zip mobility kit', 'Lecteur zip pour disquette de 250MB - USB', NULL, NULL, 33, 28),
(425, 'zip 750', 'Lecteur zip pour disquette de 750 MB - USB2', NULL, NULL, 33, 28),
(426, 'ORB Drive', 'Lecteur de disque amovible ORD de 2.2 GB - USB', NULL, NULL, 12, 29),
(427, 'SPD10-160', 'ShareDisk NDAS 160 GB, 7200 rpm, Ethernet & USB', NULL, NULL, 16, 29),
(428, 'SureStore 5000', 'Lecteur de bande DDS de 8GB - SCSI2 (adaptateur ISA inclus)', NULL, NULL, 28, 29),
(429, 'LKM-F934-1', 'Lecteur Floppy et SuperDisk LS120, avec câbles et 4 SuperDisk', NULL, NULL, 46, 29),
(430, 'SFD-321B', 'Lecteur Floppy, avec accessoires', NULL, NULL, 56, 29),
(431, 'TEW-411BRP+', 'Access Point, 802.11 b/g, 125 Mb/s, avec accessoires', NULL, NULL, 67, 30),
(433, 'AVM', 'Dongle Bluetooth & USB', NULL, NULL, 24, 31),
(437, 'MicroLink Starter Kit', 'Adaptateur Ethernet-Secteur, RJ45 ou USB, 11Mb/s, avec câbles, etc.', NULL, NULL, 19, 32),
(439, 'FH-301', 'Hub Firewire 3 ports avec câble', NULL, NULL, 9, 33),
(441, 'Catalyst 1900', 'Switch Ethernet 1U, 14 ports RJ45, 12 x 10BaseT, 2 x 100BaseTX', NULL, NULL, 13, 33),
(444, 'Catalyst 2950', 'Switch Ethernet 1U, 12 ports RJ45, 12 x 100BaseTX', NULL, NULL, 13, 33),
(445, 'EFAH08W', 'Switch Ethernet 10/100, 8 ports RJ45, avec alimentation', NULL, NULL, 40, 33),
(446, 'SP608E', 'Switch Ethernet 10/100, 8 ports RJ45, avec cordon d\'alimentation', NULL, NULL, 42, 33),
(447, 'SBA-SS4008B', 'HUB Ethernet 10/100, 8 ports RJ45, avec alimentation', NULL, NULL, 61, 33),
(448, 'TE100-DX8E+', 'HUB Ethernet 10/100, 8 ports RJ45, avec alimentation', NULL, NULL, 67, 33),
(449, 'BlueFritz AVM', 'Modem ISDN Bluetooth & USB, avec câbles et logiciels', NULL, 'Hello, c\'est un test', 24, 34),
(450, 'TEW-303PI', 'Carte PCI, 802.11 b, 22 Mb/s, avec accessoires', NULL, NULL, 67, 35),
(453, 'TEW-310APB', 'Access Point, 802.11 b, 22 Mb/s, avec accessoires', NULL, NULL, 67, 35),
(454, 'TEW-403PI+', 'Carte PCI, 802.11 b/g, 125 Mb/s, avec accessoires', NULL, NULL, 67, 35),
(458, 'Optimus 2X P990', 'Smartphone sous Android 2.2 (carte SIM et MicroSD exclu)', NULL, NULL, 37, 36),
(460, 'HD7 8Gb', 'Smartphone sous windows 7 (carte SIM et MicroSD exclu)', NULL, NULL, 29, 37),
(462, 'omni.net USB', 'Modem ISDN 2 canaux - USB', NULL, NULL, 71, 38),
(463, 'Prestige 630', 'Modem ADSL - USB', NULL, NULL, 71, 38);

-- --------------------------------------------------------

--
-- Structure de la table `t_rooms`
--

CREATE TABLE `t_rooms` (
  `id_room` int(11) NOT NULL,
  `room_name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `t_rooms`
--

INSERT INTO `t_rooms` (`id_room`, `room_name`) VALUES
(1, 'N501'),
(2, 'N502'),
(3, 'N503'),
(4, 'N504'),
(5, 'N505'),
(6, 'N506'),
(7, 'N507'),
(8, 'N508'),
(9, 'N508A'),
(10, 'N508B'),
(11, 'N508AB'),
(12, 'N509'),
(13, 'N510A'),
(14, 'N510B'),
(15, 'N511'),
(16, 'N512A'),
(17, 'N512B'),
(18, 'N517'),
(19, 'N550');

-- --------------------------------------------------------

--
-- Structure de la table `t_users`
--

CREATE TABLE `t_users` (
  `id_user` varchar(15) NOT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_firstname` varchar(50) DEFAULT NULL,
  `user_group` tinyint(1) NOT NULL DEFAULT '0',
  `user_actif` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `t_users`
--

INSERT INTO `t_users` (`id_user`, `user_name`, `user_firstname`, `user_group`, `user_actif`) VALUES
('alagarraux', 'Garraux', 'Alain', 0, 1),
('alagirardet', 'Girardet', 'Alain', 0, 1),
('antmveng', 'Mveng', 'Antoine', 0, 1),
('aurcurchod', 'Curchod', 'Aurélie', 0, 1),
('bersahli', 'Sahli', 'Bertrand', 1, 1),
('cinhardegger', 'Hardegger', 'Cindy', 0, 1),
('cyrsokoloff', 'Sokoloff', 'Cyril', 0, 1),
('dimlymberis', 'Lymberis', 'Dimitrios', 1, 1),
('gilgruaz', 'Gruaz', 'Gilbert', 0, 1),
('isastucki', 'Stucki', 'Isabelle', 0, 1),
('jongander', 'Gander', 'Jonathan', 0, 1),
('jonmelly', 'Melly', 'Jonathan', 0, 1),
('karbourahla', 'Bourahla', 'Karim', 0, 1),
('laudeschamps', 'Deschamps', 'Laurent', 0, 1),
('laududing', 'Dudding', 'Laurent', 0, 1),
('micdelgado', 'Delgado', 'Michel', 0, 1),
('pa32pnx', 'Helder', 'Manuel Costa Lopes', 0, 1),
('patchenaux', 'Chenaux', 'Patrick', 0, 1),
('patollivier', 'Ollivier', 'Patrick', 0, 1),
('py78ibk', 'Fortuna', 'André', 0, 1),
('robferrari', 'Ferrari', 'Roberto', 0, 1),
('sheoliveira', 'Oliveira Kobi', 'Sheyla', 0, 1);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `v_art_all`
--
CREATE TABLE `v_art_all` (
`id_arti` int(11)
,`kind_name` varchar(30)
,`cate_name` varchar(30)
,`make_name` varchar(30)
,`prod_name` varchar(40)
,`prod_description` text
,`borr_owner` varchar(15)
,`borr_forwho` varchar(20)
,`user_name` varchar(50)
,`user_firstname` varchar(50)
,`ches_name` varchar(15)
,`room_name` varchar(15)
,`arti_purchase_date` date
,`arti_price` decimal(10,0)
,`arti_note` text
,`prod_picture` varchar(50)
,`prod_note` text
,`make_picture` varchar(30)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `v_art_all_details`
--
CREATE TABLE `v_art_all_details` (
`id_arti` int(11)
,`arti_label` varchar(20)
,`arti_purchase_date` date
,`arti_price` decimal(10,0)
,`arti_note` text
,`prod_name` varchar(40)
,`prod_description` text
,`prod_picture` varchar(50)
,`prod_note` text
,`id_make` int(11)
,`make_name` varchar(30)
,`make_picture` varchar(30)
,`id_cate` int(11)
,`cate_name` varchar(30)
,`id_kind` int(11)
,`kind_name` varchar(30)
,`ches_name` varchar(15)
,`id_room` int(11)
,`room_name` varchar(15)
,`id_prod` int(11)
,`id_ches` int(11)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `v_art_borrow`
--
CREATE TABLE `v_art_borrow` (
`id_borr` int(11)
,`borr_owner` varchar(15)
,`borr_forwho` varchar(20)
,`borr_returned_date` date
,`id_arti` int(11)
,`fk_arti` int(11)
,`user_name` varchar(50)
,`user_firstname` varchar(50)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `v_art_borrow_details`
--
CREATE TABLE `v_art_borrow_details` (
`id_borr` int(11)
,`id_kind` int(11)
,`kind_name` varchar(30)
,`id_cate` int(11)
,`cate_name` varchar(30)
,`id_prod` int(11)
,`prod_name` varchar(40)
,`borr_owner` varchar(15)
,`user_name` varchar(50)
,`user_firstname` varchar(50)
,`borr_forwho` varchar(20)
,`borr_taken_date` date
,`id_arti` int(11)
,`fk_arti` int(11)
,`arti_label` varchar(20)
,`borr_location` varchar(20)
,`ches_name` varchar(15)
,`room_name` varchar(15)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `v_cat_details`
--
CREATE TABLE `v_cat_details` (
`kind_name` varchar(30)
,`cate_name` varchar(30)
,`id_cate` int(11)
,`id_kind` int(11)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `v_prod_details`
--
CREATE TABLE `v_prod_details` (
`id_prod` int(11)
,`prod_name` varchar(40)
,`prod_description` text
,`prod_picture` varchar(50)
,`prod_note` text
,`make_name` varchar(30)
,`make_picture` varchar(30)
,`cate_name` varchar(30)
,`kind_name` varchar(30)
);

-- --------------------------------------------------------

--
-- Structure de la vue `v_art_all`
--
DROP TABLE IF EXISTS `v_art_all`;

CREATE   VIEW `v_art_all`  AS  select `v_art_borrow`.`id_arti` AS `id_arti`,`t_kinds`.`kind_name` AS `kind_name`,`t_categories`.`cate_name` AS `cate_name`,`t_makers`.`make_name` AS `make_name`,`t_products`.`prod_name` AS `prod_name`,`t_products`.`prod_description` AS `prod_description`,`v_art_borrow`.`borr_owner` AS `borr_owner`,`v_art_borrow`.`borr_forwho` AS `borr_forwho`,`v_art_borrow`.`user_name` AS `user_name`,`v_art_borrow`.`user_firstname` AS `user_firstname`,`t_chests`.`ches_name` AS `ches_name`,`t_rooms`.`room_name` AS `room_name`,`t_articles`.`arti_purchase_date` AS `arti_purchase_date`,`t_articles`.`arti_price` AS `arti_price`,`t_articles`.`arti_note` AS `arti_note`,`t_products`.`prod_picture` AS `prod_picture`,`t_products`.`prod_note` AS `prod_note`,`t_makers`.`make_picture` AS `make_picture` from (((((((`t_articles` left join `v_art_borrow` on((`t_articles`.`id_arti` = `v_art_borrow`.`id_arti`))) join `t_products` on((`t_articles`.`fk_product` = `t_products`.`id_prod`))) join `t_categories` on((`t_products`.`fk_category` = `t_categories`.`id_cate`))) left join `t_kinds` on((`t_categories`.`fk_kind` = `t_kinds`.`id_kind`))) join `t_chests` on((`t_articles`.`fk_chest` = `t_chests`.`id_ches`))) join `t_rooms` on((`t_chests`.`fk_room` = `t_rooms`.`id_room`))) join `t_makers` on((`t_products`.`fk_maker` = `t_makers`.`id_make`))) ;

-- --------------------------------------------------------

--
-- Structure de la vue `v_art_all_details`
--
DROP TABLE IF EXISTS `v_art_all_details`;

CREATE   VIEW `v_art_all_details`  AS  (select `t_articles`.`id_arti` AS `id_arti`,`t_articles`.`arti_label` AS `arti_label`,`t_articles`.`arti_purchase_date` AS `arti_purchase_date`,`t_articles`.`arti_price` AS `arti_price`,`t_articles`.`arti_note` AS `arti_note`,`t_products`.`prod_name` AS `prod_name`,`t_products`.`prod_description` AS `prod_description`,`t_products`.`prod_picture` AS `prod_picture`,`t_products`.`prod_note` AS `prod_note`,`t_makers`.`id_make` AS `id_make`,`t_makers`.`make_name` AS `make_name`,`t_makers`.`make_picture` AS `make_picture`,`t_categories`.`id_cate` AS `id_cate`,`t_categories`.`cate_name` AS `cate_name`,`t_kinds`.`id_kind` AS `id_kind`,`t_kinds`.`kind_name` AS `kind_name`,`t_chests`.`ches_name` AS `ches_name`,`t_rooms`.`id_room` AS `id_room`,`t_rooms`.`room_name` AS `room_name`,`t_products`.`id_prod` AS `id_prod`,`t_chests`.`id_ches` AS `id_ches` from (((((`t_chests` join (`t_products` join `t_articles` on((`t_products`.`id_prod` = `t_articles`.`fk_product`))) on((`t_chests`.`id_ches` = `t_articles`.`fk_chest`))) join `t_categories` on((`t_products`.`fk_category` = `t_categories`.`id_cate`))) left join `t_kinds` on((`t_categories`.`fk_kind` = `t_kinds`.`id_kind`))) join `t_makers` on((`t_products`.`fk_maker` = `t_makers`.`id_make`))) join `t_rooms` on((`t_chests`.`fk_room` = `t_rooms`.`id_room`)))) ;

-- --------------------------------------------------------

--
-- Structure de la vue `v_art_borrow`
--
DROP TABLE IF EXISTS `v_art_borrow`;

CREATE   VIEW `v_art_borrow`  AS  select `t_borrows`.`id_borr` AS `id_borr`,`t_borrows`.`borr_owner` AS `borr_owner`,`t_borrows`.`borr_forwho` AS `borr_forwho`,`t_borrows`.`borr_returned_date` AS `borr_returned_date`,`t_articles`.`id_arti` AS `id_arti`,`t_borrows`.`fk_article` AS `fk_arti`,`t_users`.`user_name` AS `user_name`,`t_users`.`user_firstname` AS `user_firstname` from ((`t_borrows` join `t_articles` on((`t_borrows`.`fk_article` = `t_articles`.`id_arti`))) join `t_users` on((`t_borrows`.`borr_owner` = `t_users`.`id_user`))) where isnull(`t_borrows`.`borr_returned_date`) ;

-- --------------------------------------------------------

--
-- Structure de la vue `v_art_borrow_details`
--
DROP TABLE IF EXISTS `v_art_borrow_details`;

CREATE   VIEW `v_art_borrow_details`  AS  select `v_art_borrow`.`id_borr` AS `id_borr`,`t_kinds`.`id_kind` AS `id_kind`,`t_kinds`.`kind_name` AS `kind_name`,`t_categories`.`id_cate` AS `id_cate`,`t_categories`.`cate_name` AS `cate_name`,`t_products`.`id_prod` AS `id_prod`,`t_products`.`prod_name` AS `prod_name`,`v_art_borrow`.`borr_owner` AS `borr_owner`,`t_users`.`user_name` AS `user_name`,`t_users`.`user_firstname` AS `user_firstname`,`t_borrows`.`borr_forwho` AS `borr_forwho`,`t_borrows`.`borr_taken_date` AS `borr_taken_date`,`t_articles`.`id_arti` AS `id_arti`,`v_art_borrow`.`id_arti` AS `fk_arti`,`t_articles`.`arti_label` AS `arti_label`,`t_borrows`.`borr_location` AS `borr_location`,`t_chests`.`ches_name` AS `ches_name`,`t_rooms`.`room_name` AS `room_name` from ((((((((`v_art_borrow` join `t_borrows` on((`v_art_borrow`.`id_borr` = `t_borrows`.`id_borr`))) join `t_articles` on((`v_art_borrow`.`id_arti` = `t_articles`.`id_arti`))) join `t_products` on((`t_articles`.`fk_product` = `t_products`.`id_prod`))) join `t_categories` on((`t_products`.`fk_category` = `t_categories`.`id_cate`))) join `t_kinds` on((`t_categories`.`fk_kind` = `t_kinds`.`id_kind`))) join `t_users` on((`v_art_borrow`.`borr_owner` = `t_users`.`id_user`))) join `t_chests` on((`t_articles`.`fk_chest` = `t_chests`.`id_ches`))) join `t_rooms` on((`t_chests`.`fk_room` = `t_rooms`.`id_room`))) order by `t_kinds`.`kind_name`,`t_categories`.`cate_name`,`t_products`.`prod_name`,`t_borrows`.`borr_taken_date` ;

-- --------------------------------------------------------

--
-- Structure de la vue `v_cat_details`
--
DROP TABLE IF EXISTS `v_cat_details`;

CREATE   VIEW `v_cat_details`  AS  select `t_kinds`.`kind_name` AS `kind_name`,`t_categories`.`cate_name` AS `cate_name`,`t_categories`.`id_cate` AS `id_cate`,`t_kinds`.`id_kind` AS `id_kind` from (`t_kinds` join `t_categories` on((`t_categories`.`fk_kind` = `t_kinds`.`id_kind`))) order by `t_kinds`.`kind_name`,`t_categories`.`cate_name` ;

-- --------------------------------------------------------

--
-- Structure de la vue `v_prod_details`
--
DROP TABLE IF EXISTS `v_prod_details`;

CREATE   VIEW `v_prod_details`  AS  select `t_products`.`id_prod` AS `id_prod`,`t_products`.`prod_name` AS `prod_name`,`t_products`.`prod_description` AS `prod_description`,`t_products`.`prod_picture` AS `prod_picture`,`t_products`.`prod_note` AS `prod_note`,`t_makers`.`make_name` AS `make_name`,`t_makers`.`make_picture` AS `make_picture`,`t_categories`.`cate_name` AS `cate_name`,`t_kinds`.`kind_name` AS `kind_name` from (((`t_products` join `t_makers` on((`t_products`.`fk_maker` = `t_makers`.`id_make`))) join `t_categories` on((`t_products`.`fk_category` = `t_categories`.`id_cate`))) join `t_kinds` on((`t_categories`.`fk_kind` = `t_kinds`.`id_kind`))) ;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `t_articles`
--
ALTER TABLE `t_articles`
  ADD PRIMARY KEY (`id_arti`),
  ADD UNIQUE KEY `label` (`arti_label`),
  ADD KEY `rel_article_chest` (`fk_chest`),
  ADD KEY `rel_article_product` (`fk_product`);

--
-- Index pour la table `t_borrows`
--
ALTER TABLE `t_borrows`
  ADD PRIMARY KEY (`id_borr`),
  ADD KEY `rel_borrow_article` (`fk_article`),
  ADD KEY `borr_owner` (`borr_owner`),
  ADD KEY `borr_forwho` (`borr_forwho`),
  ADD KEY `borr_returned_visa` (`borr_returned_visa`);

--
-- Index pour la table `t_categories`
--
ALTER TABLE `t_categories`
  ADD PRIMARY KEY (`id_cate`),
  ADD KEY `rel_category_type` (`fk_kind`);

--
-- Index pour la table `t_chests`
--
ALTER TABLE `t_chests`
  ADD PRIMARY KEY (`id_ches`),
  ADD KEY `rel_chest_room` (`fk_room`);

--
-- Index pour la table `t_kinds`
--
ALTER TABLE `t_kinds`
  ADD PRIMARY KEY (`id_kind`);

--
-- Index pour la table `t_makers`
--
ALTER TABLE `t_makers`
  ADD PRIMARY KEY (`id_make`);

--
-- Index pour la table `t_notes`
--
ALTER TABLE `t_notes`
  ADD PRIMARY KEY (`id_note`),
  ADD KEY `rel_note_borrow` (`fk_borrow`);

--
-- Index pour la table `t_products`
--
ALTER TABLE `t_products`
  ADD PRIMARY KEY (`id_prod`),
  ADD KEY `fk_maker` (`fk_maker`),
  ADD KEY `fk_category` (`fk_category`);

--
-- Index pour la table `t_rooms`
--
ALTER TABLE `t_rooms`
  ADD PRIMARY KEY (`id_room`);

--
-- Index pour la table `t_users`
--
ALTER TABLE `t_users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `t_articles`
--
ALTER TABLE `t_articles`
  MODIFY `id_arti` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=464;
--
-- AUTO_INCREMENT pour la table `t_borrows`
--
ALTER TABLE `t_borrows`
  MODIFY `id_borr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT pour la table `t_categories`
--
ALTER TABLE `t_categories`
  MODIFY `id_cate` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT pour la table `t_chests`
--
ALTER TABLE `t_chests`
  MODIFY `id_ches` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `t_kinds`
--
ALTER TABLE `t_kinds`
  MODIFY `id_kind` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `t_makers`
--
ALTER TABLE `t_makers`
  MODIFY `id_make` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;
--
-- AUTO_INCREMENT pour la table `t_notes`
--
ALTER TABLE `t_notes`
  MODIFY `id_note` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `t_products`
--
ALTER TABLE `t_products`
  MODIFY `id_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=464;
--
-- AUTO_INCREMENT pour la table `t_rooms`
--
ALTER TABLE `t_rooms`
  MODIFY `id_room` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `t_articles`
--
ALTER TABLE `t_articles`
  ADD CONSTRAINT `rel_article_chest` FOREIGN KEY (`fk_chest`) REFERENCES `t_chests` (`id_ches`),
  ADD CONSTRAINT `rel_article_product` FOREIGN KEY (`fk_product`) REFERENCES `t_products` (`id_prod`);

--
-- Contraintes pour la table `t_borrows`
--
ALTER TABLE `t_borrows`
  ADD CONSTRAINT `re_borrow_user_2` FOREIGN KEY (`borr_returned_visa`) REFERENCES `t_users` (`id_user`) ON UPDATE CASCADE,
  ADD CONSTRAINT `rel_borrow_article` FOREIGN KEY (`fk_article`) REFERENCES `t_articles` (`id_arti`),
  ADD CONSTRAINT `rel_borrow_user` FOREIGN KEY (`borr_owner`) REFERENCES `t_users` (`id_user`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `t_categories`
--
ALTER TABLE `t_categories`
  ADD CONSTRAINT `t_categories_kinds` FOREIGN KEY (`fk_kind`) REFERENCES `t_kinds` (`id_kind`);

--
-- Contraintes pour la table `t_chests`
--
ALTER TABLE `t_chests`
  ADD CONSTRAINT `t_chests_rooms` FOREIGN KEY (`fk_room`) REFERENCES `t_rooms` (`id_room`);

--
-- Contraintes pour la table `t_notes`
--
ALTER TABLE `t_notes`
  ADD CONSTRAINT `rel_note_borrow` FOREIGN KEY (`fk_borrow`) REFERENCES `t_borrows` (`id_borr`);

--
-- Contraintes pour la table `t_products`
--
ALTER TABLE `t_products`
  ADD CONSTRAINT `t_products_categories` FOREIGN KEY (`fk_category`) REFERENCES `t_categories` (`id_cate`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `t_products_makers` FOREIGN KEY (`fk_maker`) REFERENCES `t_makers` (`id_make`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
