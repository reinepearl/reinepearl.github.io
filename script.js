function increaseFontFunctionToMoreSmall(){
	document.getElementById("contentParagraph").style.fontSize = "100%";
	document.getElementById("contentChNav").style.fontSize = "100%";
	document.getElementById("contentDewyNote").style.fontSize = "100%";
	
	var element1Exists = document.getElementById("contentTranNote");
		if (element1Exists != null){
			document.getElementById("contentTranNote").style.fontSize = "100%"
		}
	
	var element1Exists = document.getElementById("contentParagraph2");
		if (element1Exists != null){
			document.getElementById("contentParagraph2").style.fontSize = "100%"
		}
	
	var element1Exists = document.getElementById("contentParagraph3");
		if (element1Exists != null){
			document.getElementById("contentParagraph3").style.fontSize = "100%"
		}
	
	var element1Exists = document.getElementById("contentFootnote");
		if (element1Exists != null){
			document.getElementById("contentFootnote").style.fontSize = "100%"
		}
}

function increaseFontFunctionToSmall(){
	document.getElementById("contentParagraph").style.fontSize = "110%";
	document.getElementById("contentChNav").style.fontSize = "110%";
	document.getElementById("contentDewyNote").style.fontSize = "110%";
	
	var element1Exists = document.getElementById("contentTranNote");
		if (element1Exists != null){
			document.getElementById("contentTranNote").style.fontSize = "110%"
		}
	
	var element1Exists = document.getElementById("contentParagraph2");
		if (element1Exists != null){
			document.getElementById("contentParagraph2").style.fontSize = "110%"
		}
	
	var element1Exists = document.getElementById("contentParagraph3");
		if (element1Exists != null){
			document.getElementById("contentParagraph3").style.fontSize = "110%"
		}
		
	var element1Exists = document.getElementById("contentFootnote");
		if (element1Exists != null){
			document.getElementById("contentFootnote").style.fontSize = "110%"
		}
}

function increaseFontFunctionToNormal(){
	document.getElementById("contentParagraph").style.fontSize = "130%";
	document.getElementById("contentChNav").style.fontSize = "130%";
	document.getElementById("contentDewyNote").style.fontSize = "130%";
	
	var element1Exists = document.getElementById("contentTranNote");
		if (element1Exists != null){
			document.getElementById("contentTranNote").style.fontSize = "130%"
		}
	
	var element1Exists = document.getElementById("contentParagraph2");
		if (element1Exists != null){
			document.getElementById("contentParagraph2").style.fontSize = "130%"
		}
	
	var element1Exists = document.getElementById("contentParagraph3");
		if (element1Exists != null){
			document.getElementById("contentParagraph3").style.fontSize = "130%"
		}
		
	var element1Exists = document.getElementById("contentFootnote");
		if (element1Exists != null){
			document.getElementById("contentFootnote").style.fontSize = "130%"
		}
	
}

function increaseFontFunctionToLarge(){
	document.getElementById("contentParagraph").style.fontSize = "170%";
	document.getElementById("contentChNav").style.fontSize = "170%";
	document.getElementById("contentDewyNote").style.fontSize = "170%";
	
	var element1Exists = document.getElementById("contentTranNote");
		if (element1Exists != null){
			document.getElementById("contentTranNote").style.fontSize = "170%"
		}
	
	var element1Exists = document.getElementById("contentParagraph2");
		if (element1Exists != null){
			document.getElementById("contentParagraph2").style.fontSize = "170%"
		}
	
	var element1Exists = document.getElementById("contentParagraph3");
		if (element1Exists != null){
			document.getElementById("contentParagraph3").style.fontSize = "170%"
		}
	
	var element1Exists = document.getElementById("contentFootnote");
		if (element1Exists != null){
			document.getElementById("contentFootnote").style.fontSize = "170%"
		}
}

function increaseFontFunctionToMoreLarge(){
	document.getElementById("contentParagraph").style.fontSize = "200%";
	document.getElementById("contentChNav").style.fontSize = "200%";
	document.getElementById("contentDewyNote").style.fontSize = "200%";
	
	var element1Exists = document.getElementById("contentTranNote");
		if (element1Exists != null){
			document.getElementById("contentTranNote").style.fontSize = "200%"
		}
	
	var element1Exists = document.getElementById("contentParagraph2");
		if (element1Exists != null){
			document.getElementById("contentParagraph2").style.fontSize = "200%"
		}
	
	var element1Exists = document.getElementById("contentParagraph3");
		if (element1Exists != null){
			document.getElementById("contentParagraph3").style.fontSize = "200%"
		}
		
	var element1Exists = document.getElementById("contentFootnote");
		if (element1Exists != null){
			document.getElementById("contentFootnote").style.fontSize = "200%"
		}
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

