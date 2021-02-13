async function consumeCards(){
    try{
        const response = await fetch('https://api-basehub.herokuapp.com/');
        const data = await response.json();
        show(data)
    }
    catch(error){
        const errorOut = `<h3 style="text-align:center">Erro ao se conectar com o servidor.</h3>`
        load.innerHTML = errorOut
        console.log(error);
    }
}
consumeCards()

function show(cards){
    let output = "";
    if(output == ""){
        setTimeout(()=>{
            load.style.opacity = '0'
            setTimeout(()=>{
                load.parentElement.removeChild(load)
            },500)
        }, 1500);
    }
    setTimeout(()=>{
        if(!output != ""){
            load.style.opacity = '1'
        }else{
            load.style.opacity = '0'
        }
    },1500);

    for(let card of cards){
        output += `

            <div class="card">
                <div class="card-header">
                    <h1>${card.cardHeader.title}</h1>
                </div><!--CARD-HEADER-->

                <div class="card-body">

                    <div class="rc">
                        <img src="${card.cardBody.cardImage}" alt="${card.cardBody.imageAlt}">
                        <small><i class='bx bx-calendar' ></i>${card.cardBody.date}</small>
                    </div>
                    <p>${card.cardBody.descrip}</p>
                    <div class="links">
                        <a href="${card.cardBody.hrefProject}" class="btn-card">Visualizar</a>

                        <div class="socials">
                            <a href="${card.cardBody.repository}" target="_blank" class="btn-card"><i class='bx bxl-github'></i></a>
                            <a href="${card.cardBody.tutorial}" target="_blank" class="btn-card"><i class='bx bxl-youtube' ></i></a>
                        </div>
                    </div>

                    
                </div><!--CARD-BODY-->
            </div><!--CARD-->

        `
    }
    document.querySelector('#projects .content .cards').innerHTML = output;

    
    }
