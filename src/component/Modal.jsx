import React, { Component } from 'react';

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('click', (e) => {
            if (e.target === this.modalMain) {
                this.props.toggleModal()
            }
        })
    }

    render() {
        const { addPhoto, toggleModal } = this.props;
        return (
            <div className='modal' ref={ref => { this.modalMain = ref }}>
                <div className='modal-content'>
                    <h2>New Image</h2>
                    <div
                        className='modal-form'
                    >
                        <input type="text"
                            placeholder='Title'
                            ref={ref => {
                                this.inputTitle = ref;
                            }}
                        />
                        <input type="text"
                            placeholder='URL'
                            ref={ref => {
                                this.inputSrc = ref;
                            }}
                        />
                        <div className='btn-container'>
                            <button
                                className='new-btn close'
                                onClick={() => { toggleModal() }}
                            >Close</button>
                            <button
                                className='new-btn'
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (this.inputTitle.value && this.inputSrc.value) {
                                        addPhoto(this.inputTitle.value, this.inputSrc.value)
                                        toggleModal();
                                    } else return
                                    this.inputTitle.value = '';
                                    this.inputSrc.value = '';
                                }}
                            >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal