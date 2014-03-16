Select
======

Select is a library to grab all the elements on the page at once when you need them instead of having seperate jQuery selectors spread out


```
var els = dom({
    footer: 'footer',
    paragraphs: {
        header: 'header p',
        footer: 'footer p'
    }
}))
// At the end we have again JavaScript object.
// It's properties are actually results
// of dom function execution. For example, to get
// the paragraph in the footer:
els.paragraphs.footer.el

_.each(els.paragraphs)
```