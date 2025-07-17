let count = 0;
const logCount = () => console.log("Debounced count:", ++count);

const debouncedLog = debounce(logCount, 1000);

debouncedLog(); // call 1
debouncedLog(); // call 2 (ignored)
debouncedLog(); // call 3 (only this executes after 1s)