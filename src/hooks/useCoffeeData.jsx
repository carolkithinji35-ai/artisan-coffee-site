import { useState, useEffect } from "react";
import { getCoffees } from "../services/api";

export default function useCoffeData() {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCoffees()
      .then((data) => {
        setCoffees(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch coffees:", err);
        setLoading(false);
      });
  }, []);

  return { coffees, setCoffees, loading };
}
