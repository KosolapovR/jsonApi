import React, { useState, useEffect } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(await response.json());
    }

    fetchData();
  }, []);

  return (
    <div>
      PostsPage
      <ul>
        {posts ? posts.map(p => <li key={p.id}>{p.title}</li>) : <div>pre</div>}
      </ul>
    </div>
  );
}
