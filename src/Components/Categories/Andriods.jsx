import ProductsData from  '../ProductsData';


const product = ProductsData;
const AndriodsProducts = ProductsData.filter(product => product.category === 'Andriod');

const Andriods = () => {

    return (
        <div className="container-fluid">
    {AndriodsProducts.map(products => (
        <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{products.price}</p>
        </div>
    ))}
        </div>
    );
}

export default Andriods;