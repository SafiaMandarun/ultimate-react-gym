import { Link } from "react-router";

export const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-screen text-center text-white">
      {/* Immagine di sfondo */}
      <img className="absolute inset-0 w-full h-full object-cover" src="https://www.projectinvictus.it/wp-content/uploads/2019/01/Allenamento-crossfit.jpg" alt="bilanciere" />

      {/* Overlay scuro per migliorare la leggibilità del testo */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Contenuto del Hero */}
      <div className="relative flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">Level Up Gym</h1>

        {/* Descrizione dell'abbonamento */}
        <p className="text-lg mt-6 text-gray-200">
          Abbonamento mensile a <span className="font-semibold">50£</span> al mese
        </p>
        <p className="text-lg mt-4 text-gray-300">
          Per allenamenti occasionali: <br />
          Costo d'entrata fisso <span className="font-semibold">2£</span> + utilizzo attrezzi da <span className="font-semibold">0,10£</span> al minuto
        </p>

        {/* Pulsante di Call-To-Action per la registrazione */}
        <Link to="/prenotazioni" className={"mt-8 px-6 py-3 bg-indigo-700 hover:bg-indigo-900 text-white font-semibold text-lg rounded-lg shadow-lg transition"}>
          Visualizza prenotazioni
        </Link>
        {/* Freccia animata per indicare lo scroll verso il basso */}
        <div className="mt-12 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-8 h-8 mx-auto text-gray-300">
            <path fill="currentColor" d="M169.4 470.6l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7l137.4-137.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
