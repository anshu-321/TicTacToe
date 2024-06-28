console.log("welcome")
let music= new Audio("music.mp3")
let turnMusic= new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn="X"
let someOneWins=false
let resetBtn=document.getElementById("reset")

//function for change in turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

//func to check for win
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    const wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [5,6,7,5,25,0],
        [0,3,6,-15,15,90],
        [1,4,7,-5,15,90],
        [2,5,8,5,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && boxtext[e[0]].innerText!==""){
            let winner = boxtext[e[0]].innerText
            document.getElementsByClassName("info")[0].innerText=winner+" won !!";
            someOneWins=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="300px"
            document.querySelector(".line").style.width="20vw"
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            gameover.play();
        }
    })
}


resetBtn.addEventListener('click', ()=>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(e=>{
        e.innerText=""
    })
    someOneWins=false
    turn="X"
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
    document.querySelector(".line").style.width="0"
})


//game logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            turnMusic.play();
            checkWin();
            if(!someOneWins){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }  
    })
})


