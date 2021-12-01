const getProfileRequestData = function(filter) {
    return new Promise((resolve, reject) => {
        const url = 'https://soaringeagles.herokuapp.com/unconfirmed'
        fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

export default getProfileRequestData