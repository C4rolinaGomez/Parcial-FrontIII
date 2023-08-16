import React from 'react'

export const RecetaForm = (form, createReceta, changed, message) => {

    const saveReceta = (e) => {
        e.preventDefault();
    
        createReceta(form);
    };

  return (
    <form onSubmit={saveReceta} className="form">
      <h1>Crear Receta</h1>
      <div className="container_input_form">
        <label htmlFor="nombre" className="label_form">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          onChange={changed}
          placeholder="Por favor ingresa el Nombre de tu Receta"
        />
      </div>
      <div className="container_input_form">
        <label htmlFor="description" className="label_form">
          Descripcion
        </label>
        <textarea
          name="descripcion"
          onChange={changed}
          placeholder="Ingresa por favor la descripción de tu Receta"
        ></textarea>
      </div>
      <button type="submit" className="btn_save">
        Guardar
      </button>
      <h5>{message}</h5>
    </form>
  )

  
  
}
