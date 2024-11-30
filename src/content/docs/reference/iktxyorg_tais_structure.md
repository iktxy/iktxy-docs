---
title: iktxyorg_tais_structure
description: --blank--
---

```sql
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 28, 2024 at 07:04 AM
-- Server version: 5.7.23-23
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iktxyorg_tais`
--

-- --------------------------------------------------------

--
-- Table structure for table `apk_version`
--

CREATE TABLE `apk_version` (
  `apk_record_sn` int(5) NOT NULL,
  `version` varchar(20) NOT NULL,
  `apk_name` varchar(40) NOT NULL,
  `OS` varchar(15) NOT NULL,
  `upload_time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `fields_name`
--

CREATE TABLE `fields_name` (
  `fn_sn` int(4) NOT NULL,
  `fn_chinese_name` char(60) NOT NULL,
  `fn_field_name` char(60) NOT NULL,
  `fn_table_name` char(60) NOT NULL,
  `fn_field_length` int(8) NOT NULL,
  `fn_data_type` varchar(20) NOT NULL,
  `fn_act_type` varchar(120) NOT NULL,
  `fn_field_serial` int(2) NOT NULL,
  `fn_column_list_width` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `lg_sn` int(11) NOT NULL,
  `lg_parent_link_id` int(11) NOT NULL,
  `lg_title` varchar(48) NOT NULL COMMENT '如: 系統管理員, 操作員, 組訓專員, 一般瀏覽者, 鍵檔者',
  `lg_description` varchar(255) DEFAULT NULL COMMENT '群組詳述',
  `lg_type` varchar(20) DEFAULT NULL,
  `lg_express` varchar(32) NOT NULL COMMENT '記錄ID無視覺上的意義, 另設常數供編碼時取用',
  `lg_image_url` varchar(100) DEFAULT NULL,
  `lg_remark` varchar(255) DEFAULT NULL,
  `lg_op_ip` varchar(24) NOT NULL DEFAULT '',
  `lg_op_uid` int(11) NOT NULL DEFAULT '0',
  `lg_create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lg_modify_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `group_users`
--

CREATE TABLE `group_users` (
  `gu_sn` int(11) NOT NULL,
  `gu_link_gid` int(11) NOT NULL,
  `gu_link_uid` int(11) NOT NULL,
  `gu_title` varchar(60) DEFAULT NULL,
  `gu_description` varchar(150) DEFAULT NULL,
  `gu_op_ip` varchar(24) NOT NULL DEFAULT '',
  `gu_op_uid` int(11) NOT NULL,
  `gu_create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gu_modify_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='一位使用者可以同時參加兩個以上的系統群組，擔任不同系統群組的成員，使用者是隸屬某一個系統群組成員。\r\n';

-- --------------------------------------------------------

--
-- Table structure for table `holly_house_position`
--

CREATE TABLE `holly_house_position` (
  `hp_sn` int(10) NOT NULL,
  `hp_gn_sn` int(3) NOT NULL,
  `hp_title` char(120) DEFAULT NULL,
  `hp_manager` char(24) DEFAULT NULL,
  `hp_latitude` decimal(10,6) DEFAULT NULL,
  `hp_longitude` decimal(10,6) DEFAULT NULL,
  `hp_address` char(255) DEFAULT NULL,
  `hp_build_date` date DEFAULT NULL,
  `hp_category` int(1) DEFAULT NULL,
  `hp_reading_class` char(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` text,
  `user` int(11) DEFAULT NULL,
  `done` tinyint(1) DEFAULT NULL,
  `public` tinyint(1) DEFAULT NULL,
  `created` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `select_list`
--

CREATE TABLE `select_list` (
  `sl_sn` int(6) UNSIGNED NOT NULL,
  `sl_select_list_group` char(40) CHARACTER SET utf8 DEFAULT NULL,
  `sl_field1` char(30) COLLATE utf8_bin DEFAULT NULL,
  `sl_field2` char(30) COLLATE utf8_bin DEFAULT NULL,
  `sl_field3` char(30) COLLATE utf8_bin DEFAULT NULL,
  `sl_ps_code` varchar(8) COLLATE utf8_bin DEFAULT NULL,
  `sl_creator` int(5) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tais_all_phpscripts`
--

CREATE TABLE `tais_all_phpscripts` (
  `ap_sn` int(11) NOT NULL,
  `ap_name` varchar(255) NOT NULL,
  `ap_link` varchar(255) NOT NULL,
  `ap_op_ip` varchar(24) NOT NULL,
  `ap_op_uid` int(11) NOT NULL,
  `ap_create_time` varchar(19) NOT NULL,
  `ap_modify_time` varchar(19) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_attain_tao`
--

CREATE TABLE `tais_attain_tao` (
  `at_sn` int(20) UNSIGNED NOT NULL,
  `at_no` varchar(20) DEFAULT NULL,
  `at_receiver_sn` int(20) UNSIGNED DEFAULT '0',
  `at_receiver_name` varchar(100) DEFAULT NULL,
  `at_receiver_tel` varchar(50) DEFAULT NULL,
  `at_receiver_addr` varchar(100) DEFAULT NULL,
  `at_public_year` varchar(100) DEFAULT NULL,
  `at_date` date DEFAULT NULL,
  `at_lunar_date` varchar(255) DEFAULT NULL,
  `at_enlightent_time` enum('1','2','3','4','5','6','7','8','9','10','11','12') NOT NULL COMMENT '點道時辰: 1. 子時 2. 丑時 3. 寅時 4. 卯時 5.辰時 6. 巳時 7. 午時 8. 未時 9. 申時 10. 酉時 11. 戌時 12. 亥時',
  `at_time_batch` enum('1','2','3','4','5','6') NOT NULL COMMENT '辦道批次： 第1批，第2批，第3批，第4批，第5批，第6批',
  `at_enlightent_master_sn` int(20) UNSIGNED DEFAULT '0',
  `at_enlightent_master_name` varchar(50) DEFAULT NULL,
  `at_guider_sn` int(20) UNSIGNED DEFAULT '0',
  `at_guider_name` varchar(50) DEFAULT NULL,
  `at_real_guider_sn` int(20) UNSIGNED DEFAULT '0',
  `at_real_guider_name` varchar(255) DEFAULT NULL,
  `at_guarantor_sn` int(20) UNSIGNED DEFAULT '0',
  `at_guarantor_name` varchar(255) DEFAULT NULL,
  `at_kind` varchar(255) DEFAULT NULL,
  `at_hh_sn` int(20) UNSIGNED DEFAULT '0',
  `at_hh_name` varchar(255) DEFAULT NULL,
  `at_hh_addr` varchar(255) DEFAULT NULL,
  `at_checkiner_sn` int(20) UNSIGNED DEFAULT '0',
  `at_checkiner_name` varchar(255) DEFAULT NULL,
  `at_dollar_kind` varchar(255) DEFAULT NULL,
  `at_gratitude_fee` int(20) UNSIGNED DEFAULT '0',
  `at_remark` varchar(255) DEFAULT NULL,
  `at_gform_submit_time_str` varchar(100) DEFAULT NULL,
  `at_create` datetime DEFAULT NULL,
  `at_modify` datetime DEFAULT NULL,
  `at_update_id` int(20) UNSIGNED DEFAULT '0',
  `at_update_ip` varchar(255) DEFAULT NULL,
  `at_link_area_code` int(20) DEFAULT NULL,
  `at_territory_code` varchar(255) DEFAULT NULL,
  `at_ceremony_timezone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_at_upload_docs`
--

CREATE TABLE `tais_at_upload_docs` (
  `ud_sn` int(11) NOT NULL,
  `ud_filename` varchar(20) DEFAULT NULL,
  `ud_source_filename` varchar(255) DEFAULT NULL,
  `ud_file_path` varchar(255) DEFAULT NULL,
  `ud_create` datetime NOT NULL COMMENT '建立日期',
  `ud_modify` datetime NOT NULL COMMENT '修改日期',
  `ud_op_ip` varchar(24) NOT NULL COMMENT '操作 - 來源IP',
  `ud_op_id` int(11) NOT NULL COMMENT '操作 - 使用者ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_communication_set`
--

CREATE TABLE `tais_communication_set` (
  `cs_sn` int(11) NOT NULL,
  `cs_link_table` int(11) NOT NULL DEFAULT '0' COMMENT '聯結本記錄的資料表。各數值對應的資料表見<notes>',
  `cs_link_id` int(11) NOT NULL DEFAULT '0' COMMENT '%連結資料表%內, 指定的記錄ID是建立對像',
  `cs_title_code` varchar(8) NOT NULL DEFAULT '' COMMENT '從詞庫取得名稱, 如: 手機',
  `cs_content` varchar(255) NOT NULL,
  `cs_memo` varchar(255) DEFAULT NULL,
  `cs_op_ip` varchar(24) DEFAULT '',
  `cs_op_uid` int(11) DEFAULT '0',
  `cs_create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `cs_modify_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='各種的通訊資料\r\n手機、住家電話、公司電話、公司傳真....';

-- --------------------------------------------------------

--
-- Table structure for table `tais_cyc_group_user`
--

CREATE TABLE `tais_cyc_group_user` (
  `cgu_sn` int(11) NOT NULL COMMENT '記錄ID',
  `cgu_cyctree_link` int(11) NOT NULL,
  `cgu_link_gid` int(11) NOT NULL,
  `cgu_link_gn_sn_from_area` int(11) DEFAULT NULL,
  `cgu_user_link` int(11) NOT NULL,
  `cgu_title` varchar(100) NOT NULL,
  `cgu_description` varchar(255) NOT NULL,
  `cgu_status` tinyint(1) DEFAULT '1' COMMENT '可否使用1:可;0:不可',
  `cgu_create_time` varchar(19) NOT NULL,
  `cgu_modify_time` varchar(19) NOT NULL,
  `cgu_op_ip` varchar(24) NOT NULL,
  `cgu_op_uid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_cyc_learned_histories`
--

CREATE TABLE `tais_cyc_learned_histories` (
  `lh_sn` int(11) NOT NULL COMMENT '記錄ID',
  `lh_link_cycprg_sn` int(11) NOT NULL COMMENT '課程連結',
  `lh_link_user_info` int(11) NOT NULL COMMENT '使用者連結',
  `lh_link_group_sn` int(11) NOT NULL,
  `lh_learn_start` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '聆聽開始時間',
  `lh_learn_end` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '聆聽結束時間',
  `lh_duration` int(20) NOT NULL DEFAULT '0',
  `lh_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '建立時間',
  `lh_modify` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '修改時間',
  `lh_op_ip` varchar(24) NOT NULL COMMENT '操作 - 來源IP',
  `lh_op_id` int(11) NOT NULL COMMENT '操作 - 使用者ID'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_cyc_program`
--

CREATE TABLE `tais_cyc_program` (
  `cycprg_sn` int(11) NOT NULL COMMENT '記錄ID',
  `cycprg_title` varchar(100) NOT NULL COMMENT '班會名稱',
  `cycprg_desc` varchar(255) NOT NULL COMMENT '班會描述',
  `cycprg_conduct_sn` int(11) NOT NULL COMMENT '舉辦單位代號',
  `cycprg_link_tree_group` int(11) NOT NULL COMMENT '所屬班期',
  `cycprg_group_link_id` int(11) NOT NULL COMMENT '所屬室處',
  `cycprg_remark` varchar(255) NOT NULL COMMENT '備註',
  `cycprg_type` varchar(1) NOT NULL,
  `cycprg_seconds` decimal(10,0) NOT NULL COMMENT '課程時間長度',
  `cycprg_file_url` varchar(255) NOT NULL,
  `cycprg_file` varchar(255) NOT NULL,
  `cycprg_logo` varchar(255) NOT NULL,
  `cycprg_create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '建立日期',
  `cycprg_modify_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改日期',
  `cycprg_op_ip` varchar(24) NOT NULL COMMENT '操作 - 來源IP',
  `cycprg_op_uid` int(11) NOT NULL COMMENT '操作 - 使用者ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_cyc_tree_course`
--

CREATE TABLE `tais_cyc_tree_course` (
  `crs_sn` int(11) NOT NULL COMMENT '記錄_ID',
  `crs_cyctree_group_link` int(11) NOT NULL DEFAULT '0' COMMENT '樹狀連結_ID',
  `crs_cyctree_course_link` int(11) NOT NULL DEFAULT '0',
  `crs_status` tinyint(1) DEFAULT NULL COMMENT '可否觀看,0 for disabled menu or 1 for enabled menu',
  `crs_op_ip` varchar(24) NOT NULL COMMENT '來源IP',
  `crs_op_uid` int(11) NOT NULL COMMENT '使用者ID_建立者',
  `crs_create_time` varchar(19) NOT NULL COMMENT '建立時間',
  `crs_modify_time` varchar(19) NOT NULL COMMENT '修改時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_cyc_tree_menu`
--

CREATE TABLE `tais_cyc_tree_menu` (
  `menu_sn` int(11) NOT NULL COMMENT '記錄_ID',
  `menu_phpscript_link` int(11) NOT NULL,
  `menu_cyctree_group_link` int(11) NOT NULL DEFAULT '0' COMMENT '樹狀連結_ID',
  `menu_cyctree_menu_link` int(11) NOT NULL DEFAULT '0',
  `menu_status` tinyint(1) DEFAULT NULL COMMENT '可否觀看,0 for disabled menu or 1 for enabled menu',
  `menu_op_ip` varchar(24) NOT NULL COMMENT '來源IP',
  `menu_op_uid` int(11) NOT NULL COMMENT '使用者ID_建立者',
  `menu_create_time` varchar(19) NOT NULL COMMENT '建立時間',
  `menu_modify_time` varchar(19) NOT NULL COMMENT '修改時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_device_license_record`
--

CREATE TABLE `tais_device_license_record` (
  `dlr_sn` int(11) NOT NULL,
  `dlr_mbr_sn` int(11) NOT NULL,
  `dlr_device_id` varchar(50) NOT NULL,
  `dlr_create_time` datetime NOT NULL,
  `dlr_op_ip` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_enlightent_master`
--

CREATE TABLE `tais_enlightent_master` (
  `em_sn` int(10) UNSIGNED NOT NULL,
  `em_name` varchar(100) DEFAULT NULL,
  `em_link_member_base` int(11) DEFAULT NULL,
  `em_accept_god_will_date` datetime DEFAULT NULL,
  `em_cut_of_god_will_date` datetime DEFAULT NULL,
  `em_status` varchar(1) DEFAULT NULL,
  `em_op_ip` varchar(24) DEFAULT NULL,
  `em_op_uid` int(11) DEFAULT NULL,
  `em_create` datetime DEFAULT NULL,
  `em_modify` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_function_auth`
--

CREATE TABLE `tais_function_auth` (
  `fa_id` int(11) NOT NULL,
  `fa_link_gid` int(11) NOT NULL,
  `fa_title` varchar(50) DEFAULT NULL,
  `fa_code` varchar(50) DEFAULT NULL,
  `fa_could_be_use` enum('0','1') DEFAULT '1',
  `fa_op_ip` varchar(24) NOT NULL DEFAULT '',
  `fa_op_uid` int(11) NOT NULL,
  `fa_create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fa_modify_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'ON UPDATE CURRENT_TIMESTAMP'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_func_auth_tree`
--

CREATE TABLE `tais_func_auth_tree` (
  `tfa_id` int(11) NOT NULL,
  `tfa_link_gid` int(11) NOT NULL,
  `tfa_title` varchar(50) DEFAULT NULL,
  `tfa_code` varchar(50) DEFAULT NULL,
  `tfa_could_be_use` tinyint(1) DEFAULT NULL,
  `tfa_op_ip` varchar(24) NOT NULL DEFAULT '',
  `tfa_op_uid` int(11) NOT NULL,
  `tfa_create_time` varchar(19) NOT NULL,
  `tfa_modify_time` varchar(19) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_group`
--

CREATE TABLE `tais_group` (
  `gp_sn` int(10) UNSIGNED NOT NULL,
  `gp_parent_link` int(11) NOT NULL COMMENT '上一層的id/sn',
  `gp_title` varchar(100) NOT NULL,
  `gp_code` varchar(30) NOT NULL,
  `gp_description` varchar(255) NOT NULL,
  `gp_op_ip` varchar(24) NOT NULL,
  `gp_op_uid` int(11) NOT NULL DEFAULT '0',
  `gp_create` datetime NOT NULL,
  `gp_modify` datetime NOT NULL,
  `gp_remark` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_groups_nested`
--

CREATE TABLE `tais_groups_nested` (
  `gn_sn` int(10) UNSIGNED NOT NULL,
  `level` int(11) DEFAULT NULL,
  `gn_lft` int(11) NOT NULL,
  `gn_rgt` int(11) NOT NULL,
  `gn_code` varchar(30) NOT NULL,
  `gn_title` varchar(100) NOT NULL,
  `gn_description` varchar(255) NOT NULL,
  `gn_status` smallint(6) NOT NULL,
  `gn_remark` text NOT NULL,
  `gn_territory_code` varchar(20) DEFAULT NULL,
  `gn_territory_link_id` int(6) NOT NULL,
  `gn_op_ip` varchar(24) NOT NULL,
  `gn_op_uid` int(11) NOT NULL DEFAULT '0',
  `gn_create_time` datetime NOT NULL,
  `gn_modify_time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_group_link`
--

CREATE TABLE `tais_group_link` (
  `mg_sn` int(11) UNSIGNED NOT NULL,
  `cid` int(10) NOT NULL,
  `title` varchar(100) NOT NULL,
  `mbr_sn` int(20) NOT NULL,
  `submitter` int(20) NOT NULL,
  `status` tinyint(2) NOT NULL COMMENT '將來要增加 permission 時使用'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_group_link_google_form`
--

CREATE TABLE `tais_group_link_google_form` (
  `mg_sn` int(11) UNSIGNED NOT NULL,
  `cid` int(10) NOT NULL,
  `title` varchar(100) NOT NULL,
  `mbr_sn` int(20) NOT NULL,
  `submitter` int(20) NOT NULL,
  `status` tinyint(2) NOT NULL COMMENT '將來要增加 permission 時使用'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_hh_leader`
--

CREATE TABLE `tais_hh_leader` (
  `hl_sn` int(11) NOT NULL COMMENT '佛堂壇主的自編序號',
  `hl_link_hh_sn` int(11) DEFAULT NULL,
  `hl_link_mbr_sn` int(11) DEFAULT NULL,
  `hl_link_ps_phrase` int(11) DEFAULT NULL,
  `hl_start_date` date DEFAULT NULL,
  `hl_remark` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='壇主各項身份';

-- --------------------------------------------------------

--
-- Table structure for table `tais_holly_house`
--

CREATE TABLE `tais_holly_house` (
  `hh_sn` int(11) UNSIGNED NOT NULL,
  `hh_no` varchar(20) DEFAULT NULL COMMENT '佛堂編號',
  `hh_create_mbr_sn` int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '創建佛堂的壇主 mbr_sn 序號',
  `hh_onduty_mbr_sn` int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '佛堂現任壇主的 mbr_sn 序號',
  `hh_name` varchar(255) NOT NULL COMMENT '佛堂正式的名稱或壇號',
  `hh_alias_name` varchar(255) DEFAULT NULL COMMENT '佛堂的別名, 容易識別為主。',
  `hh_tel` varchar(20) DEFAULT NULL COMMENT '佛堂電話號碼',
  `hh_zip` varchar(5) DEFAULT NULL COMMENT '佛堂所在地址的郵遞區號',
  `hh_addr` varchar(100) DEFAULT NULL COMMENT '佛堂所在地址',
  `hh_email` varchar(60) DEFAULT NULL COMMENT '佛堂的郵箱帳號',
  `hh_http` varchar(40) DEFAULT NULL COMMENT '佛堂的網站網址',
  `hh_photo` varchar(255) DEFAULT NULL COMMENT '佛壇照片的檔案名稱(filename)',
  `hh_attachment` varchar(255) DEFAULT NULL COMMENT '佛壇照片的檔案路徑(path)',
  `hh_setup_date` date DEFAULT NULL COMMENT '佛堂的設立日期（設壇日期）',
  `hh_end_date` date DEFAULT NULL COMMENT '佛堂的結束日期（收壇日期）',
  `hh_status` varchar(6) DEFAULT NULL COMMENT '佛堂的現在狀態',
  `hh_create` datetime DEFAULT NULL COMMENT '初次建立本筆記錄的日期時間',
  `hh_modify` datetime DEFAULT NULL COMMENT '上次修改本筆記錄的日期時間',
  `hh_update_id` varchar(20) DEFAULT NULL COMMENT '上次更新異動者的 mbr_sn 序號',
  `hh_update_ip` varchar(15) DEFAULT NULL COMMENT '上次更新異動者的IP ADDRESS',
  `hh_territory_code` varchar(20) DEFAULT NULL COMMENT '佛堂所屬的區域（舊版）',
  `hh_longitude` decimal(11,7) DEFAULT NULL COMMENT '佛堂位置的經度',
  `hh_latitude` decimal(11,7) DEFAULT NULL COMMENT '佛堂位置的緯度',
  `hh_link_area_code` int(11) DEFAULT NULL COMMENT '連結group_nested_sn的區域序號, 即本佛堂的歸屬區',
  `hh_greater_distance_radius` int(11) DEFAULT NULL COMMENT '認定範圍:大於距離半徑(greater than distance radius)'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_lesson`
--

CREATE TABLE `tais_lesson` (
  `ls_sn` int(11) NOT NULL COMMENT '記錄ID',
  `ls_no` int(3) NOT NULL COMMENT '第幾節課號碼',
  `ls_name` varchar(30) NOT NULL COMMENT '第幾節課名稱',
  `ls_topic_name` varchar(100) NOT NULL COMMENT '課程名稱',
  `ls_topic_desc` varchar(255) NOT NULL COMMENT '課程描述',
  `ls_link_program_sn` int(11) NOT NULL COMMENT '班會代號_連結',
  `ls_start` datetime NOT NULL COMMENT '開始時間',
  `ls_minutes` int(5) NOT NULL COMMENT '分鐘數',
  `ls_create` datetime NOT NULL COMMENT '建立日期',
  `ls_modify` datetime NOT NULL COMMENT '修改日期',
  `ls_op_ip` varchar(24) NOT NULL COMMENT '操作 - 來源IP',
  `ls_op_id` int(11) NOT NULL COMMENT '操作 - 使用者'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_livestream`
--

CREATE TABLE `tais_livestream` (
  `ls_sn` int(10) UNSIGNED NOT NULL,
  `ls_link_group_id` int(11) DEFAULT NULL,
  `ls_worker_id` int(11) DEFAULT NULL,
  `ls_link_youtube_string` varchar(255) DEFAULT NULL,
  `ls_before_start_show_string` varchar(255) DEFAULT NULL,
  `ls_start_time` datetime DEFAULT '0000-00-00 00:00:00',
  `ls_end_time` datetime DEFAULT '0000-00-00 00:00:00',
  `ls_worker_url_string` varchar(255) DEFAULT NULL,
  `ls_people_url_string` varchar(255) DEFAULT NULL,
  `ls_create` datetime NOT NULL COMMENT '建立日期',
  `ls_modify` datetime NOT NULL COMMENT '修改日期',
  `ls_op_ip` varchar(24) NOT NULL COMMENT '操作 - 來源IP',
  `ls_op_uid` int(11) NOT NULL COMMENT '操作 - 使用者ID	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_login_attempts`
--

CREATE TABLE `tais_login_attempts` (
  `la_id` int(11) NOT NULL,
  `la_user_id` int(11) NOT NULL,
  `la_time` int(30) NOT NULL,
  `la_modify_time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_login_groups`
--

CREATE TABLE `tais_login_groups` (
  `lg_sn` int(11) NOT NULL,
  `lg_parent_link_id` int(11) NOT NULL,
  `lg_title` varchar(48) NOT NULL COMMENT '如: 系統管理員, 操作員, 組訓專員, 一般瀏覽者, 鍵檔者',
  `lg_description` varchar(255) DEFAULT NULL COMMENT '群組詳述',
  `lg_type` varchar(20) DEFAULT NULL,
  `lg_express` varchar(32) NOT NULL COMMENT '記錄ID無視覺上的意義, 另設常數供編碼時取用',
  `lg_image_url` varchar(100) DEFAULT NULL,
  `lg_remark` varchar(255) DEFAULT NULL,
  `lg_op_ip` varchar(24) NOT NULL DEFAULT '',
  `lg_op_uid` int(11) NOT NULL DEFAULT '0',
  `lg_create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lg_modify_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_login_group_users`
--

CREATE TABLE `tais_login_group_users` (
  `gu_sn` int(11) NOT NULL,
  `gu_link_gid` int(11) NOT NULL,
  `gu_link_uid` int(11) NOT NULL,
  `gu_title` varchar(60) DEFAULT NULL,
  `gu_description` varchar(150) DEFAULT NULL,
  `gu_op_ip` varchar(24) NOT NULL DEFAULT '',
  `gu_op_uid` int(11) NOT NULL,
  `gu_create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gu_modify_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='一位使用者可以同時參加兩個以上的系統群組，擔任不同系統群組的成員，使用者是隸屬某一個系統群組成員。\r\n';

-- --------------------------------------------------------

--
-- Table structure for table `tais_mbr_base`
--

CREATE TABLE `tais_mbr_base` (
  `mbr_sn` int(255) UNSIGNED NOT NULL,
  `uid` varchar(11) NOT NULL DEFAULT '0',
  `mbr_no` varchar(20) NOT NULL DEFAULT '',
  `mbr_last_name` varchar(50) NOT NULL DEFAULT '',
  `mbr_first_name` varchar(50) NOT NULL DEFAULT '',
  `mbr_name` varchar(100) NOT NULL DEFAULT '',
  `mbr_sex` enum('0','1','2') NOT NULL COMMENT '0.乾 1.坤 2.未知',
  `mbr_marry_status` enum('0','1','2','3') NOT NULL COMMENT '婚姻狀態:0.未婚 1.已婚 2.離婚 3.喪偶',
  `mbr_person_id` varchar(20) NOT NULL DEFAULT '' COMMENT '身份證號',
  `mbr_passport_id` varchar(20) NOT NULL DEFAULT '' COMMENT '護照號碼',
  `mbr_edu` enum('0','1','2','3','4','5','6','7','8') NOT NULL COMMENT '學歷:0.未知 1.無 2.國小 3.國中 4.高中職 5.專科 6.大學 7.碩士 8.博士',
  `mbr_birthday` date NOT NULL DEFAULT '0000-00-00',
  `mbr_blood` enum('0','1','2','3','4') NOT NULL COMMENT '血型:0.未知 1.O型 2.A型 3.B型 4.AB型',
  `mbr_tao_profession` set('0','1','2','3','4','5','6','7','8','9','10','11','12') NOT NULL COMMENT '道場天職:1.道親 2.人才 3.講師 4.壇主 5.點傳師 6.副前人 7.前人 8.老前人 9.道長 10.師母 11.師尊 12.祖師',
  `mbr_mobile_phone` varchar(15) NOT NULL DEFAULT '',
  `mbr_email` varchar(60) NOT NULL DEFAULT '',
  `mbr_web` varchar(200) NOT NULL DEFAULT '',
  `mbr_country_code` varchar(5) NOT NULL DEFAULT '',
  `mbr_household_zip` varchar(5) NOT NULL DEFAULT '',
  `mbr_household_address` varchar(100) NOT NULL DEFAULT '',
  `mbr_home_tel` varchar(15) NOT NULL DEFAULT '',
  `mbr_home_zip` varchar(5) NOT NULL DEFAULT '',
  `mbr_home_address` varchar(100) NOT NULL DEFAULT '',
  `mbr_contact_tel` varchar(15) NOT NULL DEFAULT '',
  `mbr_contact_zip` varchar(5) NOT NULL DEFAULT '',
  `mbr_contact_address` varchar(100) NOT NULL DEFAULT '',
  `mbr_yahoo` varchar(60) NOT NULL DEFAULT '',
  `mbr_msn` varchar(60) NOT NULL DEFAULT '',
  `mbr_skype` varchar(60) NOT NULL DEFAULT '',
  `mbr_photo` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `mbr_has_backed` tinyint(1) NOT NULL COMMENT '0.凡塵中 1.已歸空',
  `mbr_person_attrib` enum('1','2') NOT NULL COMMENT '所屬道場:1.本單位內 2.其他組線',
  `mbr_attend_attrib` enum('1','2','3','4','5','6','7','8','9') NOT NULL COMMENT '進修狀態:1.正常（含常駐國外） 2.未知（久未聯絡不知去向） 3.修道正考驗中（內心因不平衡而停止參加班會、活動） 4.懈怠暫休（超過三年都未有中心及地區的任何參班掛號紀錄，就算懈怠暫休） 5.歸空成道（永返極樂） 6.他去（理念不合，確定從南興單位消失） 7.健康因素（因疾病、意外、老化現象）2,3,4=B;6,7=C',
  `mbr_open_foreign` enum('0','1','2') NOT NULL DEFAULT '0' COMMENT '開荒辦道: 0. 無(預設值) 1. 長駐國外 2. 非長駐人員但需到國外幫辦',
  `mbr_remark` text NOT NULL,
  `mbr_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `mbr_modify` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `mbr_update_id` varchar(20) NOT NULL DEFAULT '',
  `mbr_update_ip` varchar(15) NOT NULL DEFAULT '',
  `mbr_imp_courses` set('0','1','2','3') NOT NULL COMMENT '0.無 1.文禮班 2.清口班 3.懺悔班',
  `mbr_chinkou_date` date DEFAULT NULL COMMENT '清口日期(Date of making Qing-Kou Vow)',
  `mbr_repent_date` date DEFAULT NULL COMMENT '懺悔日期(Date of Participating in the Great Repentence Class)',
  `mbr_pass_away_date` date DEFAULT NULL COMMENT '成道日期(Date of Passing away)',
  `mbr_territory_code` varchar(20) NOT NULL,
  `mbr_device_id` varchar(50) NOT NULL,
  `mbr_avatar_path_filename` varchar(255) NOT NULL,
  `mbr_special_skill` varchar(255) DEFAULT NULL,
  `mbr_interests` varchar(255) DEFAULT NULL,
  `mbr_profession` varchar(255) DEFAULT NULL,
  `mbr_gform_submit_time_str` varchar(100) DEFAULT NULL COMMENT '填入 GF 的日期時間'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_mbr_base_google_form`
--

CREATE TABLE `tais_mbr_base_google_form` (
  `mbr_sn` int(255) UNSIGNED NOT NULL,
  `uid` varchar(11) NOT NULL DEFAULT '0',
  `mbr_no` varchar(20) NOT NULL DEFAULT '',
  `mbr_last_name` varchar(20) NOT NULL DEFAULT '',
  `mbr_first_name` varchar(20) NOT NULL DEFAULT '',
  `mbr_name` varchar(40) NOT NULL DEFAULT '',
  `mbr_sex` enum('0','1','2') NOT NULL COMMENT '0.乾 1.坤 2.未知',
  `mbr_marry_status` enum('0','1','2','3') NOT NULL COMMENT '婚姻狀態:0.未婚 1.已婚 2.離婚 3.喪偶',
  `mbr_person_id` varchar(20) NOT NULL DEFAULT '' COMMENT '身份證號',
  `mbr_passport_id` varchar(20) NOT NULL DEFAULT '' COMMENT '護照號碼',
  `mbr_edu` enum('0','1','2','3','4','5','6','7','8') NOT NULL COMMENT '學歷:0.未知 1.無 2.國小 3.國中 4.高中職 5.專科 6.大學 7.碩士 8.博士',
  `mbr_birthday` date NOT NULL DEFAULT '0000-00-00',
  `mbr_blood` enum('0','1','2','3','4') NOT NULL COMMENT '血型:0.未知 1.O型 2.A型 3.B型 4.AB型',
  `mbr_tao_profession` set('0','1','2','3','4','5','6','7','8','9','10','11','12') NOT NULL COMMENT '道場天職:1.道親 2.人才 3.講師 4.壇主 5.點傳師者 6.副前人 7.前人 8.老前人 9.道長 10.師母 11.師尊 12.祖師',
  `mbr_mobile_phone` varchar(15) NOT NULL DEFAULT '',
  `mbr_email` varchar(60) NOT NULL DEFAULT '',
  `mbr_web` varchar(200) NOT NULL DEFAULT '',
  `mbr_country_code` varchar(5) NOT NULL DEFAULT '',
  `mbr_household_zip` varchar(5) NOT NULL DEFAULT '',
  `mbr_household_address` varchar(100) NOT NULL DEFAULT '',
  `mbr_home_tel` varchar(15) NOT NULL DEFAULT '',
  `mbr_home_zip` varchar(5) NOT NULL DEFAULT '',
  `mbr_home_address` varchar(100) NOT NULL DEFAULT '',
  `mbr_contact_tel` varchar(15) NOT NULL DEFAULT '',
  `mbr_contact_zip` varchar(5) NOT NULL DEFAULT '',
  `mbr_contact_address` varchar(100) NOT NULL DEFAULT '',
  `mbr_yahoo` varchar(60) NOT NULL DEFAULT '',
  `mbr_msn` varchar(60) NOT NULL DEFAULT '',
  `mbr_skype` varchar(60) NOT NULL DEFAULT '',
  `mbr_photo` mediumint(8) UNSIGNED NOT NULL DEFAULT '0',
  `mbr_has_backed` tinyint(1) NOT NULL COMMENT '0.凡塵中 1.已歸空',
  `mbr_person_attrib` enum('1','2') NOT NULL COMMENT '所屬道場:1.本單位內 2.其他組線',
  `mbr_attend_attrib` enum('1','2','3','4','5','6','7','8','9') NOT NULL COMMENT '進修狀態:1.正常（含常駐國外） 2.未知（久未聯絡不知去向） 3.修道正考驗中（內心因不平衡而停止參加班會、活動） 4.懈怠暫休（超過三年都未有中心及地區的任何參班掛號紀錄，就算懈怠暫休） 5.歸空成道（永返極樂） 6.他去（理念不合，確定從南興單位消失） 7.健康因素（因疾病、意外、老化現象）',
  `mbr_open_foreign` enum('0','1','2') NOT NULL DEFAULT '0' COMMENT '開荒辦道: 0. 無(預設值) 1. 長駐國外 2. 非長駐人員但需到國外幫辦',
  `mbr_remark` text NOT NULL,
  `mbr_create` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `mbr_modify` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `mbr_update_id` varchar(20) NOT NULL DEFAULT '',
  `mbr_update_ip` varchar(15) NOT NULL DEFAULT '',
  `mbr_imp_courses` set('0','1','2','3') NOT NULL COMMENT '0.無 1.文禮班 2.清口班 3.懺悔班',
  `mbr_chinkou_date` date DEFAULT NULL COMMENT '清口日期(Date of making Qing-Kou Vow)',
  `mbr_repent_date` date DEFAULT NULL COMMENT '懺悔日期(Date of Participating in the Great Repentence Class)',
  `mbr_pass_away_date` date DEFAULT NULL COMMENT '成道日期(Date of Passing away)',
  `mbr_territory_code` varchar(20) NOT NULL,
  `mbr_device_id` varchar(50) NOT NULL,
  `mbr_avatar_path_filename` varchar(255) NOT NULL,
  `mbr_special_skill` varchar(255) DEFAULT NULL,
  `mbr_interests` varchar(255) DEFAULT NULL,
  `mbr_profession` varchar(255) DEFAULT NULL,
  `mbr_gform_submit_time_str` varchar(100) DEFAULT NULL COMMENT '填入 GF 的日期時間'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_mbr_permission`
--

CREATE TABLE `tais_mbr_permission` (
  `mp_sn` int(11) NOT NULL COMMENT '資料ID',
  `mp_mbr_sn` int(11) NOT NULL COMMENT '道親編號',
  `mp_category` varchar(60) NOT NULL COMMENT '操作類別:頁面或是群組',
  `mp_page_or_group_sn` int(3) NOT NULL COMMENT '頁面或是群組ID',
  `mp_create` datetime NOT NULL COMMENT '建立時間',
  `mp_op_id` int(11) NOT NULL COMMENT '操作人員 ID',
  `mp_op_ip` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_member_group`
--

CREATE TABLE `tais_member_group` (
  `mg_sn` int(20) UNSIGNED NOT NULL,
  `mg_link_group_id` int(10) NOT NULL,
  `mg_title` varchar(100) NOT NULL,
  `mg_link_mbr_id` int(20) NOT NULL,
  `mg_submitter` int(20) NOT NULL,
  `mg_status` tinyint(2) NOT NULL COMMENT '將來要增加 permission 時使用',
  `mg_op_ip` varchar(24) NOT NULL,
  `mg_op_uid` int(11) NOT NULL,
  `mg_create_time` datetime NOT NULL,
  `mg_modify_time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_page_permission`
--

CREATE TABLE `tais_page_permission` (
  `pgp_sn` int(2) NOT NULL COMMENT '資料ID',
  `pgp_index` int(2) NOT NULL,
  `pgp_page_name` varchar(120) NOT NULL COMMENT '頁面名稱',
  `pgp_html` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_participant_identity`
--

CREATE TABLE `tais_participant_identity` (
  `pi_sn` int(11) NOT NULL COMMENT '資料ID',
  `pi_prg_sn` int(11) NOT NULL COMMENT '連結班會SN',
  `pi_identity_sn` int(2) NOT NULL COMMENT '參班身分代號',
  `pi_identity_title` varchar(50) NOT NULL COMMENT '參班身分名稱',
  `pi_op_sn` int(11) NOT NULL COMMENT '操作人員 ID'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_phrase_store`
--

CREATE TABLE `tais_phrase_store` (
  `ps_id` int(11) UNSIGNED NOT NULL,
  `ps_on_menu` tinyint(1) DEFAULT '1',
  `ps_domain` tinyint(4) DEFAULT '1' COMMENT '0:系統 1:使用者',
  `ps_access` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0:讀寫 1:唯讀',
  `ps_section` varchar(32) NOT NULL DEFAULT '' COMMENT '同一性質的片語使用相同的詞組碼, 作為取值的索引。見 Notes',
  `ps_show_order` int(11) DEFAULT '0' COMMENT '順序=0, 為詞組的預設值',
  `ps_code` varchar(8) NOT NULL DEFAULT '',
  `ps_phrase` varchar(64) NOT NULL DEFAULT '',
  `ps_op_ip` varchar(24) NOT NULL DEFAULT '',
  `ps_op_uid` int(11) NOT NULL DEFAULT '0',
  `ps_create_time` datetime DEFAULT NULL,
  `ps_modify_time` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='系統使用的各片語皆在此建立。';

-- --------------------------------------------------------

--
-- Table structure for table `tais_product_stock`
--

CREATE TABLE `tais_product_stock` (
  `ps_sn` int(11) NOT NULL,
  `ps_product_name` varchar(100) NOT NULL,
  `ps_product_description` varchar(200) NOT NULL,
  `ps_category_link_id` int(11) NOT NULL,
  `ps_category_code` varchar(10) NOT NULL,
  `ps_group_link_id` int(11) NOT NULL,
  `ps_group_code` varchar(10) NOT NULL,
  `ps_warehouse_link_id` int(11) NOT NULL,
  `ps_quantity` int(11) NOT NULL,
  `ps_unit_link_id` int(11) NOT NULL,
  `ps_price` int(11) NOT NULL,
  `ps_value` int(12) NOT NULL,
  `ps_image_link_addr` varchar(100) NOT NULL,
  `ps_brand_link_id` int(11) NOT NULL,
  `ps_model_link_id` int(11) NOT NULL,
  `ps_part_link_id` int(11) NOT NULL,
  `ps_from_date` date NOT NULL,
  `ps_op_ip` varchar(24) NOT NULL,
  `ps_op_uid` int(11) NOT NULL,
  `ps_create_time` datetime NOT NULL,
  `ps_modify_time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_program`
--

CREATE TABLE `tais_program` (
  `prg_sn` int(11) NOT NULL COMMENT '記錄ID',
  `prg_title` varchar(100) DEFAULT NULL COMMENT '班會名稱',
  `prg_desc` varchar(255) DEFAULT NULL COMMENT '班會描述',
  `prg_periodicity` int(2) NOT NULL DEFAULT '1' COMMENT '期數_次數',
  `prg_category` enum('1','2','3','4','5','6','7','8','9','10','11','12') NOT NULL DEFAULT '1' COMMENT '班會種類,1.道義成全班 2. 經典研習班 3.活動 4.開會 5.講座 6.職務研習 7.弘道工作練習 8.講道訓練',
  `prg_need_registration` tinyint(1) DEFAULT '0' COMMENT '是否要報名 0:否 , 1:是',
  `prg_need_sign_out` int(1) NOT NULL DEFAULT '0' COMMENT '是否要簽退 0:否 , 1:是',
  `prg_conduct_sn` int(11) DEFAULT NULL COMMENT '舉辦單位代號',
  `prg_link_district_sn` int(5) DEFAULT NULL COMMENT '參班的單位代號',
  `prg_location` varchar(255) DEFAULT NULL COMMENT '班會舉行地點',
  `prg_schedule` varchar(60) DEFAULT NULL,
  `prg_remark` varchar(255) DEFAULT NULL COMMENT '備註',
  `prg_link_conductor_sn` int(11) DEFAULT NULL COMMENT '領班',
  `prg_link_mainleader_sn` int(11) DEFAULT NULL COMMENT '主班',
  `prg_mc_sn` varchar(255) DEFAULT NULL COMMENT '操持人員ID(複選)',
  `prg_start` datetime DEFAULT NULL COMMENT '課程開始',
  `prg_end` datetime DEFAULT NULL COMMENT '課程結束',
  `prg_total_hours` decimal(3,1) DEFAULT NULL COMMENT '課程總時數',
  `prg_male_participant` int(5) DEFAULT NULL COMMENT '乾道報名人數',
  `prg_female_participant` int(5) DEFAULT NULL COMMENT '坤道報名人數',
  `prg_total_participant` int(6) DEFAULT NULL COMMENT '班會班員人數',
  `prg_attach_file` varchar(20) DEFAULT NULL COMMENT '附件檔案檔名',
  `prg_create` datetime DEFAULT NULL COMMENT '建立日期',
  `prg_modify` datetime DEFAULT NULL COMMENT '修改日期',
  `prg_op_ip` varchar(24) DEFAULT NULL COMMENT '操作 - 來源IP',
  `prg_op_id` int(11) DEFAULT NULL COMMENT '操作 - 使用者ID',
  `prg_google_meet` varchar(255) DEFAULT NULL,
  `prg_YouTube` varchar(255) DEFAULT NULL,
  `prg_verification_code` varchar(6) DEFAULT NULL COMMENT '網路掛號驗證碼',
  `prg_hp_sn` int(5) DEFAULT NULL COMMENT '開班佛堂代號'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_program_category`
--

CREATE TABLE `tais_program_category` (
  `prg_cate_sn` int(2) NOT NULL,
  `prg_cate_title` varchar(60) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_program_date`
--

CREATE TABLE `tais_program_date` (
  `pd_sn` int(11) NOT NULL COMMENT '資料ID',
  `pd_prg_sn` int(6) NOT NULL COMMENT '連結班會SN',
  `pd_date` date NOT NULL COMMENT '開班日期',
  `pd_link_hh_sn` int(11) DEFAULT NULL COMMENT '舉行班會的佛堂代號',
  `pd_location` varchar(30) NOT NULL COMMENT '開班地點',
  `pd_op_sn` int(6) NOT NULL COMMENT '操作人員 ID',
  `pd_create_datetime` datetime NOT NULL COMMENT '建立時間',
  `pd_verification_code` varchar(6) NOT NULL DEFAULT '' COMMENT '網路掛號驗證碼',
  `pd_op_ip` varchar(20) NOT NULL,
  `pd_hp_sn` int(4) DEFAULT NULL COMMENT '開班佛堂代號(不再使用)'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_program_operator`
--

CREATE TABLE `tais_program_operator` (
  `po_sn` int(11) NOT NULL COMMENT '資料ID',
  `po_prg_sn` int(11) NOT NULL COMMENT '連結班會SN',
  `po_mbr_sn` int(11) NOT NULL COMMENT '道親編號',
  `po_title` varchar(30) NOT NULL COMMENT '操作者稱呼',
  `po_prg_subdate` date NOT NULL COMMENT '操作日期設定:某特定日或是全部日期',
  `po_prg_all_date` tinyint(1) NOT NULL COMMENT '是否適用全部日期',
  `po_create_time` datetime NOT NULL COMMENT '建立時間',
  `submitter` int(11) NOT NULL COMMENT '操作人員 ID'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_program_participant`
--

CREATE TABLE `tais_program_participant` (
  `pp_sn` int(11) NOT NULL COMMENT '資料ID',
  `pp_link_course_sn` int(11) NOT NULL COMMENT '連結班會SN',
  `pp_link_mbr` int(11) NOT NULL COMMENT '道親編號',
  `pp_mbr_name` varchar(100) NOT NULL COMMENT '參班時姓名',
  `pp_mbr_group_sn` int(11) NOT NULL COMMENT '參班時連絡區ID',
  `pp_sign_in_time` datetime NOT NULL COMMENT '簽到時間',
  `pp_sign_out_time` datetime DEFAULT NULL COMMENT '簽退時間',
  `pp_hours` decimal(6,1) NOT NULL COMMENT '參班時數',
  `pp_late_flag` tinyint(1) NOT NULL COMMENT '遲到旗標  0:否 , 1:是',
  `pp_late_minutes` int(5) NOT NULL COMMENT '遲到分鐘數',
  `pp_register_method` enum('1','2','3','4','5','6') NOT NULL COMMENT '掛號方式: 1. 條碼掃描 2. 手機自行掛號 3. 人工掛號 4. 網頁掛號 5. 填寫 google form 6. 驗證碼輸入',
  `pp_category` int(2) NOT NULL COMMENT '參班身分代號',
  `pp_principal_mbr_sn` int(6) NOT NULL COMMENT '會議代理人員SN',
  `pp_register_link_mbr_sn` int(11) NOT NULL COMMENT '掛號人員_連結',
  `pp_attend_way` enum('1','2','3') DEFAULT NULL COMMENT '參班方式： 1.現場 2.非現場（包含 youtube、google meet、課後閱聽、居家視訊),3:無法判定',
  `pp_create` datetime NOT NULL COMMENT '建立日期',
  `pp_modify` datetime NOT NULL COMMENT '修改日期',
  `pp_op_ip` varchar(24) NOT NULL COMMENT '操作 - 來源IP',
  `pp_op_id` int(11) NOT NULL COMMENT '操作 - 使用者ID',
  `pp_distance` int(11) DEFAULT NULL COMMENT '參班人員的手持裝置與佛堂掛號位置之間的距離, 單位是公尺'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_program_participant_google_form`
--

CREATE TABLE `tais_program_participant_google_form` (
  `pp_sn` int(11) NOT NULL COMMENT '資料ID',
  `pp_link_course_sn` int(11) NOT NULL COMMENT '連結班會SN',
  `pp_link_mbr` int(11) NOT NULL COMMENT '道親編號',
  `pp_mbr_name` varchar(30) NOT NULL COMMENT '參班時姓名',
  `pp_mbr_group_sn` int(11) NOT NULL COMMENT '參班時連絡區ID',
  `pp_sign_in_time` datetime NOT NULL COMMENT '簽到時間',
  `pp_sign_out_time` datetime NOT NULL COMMENT '簽退時間',
  `pp_hours` decimal(6,1) NOT NULL COMMENT '參班時數',
  `pp_late_flag` tinyint(1) NOT NULL COMMENT '遲到旗標  0:否 , 1:是',
  `pp_late_minutes` int(5) NOT NULL COMMENT '遲到分鐘數',
  `pp_register_method` enum('1','2','3','4','5') NOT NULL COMMENT '掛號方式:1.條碼掃描 2.手機自行掛號 3.人工掛號 5.填寫 google form',
  `pp_category` int(2) NOT NULL COMMENT '參班身分代號',
  `pp_principal_mbr_sn` int(6) NOT NULL,
  `pp_register_link_mbr_sn` int(11) NOT NULL COMMENT '掛號人員_連結',
  `pp_create` datetime NOT NULL COMMENT '建立日期',
  `pp_modify` datetime NOT NULL COMMENT '修改日期',
  `pp_op_ip` varchar(24) NOT NULL COMMENT '操作 - 來源IP',
  `pp_op_id` int(11) NOT NULL COMMENT '操作 - 使用者ID'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_program_registration`
--

CREATE TABLE `tais_program_registration` (
  `pr_sn` int(11) NOT NULL,
  `pr_pg_sn` int(6) NOT NULL COMMENT '連結班會SN',
  `pr_link_type` int(1) NOT NULL DEFAULT '0' COMMENT '報名方式 0:個人 1:參考班會 2:地區群組',
  `pr_mbr_sn` int(11) NOT NULL COMMENT '道親編號',
  `pr_mbr_identity_sn` int(11) NOT NULL COMMENT '報名參班身分',
  `pr_mbr_group_sn` int(6) NOT NULL COMMENT '報名時連絡區SN',
  `pr_title_in_group` varchar(30) NOT NULL COMMENT '以群組報名時的群組',
  `pr_op_mbr_sn` int(11) NOT NULL COMMENT '操作人員 ID',
  `pr_create_time` datetime NOT NULL COMMENT '建立時間'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='班會成員';

-- --------------------------------------------------------

--
-- Table structure for table `tais_speaker_subject`
--

CREATE TABLE `tais_speaker_subject` (
  `ss_sn` int(11) NOT NULL,
  `ss_link_mbr_sn` int(11) NOT NULL,
  `ss_link_sbj_sn` int(11) NOT NULL,
  `ss_create_time` datetime NOT NULL,
  `ss_modify_time` datetime NOT NULL,
  `ss_op_mbr_sn` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_table_auth`
--

CREATE TABLE `tais_table_auth` (
  `ta_id` int(11) NOT NULL,
  `ta_link_gid` int(11) DEFAULT '0',
  `ta_title` varchar(50) DEFAULT NULL,
  `ta_code` varchar(50) DEFAULT NULL,
  `ta_add` int(11) DEFAULT NULL,
  `ta_edit` int(11) DEFAULT NULL,
  `ta_view` int(11) DEFAULT NULL,
  `ta_delete` int(11) DEFAULT NULL,
  `ta_op_ip` varchar(24) NOT NULL DEFAULT '',
  `ta_op_uid` int(11) NOT NULL DEFAULT '0',
  `ta_create_time` datetime DEFAULT NULL,
  `ta_modify_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_table_fld_auth`
--

CREATE TABLE `tais_table_fld_auth` (
  `tfa_id` int(11) NOT NULL,
  `tfa_link_table_auth` int(11) DEFAULT '0',
  `tfa_name` varchar(50) DEFAULT NULL,
  `tfa_title` varchar(50) DEFAULT NULL,
  `tfa_list` int(11) DEFAULT NULL COMMENT 'on list view',
  `tfa_add` int(11) DEFAULT NULL,
  `tfa_edit` int(11) DEFAULT NULL,
  `tfa_view` int(11) DEFAULT NULL,
  `tfa_op_ip` varchar(24) NOT NULL DEFAULT '',
  `tfa_op_uid` int(11) NOT NULL DEFAULT '0',
  `tfa_create_time` datetime DEFAULT NULL,
  `tfa_modify_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_tao_speaker_repositary`
--

CREATE TABLE `tais_tao_speaker_repositary` (
  `tsr_sn` int(11) NOT NULL COMMENT '記錄ID',
  `tsr_certificate_num` varchar(24) DEFAULT NULL COMMENT '立證講師證書號碼',
  `tsr_link_mbr_sn` int(11) NOT NULL COMMENT '講師_連結',
  `tsr_certificate_kind` set('1','2','3','4') NOT NULL COMMENT '1.講員 2.講師 3.立證講師 4.一題講師',
  `tsr_certificate_date` date DEFAULT NULL COMMENT '認證日期',
  `tsr_end_date` date DEFAULT NULL COMMENT '結束日期(不續領證)',
  `tsr_class` varchar(120) DEFAULT NULL COMMENT '期別',
  `tsr_current_status` char(2) DEFAULT NULL COMMENT '目前狀態',
  `tsr_title` char(2) DEFAULT NULL COMMENT '現在稱呼',
  `tsr_language` varchar(30) DEFAULT NULL COMMENT '1.台語 2.華語 3.英語 4.泰語 5.越南語 6 西班牙語 7.德語 8.日語',
  `tsr_create` datetime DEFAULT NULL COMMENT '建立日期',
  `tsr_modify` datetime DEFAULT NULL COMMENT '修改日期',
  `tsr_op_ip` varchar(24) DEFAULT NULL COMMENT '操作 - 來源IP',
  `tsr_op_id` int(11) DEFAULT NULL COMMENT '操作 - 使用者ID'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_territory_code`
--

CREATE TABLE `tais_territory_code` (
  `territory_sn` int(10) UNSIGNED NOT NULL,
  `territory_id` varchar(20) NOT NULL,
  `territory_name` varchar(50) NOT NULL,
  `territory_short` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_territory_owner`
--

CREATE TABLE `tais_territory_owner` (
  `territory_owner_sn` int(11) UNSIGNED NOT NULL,
  `territory_owner_uid` int(11) NOT NULL,
  `territory_owner_code_link` int(11) NOT NULL,
  `territory_owner_code` varchar(20) NOT NULL,
  `territory_owner_submitter` int(11) NOT NULL,
  `status` varchar(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_title_definition`
--

CREATE TABLE `tais_title_definition` (
  `td_sn` int(6) NOT NULL,
  `td_id_in_category` int(2) NOT NULL,
  `td_title` varchar(40) NOT NULL,
  `td_category` varchar(60) NOT NULL DEFAULT '',
  `td_description` varchar(60) NOT NULL,
  `td_op_mbr_sn` int(6) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_urls`
--

CREATE TABLE `tais_urls` (
  `url_id` int(11) NOT NULL,
  `url_topic` varchar(255) DEFAULT NULL,
  `url_url` varchar(255) DEFAULT NULL,
  `url_create` date DEFAULT NULL,
  `url_cnt` int(11) DEFAULT '0',
  `url_op_ip` varchar(20) DEFAULT NULL,
  `url_modify` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_user_info`
--

CREATE TABLE `tais_user_info` (
  `ui_sn` int(11) NOT NULL,
  `ui_allow_login` tinyint(1) NOT NULL DEFAULT '1' COMMENT '使用者資料禁止刪除。已離職使用者, 以此禁止使用系統',
  `ui_real_name` varchar(48) NOT NULL DEFAULT '',
  `ui_email` varchar(255) DEFAULT '',
  `ui_mobile_phone` varchar(48) DEFAULT '',
  `ui_account` varchar(16) NOT NULL DEFAULT '',
  `ui_password` varchar(128) NOT NULL DEFAULT '',
  `ui_salt` varchar(128) NOT NULL DEFAULT '',
  `ui_help_question` varchar(255) DEFAULT '',
  `ui_help_answer` varchar(48) DEFAULT '',
  `ui_regdate` datetime DEFAULT NULL,
  `ui_last_login` datetime DEFAULT NULL,
  `ui_login_errors` smallint(6) DEFAULT NULL,
  `ui_op_ip` varchar(24) NOT NULL DEFAULT '',
  `ui_op_uid` int(11) NOT NULL DEFAULT '0',
  `ui_create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ui_modify_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ui_mbr_link` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tais_warehouses`
--

CREATE TABLE `tais_warehouses` (
  `wh_sn` int(11) NOT NULL,
  `wh_code` varchar(10) NOT NULL,
  `wh_name` varchar(100) NOT NULL,
  `wh_desc` varchar(255) DEFAULT NULL,
  `wh_status` tinyint(1) NOT NULL,
  `wh_photo` varchar(100) NOT NULL,
  `wh_op_ip` varchar(24) NOT NULL,
  `wh_op_uid` int(11) NOT NULL,
  `wh_create_time` datetime NOT NULL,
  `wh_modify_time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `taiwan_city_stree`
--

CREATE TABLE `taiwan_city_stree` (
  `cs_sn` int(7) NOT NULL,
  `cs_zip_code` varchar(8) NOT NULL,
  `cs_city` varchar(20) NOT NULL,
  `cs_area` varchar(48) NOT NULL,
  `cs_stree` varchar(120) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `update_group`
--

CREATE TABLE `update_group` (
  `mbr_sn` int(11) NOT NULL,
  `group_sn` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apk_version`
--
ALTER TABLE `apk_version`
  ADD PRIMARY KEY (`apk_record_sn`);

--
-- Indexes for table `fields_name`
--
ALTER TABLE `fields_name`
  ADD PRIMARY KEY (`fn_sn`);

--
-- Indexes for table `holly_house_position`
--
ALTER TABLE `holly_house_position`
  ADD PRIMARY KEY (`hp_sn`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `select_list`
--
ALTER TABLE `select_list`
  ADD PRIMARY KEY (`sl_sn`);

--
-- Indexes for table `tais_all_phpscripts`
--
ALTER TABLE `tais_all_phpscripts`
  ADD PRIMARY KEY (`ap_sn`);

--
-- Indexes for table `tais_attain_tao`
--
ALTER TABLE `tais_attain_tao`
  ADD PRIMARY KEY (`at_sn`);

--
-- Indexes for table `tais_at_upload_docs`
--
ALTER TABLE `tais_at_upload_docs`
  ADD PRIMARY KEY (`ud_sn`),
  ADD UNIQUE KEY `ud_filename` (`ud_filename`);

--
-- Indexes for table `tais_communication_set`
--
ALTER TABLE `tais_communication_set`
  ADD PRIMARY KEY (`cs_sn`);

--
-- Indexes for table `tais_cyc_group_user`
--
ALTER TABLE `tais_cyc_group_user`
  ADD PRIMARY KEY (`cgu_sn`);

--
-- Indexes for table `tais_cyc_learned_histories`
--
ALTER TABLE `tais_cyc_learned_histories`
  ADD PRIMARY KEY (`lh_sn`);

--
-- Indexes for table `tais_cyc_program`
--
ALTER TABLE `tais_cyc_program`
  ADD PRIMARY KEY (`cycprg_sn`);

--
-- Indexes for table `tais_cyc_tree_course`
--
ALTER TABLE `tais_cyc_tree_course`
  ADD PRIMARY KEY (`crs_sn`);

--
-- Indexes for table `tais_cyc_tree_menu`
--
ALTER TABLE `tais_cyc_tree_menu`
  ADD PRIMARY KEY (`menu_sn`);

--
-- Indexes for table `tais_device_license_record`
--
ALTER TABLE `tais_device_license_record`
  ADD PRIMARY KEY (`dlr_sn`);

--
-- Indexes for table `tais_enlightent_master`
--
ALTER TABLE `tais_enlightent_master`
  ADD PRIMARY KEY (`em_sn`);

--
-- Indexes for table `tais_function_auth`
--
ALTER TABLE `tais_function_auth`
  ADD PRIMARY KEY (`fa_id`);

--
-- Indexes for table `tais_func_auth_tree`
--
ALTER TABLE `tais_func_auth_tree`
  ADD PRIMARY KEY (`tfa_id`);

--
-- Indexes for table `tais_group`
--
ALTER TABLE `tais_group`
  ADD PRIMARY KEY (`gp_sn`);

--
-- Indexes for table `tais_groups_nested`
--
ALTER TABLE `tais_groups_nested`
  ADD UNIQUE KEY `gn_sn_2` (`gn_sn`),
  ADD KEY `gn_sn` (`gn_sn`),
  ADD KEY `gn_sn_3` (`gn_sn`);

--
-- Indexes for table `tais_group_link`
--
ALTER TABLE `tais_group_link`
  ADD PRIMARY KEY (`mg_sn`);

--
-- Indexes for table `tais_group_link_google_form`
--
ALTER TABLE `tais_group_link_google_form`
  ADD PRIMARY KEY (`mg_sn`);

--
-- Indexes for table `tais_hh_leader`
--
ALTER TABLE `tais_hh_leader`
  ADD PRIMARY KEY (`hl_sn`);

--
-- Indexes for table `tais_holly_house`
--
ALTER TABLE `tais_holly_house`
  ADD PRIMARY KEY (`hh_sn`),
  ADD UNIQUE KEY `hh_no` (`hh_no`);

--
-- Indexes for table `tais_lesson`
--
ALTER TABLE `tais_lesson`
  ADD PRIMARY KEY (`ls_sn`);

--
-- Indexes for table `tais_livestream`
--
ALTER TABLE `tais_livestream`
  ADD PRIMARY KEY (`ls_sn`);

--
-- Indexes for table `tais_login_attempts`
--
ALTER TABLE `tais_login_attempts`
  ADD PRIMARY KEY (`la_id`);

--
-- Indexes for table `tais_login_groups`
--
ALTER TABLE `tais_login_groups`
  ADD PRIMARY KEY (`lg_sn`);

--
-- Indexes for table `tais_login_group_users`
--
ALTER TABLE `tais_login_group_users`
  ADD PRIMARY KEY (`gu_sn`);

--
-- Indexes for table `tais_mbr_base`
--
ALTER TABLE `tais_mbr_base`
  ADD PRIMARY KEY (`mbr_sn`),
  ADD UNIQUE KEY `mbr_no` (`mbr_no`,`mbr_person_id`);

--
-- Indexes for table `tais_mbr_base_google_form`
--
ALTER TABLE `tais_mbr_base_google_form`
  ADD PRIMARY KEY (`mbr_sn`),
  ADD UNIQUE KEY `mbr_no` (`mbr_no`,`mbr_person_id`);

--
-- Indexes for table `tais_mbr_permission`
--
ALTER TABLE `tais_mbr_permission`
  ADD PRIMARY KEY (`mp_sn`);

--
-- Indexes for table `tais_member_group`
--
ALTER TABLE `tais_member_group`
  ADD PRIMARY KEY (`mg_sn`);

--
-- Indexes for table `tais_page_permission`
--
ALTER TABLE `tais_page_permission`
  ADD PRIMARY KEY (`pgp_sn`),
  ADD UNIQUE KEY `pgp_index` (`pgp_index`),
  ADD UNIQUE KEY `pgp_page_name` (`pgp_page_name`);

--
-- Indexes for table `tais_participant_identity`
--
ALTER TABLE `tais_participant_identity`
  ADD PRIMARY KEY (`pi_sn`);

--
-- Indexes for table `tais_phrase_store`
--
ALTER TABLE `tais_phrase_store`
  ADD PRIMARY KEY (`ps_id`),
  ADD UNIQUE KEY `ps_id` (`ps_id`);

--
-- Indexes for table `tais_product_stock`
--
ALTER TABLE `tais_product_stock`
  ADD PRIMARY KEY (`ps_sn`);

--
-- Indexes for table `tais_program`
--
ALTER TABLE `tais_program`
  ADD PRIMARY KEY (`prg_sn`);

--
-- Indexes for table `tais_program_category`
--
ALTER TABLE `tais_program_category`
  ADD PRIMARY KEY (`prg_cate_sn`);

--
-- Indexes for table `tais_program_date`
--
ALTER TABLE `tais_program_date`
  ADD PRIMARY KEY (`pd_sn`);

--
-- Indexes for table `tais_program_operator`
--
ALTER TABLE `tais_program_operator`
  ADD PRIMARY KEY (`po_sn`);

--
-- Indexes for table `tais_program_participant`
--
ALTER TABLE `tais_program_participant`
  ADD PRIMARY KEY (`pp_sn`);

--
-- Indexes for table `tais_program_participant_google_form`
--
ALTER TABLE `tais_program_participant_google_form`
  ADD PRIMARY KEY (`pp_sn`);

--
-- Indexes for table `tais_program_registration`
--
ALTER TABLE `tais_program_registration`
  ADD PRIMARY KEY (`pr_sn`);

--
-- Indexes for table `tais_speaker_subject`
--
ALTER TABLE `tais_speaker_subject`
  ADD PRIMARY KEY (`ss_sn`);

--
-- Indexes for table `tais_table_auth`
--
ALTER TABLE `tais_table_auth`
  ADD PRIMARY KEY (`ta_id`);

--
-- Indexes for table `tais_table_fld_auth`
--
ALTER TABLE `tais_table_fld_auth`
  ADD PRIMARY KEY (`tfa_id`);

--
-- Indexes for table `tais_tao_speaker_repositary`
--
ALTER TABLE `tais_tao_speaker_repositary`
  ADD PRIMARY KEY (`tsr_sn`),
  ADD UNIQUE KEY `tsr_link_mbr_sn` (`tsr_link_mbr_sn`);

--
-- Indexes for table `tais_territory_code`
--
ALTER TABLE `tais_territory_code`
  ADD PRIMARY KEY (`territory_sn`);

--
-- Indexes for table `tais_territory_owner`
--
ALTER TABLE `tais_territory_owner`
  ADD PRIMARY KEY (`territory_owner_sn`);

--
-- Indexes for table `tais_title_definition`
--
ALTER TABLE `tais_title_definition`
  ADD PRIMARY KEY (`td_sn`);

--
-- Indexes for table `tais_urls`
--
ALTER TABLE `tais_urls`
  ADD PRIMARY KEY (`url_id`);

--
-- Indexes for table `tais_user_info`
--
ALTER TABLE `tais_user_info`
  ADD PRIMARY KEY (`ui_sn`),
  ADD UNIQUE KEY `ui_account` (`ui_account`),
  ADD UNIQUE KEY `ui_email` (`ui_email`);

--
-- Indexes for table `tais_warehouses`
--
ALTER TABLE `tais_warehouses`
  ADD PRIMARY KEY (`wh_sn`);

--
-- Indexes for table `taiwan_city_stree`
--
ALTER TABLE `taiwan_city_stree`
  ADD PRIMARY KEY (`cs_sn`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apk_version`
--
ALTER TABLE `apk_version`
  MODIFY `apk_record_sn` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fields_name`
--
ALTER TABLE `fields_name`
  MODIFY `fn_sn` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `holly_house_position`
--
ALTER TABLE `holly_house_position`
  MODIFY `hp_sn` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `select_list`
--
ALTER TABLE `select_list`
  MODIFY `sl_sn` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_all_phpscripts`
--
ALTER TABLE `tais_all_phpscripts`
  MODIFY `ap_sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_attain_tao`
--
ALTER TABLE `tais_attain_tao`
  MODIFY `at_sn` int(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_at_upload_docs`
--
ALTER TABLE `tais_at_upload_docs`
  MODIFY `ud_sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_communication_set`
--
ALTER TABLE `tais_communication_set`
  MODIFY `cs_sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_cyc_group_user`
--
ALTER TABLE `tais_cyc_group_user`
  MODIFY `cgu_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '記錄ID';

--
-- AUTO_INCREMENT for table `tais_cyc_learned_histories`
--
ALTER TABLE `tais_cyc_learned_histories`
  MODIFY `lh_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '記錄ID';

--
-- AUTO_INCREMENT for table `tais_cyc_program`
--
ALTER TABLE `tais_cyc_program`
  MODIFY `cycprg_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '記錄ID';

--
-- AUTO_INCREMENT for table `tais_cyc_tree_course`
--
ALTER TABLE `tais_cyc_tree_course`
  MODIFY `crs_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '記錄_ID';

--
-- AUTO_INCREMENT for table `tais_cyc_tree_menu`
--
ALTER TABLE `tais_cyc_tree_menu`
  MODIFY `menu_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '記錄_ID';

--
-- AUTO_INCREMENT for table `tais_device_license_record`
--
ALTER TABLE `tais_device_license_record`
  MODIFY `dlr_sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_enlightent_master`
--
ALTER TABLE `tais_enlightent_master`
  MODIFY `em_sn` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_function_auth`
--
ALTER TABLE `tais_function_auth`
  MODIFY `fa_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_func_auth_tree`
--
ALTER TABLE `tais_func_auth_tree`
  MODIFY `tfa_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_group`
--
ALTER TABLE `tais_group`
  MODIFY `gp_sn` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_groups_nested`
--
ALTER TABLE `tais_groups_nested`
  MODIFY `gn_sn` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_group_link`
--
ALTER TABLE `tais_group_link`
  MODIFY `mg_sn` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_group_link_google_form`
--
ALTER TABLE `tais_group_link_google_form`
  MODIFY `mg_sn` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_hh_leader`
--
ALTER TABLE `tais_hh_leader`
  MODIFY `hl_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '佛堂壇主的自編序號';

--
-- AUTO_INCREMENT for table `tais_holly_house`
--
ALTER TABLE `tais_holly_house`
  MODIFY `hh_sn` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_livestream`
--
ALTER TABLE `tais_livestream`
  MODIFY `ls_sn` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_login_attempts`
--
ALTER TABLE `tais_login_attempts`
  MODIFY `la_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_login_groups`
--
ALTER TABLE `tais_login_groups`
  MODIFY `lg_sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_login_group_users`
--
ALTER TABLE `tais_login_group_users`
  MODIFY `gu_sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_mbr_base`
--
ALTER TABLE `tais_mbr_base`
  MODIFY `mbr_sn` int(255) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_mbr_base_google_form`
--
ALTER TABLE `tais_mbr_base_google_form`
  MODIFY `mbr_sn` int(255) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_mbr_permission`
--
ALTER TABLE `tais_mbr_permission`
  MODIFY `mp_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '資料ID';

--
-- AUTO_INCREMENT for table `tais_member_group`
--
ALTER TABLE `tais_member_group`
  MODIFY `mg_sn` int(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_page_permission`
--
ALTER TABLE `tais_page_permission`
  MODIFY `pgp_sn` int(2) NOT NULL AUTO_INCREMENT COMMENT '資料ID';

--
-- AUTO_INCREMENT for table `tais_participant_identity`
--
ALTER TABLE `tais_participant_identity`
  MODIFY `pi_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '資料ID';

--
-- AUTO_INCREMENT for table `tais_phrase_store`
--
ALTER TABLE `tais_phrase_store`
  MODIFY `ps_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_product_stock`
--
ALTER TABLE `tais_product_stock`
  MODIFY `ps_sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_program`
--
ALTER TABLE `tais_program`
  MODIFY `prg_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '記錄ID';

--
-- AUTO_INCREMENT for table `tais_program_date`
--
ALTER TABLE `tais_program_date`
  MODIFY `pd_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '資料ID';

--
-- AUTO_INCREMENT for table `tais_program_operator`
--
ALTER TABLE `tais_program_operator`
  MODIFY `po_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '資料ID';

--
-- AUTO_INCREMENT for table `tais_program_participant`
--
ALTER TABLE `tais_program_participant`
  MODIFY `pp_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '資料ID';

--
-- AUTO_INCREMENT for table `tais_program_participant_google_form`
--
ALTER TABLE `tais_program_participant_google_form`
  MODIFY `pp_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '資料ID';

--
-- AUTO_INCREMENT for table `tais_program_registration`
--
ALTER TABLE `tais_program_registration`
  MODIFY `pr_sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_speaker_subject`
--
ALTER TABLE `tais_speaker_subject`
  MODIFY `ss_sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_table_auth`
--
ALTER TABLE `tais_table_auth`
  MODIFY `ta_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_table_fld_auth`
--
ALTER TABLE `tais_table_fld_auth`
  MODIFY `tfa_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_tao_speaker_repositary`
--
ALTER TABLE `tais_tao_speaker_repositary`
  MODIFY `tsr_sn` int(11) NOT NULL AUTO_INCREMENT COMMENT '記錄ID';

--
-- AUTO_INCREMENT for table `tais_territory_code`
--
ALTER TABLE `tais_territory_code`
  MODIFY `territory_sn` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_territory_owner`
--
ALTER TABLE `tais_territory_owner`
  MODIFY `territory_owner_sn` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_title_definition`
--
ALTER TABLE `tais_title_definition`
  MODIFY `td_sn` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_urls`
--
ALTER TABLE `tais_urls`
  MODIFY `url_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_user_info`
--
ALTER TABLE `tais_user_info`
  MODIFY `ui_sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tais_warehouses`
--
ALTER TABLE `tais_warehouses`
  MODIFY `wh_sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `taiwan_city_stree`
--
ALTER TABLE `taiwan_city_stree`
  MODIFY `cs_sn` int(7) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

```
