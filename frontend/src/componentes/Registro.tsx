import React, { useState } from "react";
import { useCrearUsuario } from '../hooks/useCrearUsario'
import type { RegistroUsuari } from '../types/types'


export function RegistroEstudiante() {


    const [registro, setRegistro] = useState<RegistroUsuari>({
        nombre: "",
        apellido: "",
        edad: 0,
        correo: "",
        programa: ""
    })

    const [error, setError] = useState("")

    const creacion = useCrearUsuario()


    const guardarReistros = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")
        if (!registro.nombre.trim()) {
            setError("Nombre Invalido")
            return
        }

        if (!registro.apellido.trim()) {
            setError("Apellido Invalido")
            return
        }

        if (registro.edad <= 0 || registro.edad > 120) {
            setError("Edad inválida")
            return
        }

        if (!registro.correo.trim()) {
            setError("Correo Invalida")
            return
        }

        if (!registro.programa.trim()) {
            setError("Programa Invalido ")
            return
        }

        await creacion(registro)

    }

    return (
        <>
            <div className="contenedor">
            <h2>Registro de Estudiante</h2>

            <form className="formulario" onSubmit={guardarReistros}>
                <input
                    type="text"
                    placeholder="Nombre"
                    onChange={(e) =>
                        setRegistro({ ...registro, nombre: e.target.value })
                    }
                />

                <input
                    type="text"
                    placeholder="Apellido"
                    onChange={(e) =>
                        setRegistro({ ...registro, apellido: e.target.value })
                    }
                />

                <input
                    type="number"
                    placeholder="Edad"
                    onChange={(e) =>
                        setRegistro({ ...registro, edad: Number(e.target.value) })
                    }
                />

                <input
                    type="email"
                    placeholder="Correo"
                    onChange={(e) =>
                        setRegistro({ ...registro, correo: e.target.value })
                    }
                />

                <input
                    type="text"
                    placeholder="Programa"
                    onChange={(e) =>
                        setRegistro({ ...registro, programa: e.target.value })
                    }
                />

                <button className="btn-guardar" type="submit">
                    Guardar
                </button>
            </form>

            {error && <p className="mensaje-error">{error}</p>}
        </div>
    

        </>
    );
}