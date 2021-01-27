var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];
for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

   function myFunction() {
    var txt;
    var person = prompt("Please enter your age:", "19");
    if (person <=18) {
      txt = "Not legal age to drive";
    } else if (person>=18 && person<=100) {
      txt = "Drive safe";
    }
    document.getElementById("demo").innerHTML = txt;
  }