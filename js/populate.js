import { nameList, uuids, categories, books, genders, ages } from "./mock_data.js";

// var analytics = window.analytics = window.analytics || []; if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {
//     analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"]; analytics.factory = function (e) { return function () { var t = Array.prototype.slice.call(arguments); t.unshift(e); analytics.push(t); return analytics } }; for (var e = 0; e < analytics.methods.length; e++) { var key = analytics.methods[e]; analytics[key] = analytics.factory(key) } analytics.load = function (key, e) { var t = document.createElement("script"); t.type = "text/javascript"; t.async = !0; t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(t, n); analytics._loadOptions = e }; analytics._writeKey = "qJWRyazSx0EffWWuxLEL7jQpzYAZ2viF";; analytics.SNIPPET_VERSION = "4.15.3";
//     analytics.load("qJWRyazSx0EffWWuxLEL7jQpzYAZ2viF");
//     analytics.page();
// }

function viewCategory(category) {
    analytics.track('Category Interested', category)
}

function viewQnA(no, ques, ans) {
    analytics.track('QnA Read', {
        no: no,
        question: ques,
        answer: ans,
    })
}

function viewBook(book) {
    var vals = book.split(", ")
    analytics.track('Book Viewed', {
        ISBN: vals[0],
        ageGroup: vals[1],
        title: vals[2],
        price: vals[3],
    })
}

function clickBook(book) {
    var vals = book.split(", ")
    analytics.track('Book Clicked', {
        ISBN: vals[0],
        ageGroup: vals[1],
        title: vals[2],
        price: vals[3],
    })
}

function addToCart(book) {
    var vals = book.split(", ")
    var day = parseInt(Math.random() * 30 + 1);

    analytics.track('Book Added To Cart', {
        ISBN: vals[0],
        ageGroup: vals[1],
        title: vals[2],
        price: vals[3],
        date: new Date(2022, 7, day).toISOString(),
        time: new Date().toTimeString(),
    })
}

function purchase(book) {
    var vals = book.split(", ")
    var day = parseInt(Math.random() * 30 + 1);

    analytics.track('Book Purchased', {
        ISBN: vals[0],
        ageGroup: vals[1],
        title: vals[2],
        price: vals[3],
        date: new Date(2022, 7, day).toISOString(),
        time: new Date().toTimeString(),
    })
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function getRandomValues(n) {
    return Math.floor(Math.random() * n)
}

for (let i = 0; i < nameList.length; i++) {
    var vals = nameList[i].split('\t');


    // var isPresent = Math.random() > 0.5
    analytics.page();
    // if (isPresent) {
    analytics.identify(uuids[i], {
        name: vals.slice(0, 2).join(" "),
        email: vals[2],
        plan: (Math.random() > 0.5) ? "Premium" : "Freemium",
        gender: genders[i],
        age: ages[i],
    })

    viewCategory(categories[getRandomValues(categories.length)]);

    viewBook(books[getRandomValues(books.length)]);

    clickBook(books[getRandomValues(books.length)]);

    if (Math.random() > 0.8) {
        addToCart(books[getRandomValues(books.length)]);
    }

    if (Math.random() > 0.9) {
        purchase(books[getRandomValues(books.length)]);
    }
}

