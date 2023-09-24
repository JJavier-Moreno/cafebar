import { PrismaClient } from "@prisma/client";


export default async function handler(req,res){

    const prisma = new PrismaClient();

    if(req.method === 'POST'){

        const {id} = req.query;  //Aqui pillamos el id porque se lo hemos puedo en la llamada y en el archivo [id];

        const ordenActualizada = await prisma.orden.update({
            where: {
                id: parseInt(id) //Hay que pasar el string a entero porque en el modelo esta como string
            },
            data: {
                estado: true
            }
        })
        res.status(200).json(ordenActualizada);

    }
}

