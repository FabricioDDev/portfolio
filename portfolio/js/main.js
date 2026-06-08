 
document.addEventListener('DOMContentLoaded', () => {
    PortfolioController.renderSkills(portfolioData.skills);
    PortfolioController.renderProjects(portfolioData.projects);
    
    // Inicializar el menú desplegable mobile
    PortfolioController.initNavbar();
    
    console.log("Arquitectura limpia cargada correctamente.");
});