# date2calendar

A simple function that takes date as a parameter and turns it into a calendar in the form of a two-dimensional array (of weeks and days) which you can use to build fully customizable calendar components.

This package is also a part of an article on DEV Community - you can check it out [here](https://dev.to/rgolawski/simple-calendar-in-a-few-lines-of-code-2n00).

## Install

```
npm install date2calendar
```

## Usage

```js
import date2calendar from "date2calendar";

const calendar = date2calendar({
  date: new Date(),
});
```

## Examples

See this in action here 👇

- [React example](https://stackblitz.com/edit/react-b11teh?file=src/App.js)
- [Vue example](https://stackblitz.com/edit/vue-hlv2jx?file=src/App.vue)
