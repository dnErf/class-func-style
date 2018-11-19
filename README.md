### Class Func Style
---
> child of classnames library https://github.com/JedWatson/classnames by JedWatson
utility for classNames and functional/utility css styling

npm
```sh
npm install class-func-style --save
```

yarn
```sh
yarn add class-func-style
```

#### Output
---
This function always return `className: 'strings of style'` when invoke with a truthy argument.

#### To Use
```js
let listOfFuncCSS = classFuncStyle({
  'HeaderBackground':'bg-black'
})

listOfFuncCSS('HeaderBackground') // -> {className:'bg-black'}
listOfFuncCSS({
  'HeaderBackground':true  // -> {className:'bg-black'}
})
listOfFuncCSS(['HeaderBackground']) // -> {className:'bg-black'}

// it also accepts non-declared value as long as it was invoke first
let funcStyle = classFuncStyle()
funcStyle('btn',{'btn-error':false}) // -> {className:'btn'}
```

#### Motivation in writing
Finding better workflow in using a functional/utility style of css writing.

---