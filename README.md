#Loopback Bug Where Has Many Through

Just a quick project to display how to reproduce a bug in Loopback

##How to reproduce
```
POST /api/Customers
POST /api/Customers/1/Items
[{ "name": "a"}, { "name": "b"}]
GET /api/Customers/1/Items?filter[where][name]=a
```
The server will hang and timeout eventually
