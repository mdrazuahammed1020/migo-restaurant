
const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {
                Array(20)
                .fill('')
                .map((e, i) =>(
                <div key={i} className="shimmer-card">
                <div className="shimmer-card-img"></div>
                </div>
                ))
            }
        </div>
    )
}

export default Shimmer;