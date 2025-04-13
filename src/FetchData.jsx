import { useState, useEffect } from "react";
import DisplayData from "./DisplayData";

const FetchData = ({ inputSearch }) => {
  const [fetchData, setFetchData] = useState([]);
  const [debounceInput, setDebounceInput] = useState(inputSearch);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceInput(inputSearch);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputSearch]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${debounceInput}`
        );
        const data = await res.json();
        setFetchData(data.meals || []);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    if (debounceInput.trim() !== "") {
      fetchMeals();
    } else {
      setFetchData([]);
    }
  }, [debounceInput]);

  return (
    <div>
      {loading && <div className="loader" />}
      {!loading &&
        fetchData.length > 0 &&
        fetchData?.map((item, idx) => (
          <ul key={idx}>
            <DisplayData
              meal={item.strMeal}
              image={item.strMealThumb}
              description={item.strInstructions}
            />
          </ul>
        ))}

      {!loading && debounceInput.trim() !== "" && fetchData.length === 0 && (
        <p>Nothing Found.</p>
      )}
    </div>
  );
};

export default FetchData;
