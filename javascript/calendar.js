let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//Today date
let actualDate = new Date();
let actualMonthNumber = actualDate.getMonth();
let actualYear = actualDate.getFullYear();
//Custom date
let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
//Html id's
let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());


const writeMonth = (month) => {//Write the days and highlight today

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        
        if (i%3 == 0){//dias grupo 1
            if(i===currentDay && monthNumber == actualMonthNumber) {
                dates.innerHTML += ` <div class="calendar__date calendar__item calendar__group1-days calendar__today" >
                                    <span aria-label="Breakfast:--, dinner:--,lunch:--">${i}</span></div>`;
            }else{
                dates.innerHTML += ` <div class="calendar__date calendar__item calendar__group1-days" >
                                    <span aria-label="Breakfast:--, dinner:--,lunch:--">${i}</span></div>`;
            }
           
        }else if(i%3  -1 == 0){//dias grupo 2
            if(i===currentDay && monthNumber == actualMonthNumber) {
                dates.innerHTML += ` <div class="calendar__date calendar__item calendar__group2-days calendar__today" >
                                    <span aria-label="Breakfast:--, dinner:--,lunch:--">${i}</span></div>`;
            }else{
                dates.innerHTML += ` <div class="calendar__date calendar__item calendar__group2-days" >
                                    <span aria-label="Breakfast:--, dinner:--,lunch:--">${i}</span></div>`;
            }
        }
        
        else if(i%3 -2 == 0){//dias grupo 3
            if(i===currentDay && monthNumber == actualMonthNumber) {
                dates.innerHTML += ` <div class="calendar__date calendar__item calendar__group3-days calendar__today" >
                                    <span aria-label="Breakfast:--, dinner:--,lunch:--">${i}</span></div>`;
            }else{
                dates.innerHTML += ` <div class="calendar__date calendar__item calendar__group3-days" >
                                    <span aria-label="Breakfast:--, dinner:--,lunch:--">${i}</span></div>`;
            }
        }
        
        
    }
}



const getTotalDays = month => {//Calculate que total number of days
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {//Es bisiesto?
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {//Calculate que first day of the week
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);