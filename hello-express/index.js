// const express = require("express")
// const app = express()
// app.listen(4000, function() {
//     console.log("app is listeneing on port 4000")
// })
// app.get('/', function (request, response) {
//     response.send('Hello World')
// })

// tell users what packages are required
const express = require
('express')
// shortcut to not type out the method 'express()' each and every time.
const app = express()
// specify that when the user navigates to "/", this is the response they see. (ROUTING)
        // app.get("/", (request, response) => {
        //  response.send("Hello World")
        // })
// tells us what port we're using and need to navigate to (in the browser) 
app.listen(4000, function() {
 console.log('listening on 4000')
 
})
        // app.get("/:name", (req, res) => {
        //     // must use backtics: 
        //     res.send(`hello ${req.params.name}`)
        // })
///////////////////////////////////////////////////

/////  99 bottles of beer:

app.get("/", (req, res) => {
        res.redirect("/99")
})
// * 1. rewritten below *
        // app.get("/:bottles", (req, res) => {
        //     var next = req.params.bottles - 1
        //     res.send(`<h1>${req.params.bottles} of beer on the wall.</h1> <a href="/${next}">take one down</a>`)
        // })
app.set("view engine", "hbs")


// * 1. rewitten from above *

 app.get("/:numberOfBottles?", (req, res) => {
     let bottles = req.params.numberOfBottles || 99
     let next = bottles - 1
     res.render("index", {bottles: req.params.numberOfBottles, next: next}); })
