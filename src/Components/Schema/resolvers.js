const {products} = require("../ProductsData");

const resolvers = {
    Query: {
        Products() {
            return products;
        }
    }
};

module.exports = {resolvers};