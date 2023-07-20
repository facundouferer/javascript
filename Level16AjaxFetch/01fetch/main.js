/**
 * El resultado que ves en la consola es la representación del objeto Promise en su estado actual, que es "pendiente". 
 * Esto significa que la solicitud aún no ha terminado y estás esperando la respuesta del servidor.
 * Para trabajar con los datos devueltos por la solicitud fetch, debes utilizar los métodos then() y catch() 
 * para manejar la respuesta o el error una vez que la Promise se resuelva o se rechace. 
 */
console.log(fetch(`https://jsonplaceholder.typicode.com/posts`)) // Promise {<pending>}


/** 
 * Para trabajar con la resolución de la petición, 
 * debemos hacerlo dentro del .then() 
 */
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((data) => console.log(data)); // Response {type: "cors", url: "https://jsonplaceh...}

/**
 * El método then() se ejecuta cuando la Promise se resuelve correctamente, y recibe la respuesta de la solicitud como argumento. 
 * Se encadena otro método then() a la Promise anterior y se ejecutará cuando la Promise de json() se resuelva correctamente, 
 * y recibirá los datos en formato JSON como argumento. 
 */
fetch(`https://jsonplaceholder.typicode.com/posts`) //hace la peticion a la url
    .then((response) => response.json()) //convierte la respuesta a json
    .then((data) => console.log(data));// (100) [{…}, {…}, {…}, {…}, {…}, …]


/**
 * Lista los posts en el DOM
 */
const posts = document.getElementById('posts') //trae el elemento con el id posts

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((resp) => resp.json()) //
    .then((data) => {
        data.forEach((post) => {
            const li = document.createElement('li'); //crea un elemento li
            li.innerHTML = `
                <h5>${post.title}</h5>
                <p>${post.body}</p>
            `;//agrega el contenido al elemento li
            posts.appendChild(li); //agrega el elemento li al elemento con el id posts
        })
    });
