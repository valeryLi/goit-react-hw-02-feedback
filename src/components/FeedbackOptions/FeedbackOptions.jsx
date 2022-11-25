export const FeedbackOptions = ({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
}) => {
  return (
    <>
      <button type="button" onClick={onGoodFeedback}>
        Good
      </button>
      <button type="button" onClick={onNeutralFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onBadFeedback}>
        Bad
      </button>
    </>
  );
};
