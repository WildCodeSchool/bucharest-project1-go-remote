const cardsArr= [

    {   id: 1,
        graphic: "",
        text: "ceva"
    },
    {   id: 2,
        graphic: "./resources/day2-gaming-console-2bdf32f5efb298073fbe6e29689ac86a.svg",
        text: "ceva diferit"
    }
]
const cardContainer = document.getElementById("cardContainer");


function cardCreator(arr) {
    arr.forEach(e=> {
        const cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'card');
        cardContainer.appendChild(cardDiv);
        cardInnerText = document.createElement('div');
        cardInnerText.setAttribute('class','card-inner-text');
        cardInnerText.innerHTML= `<p>${e.text}</p>`;
        cardInnerImg = document.createElement('img');
        cardInnerImg.setAttribute('class','card-inner-graphic');
        cardInnerImg.src= e.graphic;
        cardDiv.appendChild(cardInnerText);
        cardDiv.appendChild(cardInnerImg);

    });
} 

cardCreator(cardsArr);