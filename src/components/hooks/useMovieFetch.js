import { useEffect, useState, useCallback } from "react";
import { API_KEY, API_URL } from "../../config";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();

      const craditsEndPoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creaditsResults = await (await fetch(craditsEndPoint)).json();
      const directors = creaditsResults.crew.filter(
        (member) => member.job === "Director"
      );

      setState({
        ...result,
        actors: creaditsResults.cast,
        directors,
      });
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    if (localStorage[movieId]) {
      setLoading(false);
      setState(JSON.parse(localStorage[movieId]));
    } else {
      fetchData();
    }
  }, [fetchData, movieId]);

  useEffect(() => {
    localStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return [state, loading, error];
};
