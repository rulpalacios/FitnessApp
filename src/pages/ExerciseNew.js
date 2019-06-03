import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import '../components/styles/ExerciseNew.css'

class ExerciseNew extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return (
            <div className="ExerciseNew_Lateral_Spaces row">
                <div className="col-sm ExerciseNew_Card_Space">
                    <Card 
                        {...this.state.form}
                    />
                </div>
                <div className="col-sm ExerciseNew_Form_Space">
                    <ExerciseForm
                        onChange={this.handleChange}
                        form={this.state.form}
                        
                    />            
                </div>
            </div>
        )
    }
}

export default ExerciseNew