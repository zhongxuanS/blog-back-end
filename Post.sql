/*
Navicat MySQL Data Transfer

Source Server         : my-test@test
Source Server Version : 50727
Source Host           : 10.206.174.25:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50727
File Encoding         : 65001

Date: 2019-08-29 17:21:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for Post
-- ----------------------------
DROP TABLE IF EXISTS `Post`;
CREATE TABLE `Post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `content` text,
  `created` timestamp NULL DEFAULT NULL,
  `updated` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`) USING BTREE,
  KEY `title` (`title`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
