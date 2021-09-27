let getDateOrTime = (date) => (date == 'date') ? new Date().toLocaleDateString() : new Date().toLocaleTimeString();
let nightOrDay = (postfix) => postfix[-2] == 'A' ? 'Day' : 'night';


(function general() {

    let date = document.querySelector(".general-data > div:last-child p:first-child em")
    date.innerText = getDateOrTime('date');
    let time = document.querySelector(".general-data > div:last-child p:nth-child(2) em")
    let time2 = time.innerText = getDateOrTime('notdate')
    document.querySelector(".general-data > div:last-child p:nth-child(3) em").innerText = nightOrDay(time2)



}());


