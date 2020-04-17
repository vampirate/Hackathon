function getUrlVars() {
    var vari = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vari[key] = value;
    });
    return vari;
}
var number = getUrlVars()["loggedin"];

alert(number)