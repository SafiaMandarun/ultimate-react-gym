import { Link, useNavigate, useParams } from "react-router";
import { useFetchAll } from "../hooks/useFetchAllApi";
import type { EquipmentProps } from "../models/equipment.model";
import { useState } from "react";
import { postDetailEq } from "../services/postDetailEq";

const Details = () => {
  const [minutes, setMinutes] = useState(5);
  const [loading, setLoading] = useState(false);
  const { eq } = useFetchAll();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleMinutes = (click: string) => {
    if (click === "plus") setMinutes(minutes + 5);
    else setMinutes(minutes - 5);
  };
  const detailEq = eq.find((eq: EquipmentProps) => Number(id) === eq.id);
  if (!detailEq) {
    return <p>Equipment not found</p>;
  }
  // funzione per gestire la prenotazione
  const handleBooking = async () => {
    setLoading(true);

    // fa la prenotazione chiamando l'API e tramite la post
    const { success, message } = await postDetailEq(detailEq.id, minutes);

    // messaggio di conferma o errore
    alert(message);

    // se la prenotazione è andata a buon fine, reindirizza l'utente
    if (success) navigate("/bookings");

    setLoading(false);
  };
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-lg mx-auto mt-8 p-6 mb-16 relative">
      {/* bttone per tornare alla pagina principale */}
      <Link to={"/"} className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-all">
        {" < "}
      </Link>

      {/* info attrezzatura */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <img src={detailEq.image} alt={detailEq.name} className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{detailEq.name}</h2>
          </div>
        </div>
      </header>

      <div className="space-y-4">
        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-600 font-medium">Claim:</span>
          <span className="text-gray-800">{detailEq.claim}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-600 font-medium">💰 Price per minutes:</span>
          <span className="text-indigo-700 font-semibold">{detailEq.pricePerMinute}£</span>
        </div>

        {/* selezione del tempo di noleggio */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600 font-medium">⏳ Time:</span>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-300 px-2 rounded disabled:bg-gray-300" onClick={() => handleMinutes("minus")} disabled={minutes == 5 ? true : false}>
              -
            </button>
            <span>{`${minutes} min`}</span>
            <button className="bg-indigo-300 px-2 rounded" onClick={() => handleMinutes("plus")}>
              +
            </button>
            {/* bottone per diminuire i minuti (minimo 5) */}
            {/*  <button onClick={() => setSelectedMinutes((prev) => Math.max(5, prev - 5))} className="bg-gray-300 px-3 py-1 rounded-md text-gray-800 hover:bg-gray-400 transition-all">
              -
            </button>
            <span className="text-lg font-semibold">{selectedMinutes} min</span>*/}
            {/* bottone per aumentare i minuti (massimo 20) 
            <button onClick={() => setSelectedMinutes((prev) => Math.min(20, prev + 5))} className="bg-gray-300 px-3 py-1 rounded-md text-gray-800 hover:bg-gray-400 transition-all">
              +
            </button>*/}
          </div>
        </div>

        {/* prezzo totale calcolato */}
        <div className="flex justify-between border-b pb-2 mt-2">
          <span className="text-gray-600 font-medium">💵 Total price:</span>
          <span className="text-indigo-700 font-semibold">{minutes * detailEq.pricePerMinute}£</span>
        </div>
      </div>

      {/* bottone per noleggiare */}
      <button onClick={handleBooking} disabled={loading} className={`mt-6 w-full py-3 px-6 rounded-lg transition-all ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-700 hover:bg-indigo-900 text-white"}`}>
        {loading ? "Prenotazione in corso..." : "Noleggia"}
      </button>
      {}
    </div>
  );
};

export default Details;
