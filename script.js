let getDateOrTime = (date) => (date == 'date') ? new Date().toLocaleDateString()  : (date == "time") ? new Date().toLocaleTimeString() : 'Invalid';

let nightOrDay = (postfix) => postfix[-2] == 'A' ? 'Day' : 'night';

let getIP = async () => {
    //  let url = 'https://geo.ipify.org/api/v1?apiKey=at_0jKVsS1q5y340ZINLeu6lEc4ws8di';
    let response = await fetch(url);

    let geoObject = await response.json();
    return geoObject;
}

function changeGeo(element, geoObject) {
    element.children[0].firstElementChild.innerText = geoObject.ip;
    element.children[2].firstElementChild.innerText = geoObject.location.region;
    element.children[3].firstElementChild.innerText = geoObject.location.country
    element.children[4].firstElementChild.innerText = geoObject.location.city
    handleVPN(geoObject);
}

let handleGeo = async (elem) => {
let geoObject = await getIP();
changeGeo(elem, geoObject);
}

let getAdvice = (t) => t == 'night' ? 'dont saty out too long tho! 🙄' : 'have a nice day 🤗';

(function general() {
    let general = document.querySelector(".general-data > div:last-child");
    let day = general.children[0].firstElementChild
    day.innerText = getDateOrTime('date');
    let time = general.children[1].firstElementChild
    let timeInDay = time.innerText = getDateOrTime('time');
    let t = nightOrDay(timeInDay);
    general.children[2].firstElementChild.innerText = t;
    general.children[3].innerText = getAdvice(t);
}());

(function geolocation() {
    // console.log(data.ip);
    let geoElement = document.querySelector(".geolocation > div:last-child");
    let data = handleGeo(geoElement);
    // geolocation.children[0].firstElementChild.innerText = 'ttt'
}())

function handleVPN(geoObject) {
    let handleVPN = document.querySelector(".vpn > div:last-child");
    handleVPN.children[0].firstElementChild.innerText = geoObject.proxy.proxy;
    handleVPN.children[1].firstElementChild.innerText = geoObject.proxy.vpn;

}