/**
 * wird immer aufgerunfen, wenn eine Seite geladen wurde, damit der Header und Footer eingebunden wird
 */
window.onload = function () {
    $('#foo').load('/footer.html');
    $('#header').load("/header.html");
};