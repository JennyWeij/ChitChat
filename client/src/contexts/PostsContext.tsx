import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../hooks/useUsers";

interface Post {
  _id: string;
  title: string;
  author: User;
  content: string;
  createdAt: string;
}

interface PostsContextData {
  posts: Post[];
  fetchPosts: () => void;
  updatePost: (
    id: string,
    author: User,
    title: string,
    content: string,
    createdAt: string
  ) => Promise<void>;
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

  const updatePost = useCallback(
    async (
      id: string,
      author: User,
      title: string,
      content: string,
      createdAt: string
    ) => {
      try {
        const response = await fetch(`/api/posts/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: id, title, content, author: author._id, createdAt }),
        });

        if (!response.ok) {
          throw new Error("Failed to update post");
        }
        // Hämta alla efter uppdatering
        fetchPosts();
      } catch (error) {
        console.error("Error updating post:", error);
      }
    },
    [fetchPosts]
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <PostsContext.Provider value={{ posts, fetchPosts, updatePost }}>
      {children}
    </PostsContext.Provider>
  );
};
