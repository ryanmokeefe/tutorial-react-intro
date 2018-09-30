import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let post = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
}
let authors=['Tiny T-Rex', 'Ivory Iguanodon', 'Stealthy Stegosaurus']

ReactDOM.render(<Post allAuthors={authors} post={post}/>, document.getElementById('root'));
registerServiceWorker();

