Class Func Style
=================
> child of classnames library (https://github.com/JedWatson/classnames) by JedWatson

utility for classNames and functional css styling

unpkg
```sh
<script src="https://unpkg.com/class-func-style@1.0.0/index.js"></script>
```

npm
```sh
npm install class-func-style --save
```

yarn
```sh
yarn add class-func-style
```

### Difference with classnames library
> * This library can be invoke with a list of style first.
> * Negative numbers and White Spaces are falsy value.
> * This library returns an object.

### Output

This function always return `className: 'strings of style'` when invoke with a truthy argument.

### To Use
```js
let classNames = classFuncStyle({
  'HeaderBackground':'bg-black'
})

classNames('HeaderBackground') // -> {className:'bg-black'}
classNames({
  'HeaderBackground':true  // -> {className:'bg-black'}
})
classNames(['HeaderBackground']) // -> {className:'bg-black'}

// it also accepts non-declared value as long as it was invoke first
let funcStyle = classFuncStyle({})
funcStyle('btn',{'btn-error':false}) // -> {className:'btn'}
```

#### on React JS
```js
<button {...fc({'btn-error':false})}>
  Hello
<button>
```

#### on Mithril JS
```js
m('button'
  ,{
    ...fc({'btn-error':true})
  }
  ,['Hello']
)
```

### Motivation in writing
Finding better workflow in using a functional/utility style of css writing.

---
[MIT](LICENSE)