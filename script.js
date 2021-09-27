let getDateOrTime = (date) => (date == 'date') ? new Date().toLocaleDateString() : (date == "time") ? new Date().toLocaleTimeString() : 'Invalid';

let getRelativeTime = (timePostfix) => timePostfix[-2] == 'A' ? 'Day' : 'night';

let getAdvice = (dayorNight) => dayorNight == 'night' ? 'dont saty out too long tho! 🙄' : 'have a nice day 🤗';

let getIPObject = async () => {
     let url = 'https://geo.ipify.org/api/v1?apiKey=at_0jKVsS1q5y340ZINLeu6lEc4ws8di';
    let response = await fetch(url);
    let geoObject = await response.json();
    return geoObject;
}

(async function oninitial() {
    await setTimeout(() => {
        document.querySelector('.sk-chase').style.opacity = '0';
        document.querySelector('main').dataset.state = "on";
        },3000)

    // await setTimeout(() => {document.querySelector('.sk-chase').style.display = 'none';},0)
}())
function showGeo(element, geoObject) {
    element.children[0].firstElementChild.innerText = geoObject.ip;
    element.children[2].firstElementChild.innerText = geoObject.location.region;
    element.children[3].firstElementChild.innerText = geoObject.location.country;
    element.children[4].firstElementChild.innerText = geoObject.location.city;
    vpn(geoObject);
}

let handleGeo = async (elem) => {
    let geoObject = await getIPObject();
    showGeo(elem, geoObject);
}

// each card specific IIF
(function general() {
    let generalElement = document.querySelector(".general > div:last-child");
    generalElement.children[0].firstElementChild.innerText = getDateOrTime('date');
    let time = generalElement.children[1].firstElementChild;
    let timeInDay = time.innerText = getDateOrTime('time');
    let relativeTime = getRelativeTime(timeInDay);
    generalElement.children[2].firstElementChild.innerText = relativeTime;
    generalElement.children[3].innerText = getAdvice(relativeTime);
}());

(function geolocation() {
    let geoElement = document.querySelector(".geolocation > div:last-child");
    handleGeo(geoElement);
}())

// gets invoked after fetching geoObject
function vpn(geoObject) {
    let vpnElement = document.querySelector(".vpn > div:last-child");
    vpnElement.children[0].firstElementChild.innerText = geoObject.proxy.proxy;
    vpnElement.children[1].firstElementChild.innerText = geoObject.proxy.vpn;
}