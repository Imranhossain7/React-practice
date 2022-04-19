import React from 'react';

class Button extends React.Component {
    render() {
        const { change, locale, show } = this.props;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Click for Bangla Time' : 'Click for English Time'}
                </button>
                {show && <p>Hello There</p>}
            </>
        );
    }
}

export default Button;
