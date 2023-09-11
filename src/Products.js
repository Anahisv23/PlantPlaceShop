import plantProducts from "./plantData";

const Products = () => {
  return (
    <div>
      {plantProducts.map((plant) => {
        return (
          <div key={plant.name}>
            <h1>{plant.name}</h1>
            <img
              src={plant.image}
              alt={plant.alt}
              height="250px"
              width="250px"
            ></img>
            <h3>About</h3>
            <p>{plant.description}</p>
            <h4>Price ${plant.price}</h4>
            <h4>
              There are {plant.quantity} {plant.name}'s in stock
            </h4>
            <input type="text" placeHolder={plant.quantity}></input>
            <button>+</button>
            <button>-</button>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
