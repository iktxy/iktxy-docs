---
title: Weekly Meeting Note
description: Meeting note.
---

# Weekly Meeting Note

> 每週會議記錄

## 2024-06-12

### Questions

SQL 舊版的 table 有些欄位用途想再確認一下用途

- user

```sql=
`ui_salt` varchar(128) NOT NULL DEFAULT '', // 密碼加鹽
`ui_help_question` varchar(255) DEFAULT '', // 忘記密碼的備援問題
`ui_help_answer` varchar(48) DEFAULT '', // 備援問題的解答
`ui_regdate` datetime DEFAULT NULL, // 註冊日期
`ui_login_errors` smallint(6) DEFAULT NULL, // 密碼錯誤次數
`ui_op_ip` varchar(24) NOT NULL DEFAULT '', // 操作者的 ip
`ui_op_uid` int(11) NOT NULL DEFAULT '0', // 操作者的 id
```

---

## 2024-05-22

tais = Tao Affair Integrate System

後台管理系統 - 大頭照的 issue：

- 道親擔心隱私問題
- solution: 可以先設初始隨機圖片當大頭照，後續可再修改

---

## 2024-05-08

使用者名稱的差異？ user or member

舊版 database 中 user 為"用戶"，member 為"道親"

user 需要提供 email
道親大部分沒有在用 email

\*important: 不收集道親的身分證字號

table `tais_attain_tao`: 記錄求道當天資訊

`tais_mbr_base`

- `mbr_sn`: 遞增數字
- `mbr_no`: e.g. tp010, 手動編輯的地區道親編號
    目前用來產生 qrcode，但可能會產生衝突

---

## 2024-04-17

### Todo

開專案:

- [ ] 後端 (api + database)
- [ ] 前端
  - [ ] app
  - [ ] 後台管理系統

sql 內的欄位：

- `at_create`: 建立時間
- `at_modify`: 最近修改時間

tais_mbr_base member_base 道親基本資料
tais_attain_tao attain tao 求道資料(僅記錄求道日當天的資訊)
tais_phrase_store 片語、詞語
tais_program 班會名稱
tais_program_date 班會舉辦日期
tais_program_participant 班員參加班會的記錄
tais_program_registration 參班之前的報名表
tais_program_operator 舉行班會的相關操作人員記錄表

tais_program_category 班會種類(道義成全班、經典研習班、活動、會議....)
tais_groups_nested 二進位樹狀結構( binary tree)
tais_holly_house 先天佛堂
tais_livestream 影音串流人員
tais_login_attempts 登錄次數，若登錄超過５次，該帳號立即停止登入
tais_mbr_permission 道親的操作類別:是『頁面』或是『群組』
tais_tao_speaker_repositary 認證講師資料表
