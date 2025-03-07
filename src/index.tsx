import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store'

import 'react-phone-input-2/lib/style.css'
import 'react-loading-skeleton/dist/skeleton.css'

// import "primereact/resources/themes/lara-light-cyan/theme.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
    colors: {
        green: [
            '', // Shade 0 (base color, darkest)
            '', // Shade 1
            '', // Shade 2
            '', // Shade 3
            '', // Shade 4
            '', // Shade 5
            '#2f9e44', // Shade 6
            '#2b8a3e', // Shade 7
            '', // Shade 8
            '', // Shade 9 (lightest)
        ],
    },
    primaryColor: 'green',
});


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <MantineProvider theme={theme}>
                <App />
            </MantineProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();