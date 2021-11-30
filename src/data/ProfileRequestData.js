const getProfileRequestData = function(filter) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:9000/unconfirmed'
        fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

export default getProfileRequestData