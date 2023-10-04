
import './nav.css';
import {FiHeart} from 'react-icons/fi';
import{AiOutlineUserAdd} from 'react-icons/ai';



function nav({ handleInputChange, query }) {
  return (
    <nav>
        <div className="nav-container">
        <input type="text"onChange={handleInputChange}
          value={query}
        className="search-input" 
        placeholder="Search Car...."/>
        </div>
        <div className="profile-container">
            <a herf="#">
                <FiHeart className='nav-icon'/>

            </a>
            <a herf="#">
              <AiOutlineUserAdd/>
            </a>
        </div>
    </nav>
  )
}

export default nav;
