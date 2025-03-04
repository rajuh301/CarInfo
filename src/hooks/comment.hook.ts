import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addComent } from "../services/comment";

// Define the response type
interface CommentResponse {
  success: boolean;
}

// Define the data type that your mutation function will use
interface CreateCommentData {
  itemId: string; 
  comment: string;
}

// Define the hook
export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation<CommentResponse | undefined, Error, CreateCommentData>({
    mutationKey: ["CREATE_COMMENT"],
    mutationFn: async ({ itemId, comment }: CreateCommentData) => {
      return await addComent(comment, itemId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      toast.success("Comment created successfully");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
