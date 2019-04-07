function increaseFontFunctionToNormal(){
	document.getElementById("contentBigParagraph").style.fontSize = "130%";
	document.getElementById("contentBigTranNote").style.fontSize = "130%";
	document.getElementById("contentBigChNav").style.fontSize = "130%";
	document.getElementById("contentBigDewyNote").style.fontSize = "130%";
	document.getElementById("contentBigFootnote").style.fontSize = "130%";
}

function increaseFontFunctionToLarge(){
	document.getElementById("contentBigParagraph").style.fontSize = "170%";
	document.getElementById("contentBigTranNote").style.fontSize = "170%";
	document.getElementById("contentBigChNav").style.fontSize = "170%";
	document.getElementById("contentBigDewyNote").style.fontSize = "170%";
	document.getElementById("contentBigFootnote").style.fontSize = "170%";
}

function increaseFontFunctionToMoreLarge(){
	document.getElementById("contentBigParagraph").style.fontSize = "200%";
	document.getElementById("contentBigTranNote").style.fontSize = "200%";
	document.getElementById("contentBigChNav").style.fontSize = "200%";
	document.getElementById("contentBigDewyNote").style.fontSize = "200%";
	document.getElementById("contentBigFootnote").style.fontSize = "200%";
}




function incrementValueHappy(){
	var value = document.getElementById("happyKaomoji").value;
	value++;
	document.getElementById("happyKaomoji").value = value;
	if (value > 0){
		document.getElementById("happyKaomojiDisplay").innerHTML = value;
	}
	else {
		document.getElementById("happyKaomojiDisplay").innerHTML = " ";
	}
}

function incrementValueLaughing(){
	var value = document.getElementById("laughingKaomoji").value;
	value++;
	document.getElementById("laughingKaomoji").value = value;
	if (value > 0){
		document.getElementById("laughingKaomojiDisplay").innerHTML = value;
	}
	else {
		document.getElementById("laughingKaomojiDisplay").innerHTML = " ";
	}
}

function incrementValueLove(){
	var value = document.getElementById("loveKaomoji").value;
	value++;
	document.getElementById("loveKaomoji").value = value;
	if (value > 0){
		document.getElementById("loveKaomojiDisplay").innerHTML = value;
	}
	else {
		document.getElementById("loveKaomojiDisplay").innerHTML = " ";
	}
}

function incrementValueShocked(){
	var value = document.getElementById("shockedKaomoji").value;
	value++;
	document.getElementById("shockedKaomoji").value = value;
	if (value > 0){
		document.getElementById("shockedKaomojiDisplay").innerHTML = value;
	}
	else {
		document.getElementById("shockedKaomojiDisplay").innerHTML = " ";
	}
}

function incrementValueFlipTable(){
	var value = document.getElementById("flipTableKaomoji").value;
	value++;
	document.getElementById("flipTableKaomoji").value = value;
	if (value > 0){
		document.getElementById("flipTableKaomojiDisplay").innerHTML = value;
	}
	else {
		document.getElementById("flipTableKaomojiDisplay").innerHTML = " ";
	}
}
									
function incrementValueCrying(){
	var value = document.getElementById("cryingKaomoji").value;
	value++;
	document.getElementById("cryingKaomoji").value = value;
	if (value > 0){
		document.getElementById("cryingKaomojiDisplay").innerHTML = value;
	}
	else {
		document.getElementById("cryingKaomojiDisplay").innerHTML = " ";
		}
}

