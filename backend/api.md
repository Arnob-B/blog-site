# Authentication
|methods|path|header|body| return |
|---|---|---|---|---|
|POST | /auth/signup||email,uname,password|
|POST | /auth/login||email,password| msg, jwtToken|



|methods|path|header|body| return |
|---|---|---|---|---|
|GET | /article/:username/:title | ||title, content|
|POST |/article/post | jwttoken|title,content||