//this 'connects' to the friends.js file to read the data
const friends = require('../data/friends');

//wrapping these routes in module.exports allows us to export it back to server.js
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var user = req.body;
        var userScores = user.scores;

        var bestMatchName = '';
        var bestMatchImage = '';
        var totalDifference = 10000;

        for (var i = 0; i < friends.length; i++) {

            var dif = 0;
            for (var j = 0; j < userScores.length; j++) {
                dif += Math.abs(friends[i].scores[j] - userScores[j])
            }

            if (dif < totalDifference) {
                totalDifference = dif;
                bestMatchName = friends[i].name;
                bestMatchImage = friends[i].photo;
                console.log('bestMatchName: ' + bestMatchName);
                
            }
            
        }
        res.send({bestyName:bestMatchName, bestyImage: bestMatchImage});
        friends.push(user);

    });
};