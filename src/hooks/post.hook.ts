import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { createPost, getAllPost, getCarInfo, getPostByUser } from "../services/CarInfo";

export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post create successfully");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
};



export const useGetAllPost = () => {
  return useQuery({
    queryKey: ["GET_ALL_POST"],
    queryFn: async () => await getAllPost()
  })
}



export const useGetSingleCarInfo = (id: string) => {
  return useQuery({
    queryKey: ["GET_SINGLE_INFO", id],
    queryFn: async () => {
      try {
        // Attempt to fetch the single car info
        const response = await getCarInfo(id);
        return response;
      } catch (error: any) {
        // Handle the error and display toast notification
        toast.error(error.message || "An error occurred while fetching the data");
        throw new Error(error.message); // Rethrow the error so react-query knows it failed
      }
    },
    enabled: !!id, // Only run the query if an id is provided
  });
};




