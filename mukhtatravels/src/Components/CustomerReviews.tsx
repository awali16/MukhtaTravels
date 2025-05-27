'use client';

import { useEffect, useState } from 'react';

const GOOGLE_PLACE_ID = 'ChIJuYtvsKOF4TgRc4xWnLhBKuE'; // replace with your actual place ID

export default function ReviewsSection() {
 
  const [localReview, setLocalReview] = useState('');


  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch(`/api/googleReviews?placeId=${GOOGLE_PLACE_ID}`);
      console.log(res, "res");
      const data = await res.json();
      console.log(data, "data");
      // setReviews(data.result?.reviews || []);
    };

    fetchReviews();
  }, []);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('You will be redirected to Google to post your review');
    window.open(
      `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`,
      '_blank'
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>

      {/* Google Reviews */}
      <div className="space-y-4 max-h-[300px] overflow-y-auto">
        {/* {googleReviews.length > 0 ? (
          googleReviews.map((review, idx) => (
            <div key={idx} className="border-b pb-2">
              <p className="font-semibold">{review.author_name}</p>
              <p className="text-sm text-gray-600">Rating: {review.rating}/5</p>
              <p>{review.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading reviews...</p>
        )} */}
      </div>

      {/* Leave a Review */}
      <form onSubmit={handleReviewSubmit} className="mt-6 space-y-3">
        <textarea
          className="w-full border px-3 py-2 rounded focus:outline-green-600"
          placeholder="Leave your thoughts..."
          value={localReview}
          onChange={(e) => setLocalReview(e.target.value)}
          rows={4}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Post on Google
        </button>
      </form>
    </div>
  );
}
