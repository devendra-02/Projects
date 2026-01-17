
// 1
let boxes = document.querySelectorAll(".box"); 
let reset = document.querySelector(".reset");
let heading = document.querySelector(".heading");

let turnO  = true ;
let count = 0 ;

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
];


// 2
boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if(turnO===true){
            console.log("X was clicked ") ;
            heading.innerText = "It’s 🟠’s turn.";
            box.innerText="✖️" ;
            turnO  = false ;
        }else{
            console.log("O was clicked ") ;
            heading.innerText = "It’s ✖️’s turn.";
            box.innerText="🟠" ;
            turnO  = true ;
            
        }

        box.disabled = true ;
        count++ ;

        // 4
        checkWin() ;   // on every click check krega koi jita ya nhi 

    });
});

// 5
const checkWin = () =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText ;
        let pos2val = boxes[pattern[1]].innerText ;
        let pos3val = boxes[pattern[2]].innerText ;

        // if(pos1val != "🙂" && pos2val != "🙂" && pos3val != "🙂" ){
        //     if(pos1val===pos2val && pos2val===pos3val){
        //         if(turnO){
        //             console.log("OO is winer ");
        //             heading.innerText = "O is winner, Press Reset button to start again";
        //             console.log(pattern);
        //         }else{
        //             console.log("XX is winer ");
        //             heading.innerText = "X is winner, Press Reset button to start again ";
        //             console.log(pattern);
        //         }

        //         // agr koi jita to 
        //         // 6
        //         disableBoxes();
                 
                
        //     }
        // }

        // ************************** OR ***********************************
        if(pos1val!="🙂" && pos1val===pos2val && pos2val===pos3val){
            heading.innerText = `${pos1val} is Winner, Press Reset button to start again `;
            console.log(`${pos1val} is winer `);
            console.log(pattern);

            // agr koi jita to 
            // 6
            disableBoxes();
            return ;
        };




        if (count === 9) {
            heading.innerText = "Game Draw! 🤝";
        }
    }
};

// 7
reset.addEventListener("click" , () =>{
    enableBoxes() ;
    turnO  = true ;
    count = 0 ;
    heading.innerText = "Restart The game starts. It’s X’s turn";

});

const disableBoxes = ()=> {
  boxes.forEach((box) => { box.disabled = true;  });
};

const enableBoxes = ()=> {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "🙂" ;
  });
}



