-- --------------------------------------------------------
-- Host:                         192.168.17.129
-- Server version:               5.5.23 - MySQL Community Server (GPL)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for shopping_cart
CREATE DATABASE IF NOT EXISTS `shopping_cart` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `shopping_cart`;

-- Dumping structure for table shopping_cart.country
CREATE TABLE IF NOT EXISTS `country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=248 DEFAULT CHARSET=utf8;

-- Dumping data for table shopping_cart.country: ~246 rows (approximately)
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` (`id`, `name`, `code`) VALUES
	(2, 'AF', 'Afghanistan'),
	(3, 'AL', 'Albania'),
	(4, 'DZ', 'Algeria'),
	(5, 'DS', 'American Samoa'),
	(6, 'AD', 'Andorra'),
	(7, 'AO', 'Angola'),
	(8, 'AI', 'Anguilla'),
	(9, 'AQ', 'Antarctica'),
	(10, 'AG', 'Antigua and Barbuda'),
	(11, 'AR', 'Argentina'),
	(12, 'AM', 'Armenia'),
	(13, 'AW', 'Aruba'),
	(14, 'AU', 'Australia'),
	(15, 'AT', 'Austria'),
	(16, 'AZ', 'Azerbaijan'),
	(17, 'BS', 'Bahamas'),
	(18, 'BH', 'Bahrain'),
	(19, 'BD', 'Bangladesh'),
	(20, 'BB', 'Barbados'),
	(21, 'BY', 'Belarus'),
	(22, 'BE', 'Belgium'),
	(23, 'BZ', 'Belize'),
	(24, 'BJ', 'Benin'),
	(25, 'BM', 'Bermuda'),
	(26, 'BT', 'Bhutan'),
	(27, 'BO', 'Bolivia'),
	(28, 'BA', 'Bosnia and Herzegovina'),
	(29, 'BW', 'Botswana'),
	(30, 'BV', 'Bouvet Island'),
	(31, 'BR', 'Brazil'),
	(32, 'IO', 'British Indian Ocean Territory'),
	(33, 'BN', 'Brunei Darussalam'),
	(34, 'BG', 'Bulgaria'),
	(35, 'BF', 'Burkina Faso'),
	(36, 'BI', 'Burundi'),
	(37, 'KH', 'Cambodia'),
	(38, 'CM', 'Cameroon'),
	(39, 'CA', 'Canada'),
	(40, 'CV', 'Cape Verde'),
	(41, 'KY', 'Cayman Islands'),
	(42, 'CF', 'Central African Republic'),
	(43, 'TD', 'Chad'),
	(44, 'CL', 'Chile'),
	(45, 'CN', 'China'),
	(46, 'CX', 'Christmas Island'),
	(47, 'CC', 'Cocos (Keeling) Islands'),
	(48, 'CO', 'Colombia'),
	(49, 'KM', 'Comoros'),
	(50, 'CG', 'Congo'),
	(51, 'CK', 'Cook Islands'),
	(52, 'CR', 'Costa Rica'),
	(53, 'HR', 'Croatia (Hrvatska)'),
	(54, 'CU', 'Cuba'),
	(55, 'CY', 'Cyprus'),
	(56, 'CZ', 'Czech Republic'),
	(57, 'DK', 'Denmark'),
	(58, 'DJ', 'Djibouti'),
	(59, 'DM', 'Dominica'),
	(60, 'DO', 'Dominican Republic'),
	(61, 'TP', 'East Timor'),
	(62, 'EC', 'Ecuador'),
	(63, 'EG', 'Egypt'),
	(64, 'SV', 'El Salvador'),
	(65, 'GQ', 'Equatorial Guinea'),
	(66, 'ER', 'Eritrea'),
	(67, 'EE', 'Estonia'),
	(68, 'ET', 'Ethiopia'),
	(69, 'FK', 'Falkland Islands (Malvinas)'),
	(70, 'FO', 'Faroe Islands'),
	(71, 'FJ', 'Fiji'),
	(72, 'FI', 'Finland'),
	(73, 'FR', 'France'),
	(74, 'FX', 'France, Metropolitan'),
	(75, 'GF', 'French Guiana'),
	(76, 'PF', 'French Polynesia'),
	(77, 'TF', 'French Southern Territories'),
	(78, 'GA', 'Gabon'),
	(79, 'GM', 'Gambia'),
	(80, 'GE', 'Georgia'),
	(81, 'DE', 'Germany'),
	(82, 'GH', 'Ghana'),
	(83, 'GI', 'Gibraltar'),
	(84, 'GK', 'Guernsey'),
	(85, 'GR', 'Greece'),
	(86, 'GL', 'Greenland'),
	(87, 'GD', 'Grenada'),
	(88, 'GP', 'Guadeloupe'),
	(89, 'GU', 'Guam'),
	(90, 'GT', 'Guatemala'),
	(91, 'GN', 'Guinea'),
	(92, 'GW', 'Guinea-Bissau'),
	(93, 'GY', 'Guyana'),
	(94, 'HT', 'Haiti'),
	(95, 'HM', 'Heard and Mc Donald Islands'),
	(96, 'HN', 'Honduras'),
	(97, 'HK', 'Hong Kong'),
	(98, 'HU', 'Hungary'),
	(99, 'IS', 'Iceland'),
	(100, 'IN', 'India'),
	(101, 'IM', 'Isle of Man'),
	(102, 'ID', 'Indonesia'),
	(103, 'IR', 'Iran (Islamic Republic of)'),
	(104, 'IQ', 'Iraq'),
	(105, 'IE', 'Ireland'),
	(106, 'IL', 'Israel'),
	(107, 'IT', 'Italy'),
	(108, 'CI', 'Ivory Coast'),
	(109, 'JE', 'Jersey'),
	(110, 'JM', 'Jamaica'),
	(111, 'JP', 'Japan'),
	(112, 'JO', 'Jordan'),
	(113, 'KZ', 'Kazakhstan'),
	(114, 'KE', 'Kenya'),
	(115, 'KI', 'Kiribati'),
	(116, 'KP', 'Korea, Democratic People\'s Republic of'),
	(117, 'KR', 'Korea, Republic of'),
	(118, 'XK', 'Kosovo'),
	(119, 'KW', 'Kuwait'),
	(120, 'KG', 'Kyrgyzstan'),
	(121, 'LA', 'Lao People\'s Democratic Republic'),
	(122, 'LV', 'Latvia'),
	(123, 'LB', 'Lebanon'),
	(124, 'LS', 'Lesotho'),
	(125, 'LR', 'Liberia'),
	(126, 'LY', 'Libyan Arab Jamahiriya'),
	(127, 'LI', 'Liechtenstein'),
	(128, 'LT', 'Lithuania'),
	(129, 'LU', 'Luxembourg'),
	(130, 'MO', 'Macau'),
	(131, 'MK', 'Macedonia'),
	(132, 'MG', 'Madagascar'),
	(133, 'MW', 'Malawi'),
	(134, 'MY', 'Malaysia'),
	(135, 'MV', 'Maldives'),
	(136, 'ML', 'Mali'),
	(137, 'MT', 'Malta'),
	(138, 'MH', 'Marshall Islands'),
	(139, 'MQ', 'Martinique'),
	(140, 'MR', 'Mauritania'),
	(141, 'MU', 'Mauritius'),
	(142, 'TY', 'Mayotte'),
	(143, 'MX', 'Mexico'),
	(144, 'FM', 'Micronesia, Federated States of'),
	(145, 'MD', 'Moldova, Republic of'),
	(146, 'MC', 'Monaco'),
	(147, 'MN', 'Mongolia'),
	(148, 'ME', 'Montenegro'),
	(149, 'MS', 'Montserrat'),
	(150, 'MA', 'Morocco'),
	(151, 'MZ', 'Mozambique'),
	(152, 'MM', 'Myanmar'),
	(153, 'NA', 'Namibia'),
	(154, 'NR', 'Nauru'),
	(155, 'NP', 'Nepal'),
	(156, 'NL', 'Netherlands'),
	(157, 'AN', 'Netherlands Antilles'),
	(158, 'NC', 'New Caledonia'),
	(159, 'NZ', 'New Zealand'),
	(160, 'NI', 'Nicaragua'),
	(161, 'NE', 'Niger'),
	(162, 'NG', 'Nigeria'),
	(163, 'NU', 'Niue'),
	(164, 'NF', 'Norfolk Island'),
	(165, 'MP', 'Northern Mariana Islands'),
	(166, 'NO', 'Norway'),
	(167, 'OM', 'Oman'),
	(168, 'PK', 'Pakistan'),
	(169, 'PW', 'Palau'),
	(170, 'PS', 'Palestine'),
	(171, 'PA', 'Panama'),
	(172, 'PG', 'Papua New Guinea'),
	(173, 'PY', 'Paraguay'),
	(174, 'PE', 'Peru'),
	(175, 'PH', 'Philippines'),
	(176, 'PN', 'Pitcairn'),
	(177, 'PL', 'Poland'),
	(178, 'PT', 'Portugal'),
	(179, 'PR', 'Puerto Rico'),
	(180, 'QA', 'Qatar'),
	(181, 'RE', 'Reunion'),
	(182, 'RO', 'Romania'),
	(183, 'RU', 'Russian Federation'),
	(184, 'RW', 'Rwanda'),
	(185, 'KN', 'Saint Kitts and Nevis'),
	(186, 'LC', 'Saint Lucia'),
	(187, 'VC', 'Saint Vincent and the Grenadines'),
	(188, 'WS', 'Samoa'),
	(189, 'SM', 'San Marino'),
	(190, 'ST', 'Sao Tome and Principe'),
	(191, 'SA', 'Saudi Arabia'),
	(192, 'SN', 'Senegal'),
	(193, 'RS', 'Serbia'),
	(194, 'SC', 'Seychelles'),
	(195, 'SL', 'Sierra Leone'),
	(196, 'SG', 'Singapore'),
	(197, 'SK', 'Slovakia'),
	(198, 'SI', 'Slovenia'),
	(199, 'SB', 'Solomon Islands'),
	(200, 'SO', 'Somalia'),
	(201, 'ZA', 'South Africa'),
	(202, 'GS', 'South Georgia South Sandwich Islands'),
	(203, 'SS', 'South Sudan'),
	(204, 'ES', 'Spain'),
	(205, 'LK', 'Sri Lanka'),
	(206, 'SH', 'St. Helena'),
	(207, 'PM', 'St. Pierre and Miquelon'),
	(208, 'SD', 'Sudan'),
	(209, 'SR', 'Suriname'),
	(210, 'SJ', 'Svalbard and Jan Mayen Islands'),
	(211, 'SZ', 'Swaziland'),
	(212, 'SE', 'Sweden'),
	(213, 'CH', 'Switzerland'),
	(214, 'SY', 'Syrian Arab Republic'),
	(215, 'TW', 'Taiwan'),
	(216, 'TJ', 'Tajikistan'),
	(217, 'TZ', 'Tanzania, United Republic of'),
	(218, 'TH', 'Thailand'),
	(219, 'TG', 'Togo'),
	(220, 'TK', 'Tokelau'),
	(221, 'TO', 'Tonga'),
	(222, 'TT', 'Trinidad and Tobago'),
	(223, 'TN', 'Tunisia'),
	(224, 'TR', 'Turkey'),
	(225, 'TM', 'Turkmenistan'),
	(226, 'TC', 'Turks and Caicos Islands'),
	(227, 'TV', 'Tuvalu'),
	(228, 'UG', 'Uganda'),
	(229, 'UA', 'Ukraine'),
	(230, 'AE', 'United Arab Emirates'),
	(231, 'GB', 'United Kingdom'),
	(232, 'US', 'United States'),
	(233, 'UM', 'United States minor outlying islands'),
	(234, 'UY', 'Uruguay'),
	(235, 'UZ', 'Uzbekistan'),
	(236, 'VU', 'Vanuatu'),
	(237, 'VA', 'Vatican City State'),
	(238, 'VE', 'Venezuela'),
	(239, 'VN', 'Vietnam'),
	(240, 'VG', 'Virgin Islands (British)'),
	(241, 'VI', 'Virgin Islands (U.S.)'),
	(242, 'WF', 'Wallis and Futuna Islands'),
	(243, 'EH', 'Western Sahara'),
	(244, 'YE', 'Yemen'),
	(245, 'ZR', 'Zaire'),
	(246, 'ZM', 'Zambia'),
	(247, 'ZW', 'Zimbabwe');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;

