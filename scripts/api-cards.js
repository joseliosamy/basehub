async function consumeCards(){
    try{
        const response = await fetch('https://tests-my.herokuapp.com/api');
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
                        <img src="${card.cardBody.image}" alt="${card.cardBody.imageAlt}">
                    </div>
                    <p>${card.descrip}</p>
                    <a href="${card.hrefProject}" class="btn-card"></a>
                </div><!--CARD-BODY-->
            </div><!--CARD-->

        `
    }
    document.querySelector('#projects .content .cards').innerHTML = output;
}