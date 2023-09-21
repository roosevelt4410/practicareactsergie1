import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

interface FetchResult {
  data: User[];
  isLoading: boolean;
  errors: string | null;
}

export const useFetch = (url: string): FetchResult => {
  const [estado, setEstado] = useState<FetchResult>({
    data: [], // Cambiado de null a []
    isLoading: true,
    errors: "",
  });

  const { data, isLoading, errors } = estado;

  const getFetch = async () => {
    if (!url) return;
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setEstado({
        data: jsonData,
        isLoading: false,
        errors: null,
      });
    } catch (error:any) {
      setEstado({
        data: [],
        isLoading: false,
        errors: error,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data,
    isLoading,
    errors,
  };
};


