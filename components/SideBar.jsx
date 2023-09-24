import Image from "next/image"
import useCafe from "../hooks/useCafe"
import Categoria from "./Categoria";

const SideBar = () => {

  const { categorias } = useCafe();


  return (
    <>
      <Image
        width={200}
        height={100}
        src={'/assets/img/logo.svg'}
        alt="Imagen logotipo"
        className="m-10"
        
      />

      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id}
            categoria={categoria}
          />
        ))}
      </nav>



    </>
  )
}

export default SideBar