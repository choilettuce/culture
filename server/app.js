const express = require('express');
const app = express();
const port = 8000;
const http = require("http").Server(app);

const cors = require("cors");
const corsQptions = {
  origin: "http://localhost:8000",
  Credential: true,
};

app.use(cors(corsQptions));