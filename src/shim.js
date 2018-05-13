const developmentMode = process.env.NODE_ENV && process.env.NODE_ENV === 'development';


export const getAthlete = (athleteId) => {
    return new Promise((resolve, reject) => {
        if (developmentMode) {
            // Get the fake data
            const request = require('request');

            if (typeof window !== 'undefined') {
                let url = `${window.location.protocol}//${window.location.host}/dummyData/${athleteId}.json`;
                request.get(url, { json: true }, (error, response, body) => {
                    if (error) return reject(error);
                    if (response.statusCode !== 200) return reject(response);

                    resolve(body);
                })
            } else reject(new Error('window object undefined'));

        } else {
            const parkrunCrawler = require('parkrun-crawler');

            return parkrunCrawler.getAthlete(athleteId);
        }
    });
}


export const getAthletesFollowing = () => {
    return new Promise(async (resolve, reject) => {
        if (developmentMode) {
            let following = JSON.parse(localStorage.getItem('athletesFollowing'));
            if (following && Array.isArray(following)) return resolve(following);
            else return resolve([]);
        } else {
            return reject(new Error('not implemented yet'));
            // migrate from old au key to a simple array
            
            // chrome.storage.sync.get('following', function(res) {
            //     // If value returned from storage is undefined or isn't an array, return an empty array
            //     if (!res.following || !res.following.au) res.following = {
            //         au: []
            //     }
            //     callback(res.following.au);
            // });
        }
    });
}


export const followAthlete = (athleteId) => {
    return new Promise(async (resolve, reject) => {
        if (developmentMode) {
            let following = await getAthletesFollowing();
            let alreadyFollowing = false;
            for (let athlete of following) {
                if (athlete === athleteId) {
                    alreadyFollowing = true;
                    break;
                }
            }

            if (!alreadyFollowing) {
                following.push(athleteId);
                localStorage.setItem('athletesFollowing', JSON.stringify(following));
            }

            return resolve(following);
        } else {
            return reject(new Error('not implemented yet'));
            // migrate from old au key to a simple array
            
            // chrome.storage.sync.get('following', function(res) {
            //     // If value returned from storage is undefined or isn't an array, return an empty array
            //     if (!res.following || !res.following.au) res.following = {
            //         au: []
            //     }
            //     callback(res.following.au);
            // });
        }
    });
}

