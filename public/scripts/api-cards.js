async function consumeCards(){
    try{
        const response = await fetch('https://api-basehub.herokuapp.com/');
        const data = await response.json();
        show(data)
    }
    catch(error){
        console.log(error);
    }
}
consumeCards()

function show(cards){
    let output = "";
    for(let card of cards){
        output += `

            <div class="card">
                <div class="card-header">
                    <h1>${card.cardHeader.title}</h1>
                </div><!--CARD-HEADER-->
                <div class="card-body">
                    <div class="rc">
                        <img src="${card.cardBody.cardImage}" alt="${card.cardBody.imageAlt}">
                    </div>
                    <p>${card.cardBody.descrip}</p>
                    <a href="${card.cardBody.hrefProject}" class="btn-card">Visualizar</a>
                </div><!--CARD-BODY-->
            </div><!--CARD-->

        `
    }
    document.querySelector('#projects .content .cards').innerHTML = output;
}