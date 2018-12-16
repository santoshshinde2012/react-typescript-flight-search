import * as React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { getCities } from '../actions/cities';
import { ConnectedCitiesProps, CitiesProps, Cities } from '../types/index';
import { CitiesReducer } from '../reducers/cities';
import TripsList from './Trips';

class HomeComponent extends React.Component<CitiesProps, {startDate: Date, selectedCities: string[]}>  {
 
  constructor(props: CitiesProps) {
    super(props);
    this.state = {
      startDate: new Date(),
      selectedCities: [],
    };
  }

  public componentDidMount() {
    this.props.getCities();
  }

  onStartDateChange = (date: Date) => {
    this.setState({ startDate: date });
  }

  onCitiesChange = (selectedOption: Cities[]) => {
    let selectedCities: string[] = [];
    selectedOption.map((item) => {
      if (item.value) {
        selectedCities.push(item.value);
      }
    });
    this.setState({selectedCities});
  }

  render() {
    let { cities } = this.props;
    return (
      <div className="full-width">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
              <div className="form-group">
                <div>Date</div>
                  <DatePicker
                    selected={this.state.startDate}
                    isClearable={true}
                    onChange={this.onStartDateChange}
                  />
              </div>
              <div className="form-group">
                <div className="select_option">
                      <label htmlFor="cities">Cities</label>
                      {
                        cities ? (
                            <Select
                              closeMenuOnSelect={false}
                              onChange={this.onCitiesChange}
                              isMulti={true}
                              options={cities}
                            />
                        ) : ''
                      }
                </div>
              </div>
          </div>
        </div>
        <section className="flights">
              <TripsList startDate={this.state.startDate} selectedCities={this.state.selectedCities} />
        </section>
      </div>
    );
  }
}

// State to props for connect argument
export const mapStateToProps = (state: CitiesReducer): CitiesProps => {
  return {
    cities: state.citiesReducer.cities,
  };
};

// Dispatch to props for connect argument
const mapDispatchToProps = {
  getCities
};

// Conect the component with Redux
export default connect<ConnectedCitiesProps, ConnectedCitiesProps, void>(
  mapStateToProps, mapDispatchToProps
)(HomeComponent);
