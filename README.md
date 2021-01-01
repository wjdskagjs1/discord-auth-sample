# discord-auth-sample

1.  
```
npm install  
```
  
2.  
go to discord developer portal->OAuth2->add redirect uri "http://127.0.0.1:3000/auth"
  
3.  
write your discord application info inside config.json  
```
{
    "auth_link": "your auth link : ex) https://discord.com/api/oauth2/authorize?~~",
    "client_id": "your client id",
    "client_secret": "your client secret"
}
```
  
4.  
```
npm start  
```
  
5.  
open http://127.0.0.1:3000/