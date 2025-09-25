import { useQuery } from "@tanstack/react-query";

const useDatabaseList = () =>
  useQuery({
    queryKey: ["databaseData"],
    queryFn: async () => {
      try {
        const response = await fetch("http://localhost:8000/");
        const res = await response.json();
        return res.reverse(); // render in order
      } catch (error) {
        if (error) {
          throw error;
        }
      }
    },
    // throwOnError: true, // cannot catch asynchronous errors
  });

export default useDatabaseList;
