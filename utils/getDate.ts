export default function getDate() {
  const date = new Date();
  const dayString = date.toLocaleDateString('en-US', { weekday: 'short' });
  const monthString = date.toLocaleDateString('en-US', { month: 'short' });

  return `${dayString}, ${monthString}`;
}
