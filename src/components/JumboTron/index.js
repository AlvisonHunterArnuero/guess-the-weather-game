import React from "react";

const Jumbotron = (props) => {
  let selected_expression = "pet/welcome.png";
  let failedGuesses = props.arrResponses.filter(
    (elem) => elem.isCorrect === false
  ).length;

  if (props.currentCity === 5 && failedGuesses <= 2) {
    selected_expression = "pet/happy.png";
  } else {
    // validate the amount of correct guesses the user gets
    switch (failedGuesses) {
      case 1: {
        selected_expression = "pet/surprised.png";
        break;
      }
      case 2: {
        selected_expression = "pet/sweat.png";
        break;
      }
      case 3: {
        selected_expression = "pet/sad.png";
        break;
      }
      case 4: {
        selected_expression = "pet/cry.png";
        break;
      }
      default: {
        selected_expression = failedGuesses > 2 ? "pet/cry.png" : "pet/welcome.png";
        break;
      }
    }
  }

  // .game-title {
  //   font-family: 'Bebas Neue', cursive;
  // }
  
  // .game-description {
  //   font-family: 'Roboto Slab', serif;
  // }
  
  // .game-status {
  return (
    <div className='card bg-dark text-white mb-3 my-4'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src={selected_expression}
            className='img-fluid rounded-start my-2'
            alt={props.currentCity}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title text-start game-title'>
              Guess The Weather Game
            </h5>
            <p className='card-text game-description col-11 text-start'>
              Hello pals, I am the weather Giraffe. In this game, 5 cities will be displayed in the screen one by one.
              your mission, if you decide to take it, will be to guess the
              current weather in each of these cities you're are being presented with. If you assert in at least
              3 of them, with a deviation of 5 grades maxs, you shall certainly win, otherwise you lose. Are you
              ready for this quest, champion?
            </p>
            {props.currentCity === 5 && (
              <div className='row text-start text-uppercase'>
                {failedGuesses < 3 ? (
                  <h1 className='text-success display-4'>You've won, Congrats!</h1>
                ) : (
                  <h1 className='text-danger display-4'>You just lose, pal!</h1>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
