function Rating(rating) {
  return [...Array(5)].map((_, index) =>
    index < rating ? (
      <i key={index} className="fas fa-star"></i>
    ) : (
      <i key={index} className="far fa-star"></i>
    )
  );
}

export default Rating;
