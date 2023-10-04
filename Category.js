import './Category.css';
import Input from "../..//components/Input";


function Category({ handleChange }) {
  return (
    <div>
        <h2 className="sidebar-title">Category</h2>

<div>
<label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="SUV"
          title="SUV"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="MUV"
          title="MUV"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Coupe"
          title="Coupe"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Coupe"
          title="Coupe"
          name="test"
        />
  </div>
  </div>
  );
}
export default Category;