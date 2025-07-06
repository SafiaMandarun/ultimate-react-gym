import { useEffect, useState } from "react";
import type { EquipmentProps } from "../models/equipment.model";
import { fetchAll } from "../services/fetchAll";

export const useFetchAll = () => {
  const [eq, setEq] = useState<EquipmentProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAll()
      .then((data) => {
        setEq(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return { eq, loading };
};
