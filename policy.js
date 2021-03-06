var displayElems = () => {
  const addTO = document.getElementById("addTo");
  fetch("data.json")
  .then(response => response.json())
  .then(jsonData => {
    for(i=0;i<jsonData.length;i++) {
      createDIV(addTO,jsonData,i);
    }  
  });  
}


var sortRating = () => {
  const addTO = document.getElementById("addTo");
  addTO.innerHTML = "";
  fetch("data.json")
  .then(response => response.json())
  .then(jsonData => {
    jsonData.sort((a,b) => (a.rating > b.rating) ? -1 : 1);
    for(i=0;i<jsonData.length;i++) {
      createDIV(addTO,jsonData,i);
    }  
  }); 
}

var sortYears = () => {
  const addTO = document.getElementById("addTo");
  addTO.innerHTML = "";
  fetch("data.json")
  .then(response => response.json())
  .then(jsonData => {
    jsonData.sort((a,b) => (a.years > b.years) ? 1 : -1);
    for(i=0;i<jsonData.length;i++) {
      createDIV(addTO,jsonData,i);
    }  
  }); 
}

var createDIV = (addTO, jsonData, i) => {
  // parent div
  var div = document.createElement('div');
  div.classList="policyCard rounded shadow my-3 p-3";
  
  // heading
  var h3 = document.createElement('h3');
  h3.innerText = jsonData[i].Company;

  //rating 
  var rate = document.createElement('b');
  rate.innerText = "Rating: " + jsonData[i].rating;

  //years
  var yr = document.createElement('b');
  yr.innerText = "Years: " + jsonData[i].years;

  //details
  var dets = document.createElement('p');
  dets.innerText = jsonData[i].details;

  //button
  var btn = document.createElement("btn");
  btn.classList = "btn btn-success";
  //link inside button
  var anchor = document.createElement("a");
  anchor.innerText = "Apply";
  anchor.style.textDecoration = "None";
  anchor.style.color = "White";
  anchor.href = "./policyform3.html";
  btn.appendChild(anchor);

  div.appendChild(h3);
  div.appendChild(document.createElement("br"));
  div.appendChild(rate);
  div.appendChild(document.createElement("br"));
  div.appendChild(yr);
  div.appendChild(document.createElement("br"));
  div.appendChild(dets);
  div.appendChild(document.createElement("br"));
  div.appendChild(btn);

  addTO.appendChild(div);
}
