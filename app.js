(function() {
    'use strict';

    let casoSeleccionado = null;

    const elementos = {
        casosGrid: document.getElementById('casosGrid'),
        formularioCaso: document.getElementById('formularioCaso'),
        casoNombre: document.getElementById('casoNombre'),
        casoDescripcion: document.getElementById('casoDescripcion'),
        camposFormulario: document.getElementById('camposFormulario'),
        listaConsideraciones: document.getElementById('listaConsideraciones'),
        btnGenerarPrompt: document.getElementById('btnGenerarPrompt'),
        btnLimpiar: document.getElementById('btnLimpiar'),
        resultado: document.getElementById('resultado'),
        promptGenerado: document.getElementById('promptGenerado'),
        btnCopiar: document.getElementById('btnCopiar'),
        contextoLibre: document.getElementById('contextoLibre')
    };

    function renderizarCasos() {
        casosData.casos.forEach(caso => {
            const card = document.createElement('div');
            card.className = 'caso-card';
            card.dataset.id = caso.id;
            card.innerHTML = `
                <span class="numero">${caso.id}</span>
                <h3>${caso.nombre}</h3>
                <p>${caso.descripcion.substring(0, 80)}...</p>
            `;
            card.addEventListener('click', () => seleccionarCaso(caso.id));
            elementos.casosGrid.appendChild(card);
        });
    }

    function seleccionarCaso(id) {
        document.querySelectorAll('.caso-card').forEach(card => {
            card.classList.toggle('selected', parseInt(card.dataset.id) === id);
        });

        casoSeleccionado = casosData.casos.find(c => c.id === id);
        renderizarFormulario(casoSeleccionado);
        elementos.formularioCaso.style.display = 'block';
        elementos.resultado.style.display = 'none';
    }

    function renderizarFormulario(caso) {
        elementos.casoNombre.innerHTML = `<span class="numero">${caso.id}</span> ${caso.nombre}`;
        elementos.casoDescripcion.textContent = caso.descripcion;

        elementos.camposFormulario.innerHTML = '';
        caso.campos.forEach(campo => {
            const divCampo = document.createElement('div');
            divCampo.className = 'campo';

            switch (campo.tipo) {
                case 'numero':
                    divCampo.innerHTML = `
                        <label for="${campo.id}">${campo.label}</label>
                        <input type="number" id="${campo.id}" name="${campo.id}" 
                               placeholder="${campo.placeholder || ''}" min="0">
                    `;
                    break;

                case 'rango':
                    divCampo.innerHTML = `
                        <label for="${campo.id}">${campo.label}: <span id="valor-${campo.id}">${campo.min}</span></label>
                        <input type="range" id="${campo.id}" name="${campo.id}" 
                               min="${campo.min}" max="${campo.max}" value="${campo.min}">
                        <div class="rango-valores">
                            <span>Bajo</span>
                            <span>Medio</span>
                            <span>Alto</span>
                        </div>
                    `;
                    divCampo.querySelector('input').addEventListener('input', (e) => {
                        document.getElementById(`valor-${campo.id}`).textContent = e.target.value;
                    });
                    break;

                case 'booleano':
                    divCampo.classList.add('checkbox-campo');
                    divCampo.innerHTML = `
                        <input type="checkbox" id="${campo.id}" name="${campo.id}">
                        <label for="${campo.id}">${campo.label}</label>
                    `;
                    break;
            }

            elementos.camposFormulario.appendChild(divCampo);
        });

        elementos.listaConsideraciones.innerHTML = '';
        caso.consideraciones.forEach(cons => {
            const li = document.createElement('li');
            li.textContent = cons;
            elementos.listaConsideraciones.appendChild(li);
        });
    }

    function generarPrompt() {
        if (!casoSeleccionado) return;

        const formData = new FormData(document.getElementById('decisionForm'));
        const datos = {};
        
        casoSeleccionado.campos.forEach(campo => {
            if (campo.tipo === 'booleano') {
                datos[campo.label] = formData.has(campo.id) ? 'Sí' : 'No';
            } else {
                const valor = formData.get(campo.id);
                datos[campo.label] = valor || 'No especificado';
            }
        });

        const contextoLibre = elementos.contextoLibre.value.trim();

        let prompt = `# Análisis de decisión: ${casoSeleccionado.nombre}\n\n`;
        prompt += `## Datos del caso\n\n`;

        Object.entries(datos).forEach(([key, value]) => {
            prompt += `- **${key}**: ${value}\n`;
        });

        if (contextoLibre) {
            prompt += `\n## Contexto adicional\n${contextoLibre}\n`;
        }

        prompt += `\n## Preguntas de análisis\n\n`;
        casoSeleccionado.prompts_base.forEach((preg, i) => {
            prompt += `${i + 1}. ${preg}\n`;
        });

        prompt += `\n## Puntos de atención obligatoria\n\n`;
        casoSeleccionado.consideraciones.forEach((cons, i) => {
            prompt += `- ${cons}\n`;
        });

        prompt += `\n---\n\n## Respuesta estructurada requerida\n\n`;
        prompt += `Responde siguiendo esta estructura:\n\n`;
        prompt += `### 1. Resumen ejecutivo\n`;
        prompt += `(2-3 oraciones con la recomendación principal)\n\n`;
        prompt += `### 2. Análisis de viabilidad\n`;
        prompt += `(Evalúa pros y contras basándote en los datos proporcionados)\n\n`;
        prompt += `### 3. Nivel de automatización recomendado\n`;
        prompt += `(Completa / Parcial / Mínima, con justificación)\n\n`;
        prompt += `### 4. Controles necesarios\n`;
        prompt += `(Qué salvaguardas implementar)\n\n`;
        prompt += `### 5. Riesgos identificados\n`;
        prompt += `(Y cómo mitigarlos)\n\n`;
        prompt += `### 6. Alternativas comparadas\n`;
        prompt += `(Al menos 2 opciones con análisis de coste-beneficio)\n\n`;
        prompt += `### 7. Recomendación final\n`;
        prompt += `(Con condiciones y siguiente paso concreto)`;

        elementos.promptGenerado.textContent = prompt;
        elementos.resultado.style.display = 'block';
        elementos.resultado.scrollIntoView({ behavior: 'smooth' });
    }

    function copiarPrompt() {
        const texto = elementos.promptGenerado.textContent;
        navigator.clipboard.writeText(texto).then(() => {
            elementos.btnCopiar.textContent = 'Copiado';
            elementos.btnCopiar.classList.add('copiado');
            setTimeout(() => {
                elementos.btnCopiar.textContent = 'Copiar al portapapeles';
                elementos.btnCopiar.classList.remove('copiado');
            }, 2000);
        }).catch(err => {
            const textArea = document.createElement('textarea');
            textArea.value = texto;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            elementos.btnCopiar.textContent = 'Copiado';
            elementos.btnCopiar.classList.add('copiado');
            setTimeout(() => {
                elementos.btnCopiar.textContent = 'Copiar al portapapeles';
                elementos.btnCopiar.classList.remove('copiado');
            }, 2000);
        });
    }

    function limpiarFormulario() {
        document.getElementById('decisionForm').reset();
        if (casoSeleccionado) {
            renderizarFormulario(casoSeleccionado);
        }
        elementos.resultado.style.display = 'none';
        elementos.contextoLibre.value = '';
    }

    function init() {
        renderizarCasos();
        elementos.btnGenerarPrompt.addEventListener('click', generarPrompt);
        elementos.btnLimpiar.addEventListener('click', limpiarFormulario);
        elementos.btnCopiar.addEventListener('click', copiarPrompt);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
