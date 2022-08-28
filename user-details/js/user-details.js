let url = new URL(location.href);
let id = url.searchParams.get('id');

let head = document.createElement('div');
head.classList.add('head');
document.body.appendChild(head);

let div = document.createElement('div');
div.classList.add('main');
head.appendChild(div);

let divBtn = document.createElement('div');
divBtn.classList.add('head');
document.body.appendChild(divBtn);

let btn = document.createElement('button');
btn.classList.add('click','btn');
btn.innerText = 'Post of current user';
divBtn.appendChild(btn);

let divTitle = document.createElement('div');
divTitle.classList.add('title');
document.body.appendChild(divTitle)

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
               return response.json();
           })
    .then( users =>
    {function explorer (user) {
        for (const userKey in user) {
            if (typeof user[userKey] !== 'object') {
                let divInf = document.createElement('div');
                divInf.innerHTML = `<b>${userKey}</b>:${user[userKey]}`;
                div.appendChild(divInf);
            } else {
                explorer(user[userKey]);
            }
        }

    }explorer(users);
    })

 // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
 //    .then((response) => {
 //        return response.json();
 //    })
 //    .then(users => {
 //        for (const usersKey in users) {
 //            if ( typeof users[usersKey] !== 'object') {
 //                let divInf = document.createElement('div');
 //                divInf.innerHTML = `<b>${usersKey}</b>:${users[usersKey]}`;
 //                div.appendChild(divInf);
 //            } else {
 //                let array = users[usersKey];
 //                for (const arrayKey in array) {
 //                    if (typeof array[arrayKey] !== 'object') {
 //                        let divInfor = document.createElement('div');
 //                        divInfor.innerHTML = `<b>${arrayKey}</b>:${array[arrayKey]}`;
 //                        div.appendChild(divInfor);
 //                    } else {
 //                        let miniArray = array[arrayKey];
 //                        for (const miniArrayKey in miniArray) {
 //                            if (typeof miniArray[miniArrayKey] !== 'object') {
 //                                let divInformation = document.createElement('div');
 //                                divInformation.innerHTML = `<b>${miniArrayKey}</b>: ${miniArray[miniArrayKey]}`;
 //                                div.appendChild(divInformation);
 //                            }
 //                        }
 //                    }
 //                }
 //            }
 //        }
 //    }); //loops

btn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response)=>{
            return response.json();})
        .then(research => {
            for (const research1 of research) {

                let div = document.createElement('div');
                div.classList.add('ttl');
                divTitle.appendChild(div);

                let title = document.createElement('div');

                title.innerText = `${research1.id}.${research1.title}`;
                div.appendChild(title);

                let button = document.createElement('button');
                button.classList.add('btn');
                button.innerText = 'Learn more';
                div.appendChild(button);

                button.onclick = function () {
                    location.href = `../post-details/post-details.html?id=${research1.id}`
                }

            }
            }
        )
}














