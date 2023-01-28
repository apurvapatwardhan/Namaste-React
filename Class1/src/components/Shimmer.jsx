const Shimmer = (props) => {
    return (<div className="body">{
        Array(20).fill('2').map(el => <div className="shimmer-card"></div>)
    }</div>)
}

export default Shimmer;