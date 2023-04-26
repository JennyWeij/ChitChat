import { useCallback, useEffect, useState } from "react";
import { User } from "./useUsers";

interface Post {
  _id: string;
  author: User;
  createdAt: string;
  title: string;
  content: string;
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      if (response.ok) {
        setPosts(data);
      } else {
        console.error("Error fetching posts:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, fetchPosts };
}