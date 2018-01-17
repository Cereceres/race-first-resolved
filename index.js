module.exports = (promises = []) => {
    if (!Array.isArray(promises)) return Promise.reject(new Error('A array is required'));
    return new Promise((resolve, reject) => {
        try {
            promises
                .map((promise) => promise instanceof Promise ? promise : Promise.resolve(promise))
                .forEach((promise) => promise
                    .then(resolve)
                    .catch((error) => console.log('A promise is rejected: ', error))
                );
        } catch (error) {
            reject(error);
        }
    });
};
