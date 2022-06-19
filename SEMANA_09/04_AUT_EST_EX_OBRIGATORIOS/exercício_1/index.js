function check() {
    var input = document.querySelector("#number").value
    if (input % 2 == 0) {
        document.querySelector("#result").innerHTML = "o número digitado é par"
    }
    else {
        document.querySelector("#result").innerHTML = "o número digitado é impar"
    }

}