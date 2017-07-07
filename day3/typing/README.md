# React/Redux Typing Game
The goal of this exercise is to write a typing game using React/Redux. The instructions will be very barebones, so you will have the freedom to design the app & add additional features to make it your own. This folder is a React/Redux template similar to the one you worked on for yesterday's exercises, so you should be familiar with its' structure.

List of __REQUIRED__ components:

1. Leaderboard
1. Character Highlighting (Correct/Incorrect)
1. Timer
1. Streaks

## Part 1: Setup & Start Game

Currently if the user navigates to `index.html` the `app/components/App.js` component is displayed. For Part 1 you will write code to set-up the game and to start the gameplay.

1. Create a new reducer to keep track of your game state in `reducers/gameReducer.js` and add it to `reducers/index.js`
    1. Import words from `app/dictionary.js`
    1. Use [`_.shuffle`](http://underscorejs.org/#shuffle) from the Underscore.js library to randomize the loaded words
    1. Get the first 100 words from this list and add them to your initial state under `wordList`
1. Edit `containers/GameContainer.js`
    1. Update `mapStateToProps()` and map `wordList` to your props
1. Create a `WordBox` component and add it to `GameContainer`, it will receive `wordList` via props.
    - [Sample CSS/HTML for your `WordBox` component](https://codepen.io/horizons/pen/QgVmmm?editors=1100)
    - Put each character inside of its own `<span>` so that characters can be differentiated from each other later on
    - Put your CSS in `app/index.tpl.html` where it says `YOUR CSS STYLES HERE`
1. Create a `TextBox` component for user input
1. Create a `InfoBar` component to display the timer, the total score, and the current streak bonus (all initially 0)
1. Update `mapDispatchToProps()` and create three actions `START_GAME`, `DECREMENT_TIMER`, and `END_GAME`.
1. Update `GameContainer` and pass `this.onInput()` to `TextBox`, call this function in `TextBox` when user types
1. Once a user begins typing a `START_GAME` action is dispatched. The action will initiate a `setInterval` that in turn dispatches the `DECREMENT_TIMER` action every 1000ms. Additionally, the `setInterval` should dispatch an `END_GAME` action once the timer is at 0
    - Store this timer under `this.interval` so you can clear it later

### Goal

When the user first navigates you should now see something similar to the following image.

![](./img/1_start.png)

## Part 2: Highlight Letters & Mistakes

Using the `onChange` property for the `<input>` element in the `TextBox` component we will implement character highlight functionality. We will implement this functionality by adding an array (called `userInput`) for inputted words to our state, and comparing it against our `wordList`.

1. Change the way our `WordBox` component is rendered
    - compare `userInput` with `wordList`, and make matching characters BLUE while making user errors YELLOW
    - if a word has not been started yet make it gray GREY
    - [sample HTML/CSS for `WordBox` and `TextBox`](https://codepen.io/horizons/pen/Pjdepe?editors=1100)
1. Add the following to our state:
    - `currentIndex` (initially `[0,0]`): an array of three numbers that point to our current location in the array in the format `[word # char #]` - remember that since strings are Arrays in JavaScript we can use Array notation to access characters
    - `totalScore`: (# of matching letters + streaks) - # of mismatching letters
    - `streakCount`: the current streak bonus (not included in `totalBonus`, and displayed on the screen next to __Word Streak__)
1. __IF__ a new non-whitespace character is entered dispatch a `CHAR_ADDED` action w/the new word as the payload
    - add/replace the word at `userInput[word#]` (word# = `currentIndex[0]`) with the new word
1. __IF__ a whitespace character is entered dispatch a `NEXT_WORD` action
    - clear the `<input>` element in your `TextBox` component
    - increment `currentIndex` accordingly
1. Calculate `totalScore` and `streakCount` (you should be able to do this by comparing `wordList` and `userInput`). We'll let you figure out an algorithm for this challenge by yourselves

__Note:__ The user __SHOULD NOT__ be able to press the DELETE/BACKSPACE key to undo mistakes in this game

## Part 3: Streaks
The streak is the total number of words the player gets correct in a row (1 word = 1 point ; 2 words = 1 + 2 points ; 3 words = 1 + 2 + 3 points...). These points are awarded as bonus _on top of_ the points received for character matching. So for instance if a user correctly matched the words `"horizons is amazing"` they would get a total of `(8+1) + (2+2) + (7+3) = 23` points. The following is an example of a streak. __Note__ that a streak is not added to the total score until a mistake has been made to reset the streak or the game has ended.

![](./img/6_streak.png)

### Goal
After the user starts typing out the displayed words you should now see something similar to the following image.

![](./img/2_typing.png)

## Part 4: Game Over

When the `setInterval` dispatches an `END_GAME` action end the game and display a Time's Up page.

1. When `END_GAME` is dispatched update `totalScore` by adding `streakCount` and `totalScore`
1. Create a `TimeUp` container which contains `FinalScore`, `PlayGameButton`, and `ViewLeaderboardButton` components
1. Create a route for this page of your App
1. Display `totalScore` in the `FinalScore` component
1. Clicking the `PlayGameButton` should dispatch a `RESTART_GAME` action, which resets the values in state (i.e. set `currentIndex` to `[0,0]`, `totalScore` to `0`, `streakCount` to `0`...) and navigates you back to the default route where you should see the `GameContainer`
1. Clicking the `ViewLeaderboardButton` navigates you to the route you create in the next part for the Leaderboard

### Goal
Your finished __Time's Up!__ page should look something like the following.

![](./img/3_timeup.png)

## Part 5: Leaderboard
If your `totalScore` was in the Top 10, the `END_GAME` action asks you for your 3-character initials and adds you to the Leaderboard. __Note__ you can use `localStorage` to keep track of top 10 user scores (by putting them in an Object like below). Since `localStorage` only works with Strings, you will have to use `JSON.parse` and `JSON.stringify` to store Objects.

```js
{
  "1": {
    "name": "ABC",
    "score": 102
  },
  "2": {
    "name": "DEF",
    "score": 101
  }
}
```

1. When `END_GAME` is dispatched, check if the user's `totalScore` is in the Top 10
1. If __NOT__ in the Top 10 follow instructions in the last Part
1. If user is in the Top 10, point them to a `RegisterContainer` (this contains `InitialsInput` and `SubmitButton` components)
1. When the `SubmitButton` is pressed, add the initials & `totalScore` to localStorage (while also removing the tenth place user if one exists). Then navigate the user to the Leaderboard route
    ![](./img/4_congratulations.png)
1. Create a `Leaderboard` container which has a `Board` component and a `PlayGameButton` component, and also create a corresponding route for the Leaderboard
1. The `Board` component retrieves the Top 10 scores from `localStorage` and displays them
1. The `PlayGameButton` fires a `RESTART_GAME` action (whose behaviour was described in an earlier part)

### Goal
Your completed leaderboard should look a little something like the following image.

![](./img/5_leaderboard.png)

## Bonus
Congratulations! You've finished the React/Redux typing game. Here are a few bonus features you can implement to make it extra special.

- Keep track of speed (words/min) and create a graph of typing speed over time
- Multiplayer Mode
    - The same set of words are given to each player & the player w/the highest points wins
    - Sudden Death: First player to make a mistake loses
- Cool CSS Animations
