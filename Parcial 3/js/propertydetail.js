function PropertyDetail({ property, onBack }) {
    const discount = Math.round(((property.precio_anterior - property.precio_actual) / property.precio_anterior) * 100);
    const mapUrl = `https://www.google.com/maps?q=${property.latitud},${property.longitud}&output=embed`;
    
    return (
        <div className="property-detail">
            <div className="detail-header">
                <h2 className="detail-title">{property.nombre}</h2>
                <span className="current-price">${property.precio_actual.toLocaleString()}</span>
            </div>
            <p className="detail-location">{property.ciudad}</p>
            
            <img src={property.imagen} alt={property.nombre} className="detail-image" />
            
            <div className="detail-features">
                <div className="detail-feature">
                    <div className="feature-value">{property.area}</div>
                    <div className="feature-label">Área</div>
                </div>
                <div className="detail-feature">
                    <div className="feature-value">{property.habitaciones}</div>
                    <div className="feature-label">Habitaciones</div>
                </div>
                <div className="detail-feature">
                    <div className="feature-value">{property.baños}</div>
                    <div className="feature-label">Baños</div>
                </div>
                <div className="detail-feature">
                    <div className="feature-value">{property.parqueaderos}</div>
                    <div className="feature-label">Parqueaderos</div>
                </div>
            </div>
            
            <div className="price-container">
                <span className="current-price">${property.precio_actual.toLocaleString()}</span>
                <span className="old-price">${property.precio_anterior.toLocaleString()}</span>
                <span className="discount">{discount}% OFF</span>
            </div>
            
            <p className="detail-description">{property.descripcion}</p>
            
            <div className="map-container">
                <h3>Ubicación</h3>
                <iframe
                    className="map-iframe"
                    loading="lazy"
                    allowFullScreen
                    src={mapUrl}>
                </iframe>
            </div>
            
            <button className="back-button" onClick={onBack}>
                Volver al catálogo
            </button>
        </div>
    );
}