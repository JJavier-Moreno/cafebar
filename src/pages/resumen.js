import Layout from "../../layout/Layout"
import useCafe from "../../hooks/useCafe"
import ResumenProducto from "../../components/ResumenProducto";

export default function Resumen() {

    const { pedido } = useCafe();

    return (
        <Layout pagina={'Resumen'}>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Revisa tu Pedido</p>

            {pedido.length === 0 ? (
                <p className="text-center text-2xl">No hay elementos en el pedido</p>
            )
            : (
                    pedido.map((producto) => (
                        <ResumenProducto 
                        key={producto.id}
                        producto={producto} />
                    ))
                )}
        </Layout>
    )

}