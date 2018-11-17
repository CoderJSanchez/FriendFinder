const friends = require('../data/friends');

module.exports = function(app){
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        console.log(req.body);
        console.log(req.body.scores);
        friends.push(req.body);
        
    });
};