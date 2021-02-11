// jsonCargar()
// function jsonCargar(){
//     let url = "./data_file.json";
//     fetch(url)
//     .then((data)=>{
//         return data.json();
//     })
//     .then (function (data){
//         fotosCargar(data);
//     })
// }
// let gridItem = document.querySelectorAll(".grid-item");
// function fotosCargar(data){
//     let i=0;
//     gridItem.forEach(element => {
//         let img = document.createElement("img");
//         img.src = data.images[i].src;
//         element.appendChild(img);
//         i=i+1;
//     });
// }