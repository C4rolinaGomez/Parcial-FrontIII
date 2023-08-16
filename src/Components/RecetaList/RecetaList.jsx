import card from "../Card/card";
import "./RecetaList.css";




const recetaList = ({recetas, deleteReceta}) => {
  return (
    <section className="section_receta">
      {recetaList.length === 0 ? (
        <p>Aún no ha sido creada ninguna receta</p>
      ) : (
        <div className="receta_container">
          {recetas.map(({ id, nombre, descripcion }, index) => {
            return (

                <Card
                key={index}
                id={id}
                nombre={nombre}
                descripcion={descripcion}
                deleteReceta={deleteReceta}
                />

                
             
                
            
                
            )
          })}
        </div>
      )}
    </section>
  )
}

export default recetaList