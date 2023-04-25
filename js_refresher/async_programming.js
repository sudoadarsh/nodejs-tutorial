/**
 * Async Code using callbacks.
 * Eg: A dummy function that fetches database from database.
 */
const fetchData = callback => {
    // Wait for 2 seconds.
    setTimeout(()=> {
        callback('CALLBACK FUNCTION EXECUTED')
    }, 2000);
}

fetchData((text)=> {
    console.log(text);
})

/**
 * Async code using promises.
 */
const fetchDB = () => {
    const promise = new Promise((resolve, reject) => {
        // Wait for 2 seconds.
        setTimeout(()=> {
            resolve('DATABASE FETCHED')
        }, 2000);
    });
    return promise;
}

const refreshDB = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('DATABASE REFRESHED')
        }, 3000);
    });
    return promise;
}

fetchDB().then((text) => {
    console.log(text);
    // To avoid nesting of multiple promise functions.
    return refreshDB();
}).then((text) => {
    console.log(text);
});