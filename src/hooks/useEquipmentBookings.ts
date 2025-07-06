import { useEffect, useState } from "react";
import { fetchEquipmentBookings } from "../services/fetchEquipmentBookings";
import type { EquipmentProps } from "../models/equipment.model";
import type { BookingsProps } from "../models/bookings.model";

export const useEquipmentBookings = () => {
  const [bookings, setbookings] = useState<BookingsProps[]>([]);
  useEffect(() => {
    fetchEquipmentBookings().then((data) => setbookings(data));
  }, []);
  return bookings;
};
