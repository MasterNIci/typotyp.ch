

 var Liste = new Array();

 Liste[0] = "https://typotyp.ch/bilder/Bild1.png";
 Liste[1] = "https://typotyp.ch/bilder/Bild2.png";
 Liste[2] = "https://typotyp.ch/bilder/Bild3.png";
 Liste[3] = "https://typotyp.ch/bilder/Bild4.png";
 Liste[4] = "https://typotyp.ch/bilder/Bild5.png";

 var Bilder = new Array();

 function vorladen()
 {
  for (i = 0; i < Liste.length; i++) {
  Bilder[i] = new Image();
  Bilder[i].src = Liste[i];
  }
 }

 vorladen();
