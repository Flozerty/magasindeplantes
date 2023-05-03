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

  export default Cart