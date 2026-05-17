export interface Release {
  version: string;
  title: string;
  changes: string[]; // HTML strings
}

export const releases: Release[] = [
  {
    version: "v1.8.3",
    title: "Mantenimiento y Control",
    changes: [
      "<strong>Limpieza total de caché:</strong> Nueva función en Ajustes para refrescar la conexión sin perder tu historial.",
      "<strong>Interfaz mejorada:</strong> Diseño más limpio y coherente en los ajustes de la aplicación.",
      "<strong>Mayor estabilidad:</strong> Refactorización profunda de los servicios de red y del reproductor."
    ]
  },
  {
    version: "v1.8.2",
    title: "Pulido Visual",
    changes: [
      "<strong>Mejoras visuales:</strong> Ajustes de diseño para una interfaz más pulida.",
      "<strong>Estabilidad:</strong> Correcciones en la gestión de componentes y recursos."
    ]
  },
  {
    version: "v1.8.1",
    title: "Estabilidad y Navegación",
    changes: [
      "<strong>Navegación corregida:</strong> La barra inferior ahora reacciona correctamente al hacer scroll.",
      "<strong>Seguir viendo:</strong> Restaurada la funcionalidad del historial de visualización.",
      "<strong>Optimización:</strong> Refactorización del sistema de caché para mayor robustez."
    ]
  },
  {
    version: "v1.8.0",
    title: "Rediseño y Rendimiento",
    changes: [
      "<strong>Nueva Home:</strong> Rediseño completo hacia un catálogo más visual.",
      "<strong>Reproductor renovado:</strong> Carga de video optimizada y más estable.",
      "<strong>Búsqueda instantánea:</strong> Resultados al momento con sugerencias mejoradas.",
      "<strong>Historial:</strong> Guardado de progreso inmediato al elegir servidor."
    ]
  },
  {
    version: "v1.7.6",
    title: "Pulido de Experiencia",
    changes: [
      "<strong>Navegación más cómoda:</strong> La barra inferior ahora responde al scroll para darte más espacio al ver contenido.",
      "<strong>Historial restaurado:</strong> Solucionado el acceso a 'Seguir viendo' para que retomes tus series sin problemas.",
      "<strong>Optimización interna:</strong> Ajustes de código para una app más ligera y ágil."
    ]
  },
  {
    version: "v1.7.5",
    title: "Configuración y Estabilidad",
    changes: [
      "<strong>Nuevo menú de Ajustes:</strong> Ahora tienes el control para gestionar el espacio de la app directamente desde el menú.",
      "<strong>Reproducción más estable:</strong> Mejoras en el reproductor para reducir errores al cargar videos.",
      "<strong>Consistencia visual:</strong> Ajustes en el diseño para que todo se vea más uniforme y pulido."
    ]
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
