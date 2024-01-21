export default function getDate() {
  const daysToAdd: number = 3;
  const date = new Date();
  const date2 = new Date();
  date2.setDate(date.getDate() + daysToAdd);

  const dayString = date.toLocaleDateString('en-US', { weekday: 'short' });
  const monthString = date.toLocaleDateString('en-US', { month: 'short' });
  const day = date.getDate();
  
  const day2String = date2.toLocaleDateString('en-US', { weekday: 'short' });
  const month2String = date2.toLocaleDateString('en-US', { month: 'short' });
  const day2 = date2.getDate();

  const array = [
    [day, monthString],
    [day2, month2String],
  ];

  return array;
}
