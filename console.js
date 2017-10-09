var c = function() {
    return({
        log: function(msg) {
          consoleDiv = document.getElementById('console');
          para = document.createElement('p');
          text = document.createTextNode(msg);
          para.appendChild(text);
          consoleDiv.appendChild(para);
        }
    });
}();

c.log("test");

/* **Unit Converter (temp, currency, volume, mass and more)** - Converts various units between one another. The user enters the type of unit being entered, the type of unit they want to convert to and then the value. The program will then make the conversion.*/

function convert(){
var start = $("#firstList option:selected").val();

var end = $("#secondList option:selected").val();
//var start = firstList.value;

var value = $('#Unit').val();
  if(start == end) {
    return "They're the same unit!"
  }
  if(start == "F" || start =="C") {
    return temp(start,end,value);
  }

    function temp(start, end, value) {
      if(start == "F" && end =="C"){
        return (value - 32) * (5 / 9)
      } else if (start == "C" && end =="F"){
        return (value * 1.8) + 32;
      }
    }



}
//c.log(convert("C","F",0))
