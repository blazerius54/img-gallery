import React, { Component } from 'react';

class Modal extends Component {
    render() {
        const { addPhoto } = this.props;

        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                addPhoto(this.inputTitle.value, this.inputSrc.value)
                this.inputTitle.value = '';
                this.inputSrc.value = '';
            }}>
                <input type="text"
                    placeholder=''
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
                <input type="submit" />
            </form>
        )
    }
}

export default Modal