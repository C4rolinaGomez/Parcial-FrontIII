import { useState } from 'react'
import { useForm } from "./hooks/useForm";
import { receta as data} from '/Users/sandr/Desktop/dh/front-III/parcial-Front/src/helpers/Receta';
import { validacion } from "/Users/sandr/Desktop/dh/front-III/parcial-Front/src/helpers/validacion";
import  RecetaList from '/Users/sandr/Desktop/dh/front-III/parcial-Front/src/Components/RecetaList/recetaList';
import  RecetaForm from './Components/RecetaForm/RecetaForm';


function App() {
  const [recetas, setRecetas] = useState([]);
  const [message, setMessage] = useState("");
  const { form, changed } = useForm({});

  useEffect(() => {
    setRecetas(data);
  }, []);

  const createReceta = (receta) => {
    const { nombre, descripcion } = receta;
    const msg = validacion(nombre, descripcion);

    if (msg.type === "Error") {
      return setMessage(msg.body.message);
    }

    setRecetas([
      ...recetas,
      {
        id: recetas.length,
        nombre,
        descripcion,
      },
    ]);

  };
  
  const deleteReceta = (recetaId) => {
    const res = confirm("¿Estás seguro que desea eliminar la Receta?");
    res ? setRecetas(recetas.filter((receta)=>receta.id !=receta.id)) : null;
    
  };

  return (
    <>
    <RecetaList recetas={recetas} deleteReceta={deleteReceta}/>
    <section>
      <RecetaForm
        form={form}
        changed={changed}
        createReceta={createReceta}
        message={message}
      />
    </section>
    </>
  )
}

export default App
