import React, { Component } from 'react';
import Modal from './Modal';
import Gallery from './Gallery';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { title: 'House', src: 'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
                { title: 'House 2', src: 'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
                { title: 'House 3', src: 'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
                { title: 'House 4', src: 'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
                { title: 'House 5', src: 'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
            ],
            isModalVisible: false
        }
    }

    addPhoto (title, src) {
        title && src?
        this.setState({
            images: [...this.state.images, { title, src }]
        }) : null
        console.log(this.state.images)
    }

    deletePhoto (index) {
        let newImgs = this.state.images;
        newImgs.splice(index, 1);
        this.setState({
            images: newImgs
        })
    }

    toggleModal () {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        })
    }

    render() {
        const {images, isModalVisible} = this.state

        return (
            <div className='main'>
                <button 
                onClick={()=>this.toggleModal()}
                className='new-btn'>New</button>
                {
                    this.state.isModalVisible && 
                    <Modal 
                    addPhoto={this.addPhoto.bind(this)}
                    toggleModal={this.toggleModal.bind(this)}
                    />
                    
                }
                <Gallery 
                images={images}
                deletePhoto={this.deletePhoto.bind(this)}
                />
            </div>
        )
    }
}

export default Main