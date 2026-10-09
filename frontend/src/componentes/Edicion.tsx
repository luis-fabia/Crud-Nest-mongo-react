import { useState } from "react";
import { useEditar } from '../hooks/useEditar'
import '../../src/styles/moda.css'


export function Edicion({ id, estudiante, onGuardar, onCancelar }) {

    const [edicion, setEdicion] = useState({
        nombre: estudiante?.nombre ?? "",
        apellido: estudiante?.apellido ?? "",
        edad: estudiante?.edad ?? "",
        correo: estudiante?.correo ?? "",
        programa: estudiante?.programa ?? "",
    });

    const { editar } = useEditar()

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onCancelar?.();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick} >
            <div className="modal-contenido">
                <h2 className="modal-titulo">Editar estudiante</h2>

                <form
                    className="modal-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        editar(id, edicion);
                        onGuardar?.(edicion);
                    }}
                >
                    <input
                        placeholder="Nombre"
                        value={edicion.nombre}
                        onChange={(e) => setEdicion({ ...edicion, nombre: e.target.value })}
                    />
                    <input
                        placeholder="Apellido"
                        value={edicion.apellido}
                        onChange={(e) => setEdicion({ ...edicion, apellido: e.target.value })}
                    />
                    <input
                        placeholder="Edad"
                        value={edicion.edad}
                        onChange={(e) => setEdicion({ ...edicion, edad: e.target.value })}
                    />
                    <input
                        placeholder="Correo"
                        value={edicion.correo}
                        onChange={(e) => setEdicion({ ...edicion, correo: e.target.value })}
                    />
                    <input
                        placeholder="Programa"
                        value={edicion.programa}
                        onChange={(e) => setEdicion({ ...edicion, programa: e.target.value })}
                    />

                    <div className="modal-acciones">
                        <button
                            type="button"
                            className="btn-cancelar"
                            onClick={onCancelar}
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="btn-actualizar">
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );


}