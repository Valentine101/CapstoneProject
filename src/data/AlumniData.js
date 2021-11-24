const getUserData = function(filter) {
    return new Promise((resolve, reject) => {
        var url = "http://localhost:9000/filter?";

        for(const x in filter) {
            url += x+"="
            url += filter[x]+"&"
        }

        fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

export default getUserData