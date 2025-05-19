import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'fs';
import md5 from "md5";
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
if (!fs.existsSync('cache')) {
    fs.mkdirSync('cache');
}
const cacheGet = (name) => {
    const path = 'cache/' + name + '.html';
    return fs.existsSync(path) ? fs.readFileSync(path) : false;
};
const cacheSet = (name, value) => {
    fs.writeFileSync('cache/' + name + '.html', value);
};
let url = 'https://toothpastefordinner.com/';
for (let i = 0; i < 10; i++) {
    let data = cacheGet(md5(url));
    if (!data) {
        await sleep(1000);
        console.log('Fetching live data:', url);
        const res = await axios.get(url);
        data = res.data;
        cacheSet(md5(url), data);
    }
    const $ = cheerio.load(data);
    //siit tahan võtta pilte
    const img = $('img[alt="Toothpaste For Dinner"]');
    console.log(img.attr('src'), img.attr('alt'));
    //enne kommiksi lingi otsimine
    const prev = $('a:contains("Previous comic")');
    if (!prev.attr('href')) break;
    url = 'https://toothpastefordinner.com/' + prev.attr('href');
    console.log('Next URL:', url);
}
