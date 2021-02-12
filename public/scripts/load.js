const load = document.querySelector('#load')

setTimeout(()=>{
    load.style.opacity = '0'
    setTimeout(()=>{
        load.parentElement.removeChild(load)

    },500)
}, 1800);



