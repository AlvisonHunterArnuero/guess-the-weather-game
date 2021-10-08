import Emoji from "../EmojiBox";
const ResultsTable = ({arrResponses}) => {
  return (
<div>
<ul className='list-group list-group-numbered'>
  {arrResponses.map(
    ({ city, userResponse, cityTemperature,isCorrect }, index) => {
      return (
        <li
          className='list-group-item d-flex justify-content-between align-items-start'
          key={index}
        >
          <div className='ms-2 me-auto text-muted'>
            <div className='fw-bold text-dark'>{city}</div>
            <span
              className={
                isCorrect
                  ? "text-primary small ms-3"
                  : "text-danger small ms-3 text-decoration-line-through"
              }
            >
              Your Guess: {userResponse}°C
            </span>
          </div>
          <span className='fs-5 badge text-black p-3 w-25'>
            <Emoji
              customClassRules='fs-5'
              symbol={cityTemperature >= 27 ? "🥵" : "🥶"}
            />{"  "}
            {cityTemperature} °C
          </span>
        </li>
      );
    }
  )}
</ul>
</div>
  );
};

export default ResultsTable;