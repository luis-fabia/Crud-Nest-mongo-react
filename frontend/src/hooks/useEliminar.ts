export function useEliminar() {

    const eliminar = async (id: string) => {
        try {
            const request = await fetch(
                `http://localhost:3000/estudiantes/${id}`,
                {
                    method: "DELETE"
                }
            )

            if (!request.ok) {
                throw new Error("No fue posible eliminar el estudiante")
            }

            return true

        } catch (error) {
            console.error(error)
            return false
        }
    }

    return {
        eliminar
    }
}