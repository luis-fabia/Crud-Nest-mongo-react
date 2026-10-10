import { Injectable } from '@nestjs/common';
import { EstudiantesDto, UpdateEstudianteDto } from '../../dto/Estudiantes.dot.js'
import { PrismaService } from '../../prisma/prisma.service.js';


@Injectable()
export class EstudiantesService {

    constructor(private prismaService: PrismaService) { }

    async creacion(body: EstudiantesDto) {
        return await this.prismaService.estudiante.create({
            data: body
        })
    }


    async GetallEstudents() {
        return await this.prismaService.estudiante.findMany()
    }

    async deleteEstudent(id: string) {
        await this.prismaService.estudiante.delete({
            where: {
                id: id
            }
        })
    }

    async updateEstuden(id: string, body: UpdateEstudianteDto) {
        await this.prismaService.estudiante.update({
            where: { id },
            data: { body }
        })
    }
}
