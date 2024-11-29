// CookieConsent.js
import React, { useState, useEffect } from 'react';
import '../App.css'; // Assurez-vous d'importer le CSS pour le style

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifiez si les cookies ont été acceptés
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true'); // Stockez l'acceptation dans le stockage local
    setIsVisible(false); // Masquez la notification
  };

  const handleRejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false'); // Stockez le refus dans le stockage local
    setIsVisible(false); // Masquez la notification
  };

  return (
    isVisible && (
      <div className="cookie-consent-modal">
        <div className="cookie-consent-content">
          <h2 className="title-medium">🍪 Consentement aux Cookies 🍪</h2>
          <p className="text-normal">
            Bonjour, Amateur de Recettes ! Nous utilisons des cookies pour saupoudrer un peu de douceur dans votre expérience. 
            Ces petites bouchées de données nous aident à comprendre vos préférences et à vous proposer les meilleures recettes, rien que pour vous !
          </p>
          <p className="text-normal">
            En acceptant les cookies, vous débloquerez un monde d'inspiration culinaire, conçu spécialement pour vous.
          </p>
          <p className="text-normal">
            Si vous préférez refuser les cookies, pas de souci ! Votre aventure vers de délicieuses recettes reste intacte.
          </p>
          <p className="text-normal">Alors, quelle sera votre décision ?</p>
          <div className="cookie-consent-buttons">
            <button onClick={handleAcceptCookies} className="text-normal-volkorn accept-button">
              Accepter les Cookies
            </button>
            <button onClick={handleRejectCookies} className="text-normal-volkorn reject-button">
              Refuser les Cookies
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
