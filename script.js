function getDetailViaId(userId){
  const divEle = document.querySelector('.card-container');
let data = '';

  const req = new XMLHttpRequest();

  req.open('GET', `https://dummyjson.com/users/${userId}`);
  req.send();

  req.addEventListener('load', function () {
    console.log(req.responseText); // string 
    data = JSON.parse(req.responseText);
    const cardHtml = `<div class="user-card">
      <img src= ${data.image} alt="Profile Image" />
      <h3>${data.firstName}</h3>
      <h3>${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>
      </div>`;
    divEle.innerHTML = cardHtml;
    
  });


}

getDetailViaId(15);