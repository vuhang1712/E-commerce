function Rating(rating) {
  return [...Array(5)].map((_, index) =>
    index < rating ? (
      <i className="fas fa-star"></i>
    ) : (
      <i className="far fa-star"></i>
    )
  );
}

export default Rating;
