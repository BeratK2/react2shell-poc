'use client'
import { useState } from "react"
import process_review from "./process_review"

const Review = () => {
  const [review, setReview] = useState('')
  const [processedReview, setProcessedReview] = useState('')

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await process_review(review)
    setProcessedReview(res)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Write your review: </p>
        <label>
          <input type="text" onChange={handleReviewChange}></input>         
        </label>
        <button type="submit">Submit Review</button>
      </form>

      {processedReview}
    </div>
  )
}

export default Review