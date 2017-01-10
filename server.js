'use strict';

const express=require('express');
const morgan = require('morgan');

const app=express();

app.use(morgan('common'));
app.get('*',function(req,res){  
  return res.send('ok');
  
});

app.listen(process.env.PORT||8080,() => console.log(`Your app is listening on port ${process.env.PORT || 8080}`));





