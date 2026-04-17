# Decisiones IA

Herramienta w3b para la toma de decisiones razonadas mediante inteligencia artificial.

## Objetivo

Esta aplicación genera prompts estructurados para obtener recomendaciones fundamentadas de cualquier IA de libre acceso. Está diseñada para analizar cuatro casos de uso empresariales donde la automatización con IA puede generar valor.

## Estructura del proyecto

```
decisiones/
├── index.html          # Página principal
├── style.css           # Estilos
├── app.js              # Lógica de la aplicación
├── data/
│   └── ejemplos.js     # Datos de los 4 casos
└── README.md
```

## Casos disponibles

1. **Admisión y becas universitarias**: Analiza la viabilidad de automatizar la prevalidación de solicitudes.
2. **Tickets internos de soporte TI**: Evalúa la clasificación automática de tickets.
3. **Devoluciones y fraude en e-commerce**: Equilibra automatizaciones con control de fraude.
4. **Asistente interno de documentación corporativa**: Compara arquitecturas y políticas de uso.

## Uso

1. Selecciona uno de los cuatro casos
2. Rellena los datos del formulario
3. Añade contexto adicional si es necesario
4. Pulsa "Generar Prompt"
5. Copia el prompt generado y úsalo en tu IA favorita
6. Recibe una recomendación estructurada

## Limitaciones

- Los prompts generados son un punto de partida, no respuestas definitivas
- La calidad de la recomendación depende de la IA utilizada y los datos proporcionados
- Es necesario revisar críticamente cada recomendación antes de tomar decisiones

## Tecnologías

- HTML5, CSS3, JavaScript (vanilla)
- Sin dependencias externas
- Publicada con GitHub Pages
