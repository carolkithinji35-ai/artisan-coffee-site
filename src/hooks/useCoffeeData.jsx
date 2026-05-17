import { useState, useEffect } from "react";
import { getCoffees } from "../services/api";

export default function useCoffeData() {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      getCoffees()
        .then((data) => {
          setCoffees(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  return { coffees, setCoffees, loading };
}
