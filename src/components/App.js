import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift'
import { max_number } from '../helper/index'

export default class App extends Component {

    state = {
        gifts: []
    }

    addGift = () => {
        const { gifts } = this.state;
        let ids = this.state.gifts.map( gift => gift.id);
        gifts.push({ id: max_number(ids) + 1 })
        this.setState({ gifts })
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter( gift => id !== gift.id)
        this.setState({ gifts })
    }

    render(){
        return(
            <div> 
                <h2> Gift Giver </h2>
                <div className='gift-list'>
                {this.state.gifts.map(gift => {
                    return(
                        <Gift 
                            removeGift={this.removeGift}
                            gift={gift} 
                            key={gift.id}></Gift>
                    )
                })}
                </div>
                <Button className='btn-add' onClick={this.addGift}> Add Gift </Button>
            </div>
        )
    }
}

