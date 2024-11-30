---
title: database_struct_new
description: --blank--
---

> 新版資料庫架構設計 spec

## ERD

https://dbdiagram.io/e/66599c30b65d9338792c5d3a/665aa7afb65d9338793a1192

current code in DBML:

```dbml
// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

// 用戶訊息
Table users {
    id int [pk]
    name string
    pwd string
    email string
    first_name string
    last_name string
    phone string // TODO: 手機與家用要分開
    is_backend_user bool // 是否為後台用戶
    backend_level int // 後台權限
    created_at datetime
    updated_at datetime
}

// 班會訊息
Table programs {
    id int [pk]
    name string
    programs_name_id id

    type int // 班會性質
    start_time datetime // 班會開始時間
    end_time datetime // 班會結束時間
    duration_hour float // 總時長(獻供到結班)
    holly_house_id int // 在哪個佛堂
    // TODO: 是否有簽到、簽退
    google_meet_url string
    youtube_url string
    created_at datetime
    updated_at datetime
}

// 班會名稱，例如新春願、辦事人員班
Table programs_name {
    id int [pk]
    name string
    description string
    created_at datetime
    updated_at datetimep
}

Table holly_houses {
    id int [pk]
    name string
    gps_latitude float // gps 緯度
    gps_longitude float // gps 經度
    owner_id int
    created_at datetime
    updated_at datetime
}

// 參班記錄
Table participate_records {
    id int [pk]
    user_id int
    program_id int
    created_at datetime
    updated_at datetime
}

Ref: programs.holly_house_id > holly_houses.id
Ref: holly_houses.owner_id > users.id
Ref: participate_records.user_id > users.id
Ref: participate_records.program_id > programs.id
Ref: programs.programs_name_id > programs_name.id
```

---

## Reference:

- 目前 sql 架構：[iktxyorg_tais_structure](../references/iktxyorg_tais_structure.md)