-- Dumping structure for table shopping_cart.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `payment_type` int(11) NOT NULL DEFAULT '0',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_orders_users` (`user_id`),
  KEY `FK_orders_payment_types` (`payment_type`),
  CONSTRAINT `FK_orders_payment_types` FOREIGN KEY (`payment_type`) REFERENCES `payment_types` (`id`),
  CONSTRAINT `FK_orders_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- Dumping data for table shopping_cart.orders: ~0 rows (approximately)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- Dumping structure for table shopping_cart.order_details
CREATE TABLE IF NOT EXISTS `order_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL DEFAULT '0',
  `product_id` int(11) NOT NULL DEFAULT '0',
  `qty` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `FK_order_details_orders` (`order_id`),
  KEY `FK_order_details_products` (`product_id`),
  CONSTRAINT `FK_order_details_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_order_details_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- Dumping data for table shopping_cart.order_details: ~0 rows (approximately)
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;

-- Dumping structure for table shopping_cart.payment_types
CREATE TABLE IF NOT EXISTS `payment_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table shopping_cart.payment_types: ~3 rows (approximately)
/*!40000 ALTER TABLE `payment_types` DISABLE KEYS */;
INSERT INTO `payment_types` (`id`, `name`) VALUES
	(1, 'COD'),
	(2, 'Paypal'),
	(3, 'Credit Card');
/*!40000 ALTER TABLE `payment_types` ENABLE KEYS */;

-- Dumping structure for table shopping_cart.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table shopping_cart.products: ~2 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`) VALUES
	(1, 'Honor 8X', 'Get Guaranteed Exchange Price of ₹ 6,000 if you exchange in 6-8 months and ₹ 5,200 in 9-12 months', 50, 'img1'),
	(2, 'All-new Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)', 'Echo Dot is our most popular voice-controlled speaker, now with an improved sound and a new design.', 70, 'img2');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping structure for table shopping_cart.shipping_details
CREATE TABLE IF NOT EXISTS `shipping_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL DEFAULT '0',
  `address1` varchar(1000) NOT NULL DEFAULT '0',
  `address2` varchar(1000) NOT NULL DEFAULT '0',
  `city` varchar(255) NOT NULL DEFAULT '0',
  `state` varchar(255) NOT NULL DEFAULT '0',
  `zip` int(11) NOT NULL DEFAULT '0',
  `country` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_shipping_details_orders` (`order_id`),
  KEY `FK_shipping_details_country` (`country`),
  CONSTRAINT `FK_shipping_details_country` FOREIGN KEY (`country`) REFERENCES `country` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_shipping_details_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- Dumping data for table shopping_cart.shipping_details: ~0 rows (approximately)
/*!40000 ALTER TABLE `shipping_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipping_details` ENABLE KEYS */;

-- Dumping structure for table shopping_cart.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumping data for table shopping_cart.users: ~1 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `password`) VALUES
	(1, 'admin', 'password123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
