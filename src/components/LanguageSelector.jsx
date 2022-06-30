import React, { useState } from 'react';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import './LanguageSelector.css';



const lngs  = {
  en: {nativeName: 'English'},
  de: {nativeName: 'Deutsch'},
  es: {nativeName: 'Espanol'},
  fr: {nativeName: 'Francais'},
  pl: {nativeName: 'Polski'},
  gr: {nativeName: 'Greek'}

 };

function LanguageSelector() {

  const {t} = useTranslation(); 
  const [isActive, setisActive] = useState('en');
    
    return (
      <div className="">
        

        <h3>{t('languageSelectText')}</h3>
        <div className="lang">
        {Object.keys(lngs).map((lng) => ( 
          <button type="submit" key={lng} className={isActive === lng ? "active" :"" }  onClick={()=> {
            i18next.changeLanguage(lng);
            setisActive(lng)
            }}>
            {lngs[lng].nativeName}
            </button>
        ))}

      
      </div>

      </div>
  );
}

export default LanguageSelector