import { useQuery } from "@tanstack/react-query";

const useDatabaseList = () =>
  useQuery({
    queryKey: ["databaseData"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/");
      const res = await response.json();
      if (!res.ok) {
        throw new Error("Network response was not ok!");
      }
      return res.reverse();
    },
  });

export default useDatabaseList;
