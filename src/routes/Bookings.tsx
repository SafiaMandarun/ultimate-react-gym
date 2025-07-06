import { Link } from "react-router";
import { useEquipmentBookings } from "../hooks/useEquipmentBookings";
import { useFetchAll } from "../hooks/useFetchAllApi";
import type { EquipmentProps } from "../models/equipment.model";

const Bookings = () => {
  const bookings = useEquipmentBookings();
  console.log(bookings);

  const { eq } = useFetchAll();

  const getEquipmentName = (bookingId: number) => {
    const equipmentData = eq.find((eq: EquipmentProps) => eq.id == bookingId);
    return equipmentData?.name || "Attrezzatura non trovata";
  };
  return (
    <div className="relative max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg mb-16">
      <Link to={"/"} className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-all">
        {" < "}
      </Link>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📌 Ultime Prenotazioni</h2>
      <div className="space-y-4">
        {/* mappa e visualizza le prenotazioni */}
        {bookings.map((booking) => (
          <div key={booking.id} className="p-4 bg-gray-100 rounded-lg shadow flex justify-between items-center">
            <div>
              {/* mostra il nome dell'attrezzatura tramite la funzione per ottenere il nome basandosi sull'id dello strum */}
              <h3 className="text-lg font-semibold text-gray-900">{getEquipmentName(booking.equipment_id)}</h3>

              {/*orario di inizio e fine della prenotazione */}
              <p className="text-gray-600">
                🕒 {new Date(booking.start_date).toLocaleTimeString()} - {new Date(booking.end_date).toLocaleTimeString()}
              </p>
            </div>

            {/*ID della prenotazione */}
            <span className="text-xs bg-gray-300 px-3 py-1 rounded-full text-gray-700">ID: {booking.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
