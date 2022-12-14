let url = new URL(location.href);
let id = url.searchParams.get('id');

let head = document.createElement('div');
head.classList.add('head');
document.body.appendChild(head);

let postDiv = document.createElement('div');
postDiv.classList.add('main');
head.appendChild(postDiv);

let btnDiv = document.createElement('div');
btnDiv.classList.add('head')
document.body.appendChild(btnDiv);

let commentDiv = document.createElement('div');
commentDiv.classList.add('title');
document.body.appendChild(commentDiv);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
        return response.json();
    })
    .then(posts => {
        for (const post in posts) {
            console.log(post, posts[post]);

            let div = document.createElement('div');
            div.innerHTML = `<b>${post}</b>: ${posts[post]}`;
            postDiv.appendChild(div);

        }
    });

let button = document.createElement('button');
button.classList.add('btn');
button.innerText = 'Show comments';
btnDiv.appendChild(button);

button.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => {
            return response.json();
        })
        .then(comments =>{
            for (const commentsKey in comments) {
                console.log(commentsKey,comments[commentsKey]);

                let div = document.createElement('div');
                div.classList.add('comments');
                div.innerText = `${comments[commentsKey].body}`;
                commentDiv.appendChild(div);
            }
        })
}


