import React, { useState } from 'react';
import { X } from 'lucide-react';

type ModalType = 'about' | 'terms' | 'privacy' | null;

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const closeModal = () => setActiveModal(null);

  // Content configuration based on user request
  const modalContent = {
    about: {
      title: "Sobre Nós",
      text: "A Hemocura Oficial é uma parceira autorizada dedicada a promover saúde e bem-estar através de soluções naturais. Nossa missão é oferecer produtos de alta tecnologia e pureza, garantindo que nossos clientes tenham acesso ao tratamento original com segurança e rapidez. Trabalhamos diretamente com a logística de fábrica para assegurar a entrega em todo o Brasil."
    },
    privacy: {
      title: "Políticas de Privacidade",
      text: "Sua privacidade é nossa prioridade. Seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados). Todas as informações coletadas neste site (como nome e e-mail) são utilizadas exclusivamente para processamento de pedidos e comunicação sobre o status da entrega. Seus dados financeiros são processados em ambiente criptografado e nunca ficam salvos em nossos servidores."
    },
    terms: {
      title: "Termos de Uso",
      text: "Ao utilizar este site, você concorda que o Hemocura é um suplemento alimentar natural e não substitui diagnósticos ou tratamentos médicos prescritos. Os resultados podem variar de organismo para organismo. A garantia de 90 dias é válida para compras realizadas através do site oficial."
    }
  };

  return (
    <footer role="contentinfo" className="w-full flex flex-col gap-6 pb-32 pt-8 border-t border-gray-200 mt-8 relative">
      
      {/* Navigation Links */}
      <div className="flex flex-col items-center gap-3">
        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[#334155] text-sm font-medium">
          <button 
            onClick={() => setActiveModal('about')} 
            className="hover:text-emerald-600 transition-colors bg-transparent border-none cursor-pointer"
          >
            Sobre Nós
          </button>
          <button 
            onClick={() => setActiveModal('terms')} 
            className="hover:text-emerald-600 transition-colors bg-transparent border-none cursor-pointer"
          >
            Termos de Uso
          </button>
          <button 
            onClick={() => setActiveModal('privacy')} 
            className="hover:text-emerald-600 transition-colors bg-transparent border-none cursor-pointer"
          >
            Políticas de Privacidade
          </button>
        </nav>
        <a 
          href="https://wa.me/5511983084122?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20HemoCura." 
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#334155] text-sm font-medium hover:text-emerald-600 transition-colors"
        >
          Contato / WhatsApp
        </a>
      </div>

      <div className="w-full h-px bg-gray-100"></div>
      
      {/* Legal Disclaimers - Semantic HTML for Google SEO */}
      <section aria-label="Avisos Legais" className="space-y-4 text-[11px] text-gray-400 leading-relaxed text-justify">
        <p>
          <strong className="font-bold text-gray-500">Aviso Legal:</strong> Os resultados podem variar de pessoa para pessoa e não são garantidos. As informações contidas neste site não substituem o aconselhamento e acompanhamento de médicos, nutricionistas, psicólogos e profissionais da área de saúde. Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
        </p>
        
        <p>
          <strong className="font-bold text-gray-500">Sobre a Marca:</strong> O nome "Hemocura" é estritamente uma marca comercial (fantasia) e não representa, promete ou sugere a cura de qualquer enfermidade, doença ou condição de saúde. O produto é um suplemento alimentar e não um medicamento.
        </p>

        <p>
          <strong className="font-bold text-gray-500">Pirataria é crime:</strong> A venda do Hemocura só pode ser realizada através deste site oficial. Evite falsificações e riscos a sua saúde comprando apenas de distribuidores autorizados.
        </p>
      </section>

      <div className="w-full text-center py-4">
        <small className="text-[10px] text-gray-300 font-medium block">
          © 2025 Hemocura Oficial. Todos os direitos reservados.
        </small>
      </div>

      {/* Modal Logic */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px] animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-sm relative shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-gray-800 text-lg">
                {modalContent[activeModal].title}
              </h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1 transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {modalContent[activeModal].text}
              </p>
            </div>

            {/* Footer Button */}
            <div className="p-4 bg-gray-50 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold uppercase rounded-lg transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};