// app/routes.js

module.exports = function(app) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.status(200).send("index.html");
    });
    
    app.post('/newRaceTrackEvent', function(req, res) {
        console.log(req.body);
        res.status(200).send("newRaceTrackEvent.html");
    });

};