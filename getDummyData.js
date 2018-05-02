const { getAthlete } = require('parkrun-crawler');

async function myFunc() {
    try {
        athlete = await getAthlete('2054291');
        console.log(JSON.stringify(athlete));
    } catch (e) {
        console.log(e);
    }
}
myFunc();