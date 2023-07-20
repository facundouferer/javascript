const posts = document.getElementById('posts');
const pedirPosts = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await resp.json();
    data.forEach((post) => {
        const li = document.createElement('li');
        const h5 = document.createElement('h5');
        h5.textContent = post.title;
        h5.addEventListener('click', () => {
            cargarPost(post.id);
        });
        const p = document.createElement('p');
        p.textContent = post.body;
        h5.style.cursor = 'pointer';
        li.appendChild(h5);
        li.appendChild(p);
        posts.appendChild(li);
    });
}
const cargarPost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((resp) => resp.json())
        .then((post) => {
            const postSeleccionado = document.getElementById('postSeleccionado');
            postSeleccionado.innerHTML = `
                <h5>${post.title}</h5>
                <p>${post.body}</p>
            `;
        });
}

pedirPosts();