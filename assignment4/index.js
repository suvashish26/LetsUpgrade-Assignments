
    function addNums() 
    {
      var y = document.getElementById("txt1").value;
      var z = document.getElementById("txt2").value;
      var x = parseInt(y) + parseInt(z);
      document.getElementById("result").innerHTML = x;
    }