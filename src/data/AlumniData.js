// This is made up data. This should be deleted once a database is made

var alumniData = []

var obj;

fetch('http://localhost:9000/allUsers')
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => alumniData = obj)


// const alumniData = [
//     {
//         name: "Michael Jordan",
//         class: 2015,
//         sport: "Basketball",
//         image: "images/profile-photo-1.jpeg",
//         city: "Statesboro",
//         state: "GA",
//         major: "Math",
//         medias: [
//             "https://www.facebook.com/",
//             "https://www.twitter.com",
//             "https://www.instagram.com",
//             "https://www.linkedin.com"
//         ]
//     },
//     {
//         name: "Grant Barchard",
//         class: 2021,
//         sport: "Swim",
//         image: "images/profile-photo-1.jpeg",
//         city: "Atlanta",
//         state: "GA",
//         major: "Computer Science",
//         medias: [

//         ]
//     },
//     {
//         name: "Valentine Was Here",
//         class: 2021,
//         sport: "unAthletic",
//         image: "images/profile-photo-1.jpeg",
//         city: "Gotham",
//         state: "America",
//         major: "Computer Science",
//         medias: [

//         ]
//     },
//     {
//         name: "test123",
//         class: 2021,
//         sport: "all round athlete",
//         image: "images/profile-photo-1.jpeg",
//         city: "Atlanta",
//         state: "GA",
//         major: "Computer Science",
//         medias: [

//         ]
//     },
//     {
//         name: "YEEEEEEEEEEE",
//         class: 2021,
//         sport: "Baller",
//         image: "images/profile-photo-1.jpeg",
//         city: "The",
//         state: "Streets",
//         major: "Computer Science",
//         medias: [

//         ]
//     },
//     {
//         name: "Logan Gray",
//         class: 2021,
//         sport: "Soccer",
//         image: "images/profile-photo-1.jpeg",
//         city: "Atlanta",
//         state: "GA",
//         major: "Computer Science",
//         medias: [

//         ]

//     },
//     {
//         name: "Kurt Taylor",
//         class: 2019,
//         sport: "Baseball",
//         image: "images/profile-photo-1.jpeg",
//         city: "Atlanta",
//         state: "GA",
//         major: "Computer Science",
//         medias: [

//         ]

//     },
//     {
//         name: "Joshua Lee",
//         class: 2021,
//         sport: "Football",
//         image: "images/profile-photo-1.jpeg",
//         city: "Columbus",
//         state: "GA",
//         major: "Computer Science",
//         medias: [

//         ]
//     }
// ]

export default alumniData