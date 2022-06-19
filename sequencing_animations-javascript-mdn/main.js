const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

let witch1 = alice1.animate(aliceTumbling, aliceTiming).finished;


/* "callback hell" version???:

witch1.then( () => {
  let witch2 = alice2.animate(aliceTumbling, aliceTiming).finished;
  witch2.then(() =>{
    alice3.animate(aliceTumbling, aliceTiming);
  })
})

*/

// promise chain version:

witch1
  .then ( () => {
    return alice2.animate(aliceTumbling, aliceTiming).finished;
  })
  .then (() => {
    return alice3.animate(aliceTumbling, aliceTiming);
  });
  

// async await version:
/*
async function myFunction() {
    await witch1;
    let witch2 = alice2.animate(aliceTumbling, aliceTiming).finished;
    await witch2;
    alice3.animate(aliceTumbling, aliceTiming).finished;
}

myFunction();

*/