# Inline Exercise: Customizable login form

## Goal

The goal of this exercise is to create a reusable login
form element in React.

## Time limit 15 minutes

## Instructions

Your React component should take three required
properties:

- `action`: passed to the action field of the output form
- `method`: passed to the method field of the output form
- `submitLabel`: used as the label for the form submit
  button

In Handlebars this would look like:

```html
<form action="{{action}}" method="{{method}}"
  Username: <input type="text" name="username">
  Password: <input type="password" name="password">
  <input type="submit" value="{{submitLabel}}">
</form>
```

1. Open `week06/day1/custom-login/client/index.js`
1. Update `.render()` where it says `YOUR CODE HERE` to add JSX code
   for login form.
1. Try changing `action`, `method` and `submitLabel` properties in the
   `<MyForm />` and make sure they are properly rendered using DevTools
   inspector.
