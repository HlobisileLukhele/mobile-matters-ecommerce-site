import {useQuery} from '@apollo/client'
import Products from "./Components/Products.js"
import { GET_ALL_PRODUCTS } from './graphqlQueries.jsx'

function ProductsList () {
    const {loading, error, data} = useQuery(GET_ALL_PRODUCTS)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>
 
    return (
        <div>
            {Products.map(product => (
                <div key={product.id}>
                <h6>{product.name}</h6>
                <img src={product.image} alt ={product.name} />
                <p>{product.description}</p>
                <p>Price : ${product.price}</p>    
                </div>
            ))}
        </div>
    );
       

}
export default ProductsList;