import './style.scss';

function Rating(rating){
    var result = [];
    for (let i = 1; i <= rating; i++) {
        result.push(<i className='fas fa-star'></i>);
    }
    for (let i = rating; i < 5; i++) {
        result.push(<i className='far fa-star'></i>);
    }
    return(
        <span className="rating">
            {result.map(item => item)}
        </span>
    );
}

export default Rating;
