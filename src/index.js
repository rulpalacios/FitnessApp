// const element = document.createElement('h1')
// element.innerText = 'Hello React..'
// const container = document.getElementById('root')
// container.appendChild(element)
// https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png
import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName: 'Raul',
    lastName: 'Palacios',
    avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}

function getName(user){
    return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
    if(user){
        return <h1>Hello {getName(user)} </h1>
    }
    return <h1>Hello Stranger </h1>
}

const name = 'Raul'

const element = (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} />
    </div>
)
const container = document.getElementById('root')

// ReactDOM.render(__QUE__, __DONDE__)

ReactDOM.render(element, container)