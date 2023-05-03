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

  export default Banner