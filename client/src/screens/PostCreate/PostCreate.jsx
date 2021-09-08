import { useState } from "react";

function PostCreate() {
  //   const [post, setPost] = useState({
  // })

  return (
    <>
      <h1>Create kool posts</h1>
      <form className="create-form">
        <input
          className="input-name"
          placeholder="Title"
          // value={post.title}
          name="title"
          required
          // onChange={handleChange}
        />
        <input
          className="input-author"
          placeholder="Author"
          // value={post.author}
          name="author"
          required
          // onChange={handleChange}
        />
        <textarea
          className="input-details"
          placeholder="Details"
          // value={post.author}
          name="details"
          required
          // onChange={handleChange}
        />
        {/* <button type="submit" className="submit-button">
          Submit
        </button> */}
      </form>
    </>
  );
}

export default PostCreate;
