const btn=document.querySelector('.btn')
const input=document.querySelector('.input')
const items=document.querySelector('.items')



let getLand = ()=>{
    const url=`https://restcountries.com/v2/name/${input.value}?fullText=true`
    fetch(url).then(data => data.json())
    .then((item) =>  {
        
    items.innerHTML=`<div class="drapeau">
                        <img src="${item[0].flags.png}" alt="">
                        <h1 class="landName">${item[0].name}</h1>
                    </div>
                    <div class="landDetails">
                        <h2 class="title">Hauptstadt <span>: ${item[0].capital}</span></h2>
                        <h2 class="title">Kontinent <span>: ${item[0].region}</span></h2>
                        <h2 class="title">Einwohner<span>: ${item[0].population}</span></h2>
                        <h2 class="title">Verkurzung<span>: ${item[0].currencies[0].code} - ${item[0].currencies[0].name}</span></h2>
                        <h2 class="title">Sprachen<span>: ${Object.values(item[0].languages[0]).join(' - ')}</span></h2>
                    </div>`
                   
                 console.log(Object.values(item[0].languages[0]).join('-'))
    })
  
}
window.addEventListener('load',()=>{
    items.innerHTML="";
})
btn.addEventListener('click',getLand)

