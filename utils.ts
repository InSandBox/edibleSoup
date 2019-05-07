import rp from 'request-promise';
import $ from 'cheerio';
import fs from 'fs';

export async function getHome() {
    const url = "https://1337x.to/home/";
    try {
        var resHtml = await rp(url);
    } catch (err) {
        throw err;
    }


    const car1 = $("div.banner-box.movie ul.slider.clearfix li a", resHtml);
    const car2 = $("div.banner-box.series ul.slider.clearfix li a", resHtml);
    const cats = $("div.featured-list div.table-list-wrap table.table-list tbody tr", resHtml);

    var firstCarousels = [];
    var secondCarousels = [];
    var catsData0 = [];
	var catsData1 = [];
	var catsData2 = [];
	var catsData3 = [];
	var catsData4 = [];
	var catsData5 = [];
	var catsData6 = [];
	var catsData7 = [];
	
	var rand = Math.floor(Math.random() * 8);

    for (let i: number = 0; i < car1.length; i++) {
        firstCarousels.push({
            title: car1[i].attribs.title,
            link: car1[i].attribs.href,
            imgLink: car1[i].firstChild.attribs.src,
            format: car1[i].children[2].firstChild.nodeValue,
			active : i==rand ? "active" : ""
        });
    }


    for (let i: number = 0; i < car2.length; i++) {
        secondCarousels.push({
            title: car2[i].attribs.title,
            link: car2[i].attribs.href,
            imgLink: car2[i].children[1].attribs.src,
            serie: car2[i].children[3].firstChild.firstChild.nodeValue,
            episode: car2[i].children[3].lastChild.firstChild.nodeValue,
			active : i==rand ? "active" : ""
        });
    }

    for (let i: number = 0; i < 12; i++) {
        catsData0.push({
            catLink: cats[i].children[1].children[0].attribs.href,
            catIcon: cats[i].children[1].children[0].children[0].attribs.class,
            link: cats[i].children[1].children[0].nextSibling.attribs.href,
            name: cats[i].children[1].children[0].nextSibling.firstChild.nodeValue,
            seeds: cats[i].children[3].firstChild.nodeValue,
            leeches: cats[i].children[5].firstChild.nodeValue,
            date: cats[i].children[7].firstChild.nodeValue,
            size: cats[i].children[9].firstChild.nodeValue
        });
    }
	
    for (let i: number = 12; i < 24 ; i++) {
        catsData1.push({
            catLink: cats[i].children[1].children[0].attribs.href,
            catIcon: cats[i].children[1].children[0].children[0].attribs.class,
            link: cats[i].children[1].children[0].nextSibling.attribs.href,
            name: cats[i].children[1].children[0].nextSibling.firstChild.nodeValue,
            seeds: cats[i].children[3].firstChild.nodeValue,
            leeches: cats[i].children[5].firstChild.nodeValue,
            date: cats[i].children[7].firstChild.nodeValue,
            size: cats[i].children[9].firstChild.nodeValue
        });
    }
	
    for (let i: number = 24; i < 34 ; i++) {
        catsData2.push({
            catLink: cats[i].children[1].children[0].attribs.href,
            catIcon: cats[i].children[1].children[0].children[0].attribs.class,
            link: cats[i].children[1].children[0].nextSibling.attribs.href,
            name: cats[i].children[1].children[0].nextSibling.firstChild.nodeValue,
            seeds: cats[i].children[3].firstChild.nodeValue,
            leeches: cats[i].children[5].firstChild.nodeValue,
            date: cats[i].children[7].firstChild.nodeValue,
            size: cats[i].children[9].firstChild.nodeValue
        });
    }
	
    for (let i: number = 34; i < 46 ; i++) {
        catsData3.push({
            catLink: cats[i].children[1].children[0].attribs.href,
            catIcon: cats[i].children[1].children[0].children[0].attribs.class,
            link: cats[i].children[1].children[0].nextSibling.attribs.href,
            name: cats[i].children[1].children[0].nextSibling.firstChild.nodeValue,
            seeds: cats[i].children[3].firstChild.nodeValue,
            leeches: cats[i].children[5].firstChild.nodeValue,
            date: cats[i].children[7].firstChild.nodeValue,
            size: cats[i].children[9].firstChild.nodeValue
        });
    }
	
	for (let i: number = 46; i < 58 ; i++) {
		catsData4.push({
			catLink: cats[i].children[1].children[0].attribs.href,
			catIcon: cats[i].children[1].children[0].children[0].attribs.class,
			link: cats[i].children[1].children[0].nextSibling.attribs.href,
			name: cats[i].children[1].children[0].nextSibling.firstChild.nodeValue,
			seeds: cats[i].children[3].firstChild.nodeValue,
			leeches: cats[i].children[5].firstChild.nodeValue,
			date: cats[i].children[7].firstChild.nodeValue,
			size: cats[i].children[9].firstChild.nodeValue
		});
	}
	
	for (let i: number = 58; i < 70 ; i++) {
		catsData5.push({
			catLink: cats[i].children[1].children[0].attribs.href,
			catIcon: cats[i].children[1].children[0].children[0].attribs.class,
			link: cats[i].children[1].children[0].nextSibling.attribs.href,
			name: cats[i].children[1].children[0].nextSibling.firstChild.nodeValue,
			seeds: cats[i].children[3].firstChild.nodeValue,
			leeches: cats[i].children[5].firstChild.nodeValue,
			date: cats[i].children[7].firstChild.nodeValue,
			size: cats[i].children[9].firstChild.nodeValue
		});
	}
	
	for (let i: number = 70; i < 82 ; i++) {
		catsData6.push({
			catLink: cats[i].children[1].children[0].attribs.href,
			catIcon: cats[i].children[1].children[0].children[0].attribs.class,
			link: cats[i].children[1].children[0].nextSibling.attribs.href,
			name: cats[i].children[1].children[0].nextSibling.firstChild.nodeValue,
			seeds: cats[i].children[3].firstChild.nodeValue,
			leeches: cats[i].children[5].firstChild.nodeValue,
			date: cats[i].children[7].firstChild.nodeValue,
			size: cats[i].children[9].firstChild.nodeValue
		});
	}


	for (let i: number = 82; i < 94 ; i++) {
		catsData7.push({
			catLink: cats[i].children[1].children[0].attribs.href,
			catIcon: cats[i].children[1].children[0].children[0].attribs.class,
			link: cats[i].children[1].children[0].nextSibling.attribs.href,
			name: cats[i].children[1].children[0].nextSibling.firstChild.nodeValue,
			seeds: cats[i].children[3].firstChild.nodeValue,
			leeches: cats[i].children[5].firstChild.nodeValue,
			date: cats[i].children[7].firstChild.nodeValue,
			size: cats[i].children[9].firstChild.nodeValue
		});
	}

    return {
        firstCar: firstCarousels,
        secondCar: secondCarousels,
        allCats: [catsData0, catsData1, catsData2, catsData3, catsData4, catsData5, catsData6, catsData7]
    };
}

