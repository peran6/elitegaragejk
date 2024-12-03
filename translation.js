const translations = {
    "en": {
        "address": "Vironas Fleming 85 & Alikarnasou",
        "menu_item1": "Home",
        "menu_item2": "About us",
        "menu_item3": "Services",
        "menu_item4": "Projects",
        "menu_item5": "Contact",
        "menu_item6": "Modern",
        "menu_item7": "Historic cars",
        "menu_item7.1": "Racing",
        "menu_item8": "Rentals of Historic Races",
        "menu_item8.1": "Rental",
        "menu_item9": "Historic",
        "home_1": "// Elite Garage JK - General Car Service //",
        "home_2": "Stay tuned!",
        "home_3": "Our website is coming soon"
    },
    "gr": {
        "address": "Βύρωνας Φλέμινγκ 85 & Αλικαρνασσού",
        "menu_item1": "Αρχική",
        "menu_item2": "Σχετικά με μας",
        "menu_item3": "Υπηρεσίες",
        "menu_item4": "Projects",
        "menu_item5": "Επικοινωνία",
        "menu_item6": "Σύγχρονα",
        "menu_item7": "Ιστορικά Αγωνιστικά",
        "menu_item7.1": "Αγωνιστικά",
        "menu_item8": "Ενικοιάσεις Ιστορικών Αγωνιστικών",
        "menu_item8.1": "Ενικοιάσεις Αγωνιστικών",
        "menu_item9": "Ιστορικά",
        "home_1": "// Elite Garage JK - Γενικο Συνεργειο Aυτοκινητων //",
        "home_2": "Stay tuned!",
        "home_3": "Η ιστοσελίδα μας έρχεται σύντομα"
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