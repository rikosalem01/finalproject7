function calculateAvgRating(reviews) {
    let totalRating = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].rating) {
        totalRating += reviews[i].rating;
      }
    }
    
    let avgRating;
    if (totalRating === 0) {
      avgRating = "";
    } else if (totalRating === 1) {
      avgRating = totalRating;
    } else {
      avgRating = (totalRating / reviews.length).toFixed(1);
    }
  
    return {
      totalRating,
      avgRating,
    };
  }
  
  export default calculateAvgRating;
  