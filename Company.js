import './Company.css';
import Input from"..//../components/Input";

function Company({ handleChange }) {
  return <>
  <div>
    <h2 className="sidebar-title color-title">Company</h2>

    <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>
  
        <Input
          handleChange={handleChange}
          value="Mahindra"
          title="Mahindra"
          name="test1"
         
        />

        <Input
          handleChange={handleChange}
          value="TATA"
          title="TATA"
          name="test1"
          
        />

        <Input
          handleChange={handleChange}
          value="Nexon"
          title="Nexon"
          name="test1"
         
        />

        <Input
          handleChange={handleChange}
          value="Suzuki"
          title="Suzuki"
          name="test1"
       
        />

       
          <input
            onChange={handleChange}
            title="BMW"
            value="BMW"
            name="test1"
          />

  </div>
  
  </>
}
export default Company;