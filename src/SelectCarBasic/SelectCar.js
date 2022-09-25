import React, { Component } from 'react'

export default class SelectCar extends Component {

    state = {
        anh: require('../assets/products/black-car.jpg')
    }

    renderthaydoi = (paramss) => {
        let newState = {
            anh: paramss
        }
        this.setState(newState);





    }


    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-7'>
                        <img style={{ width: '100%' }} src={this.state.anh}></img>
                    </div>
                    <div className='col-5'>
                        <div className="card text-dark ">
                            <div className='card-header text-black'> Exterior Color</div>
                            <div className="card-body">
                                <div className='row border border-link pt-2 pb-2 ' style={{ cursor: 'pointer' }} onClick={() => { this.renderthaydoi(require('../assets/products/red-car.jpg')) }} >
                                    <img className='col-2' src={require('../assets/icons/icon-red.jpg')}></img>
                                    <div className='col-10'>
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border border-link pt-2 pb-2' onClick={() => { this.renderthaydoi(require('../assets/products/silver-car.jpg')) }} style={{ cursor: 'pointer' }}>
                                    <img className='col-2' src={require('../assets/icons/icon-silver.jpg')}></img>
                                    <div className='col-10'>
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border border-link pt-2 pb-2' onClick={() => { this.renderthaydoi(require('../assets/products/steel-car.jpg')) }} style={{ cursor: 'pointer' }}>
                                    <img className='col-2' src={require('../assets/icons/icon-steel.jpg')}></img>
                                    <div className='col-10'>
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border border-link pt-2 pb-2' onClick={() => { this.renderthaydoi(require('../assets/products/black-car.jpg')) }} style={{ cursor: 'pointer' }}>
                                    <img className='col-2' src={require('../assets/icons/icon-black.jpg')}></img>
                                    <div className='col-10'>
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>


                            </div>
                        </div>










                    </div>
                </div>
            </div>
        )
    }
}
