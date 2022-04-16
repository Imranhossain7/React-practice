import React from 'react';

class Button extends React.Component {
    render() {
        const { change, locale } = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>
                Click This.
            </button>
        );
    }
}

export default Button;
