const divEle = document.querySelector('.card-container');
let data = '';

function getDetailViaId(userId){
  const req = new XMLHttpRequest();
  req.open('GET', `https://dummyjson.com/users/${userId}`);
  req.send();
  if(req.status == 404){
    return;
  }
  req.addEventListener('load', function () {
    console.log(req.responseText); // string 
    data = JSON.parse(req.responseText); 
    DisplayUser(data);
    // nest a const req2 = new XMLHttpRequest();
  // req2.open('GET', `https://dummyjson.com/users/${userId}`);
  // req2.send();
  // req2.addEventListener('load', function () {
  //   console.log(req.responseText); // string 
  //   data = JSON.parse(req.responseText); 
  //   DisplayUser(data); to control the execution of requests order 

  });
}


function DisplayUser(data){
  const cardHtml = `<div class="user-card">
  <img src= ${data.image} alt="Profile Image" />
  <h3>${data.firstName}</h3>
  <h3>${data.lastName}</h3>
  <p class="email">${data.email}</p>
  <button class="btn">View Profile</button>
  </div>`;
  divEle.insertAdjacentHTML("beforeend",cardHtml); // here it makes a new card and inserts it before end
}


getDetailViaId(1); // the order of cards change as per the load times of the fx hence a call back is needed to fix it  
