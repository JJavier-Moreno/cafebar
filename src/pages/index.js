import Head from 'next/head'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client' //Este se instala siempre que vayamos a interactuar con la BBDD
import Layout from '../../layout/Layout'
import useCafe from '../../hooks/useCafe'
import Producto from '../../components/Producto'


export default function Home({ categorias }) {

  const { categoriaActual } = useCafe();

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className='text-4xl font-black'>{categoriaActual?.nombre}</h1>
      <p className='text-2xl my-10'>
        Realiza tu pedido a continuación
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoriaActual?.productos?.map((producto) => (
          <Producto key={producto.id}
            producto={producto}
          />
        ))}
      </div>




    </Layout>
  )
}

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient();

//   const categorias = await prisma.categoria.findMany();

//   return {
//     props: {
//       categorias,
//     }
//   }
// }

