import React, { Component } from 'react';
import './Tourlist.scss';
import Tour from '../tour/Tour'
import {TourData} from './/TourData'
import About from './About'


class Tourlist extends Component {

    state={
        tours: TourData
    }

    removeItem=(id)=>{
        const {tours} = this.state
        const remainItem = tours.filter(item=>item.id!=id)
        this.setState({
            tours: remainItem
        })
    }

    render() {
       const {tours} = this.state
        return (
            <div>
                <section className='tourlist'>
                  {tours.map(tour=>{ 
                      return(                        
                              <Tour key={tour.id} tour={tour} removeItem={this.removeItem} />                                                       
                      )
                  })}
                </section>
            </div>
        );
    }
}

export default Tourlist;