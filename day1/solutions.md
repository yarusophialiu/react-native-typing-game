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

### `closing XML`

### `static render w/createClass`

```js
// ex1. Create two React classes:
//   - RedHeading: a h1 heading that is red
//   - BlueHeading: a h1 heading that is blue
var RedHeading = React.createClass({
  render: function() {
    return <h1 style={ {color: 'red'} }>I am Red</h1>;
  }
});

var BlueHeading = React.createClass({
  render: function() {
    return <h1 style={ {color: 'blue'} }>I am Blue</h1>;
  }
});

// DO NOT MODIFY
ReactDOM.render(<RedHeading/>, document.getElementById('red'));
ReactDOM.render(<BlueHeading/>, document.getElementById('blue'));
```

### `using curly braces to inject JS`

### `this.props`
```js
// Create a ColorfulCustomHeading React class
// that returns a 'h1' heading where the text
// and color are passed in through props

var ColorfulCustomHeading = React.createClass({
  render: function() {
    return <h1 style={ {color: this.props.color} }>{ this.props.text }</h1>;
  }
});

// DO NOT MODIFY
ReactDOM.render(<ColorfulCustomHeading color="red" text="Red Title"/>,
                document.getElementById('red'));
ReactDOM.render(<ColorfulCustomHeading color="blue" text="Blue Title"/>,
                document.getElementById('blue'));
```

### `JSX multiple items`

### `Array.map`
```js
// make a class called 'CustomList' that
// takes in an array as props, and creates
// an unordered list where each list element
// is from that array
var CustomList = React.createClass({
  render: function() {
    return <ul>
      {this.props.data.map(function(item) {
        return <li>{item}</li>;
      })}
    </ul>
  }
});

// DO NOT MODIFY
// if implemented properly the following list should show
// up correctly
ReactDOM.render(<CustomList data={['Snap dat Selfie', 'Clean Big Toe', 'Weave Dank Breadbasket']} />,
               document.getElementById('myList'));
```

### `nested iteration`

### `built-in handlers w/{javascript}`

### `built-in handlers w/an component method`

### `getInitialState and setState`