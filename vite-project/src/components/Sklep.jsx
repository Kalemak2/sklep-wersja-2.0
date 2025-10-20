import React from 'react';
import { useState } from 'react';

const Sklep = ({ data }) => {

    const [wallet, setWallet] = useState(100.0);
    const [kopia, setKopia] = useState([...data])

    function deliver(e){
      setKopia([...data]);
      setWallet(100);
    }
  function buy(e, id, price){
      if(wallet >= price){
        setWallet(wallet - price);
        setKopia(nowa => nowa.map((item) =>{
        if(item.id == id){
          const newValue = item.amount > 0 ? item.amount - 1 : 0
          return {...item, amount: newValue}
        }
        return item;
      }))
      }
      else{
        alert("Brak pieniędzy w portfelu")
      }
    }

  return (
    <div className="shopContainer ">
        <div>
            <p>Zawartość portfela: {wallet} zł</p>
        </div>
        <div className='shopContainer '>
            {kopia.map((item) => (
                <div key={item.id} className='productCard '>
                <div>
                    <h3 className='productText '>{item.name}</h3>
                    <p className='productText '>{item.price} zł</p>
                    <p className='productText '>Ilość: {item.amount}</p>
                    <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                </div>
                <div className='buttonGroup'>
                    {item.amount ? <button className='button' onClick={(e) => buy(e, item.id, item.price)}>Kup</button> : <p className='outOfStock '>Brak produktu</p>}
                    <button className='button' onClick={(e) => deliver(e)}>Dostawa</button>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Sklep;
