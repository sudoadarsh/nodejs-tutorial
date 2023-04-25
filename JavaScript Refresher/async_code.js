// Asynchronous code in js.
const fetchData = (callback) => {
    setTimeout(() => {
        // This function will be called after 2 sec.
        callback('Done');
    }, 2000);
}

fetchData((text)=> {
    console.log(text + ' ...Data is received');
});

// Promises in js. 
const fetchDBData = () => {
    // Creating a promise. 
    const promise = new Promise((resolve, reject) => {
        // Connect to database. 
        setTimeout(() => {
            resolve('Established connection to the database.');
        }, 1000);
    })
    return promise;
}

fetchDBData().then(connection => {
    console.log(connection);
    return fetchDBData();
});