function PropertyCard({ property, onViewDetail }) {
    const discount = Math.round(((property.precio_anterior - property.precio_actual) / property.precio_anterior) * 100);
    
    return (
        <div className="property-card">
            <img src={property.imagen} alt={property.nombre} className="property-image" />
            <div className="property-info">
                <h3 className="property-title">{property.nombre}</h3>
                <p className="property-location">{property.ciudad}</p>
                <div className="property-features">
                    <span className="feature">
                        <span>📏</span> {property.area}
                    </span>
                    <span className="feature">
                        <span>🛏️</span> {property.habitaciones}
                    </span>
                    <span className="feature">
                        <span>🚿</span> {property.baños}
                    </span>
                    <span className="feature">
                        <span>🚗</span> {property.parqueaderos}
                    </span>
                </div>
                <div className="price-container">
                    <span className="current-price">${property.precio_actual.toLocaleString()}</span>
                    <span className="old-price">${property.precio_anterior.toLocaleString()}</span>
                    <span className="discount">{discount}% OFF</span>
                </div>
                <button 
                    className="view-detail" 
                    onClick={() => onViewDetail(property.id)}
                >
                    Ver Detalle
                </button>
            </div>
        </div>
    );
}