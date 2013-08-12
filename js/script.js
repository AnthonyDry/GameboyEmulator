/**
 * @author Anthony Dry
 */

function init(){
	
	console.log("inside INIT");
	document.getElementById("On").onclick = StartUp;
	//Mousedown events,
	document.getElementById("arrowUp").onmousedown = function(){PressedButton("up");};
	document.getElementById("arrowDown").onmousedown = function(){PressedButton("down");};
	document.getElementById("arrowLeft").onmousedown = function(){PressedButton("left");};
	document.getElementById("arrowRight").onmousedown = function(){PressedButton("right");};
	document.getElementById("startButton").onmousedown = function(){PressedButton("start");};
	document.getElementById("Sbutton").onmousedown = function(){PressedButton("a");};
	document.getElementById("Abutton").onmousedown = function(){PressedButton("b");};
	//MouseUp events,
	document.getElementById("arrowUp").onmouseup = function(){unPressedButton("up");};
	document.getElementById("arrowDown").onmouseup = function(){unPressedButton("down");};
	document.getElementById("arrowLeft").onmouseup = function(){unPressedButton("left");};
	document.getElementById("arrowRight").onmouseup = function(){unPressedButton("right");};
	document.getElementById("startButton").onmouseup = function(){unPressedButton("start");};
	document.getElementById("Sbutton").onmouseup = function(){unPressedButton("a");};
	document.getElementById("Abutton").onmouseup = function(){unPressedButton("b");};
	
	gb_Insert_Cartridge($('CARTRIDGE').value, false);
	
}

function StartUp(){
	event.preventDefault(); 
	console.log("inside StartUp");
	addCss("#onButton{animation:myfirst 1s;-moz-animation:myfirst 1s; /* Firefox */-webkit-animation:myfirst 1s; /* Safari and Chrome */-o-animation:myfirst 1s; /* Opera */-webkit-animation-fill-mode: forwards;-moz-animation-fill-mode: forwards;animation-fill-mode: forwards;-o-animation-fill-mode: farwards;}");
	//addCss("#CARTRIDGE{visibility:visible;}");
	gb_Insert_Cartridge('wario_walking.gb', true);
	addCss("#note{visibility:hidden}");
	var sound = document.getElementById("audio");
	sound.play();
}

function addCss(cssCode) 
{
	console.log("inside addCSS");
	var styleElement = document.createElement("style");
  	styleElement.type = "text/css";
  
  	if (styleElement.styleSheet) 
	{
   		styleElement.styleSheet.cssText = cssCode;
  	} 
  	else 
  	{
    	styleElement.appendChild(document.createTextNode(cssCode));
  	}
  
  document.getElementsByTagName("head")[0].appendChild(styleElement);
}




window.onload = init();
