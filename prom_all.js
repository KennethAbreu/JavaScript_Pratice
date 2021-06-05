const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(3);
    }, 300);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 200);
});
const promise3 = new Promise((resolve, reject) => {
    resolve(1);
});

Promise.all([promise1, promise2, promise3]).then((res) => {
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);
    console.log("We've successfully logged 3,2,1 in sequential order using promises!")
})