
let pp = document.getElementById("pp")


pp.addEventListener('click', clic)
function clic() {
    console.log("i am in")

    const xhr = new XMLHttpRequest()
    xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true)
    xhr.onload = function () {
        let pa = document.getElementById("pa")
        let a = this.responseText
        let b = JSON.parse(a)
        pa.innerText = b

    }
    xhr.send()


}
