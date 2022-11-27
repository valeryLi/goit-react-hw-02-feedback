export const Statistics = ({ good, neutral, bad }) => {
  return (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total:</li>
      <li>Positive feedback:</li>
    </ul>
  );
};
