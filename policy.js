const addTO = document.getElementById("addTo");
console.log(addTO);
fetch("data.json")
  .then(response => response.json())
  .then(json => {
    console.log(json);
    displayElems(json);
  });

var sortRating = () => {
  const addto1 = document.getElementById("addTo");
  console.log(addto1);
}


var displayElems = (jsonData) => {
  for(i=0;i<jsonData.length;i++) {
    var div = document.createElement('div');
    div.classList="row shadow m-3 p-3";
    div.innerHTML = jsonData[i].Company + "<br>" + jsonData[i].fileName + "<br>" + jsonData[i].rating;
    addTO.appendChild(div);
  }
}