
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

let timer = false;

let h = hr.value;
let m = mn.value;
let s = sc.value;


function start(){
    timer = true;
    countDown();
}

function pause(){
    timer = false;
}

function countDown(){
    if(timer === true){
        

        // if(m > 0){
        //     if(s < 0){
        //         m = m - 1
        //         s = 60
        //     }
        // }
        if(hr.value > 0 && mn.value == 0){
            mn.value = 60;
            hr.value = hr.value - 1
        }

        if( mn.value > 0 || hr.value > 0){
            if(sc.value > 0){
                sc.value = sc.value - 1
            }
            if(sc.value == 0){
                sc.value = 60 ;
                mn.value = mn.value - 1 ;
            }
            
            

            console.log("true");
        }else{
            if(sc.value > 0){
                sc.value = sc.value - 1
            }
            if(sc.value == 0){
                timer = false
                console.log("timer Off");    
            }
            console.log("false");
        }
        
        setTimeout("countDown()", 1000)
    }
}