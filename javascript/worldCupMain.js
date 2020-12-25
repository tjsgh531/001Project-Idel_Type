let AllElement= [{name:'아이유',resource:'./Image/아이유.jpeg',score:0},
                {name:'수지',resource:'./Image/수지.jpeg',score:0},
                {name:'권나라',resource:'./Image/권나라.jpeg',score:0},
                {name:'나은', resource:'./Image/나은.jpeg',score:0}];
let AllElementTemp = AllElement.concat();
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
      
    }
    else{
        selectElement.unshift(shuffleElement[currentNum+1]);
        
    }

    currentNum +=2;
    if(currentNum >= leftNum){
        if(selectElement.length == 1){
            const temp = event.target.src;
            resultPage(temp);
           
            
            return; 
            //게임 끝 결과 보여주는 거 필요함 쿠키
        }
        else{
            AllElement = selectElement.concat();
            selectElement = [];
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

function resultPage(winElement){
    const htmlSource = `
    <div id="currentResult">
    <h1>당신이 생각하는 1등</h1>
    <img src="${winElement}">
</div>
<div id = "ranking">

</div>
`
    document.getElementById('wrap').innerHTML = htmlSource;
}