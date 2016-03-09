// This program was created by Karl Elmore.  It is a blackjack game.  To start, I am initializing variables, creating a deck of card // text, values and images using arrays.  I use a while loop to push images onto the array.  It started as a class project but I 
// have added functionality to the game, such as card images, new game button, depleting the deck so there are no repeating cards,
// and alert to start new game when deck gets to 10 cards or less.

var dHand = [];
var dValue = [];
var pHand = [];
var pValue = [];
var dImage = [];
var pImage = [];
var dtotal = $("dtotal");
var ptotal = $("ptotal");

var deck = ["ace-of-clubs","two-of-clubs","three-of-clubs","four-of-clubs","five-of-clubs","six-of-clubs","seven-of-clubs","eight-of-clubs","nine-of-clubs","ten-of-clubs","jack-of-clubs","queen-of-clubs","king-of-clubs","ace-of-spades","two-of-spades","three-of-spades","four-of-spades","five-of-spades","six-of-spades","seven-of-spades","eight-of-spades","nine-of-spades","ten-of-spades","jack-of-spades","queen-of-spades","king-of-spades","ace-of-hearts","two-of-hearts","three-of-hearts","four-of-hearts","five-of-hearts","six-of-hearts","seven-of-hearts","eight-of-hearts","nine-of-hearts","ten-of-hearts","jack-of-hearts","queen-of-hearts","king-of-hearts","ace-of-diamonds","two-of-diamonds","three-of-diamonds","four-of-diamonds","five-of-diamonds","six-of-diamonds","seven-of-diamonds","eight-of-diamonds","nine-of-diamonds","ten-of-diamonds","jack-of-diamonds","queen-of-diamonds","king-of-diamonds"];

var deckValue = [11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10];

var imagesName = ["ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","jc","qc","kc","as","2s","3s","4s","5s","6s","7s","8s","9s","10s","js","qs","ks","ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","jh","qh","kh","ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","jd","qd","kd"];

var images = [];
var cnt = 0;
var min = 0;
var max = 51;

// 
while (cnt < 52)
	{
			var pic = imagesName[cnt] + ".png";
			images.push(pic);
			cnt = cnt + 1;
				
	}

function createDeck()
{
	deck = ["ace-of-clubs","two-of-clubs","three-of-clubs","four-of-clubs","five-of-clubs","six-of-clubs","seven-of-clubs","eight-of-clubs","nine-of-clubs","ten-of-clubs","jack-of-clubs","queen-of-clubs","king-of-clubs","ace-of-spades","two-of-spades","three-of-spades","four-of-spades","five-of-spades","six-of-spades","seven-of-spades","eight-of-spades","nine-of-spades","ten-of-spades","jack-of-spades","queen-of-spades","king-of-spades","ace-of-hearts","two-of-hearts","three-of-hearts","four-of-hearts","five-of-hearts","six-of-hearts","seven-of-hearts","eight-of-hearts","nine-of-hearts","ten-of-hearts","jack-of-hearts","queen-of-hearts","king-of-hearts","ace-of-diamonds","two-of-diamonds","three-of-diamonds","four-of-diamonds","five-of-diamonds","six-of-diamonds","seven-of-diamonds","eight-of-diamonds","nine-of-diamonds","ten-of-diamonds","jack-of-diamonds","queen-of-diamonds","king-of-diamonds"];

	deckValue = [11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10];

	imagesName = ["ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","jc","qc","kc","as","2s","3s","4s","5s","6s","7s","8s","9s","10s","js","qs","ks","ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","jh","qh","kh","ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","jd","qd","kd"];

	images = [];
	cnt = 0;
	min = 0;
	max = 51;

	// 
	while (cnt < 52)
		{
				var pic = imagesName[cnt] + ".png";
				images.push(pic);
				cnt = cnt + 1;
				
		}
}
// save Dealers 2nd card. Initially hide card and display during Stand function. Create event listeners for Deal, Hit, Stand and new
// Game buttons
var saveDimage2 = "";	
document.getElementById("Deal").addEventListener("click", deal);
console.log(saveDimage2);
document.getElementById("Hit").addEventListener("click", hit);
document.getElementById("Stand").addEventListener("click", stand);
document.getElementById("newGame").addEventListener("click", newGame);

