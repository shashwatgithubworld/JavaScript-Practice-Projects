const count = document.querySelector('.count');
const incrementBtn = document.querySelector('.increment-btn');
const decrementBtn = document.querySelector('.decrement-btn');
const changeBy = document.querySelector('#changeby');
const resetBtn = document.querySelector('.reset-btn');


incrementBtn.addEventListener('click', ()=>{
    const countBtn = parseInt(count.innerHTML)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countBtn + changeByValue
});


decrementBtn.addEventListener('click', ()=>{
    const countBtn = parseInt(count.innerHTML)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countBtn - changeByValue
});

resetBtn.addEventListener('click', ()=>{
    count.innerHTML = '0'
});