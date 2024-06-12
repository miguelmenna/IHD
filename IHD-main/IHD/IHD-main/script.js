// Adicione seu código JavaScript aqui
document.addEventListener('DOMContentLoaded', function() {
    // Implemente a validação de formulários aqui para prevenir erros
    const formAnalise = document.getElementById('form-analise');
    const errorPh = document.getElementById('error-ph');

    formAnalise.addEventListener('submit', function(event) {
        event.preventDefault();
        const phValue = parseFloat(document.getElementById('ph').value);
        if(phValue < 6.5 || phValue > 8.5) {
            errorPh.textContent = 'O valor do pH deve estar entre 6.5 e 8.5.';
        } else {
            errorPh.textContent = '';
            // Processar a análise da água
        }
    });
});
