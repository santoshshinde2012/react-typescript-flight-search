import * as React from 'react';
import { connect } from 'react-redux';
import { getCities } from '../actions/cities';
import { ConnectedCitiesProps, CitiesProps, Cities } from '../types/index';
import { CitiesReducer } from '../reducers/reducers';
import Select from 'react-select';
import DatePicker from 'react-datepicker';

class HomeComponent extends React.Component<CitiesProps, {startDate: Date, selectedCities: Cities[]}>  {
 
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
    this.setState({selectedCities : selectedOption});
  }

  public render() {
    const { cities } = this.props;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6">
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
