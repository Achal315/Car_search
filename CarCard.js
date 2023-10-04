
import {AiFillStar} from 'react-icons/ai';
import{BsFillHeartFill} from 'react-icons/bs';

 
 function CarCard(img, title, star, reviews, prevPrice, newPrice) {
  return (
       <section className= "card">
        <img 
        src={img}
        alt={title}
        className='card-img' />
        
         <div className='card-details'>
          <h3 className='card-title'>title</h3>
          <section className='card-reviews'>
            {star} {star} {star} {star}
            <spam className="total-reviews">{reviews}</spam>
          </section>
    <section  className='card-price'>
      <div className='price'>
      {newPrice}
      </div>
      <div className='bag'>
        <BsFillHeartFill/>
      </div>
    </section>
         </div>
      </section>
  );
}


export default CarCard;