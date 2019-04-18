
export function calcAge(passedProps) {
  const convertMonth = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
  }
  let todaysDate = new Date();
  let birthdate = passedProps.selection.dateOfBirth;
  let arr = birthdate.split(" ");
  const birth = {
    year: arr[2],
    month: convertMonth[arr[1]],
    day: arr[0]
  }
  let birthDate = new Date(birth.year, birth.month, birth.day);
  let age = String(Math.floor((todaysDate - birthDate)/(1000*60*60*24*365)));
  return age;
}
