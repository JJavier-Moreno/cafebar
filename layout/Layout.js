import Head from "next/head"
import SideBar from "../components/SideBar"
import useCafe from "../hooks/useCafe"
import Modal from 'react-modal'
import ModalProducto from "../components/ModalProducto"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pasos from "../components/Pasos"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#__next'); //Este es el elemento principal


export default function Layout({ children, pagina }) {


    const { modal } = useCafe();

    return (
        <>
            <Head>
                <title>Café - {pagina} </title>
                <meta name="description" content="Cafe Bar"></meta>
            </Head>

            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <SideBar />
                </aside>

                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10 mt-10">
                        <Pasos/>
                        {children}
                    </div>
                </main>

            </div>


            {modal && (
                <Modal
                    isOpen={modal}
                    style={customStyles}
                >
                    <ModalProducto />
                </Modal>
                
            )}

            <ToastContainer />
        </>
    )
}
