export class BasicUser {
    constructor(name?: string, password?: string) {}
    name: string;
    password: string;
}

export class BasicRegisterUser {
    constructor(
        nombres?: string, apellidos?: string, fechaNac?: string, telefono?: string, 
        correo?: string, direccion?: string, usuario?: string, pass?: string
    ){}
    nombres: string
    apellidos: string
    fechaNac: string
    telefono: string
    correo: string
    direccion: string
    name: string;
    password: string;
}