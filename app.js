function App() {
    const [view, setView] = React.useState('home');
    const [selectedProperty, setSelectedProperty] = React.useState(null);
    const [properties, setProperties] = React.useState(propertiesData);
    const [filter, setFilter] = React.useState('todos');
    const [sort, setSort] = React.useState('default');
    
    // Manejar cambio de filtro
    const handleFilterChange = (e) => {
        const newFilter = e.target.value;
        setFilter(newFilter);
        filterAndSortProperties(newFilter, sort);
    };
    
    // Manejar cambio de ordenamiento
    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);
        filterAndSortProperties(filter, newSort);
    };
    
    // Filtrar y ordenar propiedades
    const filterAndSortProperties = (currentFilter, currentSort) => {
        let filtered = [...propertiesData];
        
        // Aplicar filtro
        if (currentFilter !== 'todos') {
            filtered = filtered.filter(prop => prop.categoria === currentFilter);
        }
        
        // Aplicar ordenamiento
        if (currentSort === 'price-asc') {
            filtered.sort((a, b) => a.precio_actual - b.precio_actual);
        } else if (currentSort === 'price-desc') {
            filtered.sort((a, b) => b.precio_actual - a.precio_actual);
        }
        
        setProperties(filtered);
    };
    
    // Ver detalle de propiedad
    const handleViewDetail = (id) => {
        const property = propertiesData.find(prop => prop.id === id);
        setSelectedProperty(property);
        setView('detail');
    };
    
    // Volver al listado
    const handleBackToList = () => {
        setView('home');
    };
    
    // Renderizar vista actual
    if (view === 'detail' && selectedProperty) {
        return (
            <PropertyDetail 
                property={selectedProperty} 
                onBack={handleBackToList}
            />
        );
    }
    
    return (
        <Home 
            properties={properties} 
            onViewDetail={handleViewDetail}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
        />
    );
}


ReactDOM.render(<App />, document.getElementById('root'));