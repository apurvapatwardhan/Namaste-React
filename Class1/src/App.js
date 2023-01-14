import React from 'react';
import ReactDOM from 'react-dom/client'
import Body from './components/Body';
import Header from './components/Header';
const root = ReactDOM.createRoot(document.querySelector('.root'));




const AppLayout = (props) => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

root.render(<AppLayout />);