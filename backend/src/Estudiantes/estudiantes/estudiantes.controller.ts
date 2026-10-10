import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import {EstudiantesDto, UpdateEstudianteDto} from '../../dto/Estudiantes.dot.js'
import {EstudiantesService} from './estudiantes.service.js'
import path from 'path';

@Controller('estudiantes')
export class EstudiantesController {

    constructor(private estudiantesService: EstudiantesService) {}

    @Post()
    crearUsuario(@Body() datos: EstudiantesDto) {
            return this.estudiantesService.creacion(datos)
    }

    @Get()
    GetallEstudens() {
        return this.estudiantesService.GetallEstudents()
    }

    @Delete(':id')
    deleteEstudent(@Param('id') id: string ){
        return this.estudiantesService.deleteEstudent(id)

    }

    @Patch(':id')
    updateEstudent(
        @Param('id') id: string,
        @Body() body: UpdateEstudianteDto ) {
            return this.estudiantesService.updateEstuden(id, body)
    }

}
