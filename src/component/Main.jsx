import React, { Component } from 'react';
import Modal from './Modal';
import Gallery from './Gallery';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { title: 'House', src: 'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
                { title: 'Cuba', src: 'https://images.pexels.com/photos/533771/pexels-photo-533771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
            ],
            isModalVisible: false,
            isDesktop: true
        }
    }

    addPhoto(title, src) {
        this.setState({
            images: [...this.state.images, { title, src }]
        })
    }

    deletePhoto(index) {
        let newImgs = this.state.images;
        newImgs.splice(index, 1);
        this.setState({
            images: newImgs
        })
    }

    toggleModal() {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        })
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 768 });
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", ()=>this.updatePredicate());
    }

    componentWillUnmount() {
        window.removeEventListener("resize", ()=>this.updatePredicate());
    }

    render() {
        const { images, isModalVisible, isDesktop } = this.state
        return (
            <div className='main'>
                <button
                onClick={() => this.toggleModal()}
                className='new-btn'>New</button>
                {/* old conditional rendering*/}
                {/* { isModalVisible && <Modal addPhoto={this.addPhoto.bind(this)} toggleModal={this.toggleModal.bind(this)} /> } */}
                
                {/*new conditional rendering */}
                {
                    isModalVisible
                    ? <Modal addPhoto={this.addPhoto.bind(this)} toggleModal={this.toggleModal.bind(this)} /> 
                    : null
                }
                <Gallery
                images={images}
                deletePhoto={this.deletePhoto.bind(this)}
                isDesktop={isDesktop}
                />
            </div>
        )
    }
}

export default Main