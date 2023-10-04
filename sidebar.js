import './sidebar.css';
import Category from "./Category/Category";
import Price from "./Price/Price";
import Company from "./Company/Company";

 function sidebar({ handleChange }) {
  return (
         <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange }/>
        <Price  handleChange={handleChange} />
        <Company handleChange={handleChange} />
      </section>
    </>
    
  )
}
export default sidebar;