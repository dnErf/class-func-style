;(function(){

  var hasOwnProp = {}.hasOwnProperty

  function classFuncStyle (classesName) {
    const classes = classesName , globalClass = {}
    return function classStyle() {
      const arr = []
      for (let i = 0; i < arguments.length; i++) {
        if (!arguments[i] || arguments[i] === ' ' || arguments[i] < 0) continue
        var 
          arg             = arguments[i]
          , argType       = typeof arg
          , classExists   = subj => (hasOwnProp.call(classes,subj)||hasOwnProp.call(globalClass,subj))
          , pushExisting  = subj => arr.push(classes[subj]||globalClass[subj])
          , pushNew       = subj => arr.push(subj)
        switch(argType) {
          case 'string' :
          case 'number':
            classExists(arg) 
            ? pushExisting(arg)
            : pushNew(arg)
            continue
          case 'object' :
            if (Array.isArray(arg) && arg.length) {
              arg.forEach(function(val) {
                let innerArr = classStyle.call(null,val)
                if (innerArr !== undefined && innerArr['className']) 
                  pushNew(innerArr['className'])
              })
              continue
            }
            for (let key in arg) {
              if (hasOwnProp.call(arg,key) && arg[key]) {
                classExists(key)
                ? pushExisting(key)
                : pushNew(key)
              }
            }
            continue
        }
      }
      return arr.length !== 0 ? {className: arr.join(' ').trim()} : undefined
    }
  }
  
  typeof module !== 'undefined' 
  ? module.exports = classFuncStyle 
  : window.classFuncStyle = classFuncStyle

}())