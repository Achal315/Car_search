import Input from '../../components/Input';
import './Price.css';


 function Price({ handleChange }) {
  return (
    <>
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

<label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$13450 - 56780"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$79050 - $100000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100080 - $1500000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $15000000"
          name="test2"
        />
      
    
    </div>
  </>
  );
}
export default Price;
