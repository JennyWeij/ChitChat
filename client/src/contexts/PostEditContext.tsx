import { createContext, useCallback, useContext, useState } from "react";
import { User } from "../hooks/useUsers";

export interface Post {
  _id: string;
  author: User;
  createdAt: string;
  title: string;
  content: string;
}

interface PostEditContextData {
  postIdToEdit: string | null;
  setPostIdToEdit: (postId: string | null) => void;
  post: Post | null;
  fetchPost: (id: string) => Promise<void>;
  loading: boolean;
  updatePost: (id: string, title: string, content: string) => Promise<void>;
}

interface Props {
  children: React.ReactNode;
}

const PostEditContext = createContext<PostEditContextData | undefined>(
  undefined
);

export const usePostEdit = () => {
  const context = useContext(PostEditContext);
  if (!context) {
    throw new Error("usePostEdit must be used within a PostEditProvider");
  }
  return context;
};

export const PostEditProvider = ({ children }: Props) => {
  const [postIdToEdit, setPostIdToEdit] = useState<string | null>(null);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPost = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch post");
      }
      const postData: Post = await response.json();
      setPost(postData);
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const updatePost = useCallback(
    async (id: string, title: string, content: string) => {
      try {
        const response = await fetch(`/api/posts/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        });

        if (!response.ok) {
          throw new Error("Failed to update post");
        }
      } catch (error) {
        console.error("Error updating post:", error);
      }
    },
    []
  );

  return (
    <PostEditContext.Provider
      value={{ postIdToEdit, setPostIdToEdit, post, fetchPost, loading, updatePost }}
    >
      {children}
    </PostEditContext.Provider>
  );
};
