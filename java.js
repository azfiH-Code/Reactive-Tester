 
 

var start = new Date().getTime();

 function makeShapeAppear () {

 function get_random_color() {
    var letters = 'ABCDE'.split('');
    var color = '#';
    for (var i=0; i<3; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
        return color;
    }

    
    

    var position = Math.random ()* 400;
    var size = Math.random ()* 300 +100;
    if (Math.random () > 0.5) {
        document.getElementById('shape').style.borderRadius= "50%";
    } else {
        document.getElementById('shape').style.borderRadius = "0%"; 
    } 


    document.getElementById('shape').style.backgroundColor = get_random_color();
    document.getElementById('shape').style.top = position +"px" ;
    document.getElementById('shape').style.left = position  +"px";

    document.getElementById('shape').style.width = size  +"px";
    document.getElementById('shape').style.height = size  +"px";
    document.getElementById('shape').style.display = 'block' ;
    start = new Date().getTime();


 }
   makeShapeAppear();

 function appearAfterDelay () {
    setTimeout(makeShapeAppear , 1000);
 }

  appearAfterDelay ();

  document.getElementById('shape').onclick = function () {

  var end = new Date().getTime();
  var takentime = (end - start)/1000;


 document.getElementById('shape').style.display = 'none';

 document.getElementById('timetaken').innerHTML = takentime + "s"

 appearAfterDelay ();





    

    


}
