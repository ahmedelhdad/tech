
let myIcon= document.querySelector('.fa-search')
let mySearch= document.querySelector('.input-search')
let myLeft= document.querySelector('.left')

myIcon.onclick = function ()
{
    mySearch.style.cssText = "opacity: 100%;z-index: 100;"
}
myLeft.onclick = function ()
{
    mySearch.style.display="none"
}
// End icon Search 

let toggle = document.querySelector('.toggle-menu')
let main = document.querySelector('.header .main .main-nav');
// let listLink = 
toggle.onclick = function()
{
    main.classList.toggle('open')
}
document.addEventListener('click' , (e) => {
    if(main.classList.contains("open") === true)
    {
        if(e.target !== toggle)
        {
            main.classList.toggle('open')
        }
    }
})
// End icon toggle 

window.onscroll = function()
{
    if(scrollY >= 571)
    {
        document.querySelector('.up-down button').style.display = "block"
        document.querySelector('.up-down button').onclick = function()
        {
            scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth"
            })
        }
    }else
    {
        document.querySelector('.up-down button').style.display = "none"
    }
}

// Start href AllLinks 

let allLinks  = document.querySelectorAll('.header ul li')
let credit = document.querySelector('.credit')
let guidance = document.querySelector('.Guidance')
let average = document.querySelector('.average')
let table = document.querySelector('.table')
let calculator = document.querySelector('.calculator')
let decisions = document.querySelector('.decisions')
let questions = document.querySelector('.questions')
let help = document.querySelector('.help')

allLinks.forEach((link) => {
    link.addEventListener('click' , (e) => {
        credit.style.display = 'none'
        guidance.style.display = 'none'
        average.style.display = 'none'
        table.style.display = 'none'
        calculator.style.display = 'none'
        decisions.style.display = 'none'
        questions.style.display = 'none'
        help.style.display = 'none'
        if(e.currentTarget.dataset.title === credit.getAttribute('class'))
        {
            credit.style.display = 'block'
            credit.scrollIntoView({
                behavior: "smooth"
            })
        }else if(e.currentTarget.dataset.title === guidance.getAttribute('class'))
        {
            guidance.style.display = 'block'
            guidance.scrollIntoView({
                behavior: "smooth"
            })

        }else if(e.currentTarget.dataset.title === average.getAttribute('class'))
        {
            average.style.display = 'block'
            average.scrollIntoView({
                behavior: "smooth"
            })

        }else if(e.currentTarget.dataset.title === table.getAttribute('class'))
        {
            table.style.display = 'block'
            table.scrollIntoView({
                behavior: "smooth"
            })

        }else if(e.currentTarget.dataset.title === calculator.getAttribute('class'))
        {
            calculator.style.display = 'block'
            calculator.scrollIntoView({
                behavior: "smooth"
            })

        }else if(e.currentTarget.dataset.title === decisions.getAttribute('class'))
        {
            decisions.style.display = 'block'
            decisions.scrollIntoView({
                behavior: "smooth"
            })

        }else if(e.currentTarget.dataset.title === questions.getAttribute('class'))
        {
            questions.style.display = 'block'
            questions.scrollIntoView({
                behavior: "smooth"
            })

        }else if(e.currentTarget.dataset.title === help.getAttribute('class'))
        {
            help.style.display = 'block'
            help.scrollIntoView({
                behavior: "smooth"
            })

        }
    })
})


// fa-angles-down 

let upDown = document.querySelector('.fa-angles-down')
upDown.onclick = function()
{
    guidance.style.display = 'none'
    average.style.display = 'none'
    table.style.display = 'none'
    calculator.style.display = 'none'
    credit.style.display = 'block'
            credit.scrollIntoView({
                behavior: "smooth"
            })
}

// Start Guidance 

let btn = document.querySelector('.Guidance .from button')
let btnAll = document.querySelector('.Guidance .from .from-item')
let btnIndividually = document.querySelector('.individually');
let btnCollective = document.querySelector('.collective')

btn.onclick = function()
{
    btnAll.classList.toggle('open')
    btnIndividually.scrollIntoView({
        behavior: "smooth"
    })
}



// Start btnIndividually
btnIndividually.onclick = function()
{   
    // create overFlow 
    let overFlow =document.createElement('div')
    overFlow.className = "overFlow"
    document.body.appendChild(overFlow)
    // create parentElment 
    let boxImage = document.createElement('div')
    boxImage.className= "overFlowBox"
    overFlow.appendChild(boxImage)
    // create icon close 
    let icon = document.createElement('i')
    icon.className = "fa-solid fa-xmark control"
    boxImage.appendChild(icon)
    icon.onclick = function()
    {
        overFlow.remove();
    }
    // create Image 
    let imageInd = document.createElement('img')
    imageInd.className = "imgIndividually"
    imageInd.src ="img/Individually.jpg"
    boxImage.appendChild(imageInd)
}
// swiper 
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let myTeam =  document.querySelector('.team')
  btnCollective.addEventListener('click' , function(e) {
    myTeam.classList.toggle('open')
  })

  let iconClose = document.querySelector('.icon-close')
  iconClose.onclick = function()
  {
    myTeam.classList.toggle('open')
  }

//   Student's grades calculator 
let tabelCalc = document.querySelector('.tabel-from')
let showTabelBtn = document.querySelector('.caption-tabel')

showTabelBtn.onclick = function()
{
    tabelCalc.classList.toggle('open')
    tabelCalc.scrollIntoView({
        behavior: "smooth"
    })
}
// let btnExaple = document.querySelector('.btn-example')
// let pragraphExaple = document.querySelectorAll('.example p')

// btnExaple.onclick = function()
// {
//     btnExaple.classList.toggle('open')
//     pragraphExaple.forEach((el) => {
//         el.classList.toggle('open')
//         el.scrollIntoView({
//             behavior: "smooth"
//         })
//     })
// }
//average
let btnAverage = document.querySelector('.calc-average')
let textAverage = document.querySelector('.ovalay')
let iconCloseAverage = document.querySelector('.icon-average')
btnAverage.onclick = function()
{
    textAverage.classList.toggle('open')
    iconCloseAverage.onclick = function()
    {
        textAverage.classList.toggle('open')
    }
}
// decisions




let iconSetting = document.querySelector('.fa-gear')
let setting = document.querySelector('.setting')
let icon = document.querySelector('.icon')


icon.onclick = () => 
{
    iconSetting.classList.toggle('fa-spin')
    icon.classList.toggle('open')
    setting.classList.toggle('open')
}