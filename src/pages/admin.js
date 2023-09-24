import AdminLayout from "../../layout/AdminLayout"
import useSWR from 'swr'
import axios from "axios"
import Pedido from "../../components/Pedido"

export default function Admin() {

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)

    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100}) //El fetcher es una funcion

    return (

        <AdminLayout pagina={'Admin'}>
            <h1 className='text-4xl font-black'>Panel de Administración</h1>
            <p className='text-2xl my-10'>
                Administra las ordenes
            </p>

            {data && data.length ? data.map((pedido)=>(
                <Pedido 
                key={pedido.id}
                orden={pedido}
                />
            )) : <p>No hay pedidios pedientes</p>}
        </AdminLayout>
    )
}