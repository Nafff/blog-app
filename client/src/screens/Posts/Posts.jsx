import "./Posts.css";
import { useState, useEffect } from "react";
import Post from ".../components/Post/Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
  });

  return (
    <Layout>
      <div className="products">
        {posts.map((post) => (
          <Post
            title={post.title}
            author={post.author}
            details={post.details}
            relevantLinks={post.relevantLinks}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Posts;
