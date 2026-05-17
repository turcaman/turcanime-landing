export interface Release {
  version: string;
  title: string;
  changes: string[]; // HTML strings
  note?: string;
}

export const releases: Release[] = [
  {
    version: "v1.8.3",
    title: "Mantenimiento y Control",
    changes: [
      "<strong>Gestión de datos:</strong> Nueva opción en Ajustes para refrescar la conexión de forma segura sin perder tu historial.",
      "<strong>Interfaz mejorada:</strong> Diseño más limpio y coherente en los ajustes de la aplicación.",
      "<strong>Estabilidad:</strong> Refactorización profunda para mejorar la robustez de la red y el reproductor."
    ]
  },
  {
    version: "v1.8.2",
    title: "Mantenimiento interno",
    changes: [
      "<strong>Optimización de infraestructura:</strong> Actualizaciones técnicas para asegurar la compatibilidad y estabilidad del sistema."
    ]
  },
  {
    version: "v1.8.1",
    title: "Calidad y Coherencia",
    changes: [
      "<strong>Refactorización de código:</strong> Limpieza y estandarización para una app más sólida.",
      "<strong>Consistencia visual:</strong> Ajustes en el sistema de diseño para una experiencia más uniforme."
    ]
  },
  {
    version: "v1.8.0",
    title: "Rediseño y Rendimiento",
    changes: [
      "<strong>Nueva Home:</strong> Rediseño visual hacia una cuadrícula de catálogo.",
      "<strong>Reproductor renovado:</strong> Integración de extracción HLS para una carga más rápida.",
      "<strong>Búsqueda instantánea:</strong> Resultados al momento con sugerencias mejoradas.",
      "<strong>Historial inteligente:</strong> Progreso guardado inmediatamente al elegir servidor."
    ]
  },
  {
    version: "v1.7.6",
    title: "Pulido de Experiencia",
    changes: [
      "<strong>Navegación fluida:</strong> La barra inferior ahora reacciona correctamente al hacer scroll.",
      "<strong>Seguir viendo:</strong> Solución a problemas con el historial de visualización.",
      "<strong>Optimización interna:</strong> Ajustes para una app más ágil."
    ]
  },
  {
    version: "v1.7.5",
    title: "Configuración y Estabilidad",
    changes: [
      "<strong>Nuevo menú de Ajustes:</strong> Introducción experimental de herramientas para gestionar la caché.",
      "<strong>Reproducción estable:</strong> Mejoras en la reproducción y manejo de errores.",
      "<strong>Consistencia visual:</strong> Refactorización del sistema de espaciado."
    ],
    note: "Esta fue una versión experimental. Si vienes de una versión anterior a la 1.7.5, te recomendamos desinstalar la aplicación antes de actualizar para asegurar una configuración perfecta."
  },
  {
    version: "v1.7.4",
    title: "Lanzamiento Inicial",
    changes: [
      "<strong>Lanzamiento inicial:</strong> Primera versión estable de Turcanime.",
      "<strong>Funcionalidades clave:</strong> Estreno de la navegación por pestañas, buscador avanzado y reproductor integrado."
    ]
  }
];
