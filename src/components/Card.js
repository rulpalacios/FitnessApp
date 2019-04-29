import React from 'react'
import exerciseImg from '../images/exercise.png'

class Card extends React.Component {
    render(){
        return (
            <div>
               <div>
                   <img src={exerciseImg}/>
                </div> 
                <div>
                    <h1>Technique Guides</h1>
                    <p>Learn amazing street workout and calisthenics</p>
                </div>
            </div>
        )
    }
}

export default Card