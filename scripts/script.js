new Swiper('.swiper-container', {
    spaceBetween: 500,
    slidesPerPage: 1,
})

let data = localStorage.getItem('msgList')
let msgList = []

if(data !== "" && data !== null) {
    msgList = JSON.parse(data)
}

for (const msg of msgList) {
    createNewMsg(msg)
}

function createNewMsg(obj) { 
    let container = document.querySelector('.swiper-slide')
    
    let div = document.createElement('div')
    div.classList.add('item')
    let div2 = document.createElement('div')
    div2.classList.add('item-text')
    let p = document.createElement('p')
    p.innerHTML = obj.name
    let p2 = document.createElement('p')
    p2.innerHTML = obj.sum
    let img = document.createElement('img')
    img.setAttribute('src', 'images/burger-menu-svgrepo-com 1.svg')
    
    container.append(div)
    div.append(div2)
    div2.append(p)
    div2.append(p2)
    div.append(img)

    for (let i = 0; i < msgList.length; i++){
        if ((i+1) % 4 === 0) {
            test()
        }
    }
    function test(){
        let container = document.querySelector('.swiper-wrapper')

        let slide = document.createElement('div')
        slide.classList.add('swiper-slide')
        
        container.append(slide)
        
        let div = document.createElement('div')
        div.classList.add('item')
        let div2 = document.createElement('div')
        div2.classList.add('item-text')
        let p = document.createElement('p')
        p.innerHTML = obj.name
        let p2 = document.createElement('p')
        p2.innerHTML = obj.sum
        let img = document.createElement('img')
        img.setAttribute('src', 'images/burger-menu-svgrepo-com 1.svg')
        
        slide.append(div)
        div.append(div2)
        div2.append(p)
        div2.append(p2)
        div.append(img)
    }
}

document.getElementById('add-msg-form').addEventListener('submit', function(event){
    event.preventDefault()
    let consumptionName = document.getElementById('consumptionName').value
    let consumptionSum = document.getElementById('consumptionSum').value
    
    let msgObj = {
        name: consumptionName,
        sum: consumptionSum
    }
    
    msgList.push(msgObj)
    localStorage.setItem('msgList', JSON.stringify(msgList))
    
    // document.getElementById('msg-inp').value = ""
    
    createNewMsg(msgObj)
})
