const PortfolioController = {
    renderSkills: function(skills) {
        const container = document.getElementById('skills-container');
        if (!container) return;
        container.innerHTML = skills.map(cat => `
            <div class="skill-category">
                <h3>${cat.category}</h3>
                <ul class="skill-list">${cat.items.map(i => `<li><i class="fas fa-code-branch"></i> ${i}</li>`).join('')}</ul>
            </div>
        `).join('');
    },
    renderProjects: function(projects) {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = projects.map((proj, index) => `
            <article class="project-card">
                <div>
                    <img class="banner" src="${proj.bannerUrl}" alt="Banner de ${proj.name}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; margin-bottom: 15px; border: 1px solid var(--border-color);">
                    
                    <h3 class="project-name">${proj.name}</h3>
                    <p class="project-desc" style="margin-top: 5px;">${proj.description}</p>
                    
                    <div id="more-info-${index}" style="display: none; margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border-color); color: var(--text-secondary); font-size: 0.9rem;">
                        <p><strong>Detalle Técnico:</strong> ${proj.technicalDetails}</p>
                    </div>
                </div>
                <div style="margin-top: 15px;">
                    <div class="project-techs" style="margin-bottom: 15px;">
                        ${proj.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links" style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                        <a href="${proj.github}" target="_blank" style="text-decoration: none; color: var(--text-primary); font-size: 0.9rem;"><i class="fab fa-github"></i> Código</a>
                        
                        <a href="${proj.sitio}" target="_blank" style="text-decoration: none; color: var(--text-primary); font-size: 0.9rem;"><i class="fas fa-external-link-alt"></i> Web</a>
                        
                        <button class="btn-toggle-info" data-id="${index}" style="background: none; border: 1px solid var(--border-color); color: var(--accent-color); padding: 5px 10px; border-radius: 4px; cursor: pointer; font-family: monospace; font-size: 0.85rem;">
                            [Ver Más]
                        </button>
                    </div>
                </div>
            </article>
        `).join('');

        // Listener para manejar el colapso/expansión
        container.querySelectorAll('.btn-toggle-info').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const infoDiv = document.getElementById(`more-info-${id}`);
                
                if (infoDiv.style.display === 'none') {
                    infoDiv.style.display = 'block';
                    e.target.textContent = '[Ver Menos]';
                } else {
                    infoDiv.style.display = 'none';
                    e.target.textContent = '[Ver Más]';
                }
            });
        });
    },
    initNavbar: function() {
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');
        
        if (!toggle || !menu) return;

        // Abrir / Cerrar menú al hacer clic en la hamburguesa
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            
            // Alternar el icono entre barras y cruz
            const icon = toggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Cerrar el menú automáticamente al hacer clic en cualquier enlace (ancla)
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                const icon = toggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }
};