export async function getTorrent(torrentlink: string = "https://1337x.to/torrent/3736404/Pandas-2018-UHD-2160p-Blu-ray-HEVC-HDR-DTS-HDMA-5-1-DDR/") {
    try {
        var resHtml = await rp(torrentlink);
    } catch (err) {
        throw err;
    }

    const nameSoup = $("div.box-info.torrent-detail-page.vpn-info-wrap div.box-info-heading.clearfix h1", resHtml);
    const dataSoup = $("div.box-info-detail.no-top-radius div.torrent-category-detail.clearfix ul.list span", resHtml);
    const linkSoup = $("ul.download-links-dontblock.btn-wrap-list li.dropdown ul.dropdown-menu li a", resHtml);
    const hashSoup = $("div.infohash-box p span", resHtml);

    const name = nameSoup.text();
    const infoHash = hashSoup.text();

    var cat = dataSoup[0].firstChild.data;
    var type = dataSoup[1].firstChild.data;
    var lang = dataSoup[2].firstChild.data;
    var size = dataSoup[3].firstChild.data;
    var dls = dataSoup[5].firstChild.data;
    var lchk = dataSoup[6].firstChild.data;
    var date = dataSoup[7].firstChild.data;
    var see = dataSoup[8].firstChild.data;
    var lee = dataSoup[9].firstChild.data;

    var link1 = linkSoup[0].attribs.href;
    var link2 = linkSoup[1].attribs.href;
    var link3 = linkSoup[2].attribs.href;
    var link4 = linkSoup[3].attribs.href;

    return {
        name: name,
        categorie: cat,
        type: type,
        lang: lang,
        size: size,
        downloads: dls,
        lastChecked: lchk,
        date: date,
        seeds: see,
        leechs: lee,
        infohash: infoHash,
        link1 : link1,
		link2 : link2,
		link3 : link3,
		link4 : link4
    };
}

