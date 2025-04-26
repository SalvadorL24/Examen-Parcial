function Home({ properties, onViewDetail, onFilterChange, onSortChange }) {
    return (
        <div>
            <div className="filters">
                <div className="filter-group">
                    <label htmlFor="type-filter">Filtrar por:</label>
                    <select id="type-filter" onChange={onFilterChange}>
                        <option value="todos">Todos</option>
                        <option value="Apartamento">Apartamentos</option>
                        <option value="Casa">Casas</option>
                        <option value="Lote">Lotes</option>
                    </select>
                </div>
                
                <div className="filter-group">
                    <label htmlFor="sort">Ordenar por:</label>
                    <select id="sort" onChange={onSortChange}>
                        <option value="default">Por defecto</option>
                        <option value="price-asc">Precio (menor a mayor)</option>
                        <option value="price-desc">Precio (mayor a menor)</option>
                    </select>
                </div>
            </div>
            
            <div className="properties-grid">
                {properties.map(property => (
                    <PropertyCard 
                        key={property.id} 
                        property={property} 
                        onViewDetail={onViewDetail}
                    />
                ))}
            </div>
        </div>
    );
}