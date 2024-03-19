document.addEventListener('DOMContentLoaded', () => {
    const loadRulesBtn = document.getElementById('loadRulesBtn');
    const rulesList = document.getElementById('rulesList');

    loadRulesBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('becode.json');
            const rules = await response.json();
            
            // Clearing existing list items
            rulesList.innerHTML = '';

            // Dynamically generating list items
            rules.forEach(rule => {
                const listItem = document.createElement('li');
                listItem.textContent = rule;
                rulesList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error fetching or parsing data:', error);
        }
    });
});
