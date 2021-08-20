//query selectiors
const names = document.querySelector('.name');
const skillS = document.querySelector('.skills')
names.innerHTML = "NABIRYO SHAMIM";
 
let skillsAcquired = [ "HTML",
    "CSS",
    "FLEXBOX",
    "git",
    "Javascript",
    "Javascript unit testing"
]

let ul = document.createElement('ul');
ul.setAttribute('id','skilList');
skillS.appendChild(ul);

skillsAcquired.forEach((item) =>{
let li = document.createElement('li');
li.setAttribute('class','items');
ul.appendChild(li);
li.innerHTML= li.innerHTML + item;
})

