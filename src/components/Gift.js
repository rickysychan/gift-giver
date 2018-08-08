import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

export default class Gift extends Component {
    state = {
        person: '',
        present: ''
    }

    render(){
        return(
            <div className='gift'>
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl 
                            className='input-person'
                            onChange={ event => this.setState({ person: event.target.value })}
                             />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Present</ControlLabel>
                        <FormControl 
                            className='input-present'
                            onChange={ event => this.setState({ present: event.target.value })}
                             />
                    </FormGroup>
                </Form>
                <Button 
                    className='btn-remove'
                    onClick={ () => this.props.removeGift(this.props.gift.id)}
                > Remove gift </Button>
            </div>
        )
    } 
}