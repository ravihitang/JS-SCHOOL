/* Black Jack 
Goal = have a deal more than dealer but no more than 21
if sum of cards > 21 then bust means out
the player places bet
every one gets 2 cards and dealer has 2 cards 
but 1 is not revealed;
cards from 2-10 are scored as their face value
J,Q,K = 10
A can be 1 or 11
if sum of the 2 cards are 21 then u win
 the bet and get 1.5x the bet
 OR 
 dealer ask if u want new card 
 if want no more cards then STAY and the dealer shows his second card
 if the second card <=16 take a new card
 if 17or higher they have to stay in hand 
 if bust all get 2x bet
 if not bust who have cards higher than dealer get 2x bet
*/
let cards =["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
let pCard=document.getElementById("pCards");
let sums=document.getElementById("sum");
let dealer=document.getElementById("deal");
let twoCard=[];
let sum;
let dCard=[];

function randomize(arr){
    let num=Math.floor(Math.random()*arr.length);
return arr[num];
}

function summer(){
    sum=0;
    for(var i=0;i<twoCard.length;i++){
        switch(twoCard[i])
        {
            case "A": sum+=11;
                    break;
            case 2: sum+=2;
            break;
            case 3: sum+=3;
            break;
            case 4: sum+=4;
            break;
            case 5: sum+=5;
            break;
            case 6: sum+=6;
            break;
            case 7: sum+=7;
            break;
            case 8: sum+=8;
            break;
            case 9: sum+=9;
            break;
            case 10: sum+=10;
            break;
            case "J": sum+=10;
            break;
            case "Q": sum+=10;
            break;
            case "K": sum+=10;
            break;
        }
     }
     return sum;
}

function newGame()
{
 twoCard=[randomize(cards),randomize(cards)];
 renderGame();
}
function renderGame(){
    pCard.textContent="";
    document.getElementById("newCards").style.visibility='visible';
    for(var i=0;i<twoCard.length;i++){
        pCard.textContent+=` ${twoCard[i]}`;
    }
    sums.textContent=summer();

    if(sum<21){
        dealer.textContent="DO YOU WANT NEW CARD ??";
    }
    else if(sum===21){
        dealer.textContent=" BLACK JACK YOU WIN !!";
        document.getElementById("newCards").style.visibility='hidden';
     }
     else{
        dealer.textContent=" BUST YOU LOSE !!";
        document.getElementById("newCards").style.visibility='hidden';
     }
}
function newCard(){
    for(var i=twoCard.length;;i++){
        twoCard[i]=randomize(cards);
        break;
    }
    renderGame();
}
