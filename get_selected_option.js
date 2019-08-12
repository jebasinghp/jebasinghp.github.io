"use strict";
var sc=0;
var i=0;
var total;
function show_selected() {
	

	var comp = Math.floor((Math.random() * 6) + 1);
    var selector = document.getElementById('id_of_select');
    var value = parseInt(selector[selector.selectedIndex].value);
	if(comp!=value)
    {
    	if(i<1)
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
    	else
    	{
    		sc=sc+comp;
    		document.getElementById('display').innerHTML =sc;
            if(comp==1||comp==2||comp==3||comp==5)
            {
                document.getElementById('imgstatus');
                imgstatus.src='runs.png';
            }
            if(comp==4)
            {
                document.getElementById('imgstatus');
                imgstatus.src='four.gif';
            }
            if(comp==6)
            {
                document.getElementById('imgstatus');
                imgstatus.src='six.gif';
            }
    	}
    }
    if(comp==value)
    {
    	if(i<1)
    	{
    	i=i+1;
    	document.getElementById('status').innerHTML =" You are Out";
    	total=sc;
    	sc=0;
    	document.getElementById('display').innerHTML =0;
    	document.getElementById('req').innerHTML ="Opponent need "+total+" Runs to win the Match...";
    	document.getElementById('bb').innerHTML="You are Bowling";
    	document.getElementById('sct').innerHTML ="Opponent score : ";
    	document.getElementById('status').innerHTML =" Not Out ";
        document.getElementById('imgstatus');
        imgstatus.src='out.gif';
    	}
    	else
    	{
    		document.getElementById('status').innerHTML =" You got the Wicket of the opponent";
    		if(total<sc)
    		{
    			document.getElementById('end1').innerHTML ="Your Score : "+total;
    			document.getElementById('end2').innerHTML ="Opponent Score : "+sc;
    			document.getElementById('req').innerHTML ="You Lost the Match !.... Better luck next time";
                document.getElementById('imgstatus');
                imgstatus.src='lost.gif';
    		}
    		if(total==sc)
    		{
    			document.getElementById('end1').innerHTML ="Your Score : "+total;
    			document.getElementById('end2').innerHTML ="Opponent Score : "+sc;
    			document.getElementById('req').innerHTML ="The Match Draw.....A Tough Match";
                document.getElementById('imgstatus');
                imgstatus.src='draw.jpg';
    		}
    		if(total>sc)
    		{
    			document.getElementById('end1').innerHTML ="Your Score : "+total;
    			document.getElementById('end2').innerHTML ="Opponent Score : "+sc;
    			document.getElementById('req').innerHTML ="* * * You Won the Match * * *";
                document.getElementById('imgstatus');
                imgstatus.src='won.gif';
    		}
    	document.getElementById('homelink').innerHTML ="Go to Home Page";
    	}
    }
	}
document.getElementById('btn').addEventListener('click', show_selected);;