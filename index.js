const express = require('express');
const redis = require('redis');
const app = express();

const port = process.env.PORT || 8000;

const client = redis.createClient();

client.connect().then(() => {
    console.log("Redis connected");
});

client.set("foo", "bar").then((reply) => console.log(reply));

client.get("foo").then((reply) => console.log("foo", reply));

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
