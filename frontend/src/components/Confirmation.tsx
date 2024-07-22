const Confirmation = ({ reservation }:any) => {
  return (
    <div className="container mx-auto mt-4">
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Confirmación de Reserva</h2>
        <p><strong>Nombre:</strong> {reservation.name}</p>
        <p><strong>Correo Electrónico:</strong> {reservation.email}</p>
        <p><strong>Teléfono:</strong> {reservation.phone}</p>
        <p><strong>Sala:</strong> {reservation.room}</p>
        <p><strong>Horario:</strong> {reservation.time}</p>
      </div>
    </div>
  );
};

export default Confirmation;