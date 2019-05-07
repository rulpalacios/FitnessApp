// const element = document.createElement('h1')
// element.innerText = 'Hello React..'
// const container = document.getElementById('root')
// container.appendChild(element)
// https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png
import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

// ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(<Card />, container)