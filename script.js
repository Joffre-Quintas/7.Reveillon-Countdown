const data = new Date();

const currentYear = data.getFullYear()
const finalMonth = 12;
const finalDay = 365;
const finalHours = 23;
const finalMinutes = 59;
const finalSeconds = 60;

document.querySelector('.coming-soon').innerHTML = `Esta chegando ${currentYear+1}!!!`

let countDaysPerMonth = ()=>{
   switch(data.getMonth()+1){
    case 1:
        return 0
        break;
    case 2:
        return 31
        break;
    case 3:
        if(currentYear%4 == 0){
            return 60;
        }else{
            return 59;
        }
        //Ano Bissexto
        break;
    case 4:
        return 90;
        break;
    case 5:
        return 120;
        break;
    case 6:
        return 151;
        break;
    case 7:
        return 181;
        break;
    case 8:
        return 212;
        break;
    case 9:
        return 243;
        break;
    case 10:
        return 273;
        break;
    case 11:
        return 304;
        break;
    case 12:
        return 334;
        break;
   } 
}

// POS[0] = MONTH, POS[1] = DAY, POS[2] = HOUR, POS[3] = MINUTE, POS[4] = SECOND
const dateRemaining = [
    finalDay - (data.getDate())-(countDaysPerMonth()),
    finalHours - data.getHours(),
    finalMinutes - data.getMinutes(),
    finalSeconds - data.getSeconds()
]

const remainingTime = () =>{
    let dayDisplay = document.querySelector('#days')
    dayDisplay.innerHTML = String(dateRemaining[0]).padStart(2,'0')
    let hoursDisplay = document.querySelector('#hours')
    hoursDisplay.innerHTML = String(dateRemaining[1]).padStart(2,'0')
    let minutesDisplay = document.querySelector('#minutes')
    minutesDisplay.innerHTML = String(dateRemaining[2]).padStart(2,'0')
    let secondsDisplay = document.querySelector('#seconds')
    secondsDisplay.innerHTML = String(dateRemaining[3]).padStart(2,'0')


    //console.log(dateRemaining[1] + ':' +dateRemaining[2] + ':' + dateRemaining[3])
    dateRemaining[3]--
    if(dateRemaining[3] < 0){
        dateRemaining[2]--
        dateRemaining[3] = 59; 
        if(dateRemaining[2] < 0){
            dateRemaining[2] = 59
            dateRemaining[1]--
            if(dateRemaining[1] < 0 ){
                dateRemaining[1] = 23
                dateRemaining[0]--
            }
        }
    }
}

setInterval(remainingTime, 1000)








