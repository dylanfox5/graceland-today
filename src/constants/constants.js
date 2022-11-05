export const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const monthsAbbr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
export const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const today = new Date();

export const year = today.getFullYear();

export const day = today.getDay();
export const dayOfMonth = String(today.getDate()).padStart(2, '0');

export const month = today.getMonth();
export const monthOfYear = monthsOfYear[month];
export const daysInCurrentMonth = new Date(year, month+1, 0).getDate();
export const firstDayOfMonth = new Date(year, month, 1).getDay();