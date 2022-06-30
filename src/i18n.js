import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';


i18next
    .use(initReactI18next)
    .init({
        fallbackLng:'en',
        resources:{
            en: {
                translation: {
                    welcome: 'Welcome to',
                    languageSelectText: 'Please select your Language',
                    fontSelectText: 'Please set the font size to your preference',
                    btnContinue: 'Continue',
                    blue:'blue',
                    green:'green',
                    red:'red',
                    mono:'mono'
                }
            },
            de: {
                translation: {
                    welcome: 'Willkommen in',
                    languageSelectText: 'Bitte wählen Sie Ihre Sprache',
                    fontSelectText: 'Bitte stellen sie die Schriftgröße auf ihre Bedürfnisse ein',
                    btnContinue: 'Fortfahren',
                    blue:'blau',
                    green:'grün',
                    red:'rot',
                    mono:'mono'
                }
            },
            pl: {
                translation: {
                    welcome: 'Witamy w',
                    languageSelectText: "Proszę wybrać swój język",
                    fontSelectText: "Proszę ustawić rozmiar czcionki do swoich potrzeb",
                    btnContinue: "Kontynuuj",
                    blue:'niebieski',
                    green:'zielony',
                    red:'czerwony',
                    mono:'mono'
                }
            },
            es: {
                translation: {
                    welcome: 'Bienvenido a la',
                    languageSelectText: 'Por favor, seleccione su idioma',
                    fontSelectText: 'Por favor, ajuste el tamaño de la fuente a sus necesidades',
                    btnContinue: 'Continuar',
                    blue:'azul',
                    green:'verde',
                    red:'rojo',
                    mono:'mono'
                }
            },
            fr: {
                translation: {
                    welcome: 'Bienvenue à la',
                    languageSelectText : 'Veuillez choisir votre langue',
                    fontSelectText : 'Veuillez régler la taille de la police selon vos besoins',
                    btnContinue : 'Continuer',
                    blue:'bleu',
                    green:'vert',
                    red:'rouge',
                    mono:'mono'
                }
            },
            gr: {
                translation: {
                    welcome: 'Καλώς ήρθατε στην',                    
                    languageSelectText: 'Παρακαλώ επιλέξτε τη γλώσσα σας',
                    fontSelectText: 'Παρακαλώ ρυθμίστε το μέγεθος της γραμματοσειράς ανάλογα με τις ανάγκες σας',
                    btnContinue: 'Συνέχεια',
                    blue:'μπλε',
                    green:'πράσινο',
                    red:'κόκκινο',
                    mono:'mono'
                }
            },
        }

    })