let div = document.createElement('div');
div.classList.add('users');
document.body.appendChild(div);

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();})
.then(users=>{
    for (const user of users) {

        let userDiv = document.createElement('div');
        userDiv.classList.add('main');
        div.appendChild(userDiv);

        let divOfUsers = document.createElement('div');
        divOfUsers.classList.add('usersName');
        divOfUsers.innerText = `${user.id}.${user.name}`;
        userDiv.appendChild(divOfUsers);

        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = 'Learn more';
        userDiv.appendChild(button);
        
        button.onclick = function () {
            location.href = `user-details/user-details.html?id=${user.id}`
        }
    }
})