//grab entire current url as const
const url = window.location.href;
const formSection = document.querySelector('#form-section');

let dataObj = {};

//Divide url for content by splitting in half and keeping after the "?"
const urlContent = decodeURIComponent(url.split("?")[1]);

//Split urlContent by "&" to get all the form data into a list
var urlContentList = urlContent.split("&");

//foreach function that takes a list as a parameter, splits each item in the list by the =, and makes an object where the first half of the split is the key and the second half is the value
urlContentList.forEach(function(data){
    //split data and place in dataObj
    var splitItem = data.split("=");
    dataObj[splitItem[0]] = splitItem[1].replace(/\+/g, ' ');

    //use replace method to replace + symbols with spaces. already replaced other special characters like @ with the decodeURIComponent method.
    console.log(splitItem[1]);
});

console.log(dataObj);

/* display all the required field results (except membership level) */
let names = document.createElement("p");
let email = document.createElement("p");
let phone = document.createElement("p");
let business = document.createElement("p");

names.innerHTML = `${dataObj['firstName']} ${dataObj['lastName']}`;
email.innerHTML = `${dataObj['email']}`;
phone.innerHTML = `${dataObj['mobile']}`
business.innerHTML = `${dataObj['orgName']}`

formSection.appendChild(names);
formSection.appendChild(email);
formSection.appendChild(phone);
formSection.appendChild(business);

/* I realized this code below worked well, but does not visually appeal well on it's own and other code is needed

//function that takes each pair in an obj and displays each value as a <p> element and appends it to parentElement 
function displayObj(obj, parentElement) {
    for (var key in obj) {
        var p = document.createElement("p");
        p.innerHTML = obj[key];
        parentElement.appendChild(p);
    }
}

displayObj(dataObj, formSection);
*/