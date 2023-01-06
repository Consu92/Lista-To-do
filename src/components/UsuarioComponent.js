import React, { useState } from "react";
import { ListaComponent } from "./ListaComponent";
import { TareaIngresadaComponent } from "./TareaIngresadaComponent";
import "./elementos.css";


const initialUsuarios = [
    {
        nombre: 'comer manzana'  //
    }
]

const UsuarioComponent = () => {

    const [usuarios, setUsuarios] = useState(initialUsuarios);
    {/* const state = useState(initialUsuarios);
    state[0]=initialUsuarios
    state[1]= funcion que nos permite hacer cambios */}
    const [usuarioEditado, setUsuarioEditado] = useState(null);


    const tarjetaDelete = (usuarioKey) => {
        const changeUsuarios = usuarios.filter(u => u.nombre !== usuarioKey)
        setUsuarios(changeUsuarios)
    }

    const usuarioAdd = (usuario) => {  //agregar tarea {en este caso est{a agregando un usuario}
        const addUsuarios = [
            ...usuarios,
            usuario
        ]
        setUsuarios(addUsuarios)
    }

    const usuarioEdit = (usuarioEditado) => {
        const changeUsuarios = usuarios.map(usuario => (usuario.nombre === usuarioEditado.nombre ? usuarioEditado : usuario))
        setUsuarios(changeUsuarios)
    }

    return (
        <div className="container" id="contenedor">
            <div className="container-dos">

                <div className="input-1">
                    <h1 className="titulo">To do list</h1>  {/*Formulario crear usuario o editar* */}
                    <TareaIngresadaComponent
                        usuarioAdd={usuarioAdd}
                        usuarioEditado={usuarioEditado}
                        usuarioEdit={usuarioEdit}
                        setUsuarioEditado={setUsuarioEditado} />

                </div>
                <div className="input-2 ">
                    <h1></h1> {/*Salía tareas de titulo y despues las tareas agregadas*/}
                    {
                        usuarios.map(u =>
                            <ListaComponent
                            nombre={u.nombre}
                                usuario={u}
                                tarjetaDelete={tarjetaDelete}
                                setUsuarioEditado={setUsuarioEditado} />)

                    }

                </div>
                <br />
            </div>
        </div>
    );

}

export default UsuarioComponent;