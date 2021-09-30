import Bowser from "./node_modules/bowser/src/bowser.js";

let getBrowser = () => {
     const browser = Bowser.getParser(window.navigator.userAgent);
     return browser

}

let getDateOrTime = (date) => (date == 'date') ? new Date().toLocaleDateString() : (date == "time") ? new Date().toLocaleTimeString() : 'Invalid';

let getRelativeTime = (timePostfix) => timePostfix[-2] == 'A' ? 'Day' : 'night';

let getAdvice = (dayorNight) => dayorNight == 'night' ? 'dont saty out too long tho! 🙄' : 'have a nice day 🤗';

let getIPObject = async () => {
     let url = 'https://geo.ipify.org/api/v1?apiKey=at_0jKVsS1q5y340ZINLeu6lEc4ws8di';
    // try {
        // let url = "rrr.com"
        let response = await fetch(url);
        let geoObject = await response.json();
        return geoObject;
    // } catch (error) {
    //     return "problem!"
    // }
}

// async function getBattery() {
//     let u;
//     let isBatterySupported = 'getBattery' in navigator;
//     if(!isBatterySupported) {
//         console.log("f")
//         return "Battery not supported";
//     }
//     let batteryPromise = await navigator.getBattery();
//     await batteryPromise.then(batteryCallback);

//     function batteryCallback(batteryObject) {
//        printBatteryStatus(batteryObject);
//     }
//     function printBatteryStatus(batteryObject) {
// u = batteryObject
//     }

// return u

// }

// console.log(getBattery())

(async function oninitial() {
    await setTimeout(() => {
        document.querySelector('.sk-chase').style.opacity = '0';
        document.querySelector('main').dataset.state = "on";
    },0)
    console.log(getBattery())

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

(function userAgent() {
    let browser = getBrowser();
    let userAgentElement = document.querySelector(".user-agent > div:last-child");
    userAgentElement.children[0].firstElementChild.innerText = browser.parsedResult.browser.name
    userAgentElement.children[1].firstElementChild.innerText = browser.parsedResult.browser.version
    userAgentElement.children[3].firstElementChild.innerText = browser.parsedResult.os.name
    userAgentElement.children[4].firstElementChild.innerText = browser.parsedResult.os.versionName
    userAgentElement.children[6].firstElementChild.innerText = browser.parsedResult.platform.type
}());

// (function battery() {
//     let result = getBattery();
//     let batteryElement = document.querySelector(".battery > div:last-child");
//     batteryElement.children[0].firstElementChild.innerText = result.level;


// }());