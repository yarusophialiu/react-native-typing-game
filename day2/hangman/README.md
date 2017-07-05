# Pair programming exercise: Redux Hangman

## Goal

In this exercise you will be inheriting an existing codebase and implementing React Router and Redux functionality within it to end up with a working hangman app.

## Part 0: Bravery - Figuring out the code

You've just cloned a big repo with a lot of files in it already, and at the moment you don't know what any of them do. When you open a file you may find it contains a lot of intimidating code that you don't recognize or understand. But don't be discouraged; You are not expected to be able to look at some new codebase and immediately know whats up, and you never will be! Being tossed into code you aren't comfortable with is something a developer of any caliber will frequently encounter. Strong coders aren't characterized by what they've seen before, but instead by how well they remain calm and find footholds in things they're new to.

Let's start by demystifying this gnarly app a little bit together.

1. The first step will commonly be to run the app and see what it does. `npm install` and then `npm start`. At `localhost:3000` you'll see some hangman stuff that's not very interactive yet and some funky sidebar on the right. So now you know what the code does in its current state.

1. The second step is often to trace what that `npm start` command actually does. If you look at `package.json`, you will see some scary and cryptic scripts, but `start` is just a simple `node server.js`. So we might go to `server.js` next.

1. When you open `server.js`, you may hit a brick wall again in terms of understanding. You can see there's some stuff about webpack dev server in this code, so this might give you some idea that the server is building and serving apps like the webpack dev server you used last week. But other than that, it's probably still unclear how the app works from here.

    There's 2 possible trains of thought that might lead you to a good entry point into the app from here.

    1. Follow the webpack thread. If webpack isn't itself super scary to you (situations like this are one argument for learning it a little even if you'll never write it yourself), you may be able to skim the `webpack.config.js` file for clues about what it does. We see that there's a production and non-production version of this file, but since we are not running on production we'll look at the latter. If you remember any webpack, you may remember that the `entry` key specifies what file is the topmost level of the frontend code that webpack will have to build, and there we see `/app/index.js`.

    1. Draw on your React familiarity and instincts. It stands to reason that the majority of code you care about for this React-Redux app will be in the frontend, which you could probably guess would be in the `app` folder. You may have noticed a pattern before that the entry point to the frontend often lives at the root of the `app`/`reactApp`/`client` folder with a name like `app.js`/`index.js`. Even if not, you know such an entry point must exist and that it wouldn't really belong in the other folders here like `components` and `reducers` (another fantastic endorsement for organizing your code with folders). Indeed you see that there is an `index.js` in the `app` folder.

1. In this app, `index.js` has the `ReactDOM.render` call that kicks off the entire app, and in most projects (including those you've seen) some equivalent is true. Don't see the `ReactDOM.render` call? It's right there on line 9, it's just got a new hairstyle so might not have recognized it. We've usually imported `ReactDOM` and called it's render function with `ReactDOM.render`, but in this app they directly import the `render` function off of `ReactDOM` using object destructuring on line 2 and just use that. Same exact thing.

    There's also some mess in here about hot reloading at the bottom, and the `AppContainer` being rendered was apparently imported from a package having to do with hot reloading. But who cares about any of that, sounds complicated, we're more likely to find some solid ground if we follow the `Root` component being rendered that's coming from `./containers/Root`.

1. What you see in `Root.js` probably isn't what you were expecting, but it shouldn't be obtuse. These lines are saying that `Root.js` exports a different thing depending on if we're production or not. Again, we aren't production so let's jump to the dev one in `Root.dev.js`.

1. Okay, so `Root.dev.js` should house some familiar faces! We see a `Provider` tag, which we know is setting up Redux use in the wrapped components. We see a `ConnectedRouter` along with the fact that it came from `react-router-redux`. This is playing the role of `BrowserRouter`, it's an alternate version intended for use in React Router apps that also use Redux. So whatever it wraps is ready to use `Link` tags and such. In fact, it seems that it wraps a simple `Route` which when matched on `/` will display an `App` component. Let's check that out.

1. Why, `App` doesn't seem very scary at all! You're looking at a regular React component written as a function. This is the turning point where the big scary app turns into the same old React codebases you've been using for a week. In this more complicated project, `App` isn't actually the topmost level of your app, but you are more than welcome to decide it's the topmost level of the stuff you care about. It's completely acceptable to answer the question "What happens when I run this app?" with "A whole bunch of garbage I don't really care about, and then eventually the App is rendered and ...".

    If you keep following the path the rendering takes within this more familiar territory you will find this hierarchy:

    ```bash
    └── App
        └── GameContainer
            ├── Man
            └── Board
                └── Box
    ```

So the moral of this story is, you know enough to make it through times where you think you know nothing. You know how javascript apps work and how to follow the import thread, so you can make your way through murkier waters than you may initially give yourself credit for.

We've found the "real" app buried in the complicated codebase and the world feels a little safer, so it's time to start the assignment.


## Part 0.5

This assignment is configured to use `linting`, which is the term for style enforcement. If the code you write does not meet this project's predefined style, the linter will complain and your build will fail. For this to go from being a nightmare to being a great ally, you will probably want to install a linter plugin for your editor. In Atom, go to Packages -> Settings View -> Open -> Install and search for `linter-eslint`. Install the result of the same name (and its dependencies). You may need to restart Atom before it takes effect.

This package will display lint issues in your editor in real time as red underlines.


## Part 1: Simple Routing

As we saw in Part 0 while tracing through the code, a lot of the React Router stuff is set up for us already. We don't have very much router stuff we want to add at the moment either. Our objective at the moment is to put a footer at the bottom of the page at all times with 2 links. One will take you to the Game (the `GameContainer` component), and the other will take you to an About screen (the currently unused `About` component).

1. Add 2 `Link` tags to the bottom of `App`. The one for the Game should take you to `/`, and the one for the About should take you to `/about`.

1. Use a `Route` tag to make it so that the `GameContainer` currently in `App` only appears when you are on `/` AND NOT `/about`.

    Note: `GameContainer` currently takes props in its tag, but when we use `component={GameContainer}` we aren't given the opportunity to specify the props :( . In this case we are actually _required_ to supply these props as a result of the `propTypes` line in `GameContainer.js`, which is a common pattern. There are 2 easy workarounds for this. We could write a wrapper component that needs no props but renders `GameContainer` with props and do `component={GameContainerWrapper}`, or we could use `render={() => <GameContainer WHATEVER PROPS WE WANT />}` (which is secretly the same thing but shorter).

1. Use another `Route` tag to render the `About` component when on `/about`.

You should now be able to switch between the game view and the about view using the links that are always at the bottom of the page. React Router is often very simple to implement for common use cases (ever since version 4 came out at least).

## Part 2:
