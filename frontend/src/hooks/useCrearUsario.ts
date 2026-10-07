import type {RegistroUsuari} from '../types/types'

export function useCrearUsuario() {

    const  CrearUsuario = async (registro: RegistroUsuari) =>  {
        
        const request = await fetch('http://localhost:3000/estudiantes', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(registro)
        })
        
        if (!request.ok) {
            throw new Error ("No fue posible la Conexion")
        } 

        const datos = await request.json()
        
        return datos


    }

    return CrearUsuario

}