const promise = new Promise((resolve, reject) => {
      resolve();
});


const logNum = (num) => {
      return(num + num);
};

let val = promise.then(logNum(1));
console.log(val)