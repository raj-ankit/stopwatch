let hr=document.querySelector('#hour');
let min=document.querySelector('#min');
let sec=document.querySelector('#sec');
let msec=document.querySelector('#msec');
let start_btn=document.querySelector('#start');
let stop_btn=document.querySelector('#stop');    
let reset_btn=document.querySelector('#reset');

let count=0;
let sec_val=0;
let min_val=0;
let hr_val=0;
let timerId;       // timerId is taken in global scope to access it in different function scope
let start_btn_clicked=false;

// start timer function
function startTimer(){
    start_btn_clicked=true;     // condition for countTimer function to run once no matter start button clicked how many times
    timerId=setInterval(function(){
        count++;
        // updating msec values to the screen
        if(count<10){
            msec.innerHTML='0'+count;
        }
        else{
            msec.innerHTML=count;
        }

        // checking condition for updating second value/count
        if(count==99){     // counting msec value upto 100 after each 10 msec
            sec_val+=1;
            count=0;
            // updating second values to the screen
            if(sec_val<10){
                sec.innerHTML='0'+sec_val;
            }
            else{
                sec.innerHTML=sec_val;
            }
        }

        // checking condition for updating minute value/count
        if(sec_val==60){
            min_val+=1;
            sec_val=0;
            // updating minute values to the screen
            if(min_val<10){
                min.innerHTML='0'+min_val;
            }
            else{
                min.innerHTML=min_val;
            }
        }

        // checking condition for updating hour value/count
        if(min_val==59){
            hr_val+=1;
            min_val=0;
            // updating hour values to the screen
            if(hr_val<10){
                hr.innerHTML='0'+hr_val;
            }
            else{
                hr.innerHTML=hr_val;
            }
        }
        if(hr_val==99){
            msec.innerHTML='99';
            sec.innerHTML='60';
            min.innerHTML='60';
            hr.innerHTML='99';
            alert('Stopwatch Stopped!!');
        }
    
    },10);
}

// stop timer function
function stopTimer(){
    clearInterval(timerId);      // to stop running countTimer function
    start_btn_clicked=false;     // reset start_btn_clicked flag to enable startTimer function after clicking start button again
}

// reset timer function
function resetTimer(){
    clearInterval(timerId);     // to stop running countTimer function
    start_btn_clicked=false;    // reset start_btn_clicked flag
    //  resetting all parameters
    count=0;
    sec_val=0;
    min_val=0;
    hr_val=0;
    //  displaying initial value of stopwatch
    msec.innerHTML="00";
    sec.innerHTML="00";
    min.innerHTML="00";
    hr.innerHTML="00";
}
start_btn.addEventListener('click',function(){
    if(start_btn_clicked==false){       // condition for countTimer function to run once no matter start button clicked how many times
        startTimer();
    }
});
stop_btn.addEventListener('click',stopTimer);
reset_btn.addEventListener('click',resetTimer);



