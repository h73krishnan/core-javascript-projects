  function showDetail(){
    let priceStore = 0;
    priceStore = document.getElementById('price').innerHTML;
    localStorage.setItem('price', JSON.stringify(priceStore));
  }
