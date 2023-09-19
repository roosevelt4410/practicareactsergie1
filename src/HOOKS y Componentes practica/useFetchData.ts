import { useEffect, useState } from "react";
import {  fetchdata } from "./helper/fetchData";

interface UserData {
  data: string[];
  isLoading: boolean;
}

export const useFetchData = (endpoint: string): UserData => {
  
  const [data, setData] = useState<string[]>([]); 
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = async () => {
    const fetchDataResult: UserData = await fetchdata(endpoint);
    setData(fetchDataResult.data);
    setIsLoading(fetchDataResult.isLoading);
  };

  useEffect(() => {
    getData();
  }, [endpoint]);

  return {
    data,
    isLoading,
  };
};
