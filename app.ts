import express from 'express';
import { getHome, getTorrent, getCategory, searchTorrent, incrDownloads, incrRequests, getStats } from './utils';
import rateLimit from 'express-rate-limit';
import cors from 'cors';


// app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)

const limiter = new rateLimit({
    windowMs: 10 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

const app = express();

//  apply to all requests
app.use(limiter);

app.use(cors());

app.get("/home", (_req, res) => {
    incrRequests();
    getHome()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            throw err;
        })
})

app.get("/cat/:catlink", (req, res) => {
    incrRequests();
	console.log("Someone is asking : " + decodeURIComponent(req.params.catlink));
	
    getCategory(decodeURIComponent(req.params.catlink))
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            throw err;
        })
})

app.get("/search/:searchlink", (req, res) => {
    incrRequests();
    searchTorrent(decodeURIComponent(req.params.searchlink))
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            throw err;
        })
})

app.get("/torrent/:torrentlink", (req, res) => {
    incrRequests();
    getTorrent(decodeURIComponent(req.params.torrentlink))
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            throw err;
        })
})

app.get("/newdl", (_req, res) => {
    incrDownloads();
    res.end();
})

app.get("/getstats", (_req, res) => {
    res.json(getStats());
});

app.listen(8080, () => { console.log("Soup Server is running.........") });