import PropTypes from 'prop-types';
import React from 'react';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ stepNumber, currentState, onInput }) => {
    let input;
    return (
        <div>
            <Man stepNumber={stepNumber} />
            <Board currentState={currentState} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => onInput(input.value) }
            />
        </div>
    );
};

GameContainer.propTypes = {
    stepNumber: PropTypes.number,
    currentState: PropTypes.array,
    onInput: PropTypes.func
};

export default GameContainer;
