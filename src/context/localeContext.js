import React, { createContext, PureComponent } from 'react';

export const { Provider, Consumer: LocaleConsumer } = createContext('en');

export class LocaleProvider extends PureComponent {
    state = {
        locale: 'fr',
    };

    toggleLocale = () => {
        this.setState(({ locale }, props) => {
            return {
                locale: locale === 'fr' ? 'en' : 'fr',
            };
        });
    };

    render() {
        const { children } = this.props;
        const { locale } = this.state;
        return (
            <Provider
                value={{
                    locale,
                    toggleLocale: this.toggleLocale,
                }}
            >
                {children}
            </Provider>
        );
    }
}
