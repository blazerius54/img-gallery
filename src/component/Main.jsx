import React, { Component } from 'react';
import Modal from './Modal';
import Gallery from './Gallery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteImg, addImg } from '../actions/index';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            isDesktop: true
        }
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
                { 
                    isModalVisible && 
                    <Modal 
                    addPhoto={this.props.addImg} 
                    toggleModal={this.toggleModal.bind(this)} 
                    /> 
                }
                
                <Gallery
                images={this.props.images}
                deletePhoto={this.props.deleteImg}
                isDesktop={isDesktop}
                />
            </div>
        )
    }
}

function mapStateToProps (state) {
    console.log(state.images)
    return {
        images: state.images
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({addImg, deleteImg}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)