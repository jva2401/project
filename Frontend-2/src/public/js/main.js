const EliminaRegistro = (event) =>{
    // let codigo = document.getElementById("Elimina")
    // .parentElement. parentElement.children[3];
    let codigo = event.target.parentElement
    .parentElement.children[0].innerHTML;

    const url = "http://localhost:20000/api/usuario";
    const option = {
        method : "DELETE",
        body:  JSON.stringify({
            "idusuario": codigo
        })
    }
    fetch(url, option)
    .then(res=>res.json())
    .then(data=>alert(data))
    .catch(error=>alert(error))
}

// Para salir de la aplicacion

const salirUsuario = () =>{
    document.cookie = "token=";
    window.location.href="/salir"
}

const GuardarUsuario = () =>{
    const identificacion = document.getElementById('identificacion').value;
    const nombre = document.getElementById('nombres').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const telefono = document.getElementById('telefono').value;

    
    const url = "http://localhost:20000/api/usuario";
    // const option = {
    //     method : "POST",
    //     body:  JSON.stringify({
    //         "idusuario": codigo
    //     })
    // }

    // alert('Registro guardado');

    let token = "";
    const cookieToken = document.cookie;

    if(cookieToken){
        const cookies = cookieToken.split(';');
        cookies.forEach(cookie =>{
            const [nombre, valor] = cookie.split('=');
            if(nombre.trim() === 'token'){
                token = valor;
            }
        });
    }else{
        alert("Debe loguearse nuevamente");
        return
    }
    if(token==""){
        alert("Debe loguearse nuevamente");
        return
    }

    const headers ={
        'x-access-token':token,
        'Content-type': 'application/json'
    };

    const options = {
        method: "POST",
        body : JSON.stringify({
            "idusuario": null,
            identificacion,
            nombre,
            correo,
            contrasena,
            telefono
        }),
        headers
    }

    fetch(url, options)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        alert('Registro guardado' + data)
    })
    .catch(error =>{
        alert("Error al guardar registro" , error)
    })
}