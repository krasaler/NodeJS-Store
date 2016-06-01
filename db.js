
/** category indexes **/
db.getCollection("category").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** customer indexes **/
db.getCollection("customer").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** manufacturer indexes **/
db.getCollection("manufacturer").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** order indexes **/
db.getCollection("order").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** order_product indexes **/
db.getCollection("order_product").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** product indexes **/
db.getCollection("product").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** product_to_category indexes **/
db.getCollection("product_to_category").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** review indexes **/
db.getCollection("review").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** category records **/
db.getCollection("category").insert({
  "_id": 24,
  "parent_id": 0,
  "name": "Phone",
  "image": "/image/category/Phone.jpeg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 33,
  "parent_id": 0,
  "name": "Cameras",
  "image": "/image/category/Cameras.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 28,
  "parent_id": 25,
  "name": "Monitors",
  "image": "/image/category/monitors.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 32,
  "parent_id": 25,
  "name": "Web cameras",
  "image": "/image/category/web_cameras.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 31,
  "parent_id": 25,
  "name": "Scanners",
  "image": "/image/category/Scanners.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 30,
  "parent_id": 25,
  "name": "Printers",
  "image": "/image/category/printers.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 29,
  "parent_id": 25,
  "name": "Mice and Trackballs",
  "image": "/image/category/Mice.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 34,
  "parent_id": 0,
  "name": "MP3 Players",
  "image": "/image/category/MP3_Players.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 17,
  "parent_id": 0,
  "name": "Software",
  "image": "/image/category/Software.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 20,
  "parent_id": 0,
  "name": "Desktops",
  "image": "/image/category/Desktops.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 18,
  "parent_id": 0,
  "name": "Laptops",
  "image": "/image/category/Laptops.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 57,
  "parent_id": 0,
  "name": "Tablets",
  "image": "/image/category/tablets.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": NumberInt(25),
  "parent_id": NumberInt(0),
  "name": "Components",
  "image": "/image/category/Components.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 45,
  "parent_id": 18,
  "name": "Windows",
  "image": "/image/category/windows.png",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 27,
  "parent_id": 20,
  "name": "Macs",
  "image": "/image/category/macs.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});
db.getCollection("category").insert({
  "_id": 26,
  "parent_id": 20,
  "name": "PC",
  "image": "/image/category/pc.jpg",
  "description": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета."
});

/** customer records **/
db.getCollection("customer").insert({
  "_id": ObjectId("574c796d2eec892c236421a2"),
  "nickname": "krasaler",
  "email": "alex@mail.ru",
  "password": "demo1234"
});

/** manufacturer records **/
db.getCollection("manufacturer").insert({
  "_id": "10",
  "name": "Sony",
  "image": "catalog/demo/sony_logo.jpg",
  "sort_order": "0"
});
db.getCollection("manufacturer").insert({
  "_id": "9",
  "name": "Canon",
  "image": "catalog/demo/canon_logo.jpg",
  "sort_order": "0"
});
db.getCollection("manufacturer").insert({
  "_id": "8",
  "name": "Apple",
  "image": "catalog/demo/apple_logo.jpg",
  "sort_order": "0"
});
db.getCollection("manufacturer").insert({
  "_id": "7",
  "name": "Hewlett-Packard",
  "image": "catalog/demo/hp_logo.jpg",
  "sort_order": "0"
});
db.getCollection("manufacturer").insert({
  "_id": "6",
  "name": "Palm",
  "image": "catalog/demo/palm_logo.jpg",
  "sort_order": "0"
});
db.getCollection("manufacturer").insert({
  "_id": "5",
  "name": "HTC",
  "image": "catalog/demo/htc_logo.jpg",
  "sort_order": "0"
});

/** order records **/
db.getCollection("order").insert({
  "_id": ObjectId("57499ae1ed12c2f01163fd51"),
  "payment_first_name": "firstname",
  "payment_last_name": "lastname",
  "email": "email",
  "payment_telefone": "phone",
  "payment_post": "post",
  "payment_adress": "address",
  "payment_city": "city",
  "payment_country": "country",
  "shipping_first_name": "firstname",
  "shipping_last_name": "lastname",
  "shipping_post": "poist",
  "shipping_address": "address",
  "shipping_telefone": "phone",
  "shipping_city": "city",
  "shipping_country": "country"
});
db.getCollection("order").insert({
  "_id": ObjectId("57499b42ed12c2f01163fd52"),
  "payment_first_name": "firstname",
  "payment_last_name": "lastname",
  "email": "email",
  "payment_telefone": "phone",
  "payment_post": "post",
  "payment_adress": "address",
  "payment_city": "city",
  "payment_country": "country",
  "shipping_first_name": "firstname",
  "shipping_last_name": "lastname",
  "shipping_post": "poist",
  "shipping_address": "address",
  "shipping_telefone": "phone",
  "shipping_city": "city",
  "shipping_country": "country"
});
db.getCollection("order").insert({
  "_id": ObjectId("57499b5041fc89301afd96be"),
  "payment_first_name": "firstname",
  "payment_last_name": "lastname",
  "email": "email",
  "payment_telefone": "phone",
  "payment_post": "post",
  "payment_adress": "address",
  "payment_city": "city",
  "payment_country": "country",
  "shipping_first_name": "firstname",
  "shipping_last_name": "lastname",
  "shipping_post": "poist",
  "shipping_address": "address",
  "shipping_telefone": "phone",
  "shipping_city": "city",
  "shipping_country": "country"
});
db.getCollection("order").insert({
  "_id": ObjectId("57499d14ad39b6e81d828dc7"),
  "payment_first_name": "firstname",
  "payment_last_name": "lastname",
  "email": "email",
  "payment_telefone": "phone",
  "payment_post": "post",
  "payment_adress": "address",
  "payment_city": "city",
  "payment_country": "country",
  "shipping_first_name": "firstname",
  "shipping_last_name": "lastname",
  "shipping_post": "poist",
  "shipping_address": "address",
  "shipping_telefone": "phone",
  "shipping_city": "city",
  "shipping_country": "country"
});
db.getCollection("order").insert({
  "_id": ObjectId("57499d297f23fb381d5a97d0"),
  "payment_first_name": "firstname",
  "payment_last_name": "lastname",
  "email": "email",
  "payment_telefone": "phone",
  "payment_post": "post",
  "payment_adress": "address",
  "payment_city": "city",
  "payment_country": "country",
  "shipping_first_name": "firstname",
  "shipping_last_name": "lastname",
  "shipping_post": "poist",
  "shipping_address": "address",
  "shipping_telefone": "phone",
  "shipping_city": "city",
  "shipping_country": "country"
});
db.getCollection("order").insert({
  "_id": ObjectId("57499d6496a78a540ada98d4"),
  "payment_first_name": "firstname",
  "payment_last_name": "lastname",
  "email": "email",
  "payment_telefone": "phone",
  "payment_post": "post",
  "payment_adress": "address",
  "payment_city": "city",
  "payment_country": "country",
  "shipping_first_name": "firstname",
  "shipping_last_name": "lastname",
  "shipping_post": "poist",
  "shipping_address": "address",
  "shipping_telefone": "phone",
  "shipping_city": "city",
  "shipping_country": "country"
});
db.getCollection("order").insert({
  "_id": ObjectId("57499d94d7f1bde025cf5879"),
  "payment_first_name": "firstname",
  "payment_last_name": "lastname",
  "email": "email",
  "payment_telefone": "phone",
  "payment_post": "post",
  "payment_adress": "address",
  "payment_city": "city",
  "payment_country": "country",
  "shipping_first_name": "firstname",
  "shipping_last_name": "lastname",
  "shipping_post": "poist",
  "shipping_address": "address",
  "shipping_telefone": "phone",
  "shipping_city": "city",
  "shipping_country": "country"
});
db.getCollection("order").insert({
  "_id": ObjectId("57499dde1b42fa04126dcaa1"),
  "payment_first_name": "firstname",
  "payment_last_name": "lastname",
  "email": "email",
  "payment_telefone": "phone",
  "payment_post": "post",
  "payment_adress": "address",
  "payment_city": "city",
  "payment_country": "country",
  "shipping_first_name": "firstname",
  "shipping_last_name": "lsatname",
  "shipping_post": "post",
  "shipping_address": "address",
  "shipping_telefone": "phone",
  "shipping_city": "city",
  "shipping_country": "country"
});
db.getCollection("order").insert({
  "_id": ObjectId("57499e03abf43c940a6b833c"),
  "payment_first_name": "firstname",
  "payment_last_name": "lastname",
  "email": "email",
  "payment_telefone": "phone",
  "payment_post": "post",
  "payment_adress": "address",
  "payment_city": "city",
  "payment_country": "country",
  "shipping_first_name": "firstname",
  "shipping_last_name": "lsatname",
  "shipping_post": "post",
  "shipping_address": "address",
  "shipping_telefone": "phone",
  "shipping_city": "city",
  "shipping_country": "country"
});
db.getCollection("order").insert({
  "_id": ObjectId("574ae09b06126e102ff13603"),
  "payment_first_name": "firstName",
  "payment_last_name": "lastname",
  "email": "email",
  "payment_telefone": "phone",
  "payment_post": "post",
  "payment_adress": "address",
  "payment_city": "city",
  "payment_country": "country",
  "shipping_first_name": "firstname",
  "shipping_last_name": "lastaname",
  "shipping_post": "post",
  "shipping_address": "address",
  "shipping_telefone": "phone",
  "shipping_city": "city",
  "shipping_country": "country"
});
db.getCollection("order").insert({
  "_id": ObjectId("574ae2effc70715c170715f8"),
  "payment_first_name": "ssssss",
  "payment_last_name": "aaaaa",
  "email": "",
  "payment_telefone": "aaaaa",
  "payment_post": "",
  "payment_adress": "aaaaaaa",
  "payment_city": "aaa",
  "payment_country": "ass",
  "shipping_first_name": "",
  "shipping_last_name": "",
  "shipping_post": "",
  "shipping_address": "",
  "shipping_telefone": "",
  "shipping_city": "",
  "shipping_country": ""
});
db.getCollection("order").insert({
  "_id": ObjectId("574ae3228f8bf0a80fa8876f"),
  "payment_first_name": "ssssss",
  "payment_last_name": "aaaaa",
  "email": "",
  "payment_telefone": "aaaaa",
  "payment_post": "",
  "payment_adress": "aaaaaaa",
  "payment_city": "aaa",
  "payment_country": "ass",
  "shipping_first_name": "",
  "shipping_last_name": "",
  "shipping_post": "",
  "shipping_address": "",
  "shipping_telefone": "",
  "shipping_city": "",
  "shipping_country": ""
});
db.getCollection("order").insert({
  "_id": ObjectId("574ae34ea0fa670007a4f66d"),
  "payment_first_name": "paymnee",
  "payment_last_name": "aaaaaaaa",
  "email": "",
  "payment_telefone": "aaaaaa",
  "payment_post": "",
  "payment_adress": "aaaaaa",
  "payment_city": "aaaaaa",
  "payment_country": "aaaa",
  "shipping_first_name": "",
  "shipping_last_name": "",
  "shipping_post": "",
  "shipping_address": "",
  "shipping_telefone": "",
  "shipping_city": "",
  "shipping_country": ""
});
db.getCollection("order").insert({
  "_id": ObjectId("574ae394a0fa670007a4f670"),
  "payment_first_name": "paymnee",
  "payment_last_name": "aaaaaaaa",
  "email": "",
  "payment_telefone": "aaaaaa",
  "payment_post": "",
  "payment_adress": "aaaaaa",
  "payment_city": "aaaaaa",
  "payment_country": "aaaa",
  "shipping_first_name": "",
  "shipping_last_name": "",
  "shipping_post": "",
  "shipping_address": "",
  "shipping_telefone": "",
  "shipping_city": "",
  "shipping_country": ""
});
db.getCollection("order").insert({
  "_id": ObjectId("574ae3a4a0fa670007a4f673"),
  "payment_first_name": "aaaaaa",
  "payment_last_name": "ssssss",
  "email": "dddd",
  "payment_telefone": "aaaaaaa",
  "payment_post": "",
  "payment_adress": "aaaaaaa",
  "payment_city": "aaaaaaaa",
  "payment_country": "aaaaa",
  "shipping_first_name": "",
  "shipping_last_name": "",
  "shipping_post": "",
  "shipping_address": "",
  "shipping_telefone": "",
  "shipping_city": "",
  "shipping_country": ""
});
db.getCollection("order").insert({
  "_id": ObjectId("574ae4dca0fa670007a4f676"),
  "payment_first_name": "aaaa",
  "payment_last_name": "sss",
  "email": "",
  "payment_telefone": "d",
  "payment_post": "",
  "payment_adress": "ss",
  "payment_city": "aa",
  "payment_country": "dd",
  "shipping_first_name": "",
  "shipping_last_name": "",
  "shipping_post": "",
  "shipping_address": "",
  "shipping_telefone": "",
  "shipping_city": "",
  "shipping_country": ""
});
db.getCollection("order").insert({
  "_id": ObjectId("574ae50a5143f0fc2ae36036"),
  "payment_first_name": "aaaaaaaaa",
  "payment_last_name": "aaaaaaaaa",
  "email": "",
  "payment_telefone": "aaaaaaaaa",
  "payment_post": "",
  "payment_adress": "aaaaaaaaa",
  "payment_city": "aaaaaaaaa",
  "payment_country": "aaaaaaaaa",
  "shipping_first_name": "aaaaaaaaa",
  "shipping_last_name": "aaaaaaaaa",
  "shipping_post": "",
  "shipping_address": "aaaaaaaaa",
  "shipping_telefone": "aaaaaaaaa",
  "shipping_city": "aaaaaaaaa",
  "shipping_country": "aaaaaaaaa"
});
db.getCollection("order").insert({
  "_id": ObjectId("574c77ce7e6eded026dd0b4d"),
  "payment_first_name": "aaaa",
  "payment_last_name": "aaaa",
  "email": "aaaa",
  "payment_telefone": "aaaa",
  "payment_post": "aaaa",
  "payment_adress": "aaaa",
  "payment_city": "aaaa",
  "payment_country": "aaaa",
  "shipping_first_name": "aaaa",
  "shipping_last_name": "aaaa",
  "shipping_post": "aaaa",
  "shipping_address": "aaaa",
  "shipping_telefone": "aaaa",
  "shipping_city": "aaaa",
  "shipping_country": "aaaa"
});
db.getCollection("order").insert({
  "_id": ObjectId("574c81ae1224f26c1d18b7a7"),
  "payment_first_name": "aaaaaaaaa",
  "payment_last_name": "aaaaaaaaa",
  "email": "aaaaaaaaa",
  "payment_telefone": "aaaaaaaaa",
  "payment_post": "aaaaaaaaa",
  "payment_adress": "aaaaaaaaa",
  "payment_city": "aaaaaaaaa",
  "payment_country": "aaaaaaaaa",
  "shipping_first_name": "aaaaaaaaa",
  "shipping_last_name": "aaaaaaaaa",
  "shipping_post": "aaaaaaaaa",
  "shipping_address": "aaaaaaaaa",
  "shipping_telefone": "aaaaaaaaa",
  "shipping_city": "aaaaaaaaa",
  "shipping_country": "aaaaaaaaa",
  "customer_id": "574c796d2eec892c236421a2",
  "date_added": ISODate("1970-01-01T00:00:00.0Z")
});
db.getCollection("order").insert({
  "_id": ObjectId("574c8618587d52a0207d0636"),
  "payment_first_name": "aaaaaaaa",
  "payment_last_name": "aaaaaaaa",
  "email": "aaaaaaaa",
  "payment_telefone": "aaaaaaaa",
  "payment_post": "aaaaaaaa",
  "payment_adress": "aaaaaaaa",
  "payment_city": "aaaaaaaa",
  "payment_country": "aaaaaaaa",
  "shipping_first_name": "aaaaaaaa",
  "shipping_last_name": "aaaaaaaa",
  "shipping_post": "aaaaaaaa",
  "shipping_address": "aaaaaaaa",
  "shipping_telefone": "aaaaaaaa",
  "shipping_city": "aaaaaaaa",
  "shipping_country": "aaaaaaaa",
  "customer_id": "574c796d2eec892c236421a2",
  "date_added": ISODate("1970-01-01T00:00:00.0Z")
});
db.getCollection("order").insert({
  "_id": ObjectId("574c8fefa6783b2029ce2497"),
  "payment_first_name": "addddddddd",
  "payment_last_name": "addddddddd",
  "email": "addddddddd",
  "payment_telefone": "addddddddd",
  "payment_post": "addddddddd",
  "payment_adress": "addddddddd",
  "payment_city": "addddddddd",
  "payment_country": "addddddddd",
  "shipping_first_name": "addddddddd",
  "shipping_last_name": "addddddddd",
  "shipping_post": "addddddddd",
  "shipping_address": "addddddddd",
  "shipping_telefone": "addddddddd",
  "shipping_city": "addddddddd",
  "shipping_country": "addddddddd",
  "customer_id": "574c796d2eec892c236421a2",
  "date_added": ISODate("2016-05-30T19:09:35.561Z")
});

/** order_product records **/
db.getCollection("order_product").insert({
  "_id": ObjectId("574ae34ea0fa670007a4f66e"),
  "order_id": ObjectId("574ae34ea0fa670007a4f66d"),
  "product_id": "31",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574ae34ea0fa670007a4f66f"),
  "order_id": ObjectId("574ae34ea0fa670007a4f66d"),
  "product_id": "30",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574ae394a0fa670007a4f671"),
  "order_id": ObjectId("574ae394a0fa670007a4f670"),
  "product_id": "31",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574ae394a0fa670007a4f672"),
  "order_id": ObjectId("574ae394a0fa670007a4f670"),
  "product_id": "30",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574ae3a4a0fa670007a4f674"),
  "order_id": ObjectId("574ae3a4a0fa670007a4f673"),
  "product_id": "31",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574ae3a4a0fa670007a4f675"),
  "order_id": ObjectId("574ae3a4a0fa670007a4f673"),
  "product_id": "30",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574ae4dca0fa670007a4f677"),
  "order_id": ObjectId("574ae4dca0fa670007a4f676"),
  "product_id": "31",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574ae4dca0fa670007a4f678"),
  "order_id": ObjectId("574ae4dca0fa670007a4f676"),
  "product_id": "30",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574ae50a5143f0fc2ae36037"),
  "order_id": ObjectId("574ae50a5143f0fc2ae36036"),
  "product_id": "31",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c77ce7e6eded026dd0b4e"),
  "order_id": ObjectId("574c77ce7e6eded026dd0b4d"),
  "product_id": "48",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c77ce7e6eded026dd0b4f"),
  "order_id": ObjectId("574c77ce7e6eded026dd0b4d"),
  "product_id": "49",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c77ce7e6eded026dd0b50"),
  "order_id": ObjectId("574c77ce7e6eded026dd0b4d"),
  "product_id": "47",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c81ae1224f26c1d18b7a8"),
  "order_id": ObjectId("574c81ae1224f26c1d18b7a7"),
  "product_id": "49",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c81ae1224f26c1d18b7a9"),
  "order_id": ObjectId("574c81ae1224f26c1d18b7a7"),
  "product_id": "32",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c81ae1224f26c1d18b7aa"),
  "order_id": ObjectId("574c81ae1224f26c1d18b7a7"),
  "product_id": "34",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c81ae1224f26c1d18b7ab"),
  "order_id": ObjectId("574c81ae1224f26c1d18b7a7"),
  "product_id": "36",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c81ae1224f26c1d18b7ac"),
  "order_id": ObjectId("574c81ae1224f26c1d18b7a7"),
  "product_id": "48",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c8618587d52a0207d0637"),
  "order_id": ObjectId("574c8618587d52a0207d0636"),
  "product_id": "29",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c8618587d52a0207d0638"),
  "order_id": ObjectId("574c8618587d52a0207d0636"),
  "product_id": "40",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c8fefa6783b2029ce2498"),
  "order_id": ObjectId("574c8fefa6783b2029ce2497"),
  "product_id": "31",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c8fefa6783b2029ce2499"),
  "order_id": ObjectId("574c8fefa6783b2029ce2497"),
  "product_id": "30",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c8fefa6783b2029ce249a"),
  "order_id": ObjectId("574c8fefa6783b2029ce2497"),
  "product_id": "33",
  "quantity": NumberInt(1)
});
db.getCollection("order_product").insert({
  "_id": ObjectId("574c8fefa6783b2029ce249b"),
  "order_id": ObjectId("574c8fefa6783b2029ce2497"),
  "product_id": "42",
  "quantity": NumberInt(1)
});

/** product records **/
db.getCollection("product").insert({
  "_id": "28",
  "image": "image/product/htc_touch_hd_1.jpg",
  "desccription": "&lt;p&gt;\r\n\tHTC Touch - in High Definition. Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience you never thought possible. Seductively sleek, the HTC Touch HD provides the next generation of mobile functionality, all at a simple touch. Fully integrated with Windows Mobile Professional 6.1, ultrafast 3.5G, GPS, 5MP camera, plus lots more - all delivered on a breathtakingly crisp 3.8&amp;quot; WVGA touchscreen - you can take control of your mobile world with the HTC Touch HD.&lt;/p&gt;\r\n&lt;p&gt;\r\n\t&lt;strong&gt;Features&lt;/strong&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tProcessor Qualcomm&amp;reg; MSM 7201A&amp;trade; 528 MHz&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tWindows Mobile&amp;reg; 6.1 Professional Operating System&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tMemory: 512 MB ROM, 288 MB RAM&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tDimensions: 115 mm x 62.8 mm x 12 mm / 146.4 grams&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t3.8-inch TFT-LCD flat touch-sensitive screen with 480 x 800 WVGA resolution&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tHSDPA/WCDMA: Europe/Asia: 900/2100 MHz; Up to 2 Mbps up-link and 7.2 Mbps down-link speeds&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tQuad-band GSM/GPRS/EDGE: Europe/Asia: 850/900/1800/1900 MHz (Band frequency, HSUPA availability, and data speed are operator dependent.)&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tDevice Control via HTC TouchFLO&amp;trade; 3D &amp;amp; Touch-sensitive front panel buttons&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tGPS and A-GPS ready&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tBluetooth&amp;reg; 2.0 with Enhanced Data Rate and A2DP for wireless stereo headsets&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tWi-Fi&amp;reg;: IEEE 802.11 b/g&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tHTC ExtUSB&amp;trade; (11-pin mini-USB 2.0)&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t5 megapixel color camera with auto focus&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tVGA CMOS color camera&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tBuilt-in 3.5 mm audio jack, microphone, speaker, and FM radio&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tRing tone formats: AAC, AAC+, eAAC+, AMR-NB, AMR-WB, QCP, MP3, WMA, WAV&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t40 polyphonic and standard MIDI format 0 and 1 (SMF)/SP MIDI&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tRechargeable Lithium-ion or Lithium-ion polymer 1350 mAh battery&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tExpansion Slot: microSD&amp;trade; memory card (SD 2.0 compatible)&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tAC Adapter Voltage range/frequency: 100 ~ 240V AC, 50/60 Hz DC output: 5V and 1A&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tSpecial Features: FM Radio, G-Sensor&lt;/li&gt;\r\n&lt;/ul&gt;\r\n",
  "name": "HTC Touch HD",
  "stock_status_id": "7",
  "manufacturer_id": "5",
  "price": "100",
  "model": "Product 1",
  "date_added": "2009-02-03 16:06:50",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "31",
  "image": "image/product/nikon_d300_1.jpg",
  "desccription": "&lt;div class=&quot;cpt_product_description &quot;&gt;\r\n\t&lt;div&gt;\r\n\t\tEngineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikon&amp;#39;s newly announced D3 professional digital SLR camera to offer serious photographers remarkable performance combined with agility.&lt;br /&gt;\r\n\t\t&lt;br /&gt;\r\n\t\tSimilar to the D3, the D300 features Nikon&amp;#39;s exclusive EXPEED Image Processing System that is central to driving the speed and processing power needed for many of the camera&amp;#39;s new features. The D300 features a new 51-point autofocus system with Nikon&amp;#39;s 3D Focus Tracking feature and two new LiveView shooting modes that allow users to frame a photograph using the camera&amp;#39;s high-resolution LCD monitor. The D300 shares a similar Scene Recognition System as is found in the D3; it promises to greatly enhance the accuracy of autofocus, autoexposure, and auto white balance by recognizing the subject or scene being photographed and applying this information to the calculations for the three functions.&lt;br /&gt;\r\n\t\t&lt;br /&gt;\r\n\t\tThe D300 reacts with lightning speed, powering up in a mere 0.13 seconds and shooting with an imperceptible 45-millisecond shutter release lag time. The D300 is capable of shooting at a rapid six frames per second and can go as fast as eight frames per second when using the optional MB-D10 multi-power battery pack. In continuous bursts, the D300 can shoot up to 100 shots at full 12.3-megapixel resolution. (NORMAL-LARGE image setting, using a SanDisk Extreme IV 1GB CompactFlash card.)&lt;br /&gt;\r\n\t\t&lt;br /&gt;\r\n\t\tThe D300 incorporates a range of innovative technologies and features that will significantly improve the accuracy, control, and performance photographers can get from their equipment. Its new Scene Recognition System advances the use of Nikon&amp;#39;s acclaimed 1,005-segment sensor to recognize colors and light patterns that help the camera determine the subject and the type of scene being photographed before a picture is taken. This information is used to improve the accuracy of autofocus, autoexposure, and auto white balance functions in the D300. For example, the camera can track moving subjects better and by identifying them, it can also automatically select focus points faster and with greater accuracy. It can also analyze highlights and more accurately determine exposure, as well as infer light sources to deliver more accurate white balance detection.&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;!-- cpt_container_end --&gt;",
  "name": "Nikon D300",
  "stock_status_id": "6",
  "manufacturer_id": "0",
  "price": "80",
  "model": "Product 4",
  "date_added": "2009-02-03 17:00:10",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "33",
  "image": "image/product/samsung_syncmaster_941bw.jpg",
  "desccription": "&lt;div&gt;\r\n\tImagine the advantages of going big without slowing down. The big 19&amp;quot; 941BW monitor combines wide aspect ratio with fast pixel response time, for bigger images, more room to work and crisp motion. In addition, the exclusive MagicBright 2, MagicColor and MagicTune technologies help deliver the ideal image in every situation, while sleek, narrow bezels and adjustable stands deliver style just the way you want it. With the Samsung 941BW widescreen analog/digital LCD monitor, it&amp;#39;s not hard to imagine.&lt;/div&gt;\r\n",
  "name": "Samsung SyncMaster 941BW",
  "stock_status_id": "6",
  "manufacturer_id": "11",
  "price": "200",
  "model": "Product 6",
  "date_added": "2009-02-03 17:08:31",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "40",
  "image": "image/product/iphone_1.jpg",
  "desccription": "&lt;p class=&quot;intro&quot;&gt;\r\n\tiPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email.&lt;/p&gt;\r\n",
  "name": "iPhone",
  "stock_status_id": "5",
  "manufacturer_id": "8",
  "price": "101",
  "model": "product 11",
  "date_added": "2009-02-03 21:07:12",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "41",
  "image": "image/product/imac_1.jpg",
  "desccription": "&lt;div&gt;\r\n\tJust when you thought iMac had everything, now there&acute;s even more. More powerful Intel Core 2 Duo processors. And more memory standard. Combine this with Mac OS X Leopard and iLife &acute;08, and it&acute;s more all-in-one than ever. iMac packs amazing performance into a stunningly slim space.&lt;/div&gt;\r\n",
  "name": "iMac",
  "stock_status_id": "5",
  "manufacturer_id": "8",
  "price": "100",
  "model": "Product 14",
  "date_added": "2009-02-03 21:07:26",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "44",
  "image": "image/product/macbook_air_1.jpg",
  "desccription": "&lt;div&gt;\r\n\tMacBook Air is ultrathin, ultraportable, and ultra unlike anything else. But you don&amp;rsquo;t lose inches and pounds overnight. It&amp;rsquo;s the result of rethinking conventions. Of multiple wireless innovations. And of breakthrough design. With MacBook Air, mobile computing suddenly has a new standard.&lt;/div&gt;\r\n",
  "name": "MacBook Air",
  "stock_status_id": "5",
  "manufacturer_id": "8",
  "price": "1000",
  "model": "Product 17",
  "date_added": "2009-02-03 21:08:00",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "46",
  "image": "image/product/sony_vaio_1.jpg",
  "desccription": "&lt;div&gt;\r\n\tUnprecedented power. The next generation of processing technology has arrived. Built into the newest VAIO notebooks lies Intel&amp;#39;s latest, most powerful innovation yet: Intel&amp;reg; Centrino&amp;reg; 2 processor technology. Boasting incredible speed, expanded wireless connectivity, enhanced multimedia support and greater energy efficiency, all the high-performance essentials are seamlessly combined into a single chip.&lt;/div&gt;\r\n",
  "name": "Sony VAIO",
  "stock_status_id": "5",
  "manufacturer_id": "10",
  "price": "1000",
  "model": "Product 19",
  "date_added": "2009-02-03 21:08:29",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "47",
  "image": "image/product/hp_1.jpg",
  "desccription": "&lt;p&gt;\r\n\tStop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel Monitor. This flagship monitor features best-in-class performance and presentation features on a huge wide-aspect screen while letting you work as comfortably as possible - you might even forget you&amp;#39;re at the office&lt;/p&gt;\r\n",
  "name": "HP LP3065",
  "stock_status_id": "5",
  "manufacturer_id": "7",
  "price": "100",
  "model": "Product 21",
  "date_added": "2009-02-03 21:08:40",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "30",
  "image": "image/product/canon_eos_5d_1.jpg",
  "desccription": "&lt;p&gt;\r\n\tCanon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're not typically too concerned with marketing talk this particular statement is clearly pretty accurate. The EOS 5D is unlike any previous digital SLR in that it combines a full-frame (35 mm sized) high resolution sensor (12.8 megapixels) with a relatively compact body (slightly larger than the EOS 20D, although in your hand it feels noticeably 'chunkier'). The EOS 5D is aimed to slot in between the EOS 20D and the EOS-1D professional digital SLR's, an important difference when compared to the latter is that the EOS 5D doesn't have any environmental seals. While Canon don't specifically refer to the EOS 5D as a 'professional' digital SLR it will have obvious appeal to professionals who want a high quality digital SLR in a body lighter than the EOS-1D. It will also no doubt appeal to current EOS 20D owners (although lets hope they've not bought too many EF-S lenses...) äë&lt;/p&gt;\r\n",
  "name": "Canon EOS 5D",
  "stock_status_id": "6",
  "manufacturer_id": "9",
  "price": "100",
  "model": "Product 3",
  "date_added": "2009-02-03 16:59:00",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "35",
  "image": "image/product/nikon_d300_1.jpg",
  "desccription": "<p>\r\n\tProduct 8</p>\r\n",
  "name": "Product 8",
  "stock_status_id": "5",
  "manufacturer_id": "0",
  "price": "100",
  "model": "Product 8",
  "date_added": "2009-02-03 18:08:31",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "34",
  "image": "image/product/ipod_shuffle_1.jpg",
  "desccription": "&lt;div&gt;\r\n\t&lt;strong&gt;Born to be worn.&lt;/strong&gt;\r\n\t&lt;p&gt;\r\n\t\tClip on the worlds most wearable music player and take up to 240 songs with you anywhere. Choose from five colors including four new hues to make your musical fashion statement.&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\t&lt;strong&gt;Random meets rhythm.&lt;/strong&gt;&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\tWith iTunes autofill, iPod shuffle can deliver a new musical experience every time you sync. For more randomness, you can shuffle songs during playback with the slide of a switch.&lt;/p&gt;\r\n\t&lt;strong&gt;Everything is easy.&lt;/strong&gt;\r\n\t&lt;p&gt;\r\n\t\tCharge and sync with the included USB dock. Operate the iPod shuffle controls with one hand. Enjoy up to 12 hours straight of skip-free music playback.&lt;/p&gt;\r\n&lt;/div&gt;\r\n",
  "name": "iPod Shuffle",
  "stock_status_id": "6",
  "manufacturer_id": "8",
  "price": "100",
  "model": "Product 7",
  "date_added": "2009-02-03 18:07:54",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "36",
  "image": "image/product/ipod_nano_1.jpg",
  "desccription": "&lt;div&gt;\r\n\t&lt;p&gt;\r\n\t\t&lt;strong&gt;Video in your pocket.&lt;/strong&gt;&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\tIts the small iPod with one very big idea: video. The worlds most popular music player now lets you enjoy movies, TV shows, and more on a two-inch display thats 65% brighter than before.&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\t&lt;strong&gt;Cover Flow.&lt;/strong&gt;&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\tBrowse through your music collection by flipping through album art. Select an album to turn it over and see the track list.&lt;strong&gt;&amp;nbsp;&lt;/strong&gt;&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\t&lt;strong&gt;Enhanced interface.&lt;/strong&gt;&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\tExperience a whole new way to browse and view your music and video.&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\t&lt;strong&gt;Sleek and colorful.&lt;/strong&gt;&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\tWith an anodized aluminum and polished stainless steel enclosure and a choice of five colors, iPod nano is dressed to impress.&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\t&lt;strong&gt;iTunes.&lt;/strong&gt;&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\tAvailable as a free download, iTunes makes it easy to browse and buy millions of songs, movies, TV shows, audiobooks, and games and download free podcasts all at the iTunes Store. And you can import your own music, manage your whole media library, and sync your iPod or iPhone with ease.&lt;/p&gt;\r\n&lt;/div&gt;\r\n",
  "name": "iPod Nano",
  "stock_status_id": "6",
  "manufacturer_id": "8",
  "price": "100",
  "model": "Product 9",
  "date_added": "2009-02-03 18:09:19",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "43",
  "image": "image/product/ipod_nano_1.jpg",
  "desccription": "&lt;div&gt;\r\n\t&lt;p&gt;\r\n\t\t&lt;b&gt;Intel Core 2 Duo processor&lt;/b&gt;&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\tPowered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, the new MacBook is the fastest ever.&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\t&lt;b&gt;1GB memory, larger hard drives&lt;/b&gt;&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\tThe new MacBook now comes with 1GB of memory standard and larger hard drives for the entire line perfect for running more of your favorite applications and storing growing media collections.&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\t&lt;b&gt;Sleek, 1.08-inch-thin design&lt;/b&gt;&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\tMacBook makes it easy to hit the road thanks to its tough polycarbonate case, built-in wireless technologies, and innovative MagSafe Power Adapter that releases automatically if someone accidentally trips on the cord.&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\t&lt;b&gt;Built-in iSight camera&lt;/b&gt;&lt;/p&gt;\r\n\t&lt;p&gt;\r\n\t\tRight out of the box, you can have a video chat with friends or family,2 record a video at your desk, or take fun pictures with Photo Booth&lt;/p&gt;\r\n&lt;/div&gt;\r\n",
  "name": "MacBook",
  "stock_status_id": "5",
  "manufacturer_id": "8",
  "price": "500",
  "model": "Product 16",
  "date_added": "2009-02-03 21:07:49",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "32",
  "image": "image/product/ipod_touch_1.jpg",
  "desccription": "&lt;p&gt;\r\n\t&lt;strong&gt;Revolutionary multi-touch interface.&lt;/strong&gt;&lt;br /&gt;\r\n\tiPod touch features the same multi-touch screen technology as iPhone. Pinch to zoom in on a photo. Scroll through your songs and videos with a flick. Flip through your library by album artwork with Cover Flow.&lt;/p&gt;\r\n&lt;p&gt;\r\n\t&lt;strong&gt;Gorgeous 3.5-inch widescreen display.&lt;/strong&gt;&lt;br /&gt;\r\n\tWatch your movies, TV shows, and photos come alive with bright, vivid color on the 320-by-480-pixel display.&lt;/p&gt;\r\n&lt;p&gt;\r\n\t&lt;strong&gt;Music downloads straight from iTunes.&lt;/strong&gt;&lt;br /&gt;\r\n\tShop the iTunes Wi-Fi Music Store from anywhere with Wi-Fi.1 Browse or search to find the music youre looking for, preview it, and buy it with just a tap.&lt;/p&gt;\r\n&lt;p&gt;\r\n\t&lt;strong&gt;Surf the web with Wi-Fi.&lt;/strong&gt;&lt;br /&gt;\r\n\tBrowse the web using Safari and watch YouTube videos on the first iPod with Wi-Fi built in&lt;br /&gt;\r\n\t&amp;nbsp;&lt;/p&gt;\r\n",
  "name": "iPod Touch",
  "stock_status_id": "6",
  "manufacturer_id": "8",
  "price": "100",
  "model": "Product 5",
  "date_added": "2009-02-03 17:07:26",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "45",
  "image": "image/product/macbook_pro_1.jpg",
  "desccription": "&lt;div class=&quot;cpt_product_description &quot;&gt;\r\n\t&lt;div&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\t&lt;b&gt;Latest Intel mobile architecture&lt;/b&gt;&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\tPowered by the most advanced mobile processors from Intel, the new Core 2 Duo MacBook Pro is over 50% faster than the original Core Duo MacBook Pro and now supports up to 4GB of RAM.&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\t&lt;b&gt;Leading-edge graphics&lt;/b&gt;&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\tThe NVIDIA GeForce 8600M GT delivers exceptional graphics processing power. For the ultimate creative canvas, you can even configure the 17-inch model with a 1920-by-1200 resolution display.&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\t&lt;b&gt;Designed for life on the road&lt;/b&gt;&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\tInnovations such as a magnetic power connection and an illuminated keyboard with ambient light sensor put the MacBook Pro in a class by itself.&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\t&lt;b&gt;Connect. Create. Communicate.&lt;/b&gt;&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\tQuickly set up a video conference with the built-in iSight camera. Control presentations and media from up to 30 feet away with the included Apple Remote. Connect to high-bandwidth peripherals with FireWire 800 and DVI.&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\t&lt;b&gt;Next-generation wireless&lt;/b&gt;&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\tFeaturing 802.11n wireless technology, the MacBook Pro delivers up to five times the performance and up to twice the range of previous-generation technologies.&lt;/p&gt;\r\n\t&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;!-- cpt_container_end --&gt;",
  "name": "MacBook Pro",
  "stock_status_id": "5",
  "manufacturer_id": "8",
  "price": "2000",
  "model": "Product 18",
  "date_added": "2009-02-03 21:08:17",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "48",
  "image": "image/product/ipod_classic_1.jpg",
  "desccription": "&lt;div class=&quot;cpt_product_description &quot;&gt;\r\n\t&lt;div&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\t&lt;strong&gt;More room to move.&lt;/strong&gt;&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\tWith 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\t&lt;strong&gt;Cover Flow.&lt;/strong&gt;&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\tBrowse through your music collection by flipping through album art. Select an album to turn it over and see the track list.&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\t&lt;strong&gt;Enhanced interface.&lt;/strong&gt;&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\tExperience a whole new way to browse and view your music and video.&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\t&lt;strong&gt;Sleeker design.&lt;/strong&gt;&lt;/p&gt;\r\n\t\t&lt;p&gt;\r\n\t\t\tBeautiful, durable, and sleeker than ever, iPod classic now features an anodized aluminum and polished stainless steel enclosure with rounded edges.&lt;/p&gt;\r\n\t&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;!-- cpt_container_end --&gt;",
  "name": "iPod Classic",
  "stock_status_id": "5",
  "manufacturer_id": "8",
  "price": "100",
  "model": "product 20",
  "date_added": "2009-02-08 17:21:51",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "49",
  "image": "image/product/samsung_tab_1.jpg",
  "desccription": "&lt;p&gt;\r\n\tSamsung Galaxy Tab 10.1, is the world&amp;rsquo;s thinnest tablet, measuring 8.6 mm thickness, running with Android 3.0 Honeycomb OS on a 1GHz dual-core Tegra 2 processor, similar to its younger brother Samsung Galaxy Tab 8.9.&lt;/p&gt;\r\n&lt;p&gt;\r\n\tSamsung Galaxy Tab 10.1 gives pure Android 3.0 experience, adding its new TouchWiz UX or TouchWiz 4.0 &amp;ndash; includes a live panel, which lets you to customize with different content, such as your pictures, bookmarks, and social feeds, sporting a 10.1 inches WXGA capacitive touch screen with 1280 x 800 pixels of resolution, equipped with 3 megapixel rear camera with LED flash and a 2 megapixel front camera, HSPA+ connectivity up to 21Mbps, 720p HD video recording capability, 1080p HD playback, DLNA support, Bluetooth 2.1, USB 2.0, gyroscope, Wi-Fi 802.11 a/b/g/n, micro-SD slot, 3.5mm headphone jack, and SIM slot, including the Samsung Stick &amp;ndash; a Bluetooth microphone that can be carried in a pocket like a pen and sound dock with powered subwoofer.&lt;/p&gt;\r\n&lt;p&gt;\r\n\tSamsung Galaxy Tab 10.1 will come in 16GB / 32GB / 64GB verities and pre-loaded with Social Hub, Reader&amp;rsquo;s Hub, Music Hub and Samsung Mini Apps Tray &amp;ndash; which gives you access to more commonly used apps to help ease multitasking and it is capable of Adobe Flash Player 10.2, powered by 6860mAh battery that gives you 10hours of video-playback time.&amp;nbsp;&amp;auml;&amp;ouml;&lt;/p&gt;\r\n",
  "name": "Samsung Galaxy Tab 10.1",
  "stock_status_id": "8",
  "manufacturer_id": "0",
  "price": "200",
  "model": "SAM1",
  "date_added": "2011-04-26 08:57:34",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "29",
  "image": "image/product/palm_treo_pro_1.jpg",
  "desccription": "&lt;p&gt;\r\n\tRedefine your workday with the Palm Treo Pro smartphone. Perfectly balanced, you can respond to business and personal email, stay on top of appointments and contacts, and use Wi-Fi or GPS when you&amp;rsquo;re out and about. Then watch a video on YouTube, catch up with news and sports on the web, or listen to a few songs. Balance your work and play the way you like it, with the Palm Treo Pro.&lt;/p&gt;\r\n&lt;p&gt;\r\n\t&lt;strong&gt;Features&lt;/strong&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tWindows Mobile&amp;reg; 6.1 Professional Edition&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tQualcomm&amp;reg; MSM7201 400MHz Processor&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t320x320 transflective colour TFT touchscreen&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tHSDPA/UMTS/EDGE/GPRS/GSM radio&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tTri-band UMTS &amp;mdash; 850MHz, 1900MHz, 2100MHz&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tQuad-band GSM &amp;mdash; 850/900/1800/1900&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t802.11b/g with WPA, WPA2, and 801.1x authentication&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tBuilt-in GPS&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tBluetooth Version: 2.0 + Enhanced Data Rate&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t256MB storage (100MB user available), 128MB RAM&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t2.0 megapixel camera, up to 8x digital zoom and video capture&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tRemovable, rechargeable 1500mAh lithium-ion battery&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tUp to 5.0 hours talk time and up to 250 hours standby&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tMicroSDHC card expansion (up to 32GB supported)&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tMicroUSB 2.0 for synchronization and charging&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t3.5mm stereo headset jack&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t60mm (W) x 114mm (L) x 13.5mm (D) / 133g&lt;/li&gt;\r\n&lt;/ul&gt;\r\n",
  "name": "Palm Treo Pro",
  "stock_status_id": "6",
  "manufacturer_id": "6",
  "price": "280",
  "model": "Product 2",
  "date_added": "2009-02-03 16:42:17",
  "status": "1"
});
db.getCollection("product").insert({
  "_id": "42",
  "image": "image/product/apple_cinema_30.jpg",
  "desccription": "&lt;p&gt;\r\n\t&lt;font face=&quot;helvetica,geneva,arial&quot; size=&quot;2&quot;&gt;&lt;font face=&quot;Helvetica&quot; size=&quot;2&quot;&gt;The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed specifically for the creative professional, this display provides more space for easier access to all the tools and palettes needed to edit, format and composite your work. Combine this display with a Mac Pro, MacBook Pro, or PowerMac G5 and there's no limit to what you can achieve. &lt;br&gt;\r\n\t&lt;br&gt;\r\n\t&lt;/font&gt;&lt;font face=&quot;Helvetica&quot; size=&quot;2&quot;&gt;The Cinema HD features an active-matrix liquid crystal display that produces flicker-free images that deliver twice the brightness, twice the sharpness and twice the contrast ratio of a typical CRT display. Unlike other flat panels, it's designed with a pure digital interface to deliver distortion-free images that never need adjusting. With over 4 million digital pixels, the display is uniquely suited for scientific and technical applications such as visualizing molecular structures or analyzing geological data. &lt;br&gt;\r\n\t&lt;br&gt;\r\n\t&lt;/font&gt;&lt;font face=&quot;Helvetica&quot; size=&quot;2&quot;&gt;Offering accurate, brilliant color performance, the Cinema HD delivers up to 16.7 million colors across a wide gamut allowing you to see subtle nuances between colors from soft pastels to rich jewel tones. A wide viewing angle ensures uniform color from edge to edge. Apple's ColorSync technology allows you to create custom profiles to maintain consistent color onscreen and in print. The result: You can confidently use this display in all your color-critical applications. &lt;br&gt;\r\n\t&lt;br&gt;\r\n\t&lt;/font&gt;&lt;font face=&quot;Helvetica&quot; size=&quot;2&quot;&gt;Housed in a new aluminum design, the display has a very thin bezel that enhances visual accuracy. Each display features two FireWire 400 ports and two USB 2.0 ports, making attachment of desktop peripherals, such as iSight, iPod, digital and still cameras, hard drives, printers and scanners, even more accessible and convenient. Taking advantage of the much thinner and lighter footprint of an LCD, the new displays support the VESA (Video Electronics Standards Association) mounting interface standard. Customers with the optional Cinema Display VESA Mount Adapter kit gain the flexibility to mount their display in locations most appropriate for their work environment. &lt;br&gt;\r\n\t&lt;br&gt;\r\n\t&lt;/font&gt;&lt;font face=&quot;Helvetica&quot; size=&quot;2&quot;&gt;The Cinema HD features a single cable design with elegant breakout for the USB 2.0, FireWire 400 and a pure digital connection using the industry standard Digital Video Interface (DVI) interface. The DVI connection allows for a direct pure-digital connection.&lt;br&gt;\r\n\t&lt;/font&gt;&lt;/font&gt;&lt;/p&gt;\r\n&lt;h3&gt;\r\n\tFeatures:&lt;/h3&gt;\r\n&lt;p&gt;\r\n\tUnrivaled display performance&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\t30-inch (viewable) active-matrix liquid crystal display provides breathtaking image quality and vivid, richly saturated color.&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tSupport for 2560-by-1600 pixel resolution for display of high definition still and video imagery.&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tWide-format design for simultaneous display of two full pages of text and graphics.&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tIndustry standard DVI connector for direct attachment to Mac- and Windows-based desktops and notebooks&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tIncredibly wide (170 degree) horizontal and vertical viewing angle for maximum visibility and color performance.&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tLightning-fast pixel response for full-motion digital video playback.&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tSupport for 16.7 million saturated colors, for use in all graphics-intensive applications.&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\tSimple setup and operation&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tSingle cable with elegant breakout for connection to DVI, USB and FireWire ports&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tBuilt-in two-port USB 2.0 hub for easy connection of desktop peripheral devices.&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tTwo FireWire 400 ports to support iSight and other desktop peripherals&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\tSleek, elegant design&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tHuge virtual workspace, very small footprint.&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tNarrow Bezel design to minimize visual impact of using dual displays&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tUnique hinge design for effortless adjustment&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tSupport for VESA mounting solutions (Apple Cinema Display VESA Mount Adapter sold separately)&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;h3&gt;\r\n\tTechnical specifications&lt;/h3&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Screen size (diagonal viewable image size)&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tApple Cinema HD Display: 30 inches (29.7-inch viewable)&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Screen type&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tThin film transistor (TFT) active-matrix liquid crystal display (AMLCD)&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Resolutions&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\t2560 x 1600 pixels (optimum resolution)&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t2048 x 1280&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t1920 x 1200&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t1280 x 800&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\t1024 x 640&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Display colors (maximum)&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\t16.7 million&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Viewing angle (typical)&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\t170° horizontal; 170° vertical&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Brightness (typical)&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\t30-inch Cinema HD Display: 400 cd/m2&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Contrast ratio (typical)&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\t700:1&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Response time (typical)&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\t16 ms&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Pixel pitch&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\t30-inch Cinema HD Display: 0.250 mm&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Screen treatment&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tAntiglare hardcoat&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;User controls (hardware and software)&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tDisplay Power,&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tSystem sleep, wake&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tBrightness&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tMonitor tilt&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Connectors and cables&lt;/b&gt;&lt;br&gt;\r\n\tCable&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tDVI (Digital Visual Interface)&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tFireWire 400&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tUSB 2.0&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tDC power (24 V)&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\tConnectors&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tTwo-port, self-powered USB 2.0 hub&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tTwo FireWire 400 ports&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tKensington security port&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;VESA mount adapter&lt;/b&gt;&lt;br&gt;\r\n\tRequires optional Cinema Display VESA Mount Adapter (M9649G/A)&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tCompatible with VESA FDMI (MIS-D, 100, C) compliant mounting solutions&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Electrical requirements&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tInput voltage: 100-240 VAC 50-60Hz&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tMaximum power when operating: 150W&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tEnergy saver mode: 3W or less&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Environmental requirements&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tOperating temperature: 50° to 95° F (10° to 35° C)&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tStorage temperature: -40° to 116° F (-40° to 47° C)&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tOperating humidity: 20% to 80% noncondensing&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tMaximum operating altitude: 10,000 feet&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Agency approvals&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tFCC Part 15 Class B&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tEN55022 Class B&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tEN55024&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tVCCI Class B&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tAS/NZS 3548 Class B&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tCNS 13438 Class B&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tICES-003 Class B&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tISO 13406 part 2&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tMPR II&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tIEC 60950&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tUL 60950&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tCSA 60950&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tEN60950&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tENERGY STAR&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tTCO '03&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;Size and weight&lt;/b&gt;&lt;br&gt;\r\n\t30-inch Apple Cinema HD Display&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tHeight: 21.3 inches (54.3 cm)&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tWidth: 27.2 inches (68.8 cm)&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tDepth: 8.46 inches (21.5 cm)&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tWeight: 27.5 pounds (12.5 kg)&lt;/li&gt;\r\n&lt;/ul&gt;\r\n&lt;p&gt;\r\n\t&lt;b&gt;System Requirements&lt;/b&gt;&lt;/p&gt;\r\n&lt;ul&gt;\r\n\t&lt;li&gt;\r\n\t\tMac Pro, all graphic options&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tMacBook Pro&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tPower Mac G5 (PCI-X) with ATI Radeon 9650 or better or NVIDIA GeForce 6800 GT DDL or better&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tPower Mac G5 (PCI Express), all graphics options&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tPowerBook G4 with dual-link DVI support&lt;/li&gt;\r\n\t&lt;li&gt;\r\n\t\tWindows PC and graphics card that supports DVI ports with dual-link digital bandwidth and VESA DDC standard for plug-and-play setup&lt;/li&gt;\r\n&lt;/ul&gt;\r\n",
  "name": "Apple Cinema 30&quot;",
  "stock_status_id": "5",
  "manufacturer_id": "8",
  "price": "100",
  "model": "Product 15",
  "date_added": "2009-02-03 21:07:37",
  "status": "1"
});

/** product_to_category records **/
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e7f"),
  "product_id": "28",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e80"),
  "product_id": "28",
  "category_id": "24"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e81"),
  "product_id": "29",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e82"),
  "product_id": "29",
  "category_id": "24"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e83"),
  "product_id": "30",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e84"),
  "product_id": "30",
  "category_id": "33"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e85"),
  "product_id": "31",
  "category_id": "33"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e86"),
  "product_id": "32",
  "category_id": "34"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e87"),
  "product_id": "33",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e88"),
  "product_id": "33",
  "category_id": "28"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e89"),
  "product_id": "34",
  "category_id": "34"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e8a"),
  "product_id": "35",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e8b"),
  "product_id": "36",
  "category_id": "34"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e8c"),
  "product_id": "40",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e8d"),
  "product_id": "40",
  "category_id": "24"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e8e"),
  "product_id": "41",
  "category_id": "27"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e8f"),
  "product_id": "42",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e90"),
  "product_id": "42",
  "category_id": "28"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e91"),
  "product_id": "43",
  "category_id": "18"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e92"),
  "product_id": "43",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e93"),
  "product_id": "44",
  "category_id": "18"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e94"),
  "product_id": "44",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e95"),
  "product_id": "45",
  "category_id": "18"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e96"),
  "product_id": "46",
  "category_id": "18"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e97"),
  "product_id": "46",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e98"),
  "product_id": "47",
  "category_id": "18"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e99"),
  "product_id": "47",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e9a"),
  "product_id": "48",
  "category_id": "20"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e9b"),
  "product_id": "48",
  "category_id": "34"
});
db.getCollection("product_to_category").insert({
  "_id": ObjectId("5744999ad11c3e63fe908e9c"),
  "product_id": "49",
  "category_id": "57"
});

