import { useState } from 'react';
import { useEliminar } from '../hooks/useEliminar.ts';
import { useGetallEstudents } from '../hooks/useGetallEstudents.ts'
import { Edicion } from './Edicion.tsx'

export function Estudiante() {

    const {
        setEstudiantes,
        estudiantes,
        mostraEstuidantes,
        getEstudents,
        ocultarEstudiantes } = useGetallEstudents()

    const { eliminar } = useEliminar()

    const [idEditando, setidEditando] = useState(null)

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
                                        <button className="btn-editar"
                                            onClick={() => {
                                                setidEditando(valor.id)
                                                console.log(valor.id)
                                            }
                                            }

                                        >
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


            {idEditando && (
                <Edicion
                    id={idEditando}
                    estudiante={estudiantes.find(e => e.id === idEditando)}
                    onGuardar={(cambios) => {
                        setEstudiantes((estudiantes) =>
                            estudiantes.map((e) =>
                                e.id === idEditando ? { ...e, ...cambios } : e
                            )
                        );
                        setidEditando(null);
                    }}
                    onCancelar={() => setidEditando(null)}
                />
            )}




        </>
    );

}