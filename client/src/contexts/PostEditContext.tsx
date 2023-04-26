import { createContext, useCallback, useContext, useState } from "react";
import { User } from "../hooks/useUsers";

interface Post {
    _id: string;
    author: User;
    createdAt: string;
    title: string;
    content: string;
  }
  
  interface PostEditContextData {
    postIdToEdit: string | null;
    setPostIdToEdit: (id: string | null) => void;
    post: Post | null;
    fetchPost: (id: string) => Promise<void>;
  }
  
  interface Props {
    children: React.ReactNode;
  }
  
  const PostEditContext = createContext<PostEditContextData | undefined>(undefined);
  
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
  
    const fetchPost = useCallback(async (id: string) => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
  
        const postData: Post = await response.json();
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }, []);
  
    return (
      <PostEditContext.Provider value={{ postIdToEdit, setPostIdToEdit, post, fetchPost }}>
        {children}
      </PostEditContext.Provider>
    );
  };