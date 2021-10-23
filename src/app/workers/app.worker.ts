/// <reference lib="webworker" />

const calcCounter = (initValue: number): number => {
    let counter = 0;
    const arr = new Array(35000000);
    arr.fill(0);
    arr.forEach((el, index) => counter = initValue + index);
    return counter;
};


addEventListener('message', ({data}) => {
    const response = calcCounter(data);
    postMessage(response);
});
