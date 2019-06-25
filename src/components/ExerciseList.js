import React, { Fragment } from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <Fragment>
        { exercises.map((exercise) => (
            <Card 
                key={exercise.id}
                {...exercise}
            />
        ))}
    </Fragment>    
)


export default ExerciseList