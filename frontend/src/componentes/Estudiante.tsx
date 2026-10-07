import { useEliminar } from '../hooks/useEliminar.ts';
import { useGetallEstudents } from '../hooks/useGetallEstudents.ts'

export function Estudiante() {

    const {
        setEstudiantes,
        estudiantes,
        mostraEstuidantes,
        getEstudents,
        ocultarEstudiantes } = useGetallEstudents()

    const { eliminar } = useEliminar()

    return (
        <>
            <div className="lista-estudiantes">
                <button
                    className="btn-mostrar"
                    onClick={
                        mostraEstuidantes
                            ? ocultarEstudiantes
                            : getEstudents
                    }
                >
                    {mostraEstuidantes
                        ? "Ocultar estudiantes"
                        : "Mostrar estudiantes"}
                </button>

                {mostraEstuidantes && (
                    <table className="tabla-estudiantes">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                                <th>Correo</th>
                                <th>Programa</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {estudiantes.map((valor) => (
                                <tr key={valor.id}>
                                    <td>{valor.nombre}</td>
                                    <td>{valor.apellido}</td>
                                    <td>{valor.edad}</td>
                                    <td>{valor.correo}</td>
                                    <td>{valor.programa}</td>
                                    <td>
                                        {new Date(
                                            valor.createdAt
                                        ).toLocaleDateString()}
                                    </td>

                                    <td className="acciones">
                                        <button className="btn-editar">
                                            Editar
                                        </button>

                                        <button
                                            className="btn-eliminar"
                                            onClick={async () => {
                                                const datos = await eliminar(valor.id);

                                                if (datos) {
                                                    setEstudiantes(
                                                        estudiantes.filter(
                                                            (estudiante) =>
                                                                estudiante.id !==
                                                                valor.id
                                                        )
                                                    );
                                                }
                                            }}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

        </>
    );

}