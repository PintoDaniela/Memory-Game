document.addEventListener('DOMContentLoaded', ()=>{
    //card options

    var cardArray = [
        {
            name: 'ovni',
            img: 'img/ovni.jpg',
        },
        {
            name: 'stego',
            img: 'img/stego-space.png',
        },
        {
            name: 'dino',
            img: 'img/dino.jpg',
        },
        {
            name: 'dinoBody',
            img: 'img/dino-body.png',
        },
        {
            name: 'blackOvni',
            img: 'img/black-ovni.jpg',
        },
        {
            name: 'planet',
            img: 'img/planet.png',
        },
        {
            name: 'ovni',
            img: 'img/ovni.jpg',
        },
        {
            name: 'stego',
            img: 'img/stego-space.png',
        },
        {
            name: 'dino',
            img: 'img/dino.jpg',
        },
        {
            name: 'dinoBody',
            img: 'img/dino-body.png',
        },
        {
            name: 'blackOvni',
            img: 'img/black-ovni.jpg',
        },
        {
            name: 'planet',
            img: 'img/planet.png',
        }
    ]
    console.log(cardArray);

    cardArray.sort(() => 0.5 -Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenIds = [];
    let cardsWon = [];

    function createBoard(){
        for(let i = 0; i < cardArray.length; i++ ){
            const card = document.createElement('img');
            card.setAttribute('src', 'img/blank-card.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.append(card);
        }
    }
    createBoard();

    function flipCard(){
        let cardId = this.getAttribute('data-id');        
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500);
        }
    }

    function checkForMatch(){
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];

        if(optionOneId == optionTwoId){
            alert("You have clicked the same image!");
            cards[optionOneId].setAttribute('src', 'img/blank-card.jpg');
            cards[optionTwoId].setAttribute('src', 'img/blank-card.jpg');
        }else if(cardsChosen[0] === cardsChosen[1]){
            alert("Well done!");
            cards[optionOneId].setAttribute('src', 'img/removed-card.jpg');
            cards[optionTwoId].setAttribute('src', 'img/removed-card.jpg');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneId].setAttribute('src', 'img/blank-card.jpg');
            cards[optionTwoId].setAttribute('src', 'img/blank-card.jpg');
        }
        cardsChosen = [];
        cardsChosenIds = [];
        resultDisplay.textContent = cardsWon.length*10;// I put "*10" just because I liked it to show a bigger score than the length of the array.
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "CONGRATULATIONS! YOU HAVE WON!";                      
        }       
    } 
})