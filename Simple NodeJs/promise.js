const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Operation was successful");
    } else {
      reject("Operation failed");
    }
  });
  
  myPromise
    .then(result => {
      console.log(result); // "Operation was successful"
    })
    .catch(error => {
      console.error(error); // "Operation failed"
    })

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 42, "foo"]
});

Promise.race([promise1, promise3]).then(value => {
  console.log(value); // 3
});

async function fetchData() {
    try {
      let response = await fetch(`<https://api.example.com/data>`);
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();