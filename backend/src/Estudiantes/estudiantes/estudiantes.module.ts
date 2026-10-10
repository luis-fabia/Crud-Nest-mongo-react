import { Module } from '@nestjs/common';
import { EstudiantesController } from './estudiantes.controller.js';
import { EstudiantesService } from './estudiantes.service.js';
import { PrismaModule } from '../../prisma/prisma.module.js'

@Module({
  imports: [PrismaModule],
  controllers: [EstudiantesController],
  providers: [EstudiantesService]
})
export class EstudiantesModule {}
