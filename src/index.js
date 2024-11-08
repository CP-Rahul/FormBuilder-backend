const express = require('express');

const { ServerConfig, dbConnect } = require('./config');

const app = express();

app.use(express.json());


app.listen(ServerConfig.PORT, async () => {
    console.log(`Server is up and running on port ${ServerConfig.PORT}`);
    dbConnect();
})