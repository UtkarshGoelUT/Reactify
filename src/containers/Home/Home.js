import React, { Component } from 'react';
import Carousel from '../../components/UI/Carousel/Carousel';
import Cards from '../../components/UI/Cards/Cards';

class Home extends Component {
    state = {
        ngos: [
            {
                name: "NGO1",
                fund: 2000,
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
            },
            {
                name: "NGO2",
                fund: 8000,
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
            },
            {
                name: "NGO3",
                fund: 1000,
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
            },
        ]
    }

    render () {
        return (
            <div>
                <Carousel />
                <Cards ngos={this.state.ngos} />
            </div>
        )
    };
};

export default Home