Select
======

Select is a library to grab all the elements on the page at once when you need them instead of having seperate jQuery selectors spread out. I also plan to add piping so you can have data from a JSON API being streamed into your DOM selection


```
var element = new Select("p", "main").el

console.log(element.innerHTML);

var els = new Select({
    footer: 'footer',
    paragraphs: {
        header: 'header p',
        footer: 'footer p'
    }
})
// At the end we have again JavaScript object.
// It's properties are actually results
// of dom function execution. For example, to get
// the paragraph in the footer:
els.paragraphs.footer.el

_.each(els.paragraphs)
```

Setup
=======

Pretty straight forward just need to do
```
git clone https://github.com/joshbedo/Select.git
```

and then you can go inside of the tests folder and explore the different methods

Tests
=======

The tests are setup to examine so you can see different usages of the library. You can get to the tests by going to "/test/spec/index.html". 