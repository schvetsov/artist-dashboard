
export function getAge(passedProps) {
    let todaysDate = new Date();
    let birthdate = passedProps.selection.dateOfBirth;
    let arr = birthdate.split(" ");
    const birth = {
      year: arr[2],
      month: arr[1],
      day: arr[0]
    }
    switch(birth.month) {
      case 'January':
        birth.month = 0;
        break;
      case 'February':
        birth.month = 1;
        break;
      case 'March':
        birth.month = 2;
        break;
      case 'April':
        birth.month = 3;
        break;
      case 'May':
        birth.month = 4;
        break;
      case 'June':
        birth.month = 5;
        break;
      case 'July':
        birth.month = 6;
        break;
      case 'August':
        birth.month = 7;
        break;
      case 'September':
        birth.month = 8;
        break;
      case 'October':
        birth.month = 9;
        break;
      case 'November':
        birth.month = 10;
        break;
      case 'December':
        birth.month = 11;
        break;
      default:
        birth.month = 0;
    }
    let birthDate = new Date(birth.year, birth.month, birth.day);
    console.log("Today's Date: " + todaysDate);
    console.log("Birth Date: " + birthDate);
    let age = String(Math.floor((todaysDate - birthDate)/(1000*60*60*24*365)));
    return age;
}
