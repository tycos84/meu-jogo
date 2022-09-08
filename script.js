const board = document.querySelector('.board');
const score = document.querySelector('.score');

let pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let selectedCards = [];
let scoreCount = 0;






const load = () => {
  scoreCount = 0;
  selectedCards = [];
  const shufflePairs = shuffle(pairs);
  createCards(shufflePairs);
}

const shuffle = (pairs) => {
 for(let i = pairs.length -1; i > 0; i--) {
   const j = Math. floor(Math.random() * (i + 1));
   [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
 } 
  return pairs;
}

const createCards = (pairs) => {
  pairs.forEach(pair => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = pair;
    card.dataset.value = pair;
    card.addEventListener('click', insMatch);

    board.append(card);
 });
}

function preload(){
  fonteGeral = loadfont("bouncy-black.otf");
  imgFundo = loarImage("imagens/cartas/fundocarta.jpeg")
  imgFundoCarta = loadImage("imagens/cartas/banana 1.jpeg") 
  for (i=1; i<=8; i++){
    tempImg = ("imagens/cartas/"+1+".jpeg");
    imgCartas.push(tempImg);
    tempImg = ("imagens/cartas/"+1+".1.jpeg");
    imgCartas.push(tempImg);
  }
}

load();



function insMatch(value) {
    const selectedCard = value.target;

    if (selectedCard.classList.contains('open')) {
        return;
    }

    selectedCard.classList.add('open')

    selectedCards.push(selectedCard);

    if(selectedCards.length > 1) {
      const card1 = selectedCards[0];
      const card2 = selectedCards[1];
      
      if(card1.dataset.value == card2.dataset.value) {
        scoreCount = scoreCount + 1;
        score.innerText = `score: ${scoreCount}`;
        selectedCards = [];
      } else {
        selectedCards = [];

        setTimeout(( ) => {
          card1.classList.remove('open');
          card2.classList.remove("open");
        } ,800)

        
        
        
        

        
      } 
    }
}
















