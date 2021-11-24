export const getAlumniData = function() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:9000/users')
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

export const getFilterData = function(name, sport, major, afterClass, beforeClass, state) {
    return new Promise((resolve, reject) => {
        var url = "http://localhost:9000/filter?";

        if (name) {
            url += "name=" + name +"&";
        }
        if (sport) {
            url += "sport=" + sport + "&";
        }
        if (major) {
            url += "major=" + major +"&";
        }
        if (afterClass) {
            url += "afterClass=" + afterClass + "&";
        }
        if (beforeClass) {
            url += "beforeClass=" + beforeClass +"&";
        }
        if (state) {
            url += "state=" + state + "&";
        }

        fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}