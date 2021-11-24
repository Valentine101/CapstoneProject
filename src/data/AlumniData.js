const getAlumniData = function() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:9000/users')
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

export default getAlumniData