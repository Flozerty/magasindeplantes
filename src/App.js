function Header() {
  return (
    <div><h1>La maison Jungle</h1></div>
  )
}

function Description() {
  return (<p>Ici achetez toutes les plantes dont vous avez toujours rêvé!</p>)
}

function Banner() {
  return (<div>
    <Header/>
    <Description/>
  </div>)
}

function App() {
  return (
    <div className="App">
      <Banner/>
      <div>{ 2 > 0 ? 'Deux est plus grand que zéro' : "Ceci n'apparaîtra jamais" }</div>
    </div>
  );
}

export default App;
