
export interface ConnectedProps {
    getNextTitle?: any;
}
  
export interface TitleProps extends ConnectedProps {
    title?: string;
}
 
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
