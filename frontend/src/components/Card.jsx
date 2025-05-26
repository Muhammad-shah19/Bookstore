import React from 'react';

const Card = ({ receiveItems }) => {

  if (!receiveItems) return null;

  const { image, title, description, author, category, rating } = receiveItems;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = hasHalfStar ? fullStars + 1 : fullStars;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-500">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-500">☆</span>);
    }
    for (let i = totalStars; i < 5; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }
    return stars;
  };

  return (
    <div className="card mt-5 bg-base-500 w-96 shadow-md  transition-transform transform hover:-translate-y-2 duration-300  hover:shadow-lg hover:bg-amber-200">
      <figure>
        <img
          src={image}
          alt={title || "Book image"}
          className="w-full h-70 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title || "No Title"}
            <div className="badge badge-secondary">{category}</div>
        </h2>
        <p>{description || "No description provided."}</p>
        <p className="text-sm text-gray-500">Author: {author || "Unknown"}</p>
        <div className="card-actions justify-end">
          {rating ? (
            <div className="flex gap-1 items-center">
              {renderStars(rating)}
              <span className="text-sm text-gray-600 ml-2">({rating})</span>
            </div>
          ) : (
            <div className="badge badge-outline">Rating: N/A</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
