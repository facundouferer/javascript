const listaDeArticulos = document.getElementById('listaDeArticulos');
let articulos = []

const obtenerArticulos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  articulos = data
}

const mostrarArticulos = async () => {
  await obtenerArticulos()
  articulos.forEach(articulo => {

    let contenidoArticulo = document.createElement('div')
    contenidoArticulo.id = `articulo-${articulo.id}`

    const tituloArticulo = document.createElement('h2')
    tituloArticulo.textContent = `${articulo.id} ) ${articulo.title}`

    const editarBtn = document.createElement('button')
    editarBtn.textContent = 'Seleccionar'
    editarBtn.addEventListener('click', () => traerDatosDelArticulo(articulo.id))

    const eliminarBtn = document.createElement('button')
    eliminarBtn.textContent = 'Eliminar'
    eliminarBtn.addEventListener('click', () => eliminarArticulo(articulo.id))

    contenidoArticulo.appendChild(tituloArticulo)
    contenidoArticulo.appendChild(editarBtn)
    contenidoArticulo.appendChild(eliminarBtn)

    listaDeArticulos.appendChild(contenidoArticulo)
  })
}

const traerDatosDelArticulo = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const articulo = await response.json()
  document.getElementById(`articuloId`).value = articulo.id
  document.getElementById(`titleArticulo`).value = articulo.title
  document.getElementById(`bodyArticulo`).value = articulo.body
  document.getElementById(`articuloUsuario`).value = articulo.userId
  document.getElementById(`formEditarPost`).style.display = 'block'
  document.getElementById(`btnCrear`).style.display = 'none'
}

const editarArticulo = async () => {
  const id = document.getElementById(`articuloId`).value
  const titulo = document.getElementById(`titleArticulo`).value
  const body = document.getElementById(`bodyArticulo`).value
  const userId = document.getElementById(`articuloUsuario`).value

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: id,
      title: titulo,
      body: body,
      userId: userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  document.getElementById(`articuloUsuario`).style.display = 'none'
  alert('Articulo editado correctamente')
  console.log('Respuesta de la API:', response)
}

const mostrarFormulario = () => {
  document.getElementById(`formEditarPost`).style.display = 'block'
  document.getElementById(`titleArticulo`).value = ''
  document.getElementById(`bodyArticulo`).value = ''
  document.getElementById(`btnCrear`).style.display = 'block'
  document.getElementById(`btnEditar`).style.display = 'none'
}

const crearArticulo = async () => {
  const titulo = document.getElementById(`titleArticulo`).value
  const body = document.getElementById(`bodyArticulo`).value

  await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title: titulo,
      body: body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  document.getElementById(`articuloUsuario`).style.display = 'none'
  alert('Articulo agregado correctamente')
}

const eliminarArticulo = async (id) => {

  //ELIMINAR ARTICULO DE LA API
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })

  //ELIMINAR ARTICULO DEL DOM
  const contenidoArticulo = document.getElementById(`articulo-${id}`)
  contenidoArticulo.remove()

  //ELIMINAR ARTICULO DEL ARRAY
  const articuloIndex = articulos.findIndex(articulo => articulo.id === id)
  articulos.splice(articuloIndex, 1)

  console.log('Articulo eliminado:', articulos)

  alert('Articulo eliminado correctamente')
}

mostrarArticulos()