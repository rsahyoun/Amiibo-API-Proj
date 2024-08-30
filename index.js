import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { name } from "ejs";

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

app.get("/info", async (req, res) => {

    try {
        const response = await axios.get( API_URL + "api/amiibo");
        const data = response.data;
        res.render('index.ejs', { amiibos: data.amiibo });
    } catch (error) {
        console.error('Error fetching Amiibo data:', error);
        res.status(500).send('Error fetching Amiibo data');
    }
});


app.get("/amiibo", async (req, res) => {
    const code = req.params.character;
    try {
        const response = await axios.get(API_URL + `api/amiibo/?character=${code}`);
        const data = response.data;
        console.log('Data fetched successfully:', data);
        res.render('amiibo.ejs',
            {name: data.name, 
            picture: data.image, 
            amiiboSeries: data.amiiboSeries, 
            gameSeries: data.gameSeries, 
            type: data.type}); //pass the fetched data to ejs file 
    } catch (error) {
        console.error("Error fetching Amiibo data:", error);
        res.status(500).send("Error fetching Amiibo data");
    }
});


app.listen(port, () => {
    console.log(`Sever is running on port ${port}`);
})