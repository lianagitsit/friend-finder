var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    })

    // POST route handles incoming survey results and compatibility logic
    app.post("/api/friends", (req, res) => {
        // console.log(req.body);

        var scores = [
            req.body.optionsQ1,
            req.body.optionsQ2,
            req.body.optionsQ3,
            req.body.optionsQ4,
            req.body.optionsQ5,
            req.body.optionsQ6,
            req.body.optionsQ7,
            req.body.optionsQ8,
            req.body.optionsQ9,
            req.body.optionsQ10
        ];

        var userObj = {
            "name": req.body.name,
            "photo": req.body.photo,
            "scores": scores
        }

        console.log(userObj);

        // var userObj = {
        //     "name": "Liana",
        //     "photo": "link",
        //     "scores": [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
        // }


        // res.status(200).end();

        var leastDifference = 40; // initialize to maximum possible difference score, (5 - 1) * 10
        var newFriend = friendsData[0];

        for (var k = 0; k < friendsData.length; k++){
            var totalDifference = 0;

            console.log("Friend " + k)

            for (var j = 0; j < userObj.scores.length; j++){
                totalDifference += Math.abs(parseInt(userObj.scores[j]) - friendsData[k].scores[j]);
            }
            console.log("Total difference: " + totalDifference);

            if (totalDifference < leastDifference){
                leastDifference = totalDifference;
                newFriend = friendsData[k];
            }

            console.log("New friend: " + newFriend.name);
        }

        friendsData.push(userObj);
        res.json(newFriend);

    })


}