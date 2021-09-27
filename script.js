let getDateOrTime = (date) => (date == 'date') ? new Date().toLocaleDateString()  : (date == "time") ? new Date().toLocaleTimeString() : 'Invalid';

let nightOrDay = (postfix) => postfix[-2] == 'A' ? 'Day' : 'night';

let getIP = async () => {
    // let url = 'https://geo.ipify.org/api/v1?apiKey=at_0jKVsS1q5y340ZINLeu6lEc4ws8di';
let response = await fetch(url);
console.log("im in")
let object = await response.json();
return object;
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
    let data = getIP();
    console.log(data.ip);
    let geolocation = document.querySelector(".geolocation > div:last-child");
    geolocation.children[0].firstElementChild.innerText = 'ttt'
}())
// let url = 'https://geo.ipify.org/api/v1?apiKey=at_0jKVsS1q5y340ZINLeu6lEc4ws8di';
// let response = await fetch(url);

// let commits = await response.json();
// console.log(commits.ip)