function hand(myCards)
{

	var total = 0;
	for (var i=0; i < myCards.length; i++)
		total = total + myCards[i];
			
	return total;
}


//Get random number to select random card in array
function getCardNum()
{
	var rNum = Math.floor(Math.random()*max);
	return rNum;
}

//Remove card from array
function remCard(itemtoRemove)
{
	images.splice(itemtoRemove,1);
	deck.splice(itemtoRemove,1);
	console.log(deck[itemtoRemove]);
	deckValue.splice(itemtoRemove,1);
	console.log(deckValue[itemtoRemove]);
	max = max - 1;
	
}

//Deal first 2 player and dealer cards.  Hide dealers second card
function deal()
{
	newGame();
	console.log(images.length)
	if (images.length < 10)
	{
		createDeck();
		alert("There are less than 10 cards in the deck. Please select new game to reshuffle cards.");
	}
	else
	{
		
		var num = getCardNum();
		pHand[0] = deck[num];
		pValue[0] = deckValue[num];
		$("#pimage1").attr("src",images[num]);
		remCard(num);
		console.log(max);
//	document.getElementById("pimage1").src = images[num];

		num = getCardNum();
		dHand[0] = deck[num];
		dValue[0] = deckValue[num];
		$("#dimage1").attr("src",images[num]);
		remCard(num);
//	document.getElementById("dimage1").src = images[num];

		num = getCardNum();
		pHand[1] = deck[num];
		pValue[1] = deckValue[num];
		$("#pimage2").attr("src",images[num]);
		remCard(num);
//	document.getElementById("pimage2").src = images[num];

		num = getCardNum();
		dHand[1] = deck[num];
		dValue[1] = deckValue[num];
		var backCard = [];
		var backCardName = "backside";
		backCardPic = backCardName + ".png";
		backCard.push(backCardPic);
		console.log(backCard.push[0]);
		$("#dimage2").attr("src", backCard[0]);
		saveDimage2 = images[num];
		remCard(num);
		console.log(max);
//	document.getElementById("dimage2").src = images[num];
	
// 	Use this code to display a text box, create text box in HTML file
//	document.getElementById("pcard1").value = pHand[0];
//	document.getElementById("pcard2").value = pHand[1];
//	document.getElementById("dcard1").value = dHand[0];
//	document.getElementById("dcard2").value = "Hidden";
		ptotal = hand(pValue);
		dtotal = hand(dValue);
//		Do not display total until the end
//		$("#ptotal").attr("value", ptotal);
	}
}

// This is the hit function.  It will add a card to the players hand up to a max of 5 cards.
function hit()
{
	if (pHand.length == 5)
	{
		alert("you already have 5 cards");
	}
	
	var num = getCardNum();
	pHand[pHand.length] = deck[num];
	pValue[pValue.length] = deckValue[num];
	ptotal = hand(pValue);
//	$("#ptotal").attr("value", ptotal);
	
	console.log(pHand.length);
	if (pHand.length == 3)
//		document.getElementById("pcard3").value = pHand[2];
		$("#pimage3").attr("src",images[num]);
	else
		if (pHand.length == 4)
//			document.getElementById("pcard4").value = pHand[3];
			$("#pimage4").attr("src",images[num]);
	else
		if (pHand.length == 5)
//		document.getElementById("pcard5").value = pHand[4];
			$("#pimage5").attr("src",images[num]);
}

