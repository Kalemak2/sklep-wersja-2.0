import Sklep from './components/Sklep'
import './App.css'

function App() {
    const products = [
  { id: 1, name: "Mleko", price: 5.50, image: "/mleko.jpg", amount: 5 },
  { id: 2, name: "Schabowy", price: 10.00, image: "/schabowy.jpg", amount: 8 },
  { id: 3, name: "Chleb", price: 2.50, image: "/chleb.png", amount: 4 },
  { id: 4, name: "Jabłka", price: 3.00, image: "/jablka.jpg", amount: 12 },
  { id: 5, name: "Pomarańcze", price: 4.20, image: "/pomarancza.jpg", amount: 3 },
  { id: 6, name: "Masło", price: 7.80, image: "/maslo.jpg", amount: 1 },
  { id: 7, name: "Kefir", price: 3.90, image: "/kefir.jpg", amount: 5 },
  { id: 8, name: "Ser żółty", price: 6.40, image: "/serzolty.jpg", amount: 8 },
  { id: 9, name: "Szynka", price: 11.00, image: "/szynka.webp", amount: 6 },
  { id: 10, name: "Płatki owsiane", price: 4.50, image: "/platkiowsiane.jpg", amount: 4 },
  { id: 11, name: "Jogurt naturalny", price: 2.30, image: "/jogurtnaturalny.jpg", amount: 3 },
  { id: 12, name: "Kurczak", price: 15.00, image: "/kurczak.jpg", amount: 2 },
  { id: 13, name: "Twaróg", price: 5.00, image: "/twarog.jpg",amount: 12 },
  { id: 14, name: "Ryż", price: 3.10, image: "/ryz.jpg", amount: 8 },
  { id: 15, name: "Makaron", price: 2.80, image: "/makaron.jpg", amount: 9 },
  { id: 16, name: "Masło", price: 7.80, image: "/maslo.jpg", amount: 6 },
  { id: 17, name: "Cebula", price: 1.50, image: "/cebula.jpg", amount: 3 },
  { id: 18, name: "Szynka", price: 11.00, image: "/szynka.webp", amount: 4 },
  { id: 19, name: "Schabowy", price: 10.00, image: "/schabowy.jpg", amount: 8 },
  { id: 20, name: "Pomidory", price: 5.30, image: "/pomidor.jpg", amount: 7 }
];


  return (
    <>
      <h1 className="headerText">Sklep u cioci Basi</h1>
      <Sklep data={products}/>
    </>
  )
}

export default App
