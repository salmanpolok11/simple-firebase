
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=' space-x-3'> 
         <Link to="/">Home</Link>
         <Link to="/login" >Login</Link>
    </div>
  );
};

export default Header;