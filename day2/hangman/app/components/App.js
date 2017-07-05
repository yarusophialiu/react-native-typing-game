import React from 'react';

import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <GameContainer
          stepNumber={0}
          currentState={['H', null, null, null, 'Z', null, 'N', null]}
          onInput={(value) => alert(value)}
        />
    </div>;

export default App;
