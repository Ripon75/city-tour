import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component {
    
    state={
        showInfo: false
    }
    
    handleInfo=()=>{
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const {id,city,img,name,info} = this.props.tour
        const {removeItem} = this.props

        return (
            <article className='tour'>
                <div className='image-container'>
                    <img src={img} alt='tour' />
                    <span className='close-btn'>
                        {/* <i className="fas fa-window-close"></i> */}
                        <button onClick={()=>{removeItem(id)}}>Delete</button>
                    </span>
                </div>
                <div className='tour-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    {/* <i className="fas caret-square-down"></i> */}
                    <h5>info:{""}
                    <span onClick={this.handleInfo}>Details</span>
                    {/* <span onClick={this.handleInfo}></span> */}
                    </h5>
                {this.state.showInfo &&  <p>{info}</p>}
                </div>
            </article>
        );
    }
}

export default Tour;