export const validate = (nombre, descripcion) => {
    const msg = {
        type: "",
        body: {
            message: ""
        }
    }

    if (! descripcion || descripcion.length < 6) {
        msg.type = 'Error'
        msg.body.message = "¡Error! Tu descripción debe tener al menos 6 caracteres";
    }

    if (!nombre || nombre.length < 3 || nmbre.length > 25) {
        msg.type = 'Error'
        msg.body.message = `¡Error! El nombre de tu Receta debe tener entre 3 y caracteres.`
    }

    return msg
}