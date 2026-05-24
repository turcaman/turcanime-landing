export interface Release {
  version: string;
  title: string;
  changes: string[]; // HTML strings
  note?: string;
}

export const releases: Release[] = [
  {
    version: "v1.8.9",
    title: "Mejoras de Seguridad",
    changes: [
      "<strong>Firma de producción:</strong> Configuración de firma oficial para corregir falsos positivos en Google Play Protect."
    ]
  },
  {
    version: "v1.8.8",
    title: "Mejoras de Estabilidad",
    changes: [
      "<strong>Carga estable:</strong> Corregimos un error donde el indicador de carga desaparecía antes de que los datos estuvieran listos.",
      "<strong>Optimización:</strong> Ajustes internos para una experiencia más sólida."
    ]
  },
  {
    version: "v1.8.7",
    title: "Optimización de Inicio",
    changes: [
      "<strong>Carga instantánea:</strong> Eliminamos parpadeos visuales al abrir la aplicación.",
      "<strong>Precarga inteligente:</strong> Mejoramos la gestión de datos para que todo esté listo desde el primer segundo."
    ]
  },
  {
    version: "v1.8.6",
    title: "Conectividad y Estabilidad",
    changes: [
      "<strong>Auto-recuperación:</strong> La app ahora detecta cambios de red y gestiona la sesión automáticamente.",
      "<strong>Correcciones visuales:</strong> Mejoramos la alineación en búsquedas recientes y la respuesta ante errores."
    ]
  },
  {
    version: "v1.8.5",
    title: "Fiabilidad de Caché",
    changes: [
      "<strong>Carga corregida:</strong> Ajustamos el sistema de caché para asegurar que todos los episodios carguen correctamente."
    ]
  },
  {
    version: "v1.8.4",
    title: "Mejoras en Reproducción",
    changes: [
      "<strong>Reproductor preciso:</strong> Solucionamos un error que cargaba el episodio incorrecto.",
      "<strong>Caché optimizada:</strong> Ajustes para garantizar la selección exacta del video."
    ]
  },
  {
    version: "v1.8.3",
    title: "Control y Gestión",
    changes: [
      "<strong>Refresco seguro:</strong> Nueva opción en Ajustes para refrescar la conexión sin perder el historial.",
      "<strong>Interfaz:</strong> Ajustamos el diseño de los ajustes para que sea más limpio y consistente."
    ]
  },
  {
    version: "v1.8.2",
    title: "Mantenimiento",
    changes: [
      "<strong>Compatibilidad:</strong> Mejoras técnicas para asegurar el funcionamiento estable del sistema."
    ]
  },
  {
    version: "v1.8.1",
    title: "Calidad Visual",
    changes: [
      "<strong>Diseño consistente:</strong> Ajustamos el sistema visual para una experiencia más uniforme."
    ]
  },
  {
    version: "v1.8.0",
    title: "Rediseño y Rendimiento",
    changes: [
      "<strong>Nueva Home:</strong> Rediseñamos la pantalla principal a una cuadrícula de catálogo.",
      "<strong>Reproductor renovado:</strong> Nueva integración HLS para una carga de video más rápida.",
      "<strong>Búsqueda mejorada:</strong> Resultados instantáneos con mejores sugerencias."
    ]
  },
  {
    version: "v1.7.6",
    title: "Experiencia de Navegación",
    changes: [
      "<strong>Barra de navegación:</strong> Corregimos el comportamiento de la barra inferior al hacer scroll."
    ]
  },
  {
    version: "v1.7.5",
    title: "Configuración inicial",
    changes: [
      "<strong>Ajustes:</strong> Introducción del menú de configuración.",
      "<strong>Correcciones:</strong> Estabilizamos la reproducción y mejoramos el historial de visualización."
    ]
  },
  {
    version: "v1.7.4",
    title: "Lanzamiento Inicial",
    changes: [
      "<strong>Lanzamiento:</strong> Primera versión estable de Turcanime.",
      "<strong>Funcionalidades:</strong> Navegación, buscador y reproductor integrado."
    ]
  }
];
