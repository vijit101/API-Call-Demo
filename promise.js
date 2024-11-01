const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log('Promise initiated');
    resolve({ firstName: 'shubham', lastName: 'b' });
    //reject('Request has been rejected!!');
  }, 1000);
});

request
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log('request completed'));

console.log(request);
