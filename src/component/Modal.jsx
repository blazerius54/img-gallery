import React, { Component } from 'react';

class Modal extends Component {
    render() {
        const { addPhoto } = this.props;
        return (
            <div className='modal'>
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
                            <button>Close</button>
                            <button
                            onClick={(e) => {
                                e.preventDefault();
                                addPhoto(this.inputTitle.value, this.inputSrc.value)
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