import ProductsData from "../ProductsData";



const iphonesProducts = ProductsData.filter(product => product.category === 'iPhone');
const Product = ProductsData;

const Iphones = () => {
    return (
        <div className="conatiner-fluid items-center mb-4">
        {iphonesProducts.map(product => (
            <div key={product.id} className="products-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
        ))}
        </div>
    );
}

export default Iphones;