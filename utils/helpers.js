const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const month = [
 'Jan',
 'Feb',
 'Mar',
 'Apr',
 'May',
 'Jun',
 'Jul',
 'Aug',
 'Sep',
 'Oct',
 'Nov',
 'Dec',
];

module.exports = {
 format_date: (date) =>
  `${weekday[date.getDay()]}, 
  ${month[date.getMonth()]} ,
  ${date.getDate()} `,
};
