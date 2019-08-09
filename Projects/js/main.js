var pix= document.getElementById('px');
var area=document.getElementById('area');
var fs=document.getElementById('fs');
var x=document.getElementById("area").style;

function bold(){
if	(x.fontWeight==("bold"))
{x.fontWeight=("normal");}
else{x.fontWeight=("bold");}
}

function italic(){
if	(x.fontStyle==("italic"))
{x.fontStyle=("normal");}
else{
x.fontStyle=("italic");
}
}

function under (){
if	(x.textDecoration==("underline"))
	{x.textDecoration=("none");}
else {
	x.textDecoration=("underline");
}
}

function pixel() {
	x.fontSize=pix.value;
}


function fam() 

{
	x.fontFamily=fs.value;
}