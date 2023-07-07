'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Friday",
    "Saturday"
];

export const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]; 
/**
 * 
 * @param {number} dateUnix Unix date in seconds 
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. format: "Sunday 10, Jan"
 */

export const getDate = function (dateUnix, timezone){
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()} ${monthName}`;
}
/**
 * 
 * @param {number} timeUnix Unix data in seconds 
 * @param {number} timezone Timezone shift from UTC in seconds 
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */

export const getTime  = function (timeUnix, timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >=12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}
/**
 * 
 * @param {number} timeUnix Unix data in seconds 
 * @param {number} timezone Timezone shift from UTC in seconds 
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */

export const getHours = function (timeUnix, timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >=12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}
/**
 * @param {number} mps Metter per seconds
 * @returns {number} Kilometer per hours
 */

export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1:{
        level: "Good",
        message: "Bardzo dobry oznacza bardzo dobrą jakość powietrza. Gdy wskaźniki świecą się na zielono, nie istnieje realne zagrożenie dla zdrowia podczas wykonywania jakichkolwiek aktywności na zewnątrz."
    },
    2:{
        level: "Fair",
        message: "Dobry oznacza zadowalającą jakość powietrza. W takim przypadku zanieczyszczenia nie stanowią zagrożenia dla zdrowia lub ryzyko jest niewielkie. Dopuszcza się dowolną aktywność na zewnątrz bez ograniczeń."
    },
    3:{
        level: "Moderate",
        message: "Umiarkowany oznacza akceptowalną jakość powietrza, ale zanieczyszczenie może być zagrożeniem dla osób szczególnie wrażliwych (starszych, chorych, kobiet w ciąży i małych dzieci). Warto częściowo ograniczyć aktywność na wolnym powietrzu."
    },
    4:{
        level: "Poor",
        message: "Dostateczny oznacza dostateczną jakość powietrza. Zanieczyszczenie stanowi już zagrożenie dla zdrowia, zwłaszcza dla grup wrażliwych. Aktywność na wolnym powietrzu powinna zostać skrócona do minimum, zwłaszcza jeśli jest to intensywny wysiłek fizyczny."
    },
    5:{
        level: "Very Poor",
        message: "Zły oznacza złą jakość powietrza. Zanieczyszczenie jest na tyle duże, że osoby osoby chore lub starsze, kobiety w ciąży oraz małe dzieci powinny unikać przebywania na zewnątrz, pozostali spoza grupy ryzyka natomiast ograniczyć je do minimum. Najlepiej zupełnie zrezygnować z uprawiania sportu na wolnym powietrzu."
    }
}