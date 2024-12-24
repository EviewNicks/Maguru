import React from 'react';
import ReactDOM from 'react-dom/client'; // Pastikan ini benar
import App from './App';
import ErrorBoundary from './utils/ErrorBoundary';
import { darkTheme, lightTheme } from './utils/CustomTheme';
import { Flowbite } from 'flowbite-react';
import './assets/style/Style.css';
import 'flowbite';

// Gunakan createRoo unaasdas membuat root React
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <Flowbite theme={{ theme: lightTheme }}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>,
    </Flowbite>
);
