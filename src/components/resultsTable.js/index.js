const ResultsTable = ({arrResponses}) => {
  return (
<div>
<ol className='list-group list-group-numbered'>
  {arrResponses.map(
    ({ city, userResponse, cityTemperature }, index) => {
      return (
        <li
          className='list-group-item d-flex justify-content-between align-items-start'
          key={index}
        >
          <div className='ms-2 me-auto text-muted'>
            <div className='fw-bold text-secondary'>{city}</div>
            Your Guess: {userResponse}°C
          </div>
          <span className='badge bg-dark lead'>
            {cityTemperature}°C
          </span>
        </li>
      );
    }
  )}
</ol>
</div>
  );
};

export default ResultsTable;