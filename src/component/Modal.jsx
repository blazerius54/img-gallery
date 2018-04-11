import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }
    componentDidMount() {
        window.addEventListener('click', (e) => {
            if (e.target === this.modalMain) {
                this.props.toggleModal()
            }
        })
    }

    render() {
        const { addPhoto, toggleModal } = this.props;
        const { error } = this.state;
        let expression = /^(http|https):/;
        let regex = new RegExp(expression);
        return (
            <div className='modal' ref={ref => { this.modalMain = ref }}>
                <div className='modal-content'>
                    <h2>New Image</h2>
                    <div
                        className='modal-form'
                    >
                        <input type="text"
                            placeholder='Title'
                            className={error?'danger':null}
                            ref={ref => {
                                this.inputTitle = ref;
                            }}
                            onChange={()=>this.setState({error: ''})}
                        />
                        <input type="text"
                            placeholder='URL'
                            className={error?'danger':null}
                            ref={ref => {
                                this.inputSrc = ref;
                            }}
                            onChange={(e)=>{this.setState({error: ''}); if(regex.test(e.target.value)){e.target.className='nice'} }}
                        />
                        {
                            error
                            ? <div className='error'><p>{error}</p></div>
                            : null
                        }
                        <div className='btn-container'>
                            <button
                                className='new-btn close'
                                onClick={() => { toggleModal() }}
                            >Close</button>
                            <button
                                className='new-btn'
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log(this.inputSrc.value)
                                    if (this.inputTitle.value && regex.test(this.inputSrc.value)) {
                                        addPhoto(this.inputTitle.value, this.inputSrc.value)
                                        toggleModal();
                                    } else {
                                        this.setState({
                                            error: 'Please, enter correct URL and title'
                                        })
                                    }
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