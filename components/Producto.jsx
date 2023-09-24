import Image from "next/image"
import formatearDinero from "../helpers";
import useCafe from "../hooks/useCafe";

const Producto = ({producto}) => {

    const {nombre, imagen, precio} = producto;

    const {handleSetProducto,handleChangeModal} = useCafe();


  return (
    <div className='boder p-3'>
            <Image 
            width={400}
            height={500}
            src={`/assets/img/${imagen}.jpg`}
            alt={`Imagen de ${nombre}`}
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
            </div>

            <button
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
            onClick={()=> {
                handleChangeModal()
                handleSetProducto(producto)   
            }
            }
            >
                Agregar
            </button>
    </div>
  )
}

export default Producto