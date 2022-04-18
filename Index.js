const express = require('express');
const port = 80;
const App = express();

App.set('port',port);

App.route('/').get((req,res) =>{
  console.log("resquisição recebida");
  res.send("Ola...")
})

App.listen(port ,()=>{
  console.log("servidor ativo");
})

