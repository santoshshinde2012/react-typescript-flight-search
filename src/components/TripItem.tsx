import * as React from 'react';
import { Trips } from '../types/index';

export interface TripProps {
    trip: Trips;
}

export class TripItem extends React.PureComponent<TripProps> {
   render(): React.ReactNode {
        return (
            <div className="flight">
                <div className="flight__details">
                    <h3 className="flight__price">₹ {this.props.trip.price}</h3>
                    <div className="flight__timings">
                        <div className="flight__departure">
                        {
                            this.props.trip.number && (
                                <p className="flight__number">{this.props.trip.number.toUpperCase()}</p>
                            )
                        }
                        <p className="flight__codes">{this.props.trip.from_code} &raquo; {this.props.trip.to_code}</p>
                        <p className="flight__depart__time">Depart: {this.props.trip.depart_date}</p>
                        <p className="flight__arrive__time">Arrive: {this.props.trip.arrive_date}</p>
                        </div>
                    </div>
                </div>
            </div>      
        );
    }
}
