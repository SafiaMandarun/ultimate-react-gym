import type { BookingsProps } from "../models/bookings.model";

import { BASE_URL } from "./fetchAll";

export const fetchEquipmentBookings = async () => {
  const res = await fetch(`${BASE_URL}/equipment-bookings`);

  if (!res.ok) {
    throw new Error("Equipment bookings error");
  }
  const json: BookingsProps[] = await res.json();
  return json;
};
