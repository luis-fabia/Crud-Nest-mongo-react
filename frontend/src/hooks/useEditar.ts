export function useEditar() {


    const editar = async (id, edicion) => {

        try {
            const request = await fetch(`http://localhost:3000/estudiantes/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(edicion)
            }
            )

            if (!request.ok) throw new Error("No fue posible la conexiones")
                
        }


        catch(error) {
            console.log(error)
        }

    }

    return {
        editar
    }

}