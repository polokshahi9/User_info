import logo from './logo.svg';
import './App.css';
import User from './Component/User/User';
import Data from './data/data.json';
import CART from './Component/Cart/Cart';
import { useEffect, useState } from 'react';

function App() {
  const [datas, setDatas] = useState(Data);
  const [cart, setCart] = useState([]);
  const handleClick = (data) =>{
    // console.log('product Added', info);
    const newCart = [...cart, data];
    console.log(data);
    setCart(newCart);
}    
  return (
    <div>
      <h1>Team Builder</h1>
      <div className='cart_container'>
     <CART cart={cart}></CART>
     </div>

     <div className="userInfo">
     {
        datas.map(data => <User handleClick={handleClick} data = {data}></User>)
      }
     </div>
    </div>
  );
  
}
export default App;
