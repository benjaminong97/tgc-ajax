//get the stuff from users.json loaded in
async function run() {
    let users = await axios.get('users.json')
    usersData = users.data.users
    //button press
    document.querySelector('#load-users-btn').addEventListener('click', function(){
        let ul = document.createElement('ul')
        console.log(usersData)
        for (user of usersData) {
            let fName = user.firstName
            let lName = user.lastName
            let email = user.emailAddress
            ul.innerHTML += `
            <li>${fName}</li>
            <li>${lName}</li>
            <li>${email}</li>
            </br>
            `
            
        }
        console.log(ul)
        let bigBoss = document.querySelector('#all-users')
        bigBoss.appendChild(ul)
    }) 
    document.querySelector('#btnSearch')
        .addEventListener('click', function(){
            inputText = document.querySelector('#search').value
            inputValue = parseInt(inputText) - 1
            console.log(inputValue)
            resultBox = document.querySelector('#search-result')
            f2Name = usersData[parseInt(inputValue)].firstName
            console.log(f2Name)
            l2Name = usersData[parseInt(inputValue)].lastName
            resultBox.innerHTML = f2Name + " " + l2Name
        })

}
run()


//load in all users from json file

//display fname lname and email in a list