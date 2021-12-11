import React, { useEffect, useState } from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const getPosts = async () => {
        const resp = await fetch(
          "https://worker.hechenxi.workers.dev/posts"
        );
        console.log(resp)
        const postsResp = await resp.json();
        setPosts(postsResp);
      };
  
      getPosts();
    }, []);
    
    return (
      <div>
        <h1>Posts</h1>
        {posts.map((post) => (
          <div>
            <p><b>Title:     {post.title}</b></p>
            <small>Username:  {post.username}</small>
            <p>           {post.content}</p>
            <p>-------------------------------------------------</p>
          </div>
        ))}
      </div>
    );
};

export default Posts;