function PostDetails(props) {

  const {title, author, details, relevantLinks} = props.posts


  if (!props.posts) {
    return <h1>No posts found!</h1>
  }



  return (
    <>
    <h1>Title: {title}</h1>
    <h1>Aurthor: {author}</h1>
    <h1>Details: {details}</h1>
    <h1>Link: {relevantLinks}</h1>
  </>
  )
}

export default PostDetails;