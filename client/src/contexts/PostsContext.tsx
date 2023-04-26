import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { User } from "../hooks/useUsers";

interface Post {
  _id: string;
  author: User;
  createdAt: string;
  title: string;
  content: string;
}

interface PostsContextData {
  posts: Post[];
  fetchPosts: () => void;
}

interface Props {
    children: React.ReactNode;
}

const PostsContext = createContext<PostsContextData | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

export const PostsProvider = ({ children }: Props) => {
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

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  );
};