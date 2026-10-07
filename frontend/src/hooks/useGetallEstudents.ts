import { useState } from "react"

export function useGetallEstudents() {

    const [estudiantes, setEstudiantes] = useState([])
    const [mostraEstuidantes, setMostrarEstudiantes] = useState(false)

    const getEstudents = async () => {
        try {
            const request = await fetch("http://localhost:3000/estudiantes", {
                method: "GET"
            })

            if (!request.ok) throw new Error ("No fue posible la Conexion")

            const datos = await request.json()

            setEstudiantes(datos)
            setMostrarEstudiantes(true)
        }

        catch(error) {
            throw new Error ("No fue posible la Conexion")
        }
    }

    const ocultarEstudiantes = () => {
        setMostrarEstudiantes(false)
    }

    return {
        estudiantes,
        mostraEstuidantes,
        getEstudents,
        setEstudiantes,
        ocultarEstudiantes
    }

}