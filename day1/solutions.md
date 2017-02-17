# Solutions for SuperHappyFunTime

Solutions for the inline-examples that the TAs will go over during *SuperHappyFunTime*.

### `create & render elements [basic]`

```js
// Write the following using JSX

// ex1: create a heading
// create a 'h1' element that displays 'Hello World!'
// render the above element at id 'ex1'
ReactDOM.render(
  React.createElement('h1', null, 'Hello World'), 
  document.getElementById('ex1')
);

// ex2: create a heading w/children
// create a 'ul' element that displays a list of
// your favorite musical artists
// render the above element at id 'ex2'
ReactDOM.render(
  React.createElement('ul', null,
                      React.createElement('li', null, 'Taylor'),
                      React.createElement('li', null, 'Bob')
                     ), 
  document.getElementById('ex2')
);

// ex3: create a link
// create a 'a' element called 'Horizons'
// that links to 'https://www.joinhorizons.com'
// render the above element at id 'ex3'
ReactDOM.render(
  React.createElement('a', {href: 'http://www.joinhorizons.com/'}, 'Horizons'), 
  document.getElementById('ex3')
);
```

### `createElement w/classes, ids, & CSS`

```js
// DO NOT MODIFY ANY CSS

// ex1: create a heading w/id
// create a 'h1' element that has the id 'title'
// and text 'Horizons'
// render the above element at id 'ex1'

// if the rendered element has the correct id it
// will be red and HUUUUUUUUUUUUGE #Trump
ReactDOM.render(
  React.createElement('h1', {id: 'title'}, 'Horizons'), 
  document.getElementById('ex1')
);

// ex2: create a div w/two child divs
//   - Taylor w/ class 'taylor'
//   - Beyonce w/ class 'bae'

// if the rendered element has the correct class
// you will see the baes
ReactDOM.render(
  React.createElement('div', {id: 'artists'},
                      React.createElement('div', {className: 'taylor'}, 'Taylor'),
                      React.createElement('div', {className: 'bae'}, 'Beyoncé')
                     ), 
  document.getElementById('ex2')
);

// ex3: create a BOX
// create a div element (200px x 200px)
// using inline styles give it a 20px solid red border
// and a blue background
ReactDOM.render(
  React.createElement('div', {style: {height: '200px', width: '200px', backgroundColor: 'blue', border: '20px solid red'}}), 
  document.getElementById('ex3')
);
```

### `JSX Examples`

```js
// Write the following using JSX syntax

// ex1: create a heading
// create a 'h1' element that displays 'Hello World!'
// render the above element at id 'ex1'
ReactDOM.render(
  <h1>Hello World</h1>, 
  document.getElementById('ex1')
);

// ex2: create a heading w/children
// create a 'ul' element that displays a list of
// your favorite musical artists
// render the above element at id 'ex2'
ReactDOM.render(
  <ul>
    <li>Taylor</li>
    <li>Bae</li>
  </ul>,
  document.getElementById('ex2')
);

// ex3: create a link
// create a 'a' element called 'Horizons'
// that links to 'https://www.joinhorizons.com'
// render the above element at id 'ex3'
ReactDOM.render(
  <a href='http://www.joinhorizons.com/'>Horizons</a>, 
  document.getElementById('ex3')
);

// ex4: create a heading w/id
// create a 'h1' element that has the id 'title'
// and text 'Horizons'
// render the above element at id 'ex1'

// if the rendered element has the correct id it
// will be red and HUUUUUUUUUUUUGE #Trump
ReactDOM.render(
  <h1 id='title'>Horizons</h1>, 
  document.getElementById('ex4')
);

// ex5: create a div w/two child divs
//   - Taylor w/ class 'taylor'
//   - Beyonce w/ class 'bae'

// if the rendered element has the correct class
// you will see the baes
ReactDOM.render(
  <div id='artists'>
    <div className='taylor'>Taylor</div>
    <div className='bae'>Beyoncé</div>
  </div>, 
  document.getElementById('ex5')
);

// ex6: create a BOX
// create a div element (200px x 200px)
// using inline styles give it a 20px solid red border
// and a blue background
var divStyles = {
  height: '200px',
  width: '200px',
  backgroundColor: 'blue',
  border: '20px solid red'
};

ReactDOM.render(
  <div style={divStyles}></div>,
  document.getElementById('ex6')
);
```