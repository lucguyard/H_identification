const express = require ("express");
const app = express();
const route = require("./route/route_Post");
const bodyParser = require ("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.use("/", route);

const port =  process.env.PORT || 4000;
app.listen(port, ()=> {
    try{
        console.log("you're running to port" + port);
    }
    catch(err)
    {
        res.err;
    }
})