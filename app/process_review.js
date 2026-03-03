'use server'

const process_review = async (review) => {
  console.log(review)

  return `Review processd ${review}`
}

export default process_review