import '../estilos/servicios.css';

const habitaciones = [
  {
    id: 1,
    nombre: "Habitación Estándar Sencilla",
    tipo: "Individual",
    precio: 80,
    capacidad: 1,
    imagen: "https://hotelesdann.com/dann-carlton-bogota/wp-content/uploads/sites/3/2020/08/habitacin-estndar-hotel-dann-carlton-bogot-colombia_37577235816_o.jpg",
    descripcion: "Habitación confortable con todas las comodidades básicas."
  },
  {
    id: 2,
    nombre: "Habitación Estándar Twin",
    tipo: "Doble",
    precio: 150,
    capacidad: 4,
    imagen: "https://hotelesdann.com/dann-carlton-bogota/wp-content/uploads/sites/3/2020/08/habitacin-twin-hotel-dann-carlton-bogot-colombia_37593204762_o.jpg",
    descripcion: "Habitación con dos camas individuales, ideal para amigos o familiares."
  },
  {
    id: 3,
    nombre: "Habitación Superior",
    tipo: "Superior",
    precio: 120,
    capacidad: 3,
    imagen: "https://hotelesdann.com/dann-carlton-bogota/wp-content/uploads/sites/3/2020/08/habitacin-superior-hotel-dann-carlton-bogot-colombia_36954924103_o.jpg",
    descripcion: "Habitación más espaciosa con mejores vistas y comodidades adicionales."
  },
  
];

function Servicios() {
  return (
    <div className="servicios-container">
      <h1>Nuestras Habitaciones</h1>
      <div className="habitaciones-grid">
        {habitaciones.map((habitacion) => (
          <div key={habitacion.id} className="habitacion-card">
            <img
              src={habitacion.imagen}
              alt={habitacion.nombre}
              className="habitacion-imagen"
            />
            <div className="habitacion-info">
              <h3>{habitacion.nombre}</h3>
              <p className="tipo">{habitacion.tipo}</p>
              <p className="descripcion">{habitacion.descripcion}</p>
              <div className="detalles">
                <span className="capacidad">Capacidad: {habitacion.capacidad} personas</span>
                <span className="precio">${habitacion.precio}/noche</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
