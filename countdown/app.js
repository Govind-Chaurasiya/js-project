//last date
const enddate = "23 March 2026 08:30 AM";

document.getElementById("end-date").innerText = enddate;

function clock()
{
    const end = new Date(enddate);
    const now = new Date();
    const diff= end-now;
    console.log(diff);

    /*for seconds
    milisecond - second ==> divide by 1000 
    
    for minutes
    second divide by 60
    
    for hours 
    minutes divided by 60
    
    for days 
    hours divided by 24*/

    // console.log(diff/1000);
    // console.log(diff/1000/60);
    // console.log(diff/1000/60/60);
    // console.log(diff/1000/60/60/24);
   
    const inputs = document.querySelectorAll("input");


    //for days
    const days = Math.floor(diff/1000/60/60/24);
    console.log(days);

    //for hours
    const hours = Math.floor(diff/(1000*60*60)%24);
    console.log(hours);

    //for minutes
    const minutes = Math.floor(diff/(1000*60)%60);
    console.log(minutes);

     //for seconds
    const seconds = Math.floor(diff/(1000)%60);
    console.log(seconds);

    if(diff<0)
        return;

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;

    setInterval(
        ()=>{
            clock();
        },
        1000
    )



}
clock();