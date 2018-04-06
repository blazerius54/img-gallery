import React, { Component } from 'react';
import Modal from './Modal';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { src: 'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
            ],
            isModalVisible: false
        }
    }

    addPhoto (a, b) {
        this.setState({
            images: [...this.state.images, { title: a, src: b }]
            
        })
    }

    render() {
        const {images, isModalVisible} = this.state

        return (
            <div className='main'>
                <button onClick={()=>{this.setState({
                    isModalVisible: !isModalVisible
                })}}>New</button>
                {
                    this.state.isModalVisible && <Modal addPhoto={this.addPhoto.bind(this)}/>
                    
                }
                <div className='photo-container'>
                    {
                        this.state.images.length? this.state.images.map((item, index) => {
                            return (
                                <img src={item.src} key={index} alt="" className='main-image' />
                            )
                        }) : <p>No photos yet</p>
                    }
                </div>
            </div>
        )
    }
}



export default Main