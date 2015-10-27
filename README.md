#Loopback Bug Where Has Many Through

Just a quick project to display how to reproduce a [bug](https://github.com/strongloop/loopback/issues/1737) in Loopback

##How to reproduce
```
GET /api/Customers/1/Items?filter[where][name]=a
```

Or 
```
npm test
```
The server will hang and timeout eventually
