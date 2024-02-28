import axios from 'https://cdn.skypack.dev/axios';

let url = "./homework1-4.json" ;
const getData = async () => {
    const response = await axios.get(url);
    let allFriends = response.data;

     // Filter ["name", "gender", "company", "email", "friends", "balance"]
    const allFriendsNew = allFriends.filter((obj) => obj["gender"] == "male" && obj["friends"].length >= 2)
    .map((obj) => obj = {
        "name" : obj["name"] ,
        "gender" : obj["gender"] ,
        "company" : obj["company"] ,
        "email" : obj["email"] ,
        "friends" : obj["friends"] ,
        "balance" : "&" + parseFloat(obj["balance"].substring(1).replace(",",""))/10,
    })
    console.log(allFriendsNew);
}

getData()