import './Recommended.css';

function Recommended() {
  return <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
        <button>
          All Companys car
        </button>
        <button className='btns'>Mahindra Thar</button>
        <button className='btns'>Toyota</button>
        <button className='btns'>BMW</button>
        <button className='btns'> Range Rover</button>
        <button className='btns'>Suzuki</button>
        <button className='btns'>MG Hector</button>
      </div>
    </div>
  </>
}

export default Recommended;