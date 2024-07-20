const express = require('express');
const index = require("./index2")
const app = express();
// const port = /*process.env.PORT ||*/ 8000;
// const https = require("https").Server(app);

// app.listen(port, function(){
//   console.log("서버시작!")
// })

const Server = app.listen(8000, () => {
  console.log(`서버시작 : localhost 8000`);
})

app.get('/api', function(request, response){
  response.send(index);
  console.log(index);
});


// cors
const cors = require("cors");
const corsQptions = {
  origin: "http://localhost:8000",
  Credential: true,
};
app.use(cors(corsQptions));
  
// /* env */
// require("dotenv").config();
