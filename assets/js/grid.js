(function () {
  const grid = document.querySelector('.grid');
  // console.log('grid', grid);
  var msnry = new Masonry(grid, {
    // options
    itemSelector: '.grid-item',
    gutter: 10,
  });
})();

let response = '[{"src": "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80","category": "Branding","name": "Begin.","class": "small-card","order": 1},{"src": "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80","category": "Branding","name": "Rough Draft","class": "smaller-card","order": 2},{"src": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80","category": "Web","name": "scrabble tiles and smartphone","class": "large-card","order": 3},{"src": "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80","category": "Web","name": "Code on computer monitor","class": "large-card","order": 4},{"src": "https://images.unsplash.com/photo-1498603911539-01ce6c9ad8f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80","category": "Branding","name": "rainbow juice","class": "medium-card","order": 5},{"src": "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80","category": "Photography","name": "The Force","class": "small-card","order": 6},{"src": "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80","category": "Photography","name": "Camera","class": "small-card","order": 7},{"src": "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","category": "App","name": "Person using silver android smartphone","class": "small-card","order": 8},{"src": "https://images.unsplash.com/photo-1606937528307-f049261264fd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJyYW5kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","category": "Branding","name": "Green and pink yellow paper bag","class": "small-card","order": 9},{"src": "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","category": "App","name": "Black and silver laptop","class": "small-card","order": 10}]';

let obj = JSON.parse(response);

fotosCargar(obj);

function fotosCargar(data){
  const gridItem = document.querySelectorAll(".grid-item");
  const gridItemInfo = document.querySelectorAll(".grid-item-info");
  console.log(gridItem)
    let i=0;
    gridItem.forEach(element => {
        let img = document.createElement("img");
        img.src = data[i].src;
        element.appendChild(img);
        i=i+1;
    });
    i=0;
    gridItemInfo.forEach(element =>{
      let name = document.createElement("h5");
      name.innerText = data[i].name;
      element.appendChild(name);

      let division = document.createElement("hr");
      element.appendChild(division);

      let categoria = document.createElement("p");
      categoria.innerText = data[i].category;
      element.appendChild(categoria);
      i=i+1;
    });
}