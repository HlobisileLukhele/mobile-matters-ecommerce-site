import ProductsData from '../ProductsData';


const Product = ProductsData;
const AccessoryProducts = ProductsData.filter(products => products.category  === 'Accessory');

const Accessories = () => {
    return (
        <div className="container-fluid">
        {AccessoryProducts.map(product => (
            <div key={product.id} className="Products-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            </div>
        ))}
        </div>
    );
}

export default Accessories;