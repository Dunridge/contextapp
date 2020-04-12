import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends React.Component {
    render() { //this way of consuming context is easier
        return ( // this works in functional components as well 
            <ThemeContext.Consumer> 
                {(context) => {
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <nav
                            style={{
                                background: theme.ui,
                                color: theme.syntax,
                            }}
                        >
                            <h1>Context App</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    );
                }}
            </ThemeContext.Consumer>
        );
    }
}

export default Navbar;
