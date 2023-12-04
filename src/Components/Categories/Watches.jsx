import ProductsData from  "../ProductsData";


const WatchProducts = ProductsData.filter(product => product.category === 'Watch');

const Watches  = () => {
    const Product = ProductsData;
    return (
        <div className="container"> 
        {WatchProducts.map(product => (
            <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
        ))}
        </div>
);
}

export default Watches();