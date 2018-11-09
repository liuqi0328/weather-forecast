const fetch = require('node-fetch');
const generateWebAppURL = require('server/utils').generateWebAppURL;

module.exports = (app) => {
    app.post('/search-location-weather', (req, res) => {
        // const requestBody = req.body;
        // const apiURL = generateWebAppURL(requestBody.locationType, requestBody.locationData);

        // Insert user zip code to get data from API
        const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
        // API key
        const API = '4cdc9b2414ccef2a67c532e186d90715';
        const apiID = '&appid=<' + API + '>&units=imperial';

        const userLocation = (url1, url2, zipcode) => {
            let newURL = url1 + zipcode + url2;
            return newURL;
        }

        const apiURL =  userLocation(baseURL, apiID, zipcode);

        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                res.send({ data });
            })
            .catch(err => {
                res.redirect('/error');
            });
    });
};