export async function getCategory(catLink: string = "https://1337x.to/sub/80/0/") {
    try {
        var resHtml = await rp(catLink);
    } catch (err) {
        throw err;
    }

    const cats = $("div.featured-list div.table-list-wrap table.table-list tbody tr", resHtml);
    const pageSoup = $("div.pagination ul li", resHtml);

    var titleSoup = $("h1", resHtml);
    var iconSoup = $("h1 i", resHtml);

    if(!titleSoup[0]){
        titleSoup = $("h3", resHtml);
    }

    if(!iconSoup[0]){
        iconSoup = $("h3 i", resHtml);
    }

    const title = titleSoup.text();
    const icon = iconSoup[0].attribs.class;

    var data = []
    var pages = []

    for (let i: number = 0; i < cats.length; i++) {
        data.push({
            catLink: cats[i].children[1].children[0].attribs.href,
            catIcon: cats[i].children[1].children[0].children[0].attribs.class,
            link: cats[i].children[1].children[0].nextSibling.attribs.href,
            name: cats[i].children[1].children[0].nextSibling.firstChild.nodeValue,
            seeds: cats[i].children[3].firstChild.nodeValue,
            leeches: cats[i].children[5].firstChild.nodeValue,
            date: cats[i].children[7].firstChild.nodeValue,
            size: cats[i].children[9].firstChild.nodeValue
        });
    }

    for (let i: number = 0; i < pageSoup.length; i++) {
        pages.push({
            value: pageSoup[i].firstChild.firstChild.nodeValue,
            link: pageSoup[i].firstChild.attribs.href,
            active: pageSoup[i].attribs.class==="active" ? "active" : ""
        });
    }

    return { title : title, icon : icon, dx : data, dp : pages };

}

export async function searchTorrent(searchLink: string = "https://1337x.to/category-search/miami/Games/1/") {

    try {
        var resHtml = await rp(searchLink);
    } catch (err) {
        throw err;
    }

    var blackPList = ["nehalpuja", "NewDragon", "livingmoney", "nico1899", "diebullen23", "cnng", "RiddleR123", "kinayufrvr", "Dreamspark", "RiddleR123"]

    const cats = $("div.box-info-detail.inner-table div.table-list-wrap table.table-list tbody tr", resHtml);
    const uploaderSoup = $("div.box-info-detail.inner-table div.table-list-wrap table.table-list tbody tr td.coll-5 a", resHtml);
    const pageSoup = $("div.pagination ul li", resHtml);

    var data = []
    var pages = []

    for (let i: number = 0; i < cats.length; i++) {
        if(cats[i].children[1].children[0].attribs.href==="/sub/48/0/"){
            continue;
        }

        if(cats[i].children[1].children[0].attribs.href==="/sub/51/0/"){
            continue;
        }

        if(cats[i].children[1].children[0].attribs.href==="/sub/49/0/"){
            continue;
        }


        if(blackPList.includes(uploaderSoup[i].firstChild.nodeValue)){
            continue;
        }

        data.push({
            catLink: cats[i].children[1].children[0].attribs.href,
            catIcon: cats[i].children[1].children[0].children[0].attribs.class,
            link: cats[i].children[1].children[0].nextSibling.attribs.href,
            name: cats[i].children[1].children[0].nextSibling.firstChild.nodeValue,
            seeds: cats[i].children[3].firstChild.nodeValue,
            leeches: cats[i].children[5].firstChild.nodeValue,
            date: cats[i].children[7].firstChild.nodeValue,
            size: cats[i].children[9].firstChild.nodeValue
        });
    }

    

    for (let i: number = 0; i < pageSoup.length; i++) {
        pages.push({
            value: pageSoup[i].firstChild.firstChild.nodeValue,
            link: pageSoup[i].firstChild.attribs.href,
            active: pageSoup[i].attribs.class==="active" ? "active" : ""
        });
    }

    return {
        title : "Search Result",
        icon : "flaticon-search",
        dx: data,
        dp: pages
    };
}

export function incrRequests() {
    var data = JSON.parse(fs.readFileSync("./stats.json").toString());
    data.requests++;
    fs.writeFileSync("./stats.json", JSON.stringify(data));
}

export function incrDownloads() {
    var data = JSON.parse(fs.readFileSync("./stats.json").toString());
    data.downloads++;
    fs.writeFileSync("./stats.json", JSON.stringify(data));
}

export function getStats() {
    return JSON.parse(fs.readFileSync("./stats.json").toString());
}