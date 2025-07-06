import { BASE_URL } from "./fetchAll";

export const postDetailEq = async (id: number, min: number) => {
  try {
    // mette in duration i minuti selezionati
    const bookingRequest = { duration: min };

    // post con token nella header
    const response = await fetch(`${BASE_URL}/equipment/${id}/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingRequest), // invio dati di prenotazione
    });

    if (!response.ok) throw new Error("Errore nella prenotazione");

    return { success: true, message: `Prenotazione confermata per ${min} minuti!` };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Errore durante la prenotazione. Riprova." };
  }
};
