const EventoCard = ({ titulo, data, info, borderColor }) => (
  <div
    className={`bg-white rounded-xl shadow-lg p-6 border-l-4 hover:scale-105 transition ${borderColor}`}
  >
    <h3 className="text-xl font-semibold text-blue-800">{titulo}</h3>
    <p className="text-blue-700 mt-2">{data}<br />{info}</p>
  </div>
);

export default EventoCard;
