// Write your code here
const lb1 = document.querySelector('#lightbulb1')
const lb2 = document.querySelector('#lightbulb2')
const lb3 = document.querySelector('#lightbulb3')
const subtitle = document.querySelector('.subtitle')
let count = 0

lb1.addEventListener('click', function(){
    count +=1
    subtitle.innerHTML = `You've clicked the lights ${count} times.`
    this.classList.toggle('active')
})
lb2.addEventListener('click', function(){
    count +=1
    subtitle.innerHTML = `You've clicked the lights ${count} times.`
    this.classList.toggle('active')

})
lb3.addEventListener('click', function(){
    count +=1
    subtitle.innerHTML = `You've clicked the lights ${count} times.`
    this.classList.toggle('active')
})

