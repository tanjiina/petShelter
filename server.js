console.log("server.js is running");

const express = require("express")
const cors = require("cors")
const db_name = "petDb"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname +"/client/dist/client"))

require("./server/utils/mongoose")(db_name);
require("./server/utils/routes")(app);

app.all('*', (req, res, next) => {
    res.sendFile(__dirname + "/client/dist/client/index.html");
});

app.listen(8000, console.log("Listening on port 8000"));