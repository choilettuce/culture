const express = require('express');
const app = express();
// const port = /*process.env.PORT ||*/ 8000;
// const https = require("https").Server(app);

// app.listen(port, function(){
//   console.log("서버시작!")
// })

const Server = app.listen(8000, () => {
  console.log(`서버시작 : localhost 8000`);
})

// cors
const cors = require("cors");
const corsQptions = {
  origin: "http://localhost:8000",
  Credential: true,
};
app.use(cors(corsQptions));
  
// /* env */
// require("dotenv").config();
