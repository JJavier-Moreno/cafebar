import { categorias } from "./data/categorias";
import { productos } from "./data/productos";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

const main = async () : Promise<void> => {
    try{

        await prisma.categoria.createMany({ //Agrega todas las categorias que están en data
            data: categorias
        })

        await prisma.producto.createMany({ //Agrega todas los productos que están en data
            data: productos
        })

    }catch(error){
        console.error(error);
    }
}

main();