function info() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById("demo").innerHTML =
            'sad';
    }
    xhttp.open('GET', './info.txt');
    xhttp.send();
}