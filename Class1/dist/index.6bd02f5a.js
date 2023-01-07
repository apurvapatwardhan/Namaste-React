const heading1 = React.createElement("h1", {
    id: "h1",
    className: "h11"
}, "Heading 1");
const heading2 = React.createElement("h2", {
    id: "h2",
    className: "h21"
}, "Heading 2");
const container = React.createElement("div", {
    id: "container",
    className: "d11"
}, [
    heading1,
    heading2
]);
console.log(heading1, heading2, container);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
