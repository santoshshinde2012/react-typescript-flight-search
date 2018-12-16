import * as React from 'react';
import * as images from '../constants/images';

export class Header extends React.PureComponent<{}> {
   render(): React.ReactNode {
        return (
            <header className="header display--flex">
                <img src={images.logo} className="header__logo" alt="logo" />
                <h2 className="header__title">Welcome to Flight Search Engine</h2>
            </header>
        );
    }
}
