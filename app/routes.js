// app/routes.js

module.exports = function(app) {

    // =======================================
    // New Race started ======================
    // =======================================
    app.get('/api/v1/race_session/new', function(req, res) {
        console.log("New race started!");
        res.status(200).send("New Race started");
    });
    
    // =======================================
    // Token passed finish ===================
    // =======================================
    app.get('/api/v1/lap_track/create', function(req, res) {
        console.log("New Lap for Token "+req.query["transponder_token"]+": "+req.query["lap_time_in_ms"]+"ms")
        res.status(200).send("New Lap for Token "+req.query["transponder_token"]+": "+req.query["lap_time_in_ms"]+"ms");
    });

};