import React from "react";
import ReactDOM from "react-dom/client"

const Title = () => (<h1>This is title</h1>)

const HeaderComponent = () => {
    return (
        <div>
            <Title />
            <h2>this is h2 tag</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />)