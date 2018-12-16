export interface ConnectedCitiesProps {
    getCities?: any;
}
  
export interface CitiesProps extends ConnectedCitiesProps {
    cities?: Cities[];
}

export interface Cities {
    lable?: string;
    value?: string;
}
 
export interface ConnectedTripsProps {
    getTrips?: any;
}
  
export interface TripsProps extends ConnectedTripsProps {
    trips?: Trips[];
    startDate?: Date;
    selectedCities?: string[];
}

export interface Trips {
    id?: number;
    airline?: string;
    number?: string;
    from?: string;
    to?: string;
    from_code?: string;
    to_code?: string;
    depart_date?: string;
    arrive_date?: string;
    price?: number;
}
