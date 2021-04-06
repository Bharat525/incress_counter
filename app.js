// HERE WE HAVE COUNT VARIABLE
const count = document.querySelectorAll('.count');
console.log(count);


// HERE WE HAVE COUNT FOREACH FUNCTION
count.forEach(i =>{
    i.innerHTML = 0
    const updateCounter = () =>{
        const target = +i.getAttribute('data-target');  
        const c =+ i.innerText; 
        console.log(target);
        const incress = target/400;
        if(c < target){
            i.innerHTML = `${Math.ceil(c + incress)}`
            setTimeout(updateCounter, 1);
        }else{
            i.innerText = target
        }
    }
    updateCounter();
})





