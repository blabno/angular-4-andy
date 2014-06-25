angular-4-andy
==============

Configure your /etc/hosts like this:

  127.0.0.1 localhost restshop
  
Start NodeJS based web server:

  node web-server.js
  
Open browser:

  http://localhost:8000
  
You should see table with two items: TV and Fridge. Note that application is manually bootstrapped, 
data is being fetched from different domain (restshop), the same with the templates.

Check commit history for they show two different approaches, one using CORS and another using JSONP.
