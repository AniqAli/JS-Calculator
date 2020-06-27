function Numbers(num) {
    var result = document.getElementById("output");
    result.value += num;
}
function clearText(){
    var result = document.getElementById("output").value = "";
}
function finalResult() {
    var result = document.getElementById("output");
    result.value = eval(result.value);
}
function sqr() {
    var result = document.getElementById("output");
    result.value = result.value * result.value;
}