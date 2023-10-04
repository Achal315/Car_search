import Navigation from './navigation/nav';
import {useState} from "react";
import CarCard  from './components/CarCard';
import Products from './products/product';
import Recommended from './Recommended/Recommended';
import SideBar from './SideBar/sidebar';
import Cars from'./db/data';



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

    // ----------- Input Filter -----------
    const [query, setQuery] = useState("")
  
    const handleInputChange = (event) => {
      setQuery(event.target.value)
    };

    const filteredItems = Cars.filter(
      (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

     // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

// ------------ Button Filtering -----------
const handleClick = (event) => {
  setSelectedCategory(event.target.value);
};

function filteredData(products, selected, query) {
  let filteredProducts = products;

 // Filtering Input Items
 if (query) {
  filteredProducts = filteredItems;
}


    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <CarCard key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
   const result = filteredData(Cars,selectedCategory,query)

    return (
    <>
     <SideBar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
    
  );
}

export default App;
