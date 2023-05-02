function Header() {
  return (
    <div><h1>{ "la maison jungle".toUpperCase() }</h1></div>
  )
}

function Description() {
  const text = "Ici achetez toutes les plantes dont vous avez toujours rêvées"
  const emojis = "🤑🤑🤑"
  return (<p>{ text.slice(0, 11) + emojis }</p>)
}

function Banner() {
  return (<div>
    <Header/>
    <Description/>
  </div>)
}

function Cart() {
  const prixMonstera = 8;
  const prixlierre = 10;
  const prixbouquet = 15;
  const total = prixMonstera + prixbouquet + prixlierre;
  return (<div>
    <ul>
      <li>{ "monstera : " + prixMonstera} </li>
      <li>{ "lierre : " + prixlierre}</li>
      <li>{ "bouquet de fleurs : " + prixbouquet }</li> 
      </ul>
      <p>Total : {total + " €"}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Banner/>
      <Cart/>
    </div>
  );
}

export default App;
