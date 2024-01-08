// Models
import { Job } from "../models/job";

export const JOBS: Job[] = [
    new Job({
        job: "Desarrollador Full Stack",
        company: "Triple I Soluciones",
        initDate: new Date(2022, 6),
        endDate: undefined,
        technologies: ["Angular", "Angular Material", "RXJS", "Tailwind CSS", "Golang", "Mongo DB"],
        activities: [
            "Mejorar la performance de la aplicación mediante Lazy Loading, optimización de peticiones HTTP a la API, y mejores prácticas de desarrollo.",
            "Migración de Angular desde la versión 13 a 17, actualizando librerías y dependencias, así como migrar componentes de módulos a standalone y la nueva sintaxis de Angular.",
            "Dar capacitación y soporte a los nuevos miembros del equipo.",
            "Coordinar al equipo de desarrollo para el desarrollo de nuevas funciones.",
        ],
    }),
];