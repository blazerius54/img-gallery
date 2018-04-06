import React, { Component } from 'react';

class Gallery extends Component {

    render() {
        const { images, deletePhoto } = this.props;

        return (
            <div className='photo-container'>
                {
                    images.length ? images.map((item, index) => {
                        return (
                            <div className='single-item'>
                                <div className='single-item-header'>
                                    <h2>{item.title}</h2>
                                    <p
                                    onClick={()=>deletePhoto(index)}
                                    >Delete</p>
                                </div>
                                <img src={item.src} key={index} alt="" className='main-image' />
                            </div>
                        )
                    }) : <p>No photos yet</p>
                }
            </div>
        )
    }
}

export default Gallery