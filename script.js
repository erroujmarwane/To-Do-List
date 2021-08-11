let inp = document.querySelector('input')
let ul = document.querySelector('.list')
let btn = document.querySelector('.add')
btn.addEventListener("click",()=>{
    let value = inp.value
        if (value=='') {
            alert('enter value')
        }
        else{
            let li = document.createElement("li")
        let rmv = document.createElement("button")
        rmv.textContent = 'x';
        rmv.className='remove';
        li.textContent = `${value}`
        ul.appendChild(li).appendChild(rmv)
        // ul.innerHTML += `<li class="chil">${value}</li><button class="delete" onclick="rmv()"></button>`
        // list = document.querySelector('.chil')
        rmv.addEventListener("click",()=>{
            ul.removeChild(li).removeChild(rmv)
        })
        li.addEventListener("click",()=>{
            li.style.textDecoration="line-through"  
            li.addEventListener("click",()=>{
                li.style.textDecoration="none"  
                
            })
        })
        
        inp.value =''
        }
})
inp.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let value = inp.value
        if (value=='') {
            alert('enter value')
        }
        else{
            let li = document.createElement("li")
        let rmv = document.createElement("button")
        rmv.textContent = 'x';
        rmv.className='remove';
        li.textContent = `${value}`
        ul.appendChild(li).appendChild(rmv)
        // ul.innerHTML += `<li class="chil">${value}</li><button class="delete" onclick="rmv()"></button>`
        // list = document.querySelector('.chil')
        rmv.addEventListener("click",()=>{
            ul.removeChild(li).removeChild(rmv)
        })
        li.addEventListener("click",()=>{
            li.style.textDecoration="line-through"  
        })
        li.addEventListener("dblclick",()=>{
            li.style.textDecoration="none"  
        })
        inp.value =''
        }
        
    }
});
