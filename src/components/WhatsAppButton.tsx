import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+573123456789'; // Reemplaza con tu número
    const message = '¡Hola! Me gustaría obtener más información sobre sus servicios.';

    const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    };

    return (
    <button
        onClick={handleClick}
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
    >
        <MessageCircle size={32} />
    </button>
    );
};

export default WhatsAppButton;