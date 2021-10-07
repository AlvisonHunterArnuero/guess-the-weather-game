import React from "react";
const Jumbotron = (props) => {
  return (
    <div className='col-md-12 text-center mt-4'>
      <div className='h-100 p-5 text-white bg-dark rounded-3'>
        <h2 className="display-6 text-warning">Guess The Weather Game</h2>
        <p className="w-50 mx-auto">
          In this game, 5 cities will be displayed in the screen one by one.
          your mission will be to guess the current weather in each of these
          cities. If you assert in at least 3 of them, you win, otherwise you
          lose. Are you ready?
        </p>
        {props.currentCity === 5 && (
            <div className="row text-center">
            <h1 className="display-2 text-info">
              {props.arrResponses.filter((item) => item.isCorrect===true).length >= 3 ? "You've won, Congrats!" : "You lose!"}
              </h1>
            </div>
        )}
      </div>
    </div>
  );
};

export default Jumbotron;
