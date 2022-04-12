function makeSpace(number) {
    let spaces = '';
    for (let i=0; i<number; i++){
        spaces += '&nbsp';
    }
    return spaces;
}

function isLeapYear(year){
    return (year%4 === 0 && (year%100!==0 || year%100===0 && year%400 === 0))
}

function findFirstDay(year){
    let firstDay = 6;
    let difference = year - 2021;
    let correction = 0;

    firstDay += difference + Math.floor(difference/4);
    console.log('rare firstday is: ' + firstDay);
    if(difference <= -121) {
        correction = difference+21;
        correction = -(Math.ceil(correction/100));
    }

    let leap = 0;
    if(difference<=-421) {
        leap = difference + 21;
        leap = Math.ceil(leap/400);
        console.log('leap is: ' + leap);
    }

    if(difference >= 80) {
        correction = difference+20;
        correction = -Math.floor(correction/100);
    }

    if(difference>=380) {
        leap = difference + 20;
        leap = Math.floor(leap/400);
        console.log('leap is: ' + Math.floor(leap));
    }

    firstDay += correction + leap;
    console.log('correction is: ' + correction);
    console.log('firstDay is: ' + firstDay);

    if(firstDay < 1) {
        if (firstDay%7 === 0) {firstDay = 7;}
        else {
            firstDay %= 7;
            firstDay += 7;
        }
    }
    else if(firstDay > 7) {
        if (Math.round(firstDay)%7 === 0) {firstDay = 7;}
        else {firstDay %= 7;}
    }

    return firstDay;
}

module.exports = {makeSpace, isLeapYear, findFirstDay};