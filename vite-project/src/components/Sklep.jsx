import React from 'react';
import { useState } from 'react';

const Sklep = ({ data }) => {
    const [wallet, setWallet] = useState(100.0);

    const [amount1, setAmount1] = useState(data[0].amount);
    const [amount2, setAmount2] = useState(data[1].amount);
    const [amount3, setAmount3] = useState(data[2].amount);
    const [amount4, setAmount4] = useState(data[3].amount);
    const [amount5, setAmount5] = useState(data[4].amount);
    const [amount6, setAmount6] = useState(data[5].amount);
    const [amount7, setAmount7] = useState(data[6].amount);
    const [amount8, setAmount8] = useState(data[7].amount);
    const [amount9, setAmount9] = useState(data[8].amount);
    const [amount10, setAmount10] = useState(data[9].amount);
    const [amount11, setAmount11] = useState(data[10].amount);
    const [amount12, setAmount12] = useState(data[11].amount);
    const [amount13, setAmount13] = useState(data[12].amount);
    const [amount14, setAmount14] = useState(data[13].amount);
    const [amount15, setAmount15] = useState(data[14].amount);
    const [amount16, setAmount16] = useState(data[15].amount);
    const [amount17, setAmount17] = useState(data[16].amount);
    const [amount18, setAmount18] = useState(data[17].amount);
    const [amount19, setAmount19] = useState(data[18].amount);
    const [amount20, setAmount20] = useState(data[19].amount);

 function deliver(){
    setAmount1(data[0].amount);
    setAmount2(data[1].amount);
    setAmount3(data[2].amount);
    setAmount4(data[3].amount);
    setAmount5(data[4].amount);
    setAmount6(data[5].amount);
    setAmount7(data[6].amount);
    setAmount8(data[7].amount);
    setAmount9(data[8].amount);
    setAmount10(data[9].amount);
    setAmount11(data[10].amount);
    setAmount12(data[11].amount);
    setAmount13(data[12].amount);
    setAmount14(data[13].amount);
    setAmount15(data[14].amount);
    setAmount16(data[15].amount);
    setAmount17(data[16].amount);
    setAmount18(data[17].amount);
    setAmount19(data[18].amount);
    setAmount20(data[19].amount);
 }

 function buy(id, price) {
    switch (id) {
      case 1: if (amount1 > 0) { setAmount1(amount1 - 1); setWallet(wallet - price); } break;
      case 2: if (amount2 > 0) { setAmount2(amount2 - 1); setWallet(wallet - price); } break;
      case 3: if (amount3 > 0) { setAmount3(amount3 - 1); setWallet(wallet - price); } break;
      case 4: if (amount4 > 0) { setAmount4(amount4 - 1); setWallet(wallet - price); } break;
      case 5: if (amount5 > 0) { setAmount5(amount5 - 1); setWallet(wallet - price); } break;
      case 6: if (amount6 > 0) { setAmount6(amount6 - 1); setWallet(wallet - price); } break;
      case 7: if (amount7 > 0) { setAmount7(amount7 - 1); setWallet(wallet - price); } break;
      case 8: if (amount8 > 0) { setAmount8(amount8 - 1); setWallet(wallet - price); } break;
      case 9: if (amount9 > 0) { setAmount9(amount9 - 1); setWallet(wallet - price); } break;
      case 10: if (amount10 > 0) { setAmount10(amount10 - 1); setWallet(wallet - price); } break;
      case 11: if (amount11 > 0) { setAmount11(amount11 - 1); setWallet(wallet - price); } break;
      case 12: if (amount12 > 0) { setAmount12(amount12 - 1); setWallet(wallet - price); } break;
      case 13: if (amount13 > 0) { setAmount13(amount13 - 1); setWallet(wallet - price); } break;
      case 14: if (amount14 > 0) { setAmount14(amount14 - 1); setWallet(wallet - price); } break;
      case 15: if (amount15 > 0) { setAmount15(amount15 - 1); setWallet(wallet - price); } break;
      case 16: if (amount16 > 0) { setAmount16(amount16 - 1); setWallet(wallet - price); } break;
      case 17: if (amount17 > 0) { setAmount17(amount17 - 1); setWallet(wallet - price); } break;
      case 18: if (amount18 > 0) { setAmount18(amount18 - 1); setWallet(wallet - price); } break;
      case 19: if (amount19 > 0) { setAmount19(amount19 - 1); setWallet(wallet - price); } break;
      case 20: if (amount20 > 0) { setAmount20(amount20 - 1); setWallet(wallet - price); } break;
      default: break;
    }
  }
  function getAmount(id) {
    switch (id) {
      case 1: return amount1;
      case 2: return amount2;
      case 3: return amount3;
      case 4: return amount4;
      case 5: return amount5;
      case 6: return amount6;
      case 7: return amount7;
      case 8: return amount8;
      case 9: return amount9;
      case 10: return amount10;
      case 11: return amount11;
      case 12: return amount12;
      case 13: return amount13;
      case 14: return amount14;
      case 15: return amount15;
      case 16: return amount16;
      case 17: return amount17;
      case 18: return amount18;
      case 19: return amount19;
      case 20: return amount20;
      default: return 0;
    }
  }

  return (
    <div className="cardContainer">
        <div>
            <p>Zawartość portfela: {wallet} zł</p>
        </div>
        <div className='cardContainer'>
            {data.map((item) => (
                <div key={item.id} className='card'>
                <div>
                    <h3 className='cardText'>{item.name}</h3>
                    <p className='cardText'>{item.price} zł</p>
                    <p className='cardText'>Ilość: {getAmount(item.id)}</p>
                    <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                </div>
                <div className='buttonDiv'>
                    {
                        getAmount(item.id) > 0 ? <button className='przycisk' onClick={() => buy(item.id, item.price)}>Kup</button> : <p className='red'>Brak produktu</p>
                    }
                    <button className='przycisk' onClick={deliver}>Dostawa</button>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Sklep;
