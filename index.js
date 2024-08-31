import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const API_URL = "https://www.amiiboapi.com/";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get( API_URL + "api/amiibo");
        const data = response.data;
        res.render('index.ejs', { amiibos: data.amiibo});
    } catch (error) {
        console.error('Error fetching Amiibo data:', error);
        res.status(500).send('Error fetching Amiibo data');
    }
});

app.get('/filter', async (req, res) => {
    const filterType = req.query.filterType;
    console.log(`Selected filter type: ${filterType}`);
    let apiUrl = API_URL + 'api/amiibo';

    if (filterType === 'figure') {
        apiUrl += '?type=Figure';
    } else if (filterType === 'card') {
        apiUrl += '?type=Card';
    } else if (filterType === 'yarn') {
        apiUrl += '?type=Yarn';
    }

    console.log(`API URL: ${apiUrl}`);

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        console.log('Filtered data fetched successfully:', data);
        res.render('index.ejs', { amiibos: data.amiibo});
    } catch (error) {
        console.error('Error fetching filtered Amiibo data:', error);
        res.status(500).send('Error fetching filtered Amiibo data');
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
    const name  = req.query.name;

    try {
        const response = await axios.get(API_URL + `api/amiibo/?name=${name }`);
        const data = response.data.amiibo[0];
        console.log('Data fetched successfully:', data);
        res.render('amiibo.ejs',{
            name: data.name, 
            picture: data.image, 
            amiiboSeries: data.amiiboSeries, 
            gameSeries: data.gameSeries, 
            type: data.type
        }); //pass the fetched data to ejs file 
    } catch (error) {
        console.error("Error fetching Amiibo data:", error);
        res.status(500).send("Error fetching Amiibo data");
    }
});





app.listen(port, () => {
    console.log(`Sever is running on port ${port}`);
})