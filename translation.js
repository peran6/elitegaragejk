const translations = {
    "en": {
        "address": "Vironas Fleming 85 & Alikarnasou",
        "menu_item1": "Home",
        "menu_item2": "About us",
        "menu_item3": "Services",
        "menu_item4": "Projects",
        "menu_item5": "Contact"
    },
    "gr": {
        "address": "Βύρωνας Φλέμινγκ 85 & Αλικαρνασσού",
        "menu_item1": "Αρχική",
        "menu_item2": "Σχετικά με μας",
        "menu_item3": "Υπηρεσίες",
        "menu_item4": "Projects",
        "menu_item5": "Επικοινωνία"
    }
};

function switchLanguage(language) {
    console.log(`Switching to language: ${language}`);
    
    localStorage.setItem('selectedLanguage', language);

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'gr';
    switchLanguage(savedLanguage);
});