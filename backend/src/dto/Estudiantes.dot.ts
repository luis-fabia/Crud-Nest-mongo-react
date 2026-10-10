import { IsString, IsEmail, IsNumber, IsNotEmpty, IsInt, Min, Max, IsOptional, IsIn } from 'class-validator';

export class EstudiantesDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsInt()
    @Min(1)
    @Max(120)
    edad: number;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    correo: string;

    @IsString()
    @IsNotEmpty()
    programa: string;
}


export class UpdateEstudianteDto {
    @IsOptional() @IsString()
    nombre?: string;

    @IsOptional() @IsString()
    apellido?: string;

    @IsOptional() @IsInt()
    edad?: number;

    @IsOptional() @IsEmail()
    correo?: string;

    @IsOptional() @IsString()
    programa?: string;
}