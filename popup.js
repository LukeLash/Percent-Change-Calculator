window.onload = () => {
/*
document.addEventListener("keydown", function() {
  var k = event.key;

})
*/

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow is pressed
        document.getElementById('entry1').focus();
    }
    if (e.keyCode == '40') {
        // down arrow is pressed
        document.getElementById('entry2').focus();
    }
    if (e.keyCode == '13') {
      document.getElementById("button1").click();
    }


}


document.getElementById('button1').addEventListener("click", function() {


  var num1 = document.getElementById('entry1').value;
  var num2 = document.getElementById('entry2').value;

  if (num1.includes(",")) {
    num1 = num1.replace(",", "");
  }
  if (num2.includes(",")) {
    num2 = num2.replace(",", "");
  }

  var percentDiff = ((num2 - num1) / num1 * 100).toFixed(2);

  document.getElementById("percentDiffResult").innerHTML = percentDiff + "%";

});

}
