let AllElement= [{name:'아이유',resource:'./Image/아이유.jpeg'},
                {name:'수지',resource:'./Image/수지.jpeg'},
                {name:'권나라',resource:'./Image/권나라.jpeg'},
                {name:'나은', resource:'./Image/나은.jpeg'}];
let shuffleElement=[];
let selectElement=[];
let leftNum;
let currentNum = 0;

function initialSet(){
    leftNum = AllElement.length;
    currentNum = 0
    
    shuffleElement = shuffle(AllElement);

    document.getElementById('leftBtn').setAttribute('src',shuffleElement[currentNum].resource);
    document.getElementById('leftBtnName').innerText= shuffleElement[currentNum].name;
    document.getElementById('rightBtn').setAttribute('src',shuffleElement[currentNum+1].resource);
    document.getElementById('rightBtnName').innerText= shuffleElement[currentNum+1].name;
}

function shuffle(arr){
    const array = arr.concat();
    const arrlen = arr.length;
    for(let i = arrlen-1; i >= 0 ; i--){
        const randomNum = Math.floor(Math.random() * (i+1));
        [array[i], array[randomNum]] = [array[randomNum], array[i]];
    }
    return array;
}

initialSet();

document.getElementById('leftBtn').addEventListener('mouseover',onMouseover);
document.getElementById('rightBtn').addEventListener('mouseover',onMouseover);
document.getElementById('leftBtn').addEventListener('mouseout',onMouseleave);
document.getElementById('rightBtn').addEventListener('mouseout',onMouseleave);
function onMouseover(event){
    event.target.style.opacity=1;
}
function onMouseleave(event){
    event.target.style.opacity = 0.6;
}

document.getElementById('leftSpace').addEventListener('click',onClick);
document.getElementById('rightSpace').addEventListener('click',onClick);

function onClick(event){

    if(event.target.id =="leftBtn"){
        selectElement.unshift(shuffleElement[currentNum]);
        console.log(`selectElement :${selectElement}`);
    }
    else{
        selectElement.unshift(shuffleElement[currentNum+1]);
        console.log(`selectElement :${selectElement}`);
    }

    currentNum +=2;
    if(currentNum >= leftNum){
        if(selectElement.length == 1){
            console.log('이거실행되는거 맞음??')
            location.href="Result.html";
            return;
        }
        else{
            AllElement = selectElement.concat();
            selectElement = [];
            console.log(AllElement);
            initialSet();
            return;
        }
    }
    else{
        let delIndex =AllElement.indexOf(AllElement.find((Element)=>Element===shuffleElement[currentNum]));
    AllElement.splice(delIndex,1);
   
    delIndex =AllElement.indexOf(AllElement.find((Element)=>Element===shuffleElement[currentNum+1]));
    AllElement.splice(delIndex,1)

    document.getElementById('leftBtn').setAttribute('src',shuffleElement[currentNum].resource);
    document.getElementById('leftBtnName').innerText= shuffleElement[currentNum].name;
    document.getElementById('rightBtn').setAttribute('src',shuffleElement[currentNum+1].resource);
    document.getElementById('rightBtnName').innerText= shuffleElement[currentNum+1].name;
    }
}