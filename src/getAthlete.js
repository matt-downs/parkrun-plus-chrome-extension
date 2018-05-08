

module.exports.getAthlete = (athleteId) => {
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
        // Get the fake data
        const request = require('request');

        return new Promise((resolve, reject) => {
            if (typeof window !== 'undefined') {
                let url = `${window.location.protocol}//${window.location.host}/dummyData/${athleteId}.json`;
                request.get(url, { json: true }, (error, response, body) => {
                    if (error) return reject(error);
                    if (response.statusCode !== 200) return reject(response);

                    resolve(body);
                })
            } else reject(new Error('window object undefined'));
        });

    } else {
        const parkrunCrawler = require('parkrun-crawler');

        return parkrunCrawler.getAthlete(athleteId);
    }
}

