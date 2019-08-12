"use strict";
var sc=0;
var i=0;
var total;
function show_selected() 
{
	var comp = Math.floor((Math.random() * 6) + 1);
    var selector = document.getElementById('id_of_select1');
    var value = parseInt(selector[selector.selectedIndex].value);
	if(comp!=value)
    {
    	   sc=sc+value;
    	   document.getElementById('display').innerHTML =sc;
           if(value==1||value==2||value==3||value==5)
            {
                document.getElementById('imgstatus');
                imgstatus.src='runs.png';
            }
            if(value==4)
            {
                document.getElementById('imgstatus');
                imgstatus.src='four.gif';
            }
            if(value==6)
            {
                document.getElementById('imgstatus');
                imgstatus.src='six.gif';
            }
    }
    if(comp==value)
    {
    	document.getElementById('status').innerHTML =" You are Out";
    	total=sc;
        sc=0;
    	document.getElementById('req').innerHTML ="Your HighScore is "+total+" runs";
        document.getElementById('imgstatus');
        imgstatus.src='out.gif';
        document.getElementById('end1').innerHTML ="To display your name and score in Leaderboard send a screenshot of your highscore to the below mail id";
    	document.getElementById('end2').innerHTML ="worldofhandcricket@gmail.com";
        document.getElementById('homelink').innerHTML ="Go to Home Page";
    	}
}
document.getElementById('btn1').addEventListener('click', show_selected);;