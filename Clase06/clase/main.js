let btnAceptar = document.getElementById('btnAceptar')

btnAceptar.addEventListener("click", handleClick)

let oscuridad = false

function handleClick() {
  let grafica = document.getElementById('grafica')
  grafica.className = 'colorPersonal'
  let body = document.body
  if (oscuridad) {
    body.className = ''
  } else {
    body.className = 'oscuridad'
  }
  oscuridad = !oscuridad
}

let btnAceptar2 = document.getElementById('btnAceptar2')

let contador = 0
btnAceptar2.onclick = () => {
  let salida = document.getElementById('salida')
  contador++
  salida.innerText = `click ${contador}`
  btnAceptar.remove()
}

let cuadradro = document.getElementById('cuadradoColor')

cuadradro.onclick = () => {
  cuadradro.innerHTML = 'CLICK'
}

cuadradro.onmouseout = () => {
  cuadradro.innerHTML = 'FUERA'
}

cuadradro.onmousemove = (e) => {
  cuadradro.innerHTML = `elemento:(${e.clientX}, ${e.clientY})`
}

cuadradro.onmousedown = () => {
  cuadradro.innerHTML = `CLICK`
}

cuadradro.onmouseup = () => {
  cuadradro.innerHTML = `DES CLICK`
}

let texto = document.getElementById('texto')
let mensaje = document.getElementById('mensaje')

texto.onkeyup = () => {
  mensaje.innerHTML = `...`
}

texto.onkeydown = () => {
  mensaje.innerHTML = `escribiendo...`
}

texto.onchange = () => {
  mensaje.innerHTML = `cambio`
}

texto.oninput = () => {
  mensaje.innerHTML = `input`
}

let formulario = document.getElementById('formulario')

formulario.onsubmit = (e) => {
  e.preventDefault()
  mensaje.innerHTML = `<h1>${texto.value}</h1>`
}

document.addEventListener('keydown', (e) => {
  let tecla = document.getElementById('tecla')
  tecla.innerHTML = `${e.key}`
})

//STORAGE 

let valorLocal = document.getElementById('valorLocal')
valorLocal.innerHTML = localStorage.getItem('textoGuardado')

let btnGuardar = document.getElementById('btnGuardar')
btnGuardar.onclick = () => {
  localStorage.setItem('textoGuardado', texto.value)
  valorLocal.innerHTML = texto.value
}

let btnBorrar = document.getElementById('btnBorrar')
btnBorrar.onclick = () => {
  localStorage.removeItem('textoGuardado')
  valorLocal.innerHTML = ''
}

let btnClear = document.getElementById('btnClear')
btnClear.onclick = () => {
  localStorage.clear()
  valorLocal.innerHTML = ''
}