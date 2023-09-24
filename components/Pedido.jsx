import Image from "next/image";
import formatearDinero from "../helpers";
import { toast } from 'react-toastify'
import axios from "axios";

const Pedido = ({ orden }) => {

  const { id, nombre, total, pedido } = orden;

  const completarOrden = async () => {
    try {
      await axios.post(`/api/ordenes/${id}`)
      toast.success('Pedido Listo')
    } catch (error) {
      toast.error('Hubo un error')
    }
  }

  return (
    <div className="border space-y-5 p-10">
      <h1 className='text-2xl font-bold'>Orden</h1>
      <p className='text-lg font bold my-10'>
        Cliente: {nombre}
      </p>

      <div>
        {pedido.map((producto) => (
          <div key={producto.id} className="py-3 flex border-b last-of-type:border-0 items-center">
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${producto.imagen}.jpg`}
                alt={`Imagen producto ${producto.nomre}`}
              />
            </div>

            <div className="p-5 space-y-2">
              <h4 className="text-xl text-amber-500 font-bold">{producto.nombre}</h4>
              <p className="text-lg font-bold">Cantidad: {producto.cantidad}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">
          Total a pagar: {formatearDinero(total)}
        </p>

        <button
          type="button"
          onClick={completarOrden}
          className="bg-indigo-600 hover:bg-indigo-800  text-white mt-5 md:mt-0 py-3 px-10 uppercase
          font-bold rounded-lg">
          Completar Pedido
        </button>
      </div>

    </div>
  )
}

export default Pedido