/** review records **/
db.getCollection("review").insert({
  "_id": ObjectId("574ac35afb4bcdd401380015"),
  "product_id": "30",
  "author": "User777",
  "text": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "rating": "4",
  "date": ISODate("2016-05-29T10:24:26.221Z")
});
db.getCollection("review").insert({
  "_id": ObjectId("574ac4f4fb4bcdd401380016"),
  "product_id": "30",
  "author": "aaaaaaaaaa",
  "text": "aaaaaaaaaaaaaaaaaaaaa",
  "rating": "3",
  "date": ISODate("2016-05-29T10:31:16.21Z")
});
db.getCollection("review").insert({
  "_id": ObjectId("574ac65469d75b0405c3d007"),
  "product_id": "30",
  "author": "aaaaaaaaaaaaa",
  "text": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "rating": "3",
  "date": ISODate("2016-05-29T10:37:08.134Z")
});
db.getCollection("review").insert({
  "_id": ObjectId("574ac6b23c39901416ffa629"),
  "product_id": "30",
  "author": "Name",
  "text": "Text",
  "rating": "4",
  "date": ISODate("2016-05-29T10:38:42.204Z")
});
db.getCollection("review").insert({
  "_id": ObjectId("574acec7cc93ad7813f243f2"),
  "product_id": "42",
  "author": "vasiliy",
  "text": "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы и демонстрации внешнего вида контента, просмотра шрифтов, абзацев, отступов и т.д. Так как цель применения такого текста исключительно демонстрационная, то и смысловую нагрузку ему нести совсем необязательно. Более того, нечитабельность текста сыграет на руку при оценке качества восприятия макета.",
  "rating": "5",
  "date": ISODate("2016-05-29T11:13:11.313Z")
});
db.getCollection("review").insert({
  "_id": ObjectId("574adb05196f9c202f55a060"),
  "product_id": "29",
  "author": "test",
  "text": "testttttttttttttttt",
  "rating": "4",
  "date": ISODate("2016-05-29T12:05:25.657Z")
});
db.getCollection("review").insert({
  "_id": ObjectId("574ae6f2db742d282703a068"),
  "product_id": "31",
  "author": "aaaaaaaaaaaaaaaaaaaaaa",
  "text": "asdasdasd",
  "rating": "4",
  "date": ISODate("2016-05-29T12:56:18.278Z")
});
db.getCollection("review").insert({
  "_id": ObjectId("574c7ee2e86054b0271971e2"),
  "product_id": "34",
  "author": "user777",
  "text": "this ipod the best",
  "rating": "2",
  "date": ISODate("1970-01-01T00:00:00.0Z")
});
db.getCollection("review").insert({
  "_id": ObjectId("574c86c35bc3b030277a7290"),
  "product_id": "42",
  "author": "aaa",
  "text": "aaaaaaaaaaaaaa",
  "rating": "4",
  "date": ISODate("1970-01-01T00:00:00.0Z")
});
db.getCollection("review").insert({
  "_id": ObjectId("574c86ed5bc3b030277a7291"),
  "product_id": "42",
  "author": "Vitaliy",
  "text": "Vitaliy the best",
  "rating": "4",
  "date": ISODate("1970-01-01T00:00:00.0Z")
});
db.getCollection("review").insert({
  "_id": ObjectId("574c87071813ba10029b2080"),
  "product_id": "42",
  "author": "Vovan",
  "text": "Vovan the best",
  "rating": "4",
  "date": ISODate("2016-05-30T18:31:35.250Z")
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "shop.product"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "shop.category"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "shop.product_to_category"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "shop.order"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "shop.order_product"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "shop.review"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "shop.manufacturer"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "shop.customer"
});
