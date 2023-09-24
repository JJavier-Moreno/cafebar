import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { productos } from "../prisma/data/productos";
import { toast } from 'react-toastify'
import { useRouter } from "next/router";


const CafeContext = createContext();

const CafeProvider = ({ children }) => {

    const router = new useRouter();

    const [categorias, setCategorias] = useState([]);

    const [categoriaActual, setCategoriaActual] = useState({});

    const [producto, setProducto] = useState({})

    const [modal, setModal] = useState(false);

    const [pedido, setPedido] = useState([]);
    const [nombre, setNombre] = useState('');
    const [total, setTotal] = useState(0);



    useEffect(() => {
        const obtenerCategorias = async () => {
            try {

                const url = '/api/categorias'

                const { data } = await axios(url);

                setCategorias(data);


            } catch (error) {
                console.error(error);
            }
        }

        obtenerCategorias();

    }, [])

    useEffect(() => {

        setCategoriaActual(categorias[0])
    }, [categorias])

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0);
        setTotal(nuevoTotal);
    }, [pedido])

    const handleClickCategoria = id => {

        const categoria = categorias.filter((c) => c.id === id);
        setCategoriaActual(categoria[0]);
        router.push('/');
    }

    const handleSetProducto = (producto) => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal);
    }

    const handleAgregarPedido = ({ categoria, ...producto }) => { //Esto lo que hace es sacar categoria e imagen del objeto y toma una copia del objeto producto sin eso
        //Comprobar si un producto ya esta en el carrito
        if (pedido.some(productoState => productoState.id === producto.id)) {
            //Actualizar cantidad
            const pedidoActualizado = pedido.map((productoState) => (
                productoState.id === producto.id ? producto : productoState
            ))

            setPedido(pedidoActualizado);
            toast.success('Guardado correctamente')

        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido')
        }

        setModal(false);

    }

    const handleEditarCantidades = (id) => {

        const productoActualizar = pedido.filter(productoState => productoState.id === id);
        setProducto(productoActualizar[0]);
        setModal(!modal)
    }

    const handleEliminarProducto = (id) => {
        const pedidoActualizado = pedido.filter(prod => prod.id !== id);

        setPedido(pedidoActualizado);
    }



    const enviarPedido = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/ordenes', {
                pedido,
                nombre,
                total,
                fecha: Date.now().toString(),
            })

            //Resetear la app

            setCategoriaActual(categorias[0]);
            setPedido([]);
            setNombre('');
            setTotal(0);

            toast.success('Pedido realizado correctamente');

            setTimeout(() => {
                router.push('/');
            }, 3000)

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CafeContext.Provider
            value={{
                categorias,
                categoriaActual,
                setCategoriaActual,
                handleClickCategoria,
                categoriaActual,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                handleAgregarPedido,
                pedido,
                handleEditarCantidades,
                handleEliminarProducto,
                nombre,
                setNombre,
                enviarPedido,
                total


            }}>
            {children}

        </CafeContext.Provider>
    )
}

export {
    CafeProvider
}

export default CafeContext