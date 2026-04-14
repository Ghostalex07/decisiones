const casosData = {
  "casos": [
    {
      "id": 1,
      "nombre": "Admisión y becas universitarias",
      "descripcion": "Decidir si conviene desplegar un asistente con IA para prevalidar solicitudes y resumir expedientes sin perder equidad ni trazabilidad.",
      "campos": [
        {
          "id": "volumen",
          "label": "Volumen de solicitudes mensuales",
          "tipo": "numero",
          "placeholder": "Ej: 500"
        },
        {
          "id": "expedientes_incompletos",
          "label": "Porcentaje de expedientes incompletos (%)",
          "tipo": "numero",
          "placeholder": "Ej: 35"
        },
        {
          "id": "plazo_resolucion",
          "label": "Plazo máximo de resolución (días)",
          "tipo": "numero",
          "placeholder": "Ej: 15"
        },
        {
          "id": "sensibilidad_dato",
          "label": "Nivel de sensibilidad del dato",
          "tipo": "rango",
          "min": 1,
          "max": 5
        },
        {
          "id": "revision_humana",
          "label": "¿Se requiere revisión humana obligatoria?",
          "tipo": "booleano"
        }
      ],
      "prompts_base": [
        "Analiza si es viable automatizar la prevalidación de solicitudes universitarias.",
        "Compara los riesgos de automatizar comprobaciones y automatizar decisiones sensibles.",
        "Propón una solución que combine IA y control humano para garantizar equidad."
      ],
      "consideraciones": [
        "Diferenciar entre automatizar comprobaciones y automatizar decisiones sensibles",
        "Garantizar trazabilidad de cada expediente",
        "Mantener equidad en la evaluación"
      ]
    },
    {
      "id": 2,
      "nombre": "Tickets internos de soporte TI",
      "descripcion": "Decidir si conviene automatizar la clasificación y el escalado inicial de tickets internos.",
      "campos": [
        {
          "id": "tickets_mes",
          "label": "Tickets de soporte al mes",
          "tipo": "numero",
          "placeholder": "Ej: 200"
        },
        {
          "id": "tiempo_respuesta",
          "label": "Tiempo medio de primera respuesta (horas)",
          "tipo": "numero",
          "placeholder": "Ej: 24"
        },
        {
          "id": "tickets_repetidos",
          "label": "Porcentaje de tickets repetidos (%)",
          "tipo": "numero",
          "placeholder": "Ej: 40"
        },
        {
          "id": "incidentes_criticos",
          "label": "¿Existen incidentes críticos frecuentes?",
          "tipo": "booleano"
        },
        {
          "id": "sla_objetivo",
          "label": "SLA objetivo para resolución (horas)",
          "tipo": "numero",
          "placeholder": "Ej: 4"
        }
      ],
      "prompts_base": [
        "Evalúa si la clasificación automática de tickets es viable para este volumen.",
        "Diferencia entre tickets estándar e incidentes críticos.",
        "Propón una estrategia de escalado que use IA solo como asistente."
      ],
      "consideraciones": [
        "Separar tickets estándar de incidentes críticos",
        "La IA solo puede asistir, no tomar decisiones de escalado crítico",
        "Mantener tiempos de respuesta aceptables"
      ]
    },
    {
      "id": 3,
      "nombre": "Devoluciones y fraude en e-commerce",
      "descripcion": "Decidir si el negocio debe automatizar devoluciones estándar y reservar revisión humana para fraude y excepciones.",
      "campos": [
        {
          "id": "devoluciones_mes",
          "label": "Devoluciones mensuales",
          "tipo": "numero",
          "placeholder": "Ej: 150"
        },
        {
          "id": "fraude_estimado",
          "label": "Porcentaje estimado de fraude (%)",
          "tipo": "numero",
          "placeholder": "Ej: 8"
        },
        {
          "id": "tiempo_resolucion",
          "label": "Tiempo medio de resolución devoluciones (días)",
          "tipo": "numero",
          "placeholder": "Ej: 5"
        },
        {
          "id": "valor_medio",
          "label": "Valor medio del pedido (€)",
          "tipo": "numero",
          "placeholder": "Ej: 75"
        },
        {
          "id": "revision_alto_valor",
          "label": "Revisión humana para pedidos > (€)",
          "tipo": "numero",
          "placeholder": "Ej: 200"
        }
      ],
      "prompts_base": [
        "Analiza el equilibrio entre automatizar devoluciones y controlar el fraude.",
        "Compara el impacto en experiencia del cliente vs coste del fraude.",
        "Propón un sistema mixto: automatizar lo estándar, revisar lo sospechoso."
      ],
      "consideraciones": [
        "Equilibrio entre experiencia del cliente y control del fraude",
        "Umbrales claros para intervención humana",
        "Métricas de detección de fraude"
      ]
    },
    {
      "id": 4,
      "nombre": "Asistente interno de documentación corporativa",
      "descripcion": "Decidir qué arquitectura y qué política de uso convienen para un asistente que consulta documentación interna sin disparar coste ni riesgo.",
      "campos": [
        {
          "id": "usuarios_activos",
          "label": "Usuarios activos mensuales",
          "tipo": "numero",
          "placeholder": "Ej: 500"
        },
        {
          "id": "consultas_usuario",
          "label": "Consultas medias por usuario al mes",
          "tipo": "numero",
          "placeholder": "Ej: 30"
        },
        {
          "id": "sensibilidad_doc",
          "label": "Nivel de sensibilidad documental",
          "tipo": "rango",
          "min": 1,
          "max": 5
        },
        {
          "id": "latencia_max",
          "label": "Latencia máxima tolerable (segundos)",
          "tipo": "numero",
          "placeholder": "Ej: 3"
        },
        {
          "id": "presupuesto_mes",
          "label": "Presupuesto mensual disponible (€)",
          "tipo": "numero",
          "placeholder": "Ej: 500"
        }
      ],
      "prompts_base": [
        "Compara arquitecturas para un asistente de documentación interna.",
        "Analiza el coste de inferencia vs beneficios de productividad.",
        "Propón una configuración que minimice riesgos de privacidad."
      ],
      "consideraciones": [
        "Comparar arquitectura, coste de inferencia y privacidad",
        "Tamaño del contexto y trazabilidad de respuestas",
        "No superar el presupuesto sin justificado"
      ]
    }
  ]
};
