import React from 'react'
import Card from './Card'

const ExerciseList = (props) => (
    <div>
        { props.exercises.map((exercise) => (
            <Card 
                title={exercise.title}
                description={exercise.description}
                img={exercise.img}
                leftColor={exercise.leftColor}
                rightColor={exercise.rightColor}
            />
        ))}
    </div>
)

export default ExerciseList