function stand()
{
	if (ptotal > 21)
		{
			var i = 0;
			while (i < pHand.length && ptotal > 21)
			{
				console.log(pHand[i]);
				if(pHand[i] == "ace-of-clubs")
				{
					pValue[i] = 1;
					ptotal = hand(pValue);
					i++;
				}
				else 
					if (pHand[i] == "ace-of-spades")
					{
						pValue[i] = 1;
						ptotal = hand(pValue);
						i++;
					}
					else 
						if (pHand[i] == "ace-of-hearts")
						{
							pValue[i] = 1;
							ptotal = hand(pValue);
							i++;
						}	
						else 
							if (pHand[i] == "ace-of-diamonds")
							{
								pValue[i] = 1;
								ptotal = hand(pValue);
								i++;
							}
							else
							{
								i++;
							}
			}
				
		}
		
		
	$("#ptotal").attr("value", ptotal);
	
	if (ptotal > 21)
	{
		$("#ptotal").attr("value", ptotal);
		$("#dimage2").attr("src",saveDimage2);
		$("#dtotal").attr("value", dtotal);
		alert('Player Busts, Dealer Wins!');	
	}
	else
	{
//		document.getElementById("dcard2").value = dHand[1];
		$("#dimage2").attr("src",saveDimage2);
		$("#dtotal").attr("value", dtotal);
		while ((dtotal <= 16) && (pHand.length < 5))
		{
			var num = getCardNum();
			dHand[dHand.length] = deck[num];
			dValue[dValue.length] = deckValue[num];
			dtotal = hand(dValue);
			$("#dtotal").attr("value", dtotal);
			
			console.log(dHand.length);
			if (dHand.length == 3)
//				document.getElementById("dcard3").value = dHand[2];
				$("#dimage3").attr("src",images[num]);
			else
				if (dHand.length == 4)
//					document.getElementById("dcard4").value = dHand[3];
					$("#dimage4").attr("src",images[num]);
				else
					if (dHand.length == 5)
//						document.getElementById("dcard5").value = dHand[4];
						$("#dimage5").attr("src",images[num]);
					if (dtotal > 21)
			
			var i = 0;
			while (i < dHand.length && dtotal > 21)
			{
				console.log(dHand[i]);
				if(dHand[i] == "ace-of-clubs")
				{
					dValue[i] = 1;
					dtotal = hand(dValue);
					i++;
				}
				else 
					if (dHand[i] == "ace-of-spades")
					{
						dValue[i] = 1;
						dtotal = hand(dValue);
						i++;
					}
					else 
						if (dHand[i] == "ace-of-hearts")
						{
							dValue[i] = 1;
							dtotal = hand(dValue);
							i++;
						}	
						else 
							if (dHand[i] == "ace-of-diamonds")
							{
								dValue[i] = 1;
								dtotal = hand(dValue);
								i++;
							}
							else
							{
								i++;
							}
			}
							
		}
		
		$("#dtotal").attr("value", dtotal);
		
		if (dtotal > 21)
				{
					alert('Dealer Busts, Player Wins!');	
				}
				else
					if (dtotal >= ptotal)
						alert('Dealer Wins!');
					else 
						alert('Player Wins!');
		
	}
}
	function newGame()
	{
		$("#pimage1").attr("src"," ");
		$("#pimage2").attr("src"," ");
		$("#pimage3").attr("src"," ");
		$("#pimage4").attr("src"," ");
		$("#pimage5").attr("src"," ");
		$("#dimage1").attr("src"," ");
		$("#dimage2").attr("src"," ");
		$("#dimage3").attr("src"," ");
		$("#dimage4").attr("src"," ");
		$("#dimage5").attr("src"," ");
//		$("#pcard1").attr("value", " ");
//		$("#pcard2").attr("value", " ");
//		$("#pcard3").attr("value", " ");
//		$("#pcard4").attr("value", " ");
//		$("#pcard5").attr("value", " ");
//		$("#dcard1").attr("value", " ");
//		$("#dcard2").attr("value", " ");
//		$("#dcard3").attr("value", " ");
//		$("#dcard4").attr("value", " ");
//		$("#dcard5").attr("value", " ");
		$("#dtotal").attr("value", 0);
		$("#ptotal").attr("value", 0);

		dHand = [];
		dValue = [];
		pHand = [];
		pValue =[];
		dtotal = 0;
		ptotal = 0;		
	}