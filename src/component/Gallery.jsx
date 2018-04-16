import React, { Component } from 'react';

class Gallery extends Component {

    render() {
        const { images, deletePhoto, isDesktop } = this.props;

        return (
            <div className='photo-container'>
                {
                    images.length ? images.map((item, index) => {
                        return (
                            <div className='single-item' key={index}>
                                <div className='single-item-header'>
                                    <h2>{item.title}</h2>
                                    { 
                                        isDesktop 
                                        && <p onClick={()=>deletePhoto(index)}>Delete</p>
                                    }
                                </div>
                                <div className='item-content'>
                                    {
                                        !isDesktop
                                        && 
                                        <div className='delete-div' onClick={() => deletePhoto(index)} >
                                            <p>Delete</p>
                                        </div>
                                    }
                                    <img src={item.src} alt="" className='main-image' />
                                </div>
                            </div>
                        )
                    }) : <p className='empty-info'>No photos yet</p>
                }
            </div>
        )
    }
}

export default Gallery