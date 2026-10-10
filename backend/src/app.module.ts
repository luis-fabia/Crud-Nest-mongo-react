import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EstudiantesModule } from './Estudiantes/estudiantes/estudiantes.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), PrismaModule, EstudiantesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
