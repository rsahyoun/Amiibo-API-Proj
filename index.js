import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://www.amiiboapi.com/";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get( API_URL + "api/amiibo");
        const data = response.data;
        res.render('index.ejs', { amiibos: data.amiibo });
    } catch (error) {
        console.error('Error fetching Amiibo data:', error);
        res.status(500).send('Error fetching Amiibo data');
    }
});

app.get("/amiibo/:tail", async (req, res) => {
    const tail = req.params.tail;
    try {
        const response = await axios.get(API_URL + `api/amiibo/?tail=${tail}`);
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error("Error fetching Amiibo data:", error);
        res.status(500).send("Error fetching Amiibo data");
    }
});


app.listen(port, () => {
    console.log(`Sever is running on port ${port}`);
})