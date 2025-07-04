import type { EquipmentProps } from "../models/equipment.model";

export const BASE_URL = "https://d3660g9kardf5b.cloudfront.net/api";

export const fetchAll = async () => {
  const res = await fetch(`${BASE_URL}/equipment`);
  if (!res.ok) {
    throw new Error("Errore nell'ottenimento dei dati");
  }
  const json: EquipmentProps[] = await res.json();
  console.log("tutti i dati : ", json);

  return json;
};
