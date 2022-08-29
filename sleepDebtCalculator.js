const getSleepHours = day => {
    day.toLowerCase();
    switch (day) {
        case 'monday':
        return 8;
        break;

        case 'tuesday':
        return 7;
        break;
        case 'wednesday':
        return 6;
        break;
        case 'thursday':
        return 5;
        break;
        case 'friday':
        return 4;
        break;
        case 'saturday':
        return 3;
        break;
        case 'sunday':
        return 2;
        break;
        default:
        return 'Error!';
    }
}

const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt=() => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed.');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed. Get some rest.');
    } else {
        console.log('Error! Something went wrong. Check your code.');
    }
}

calculateSleepDebt();