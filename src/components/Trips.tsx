import * as React from 'react';
import { connect } from 'react-redux';
import { getTrips } from '../actions/trips';
import { ConnectedTripsProps, TripsProps, Trips } from '../types/index';
import { TripsReducer } from '../reducers/trips';
import { TripItem }  from './TripItem';
class TripsList extends React.Component<TripsProps, {}>  {
 
  componentDidMount() {
    this.props.getTrips();
  }

  componentDidUpdate(prevProps: TripsProps) {
    if (this.props.startDate !== prevProps.startDate || this.props.selectedCities !== prevProps.selectedCities) {
      this.props.getTrips(this.props.startDate, this.props.selectedCities);
    }
  }

  render() {

    let { trips } = this.props;

    let tripItems = trips && trips.length !== 0 && trips.map((trip) => {
      return <TripItem key={trip.id} trip={trip} />;
    });

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12">
              <h3>
                Total : {trips ? trips.length : 0}
              </h3>
        </div>
        <div className="col-xs-12 col-sm-12">
          <div className="flights__details"> 
             
              <div>
                  {
                    trips && trips.length <= 0 && 
                      <div>Sorry, No flights for your selection. Please refine your search!</div>
                  }
                  <div className="flight__container">
                      {tripItems}
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

// State to props for connect argument
export const mapStateToProps = (state: TripsReducer): TripsProps => {
  return {
    trips: state.tripsReducer.trips
  };
};

// Dispatch to props for connect argument
const mapDispatchToProps = {
  getTrips
};

// Conect the component with Redux
export default connect<ConnectedTripsProps, ConnectedTripsProps, void>(
  mapStateToProps, mapDispatchToProps
)(TripsList);
