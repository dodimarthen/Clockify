# User API Spec

## Register User API

Endpoint : POST /api/users/

Request Body :

```JSON
{
  "username" : "johndoe",
  "password" : "rahasia",
  "name" : "john doe"
}
```

Response Body Success :

```JSON
{
  "data" : {
    "username" : "johndoe",
    "name" : "john doe"
  },
}
```

Response Body Error :

```JSON
{
  "errors" : "Username already exist!"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body:

```json
{
  "username": "johndoe",
  "password": "rahasia"
}
```

Response Body Success :

```JSON
{
  "data" : {
    "token" : "unique-token"
  },
}
```

Response Body Error :

```JSON
{
  "errors" : "incorrect username or password"
}
```

## Update User API

Endpoint : FETCH /api/users/current

Headers :

- Authorization : token

Request Body:

```json
{
  "name": "john doe",
  "password": "new password"
}
```

Response Body Success :

```JSON
{
  "data" : {
    "username" : "johndoe",
    "name" : "john doe taslim"
  },
}
```

Response Body Error :

```JSON
{
  "errors" : "Name length max 50"
}
```

## Get User API

Endpoint : GET /api/users/

Headers :

- Authorization : token

Response Body Success :

```JSON
{
  "data" : {
    "username" : "johndoe",
    "name" : "john doe"
  },
}
```

Response Body Error :

```JSON
{
  "errors" : "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": "OK"
}
```

Response Body Error:

```json
{
  "erros": "unathorized"
}
```
