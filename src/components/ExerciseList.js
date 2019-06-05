import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <React.Fragment>
        { exercises.map((exercise) => (
            <Card 
                key={exercise.id}
                title={exercise.title}
                description={exercise.description}
                img={exercise.img}
                leftColor={exercise.leftColor}
                rightColor={exercise.rightColor}
            />
        ))}
    </React.Fragment>    
)


export default ExerciseList