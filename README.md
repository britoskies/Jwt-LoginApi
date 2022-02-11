# Jwt-LoginApi

## Description

Learned user authentication with JWT, as well as how to develop an API with Typescrypt.

Status: Finished  

## Tecnologies

<ul> 
    <li> Typescript </li>
    <li> JWT </li>
    <li> Expressjs </li>
</ul>

## Available Scripts

In the project directory, you can run:

``` npm run dev ```

To test the server side / API: <br>
Personal recommendation is using Postman or Thunder Client to test the POST and GET requests. <br>

Open [http://localhost:3001/api](http://localhost:3001/api) with POST in order to generate the token. <br>
Add this line of code in the body: <br>

```
{
    "username": "admin",
    "pw": "admin"
}

```
Save the token recieved in the header response. Then you will have to do a GET request to the API URL, add a new header with <strong>'auth-token'</strong> as the key and the token as the value.

The page will reload when you make changes.\
You may also see any lint errors in the console.


