let but1 = document.getElementById('but-1');
let but2 = document.getElementById('but-2');
let but3 = document.getElementById('but-3');
let out = document.getElementById('out');
let act = document.getElementById('act');
let leftFighter = document.getElementById('left');
let rightFighter = document.getElementById('right');

but1.onclick = function(){
    human = 'рука'
    humanTurn('Рука');

    leftFighter.classList.add('left');
    rightFighter.classList.add('right')
    act.classList.add('action');
    
    setTimeout(() => {
        leftFighter.classList.remove('left');
        rightFighter.classList.remove('right');
        act.classList.remove('action');
    }, 1000);
}

but2.onclick = function(){
    human = 'нога'
    humanTurn('Ножницы');

    leftFighter.classList.add('left');
    rightFighter.classList.add('right')
    act.classList.add('action');
    
    setTimeout(() => {
        leftFighter.classList.remove('left');
        rightFighter.classList.remove('right');
        act.classList.remove('action');
    }, 1000);
}

but3.onclick = function(){
    human = 'подсечка'
    humanTurn('Бумагу');

    leftFighter.classList.add('left');
    rightFighter.classList.add('right')
    act.classList.add('action');
    
    setTimeout(() => {
        leftFighter.classList.remove('left');
        rightFighter.classList.remove('right');
        act.classList.remove('action');
    }, 1000);
}

const variant = ['рука', 'нога', 'подсечка'];
const win = ['рукаподсечка', 'ногарука', 'подсечканога'];
const loose = ['руканога', 'ногаподсечка', 'подсечкарука']

let human = '';
let comp = '';
let winner = '';

function humanTurn(turn){
    console.log('Вы выбрали ', turn);
    pcTurn();
}

function pcTurn(){
    let r = Math.floor(Math.random()*3);
    console.log('комп выбрал ', variant[r]);
    comp = variant[r];
    result()
}
function result(){
    console.log(human)
    console.log(comp)
    let result = human + comp;
    if (win.includes(result)){
        winner = ' вы выиграли'
    }
    else if (loose.includes(result)){
        winner = ' вы проиграли'
    }
    else{
        winner = ' ничья'
    }
    out.innerText = 'твой ход- ' + human + '\n' + ' ход противника- ' + comp + '\n' + winner
}