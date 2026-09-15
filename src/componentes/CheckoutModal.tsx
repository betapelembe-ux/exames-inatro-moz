import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Check, Download, Smartphone, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import jsPDF from 'jspdf';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = 'mpesa' | 'emola';

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [method, setMethod] = useState<PaymentMethod>('mpesa');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [step, setStep] = useState<'form' | 'instructions' | 'success'>('form');

  if (!isOpen) return null;

  const handleCopyNumber = (text: string) => {
    navigator.clipboard?.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      return;
    }
    setStep('instructions');
  };

  const handleConfirmPaid = () => {
    setStep('success');
  };

  const handleDownloadSampleGuide = () => {
    // Generate an authentic, beautifully styled PDF file using jsPDF
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Background header bar
    doc.setFillColor(7, 13, 26);
    doc.rect(0, 0, 210, 35, 'F');

    // Title
    doc.setTextColor(56, 189, 248);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('GUIA DE EXAMES DE CONDUÇÃO - MOÇAMBIQUE', 14, 16);

    doc.setFontSize(10);
    doc.setTextColor(226, 232, 240);
    doc.setFont('helvetica', 'normal');
    doc.text('Mais de 750 Exames e Questões Oficiais Resolvidas (INATRO)', 14, 25);

    // Student Welcome Info
    doc.setTextColor(30, 41, 59);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(`Acesso Liberado para: ${name || 'Estudante'}`, 14, 45);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.text(`Contacto registado: +258 ${phone || '84/85/86/87'} | Edição Atualizada`, 14, 52);

    // Line separator
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.5);
    doc.line(14, 56, 196, 56);

    // Section 1: Regras Críticas
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(14, 62, 182, 48, 3, 3, 'F');

    doc.setTextColor(2, 132, 199);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('1. REGRAS CRÍTICAS DE PRIORIDADE (CÓDIGO DA ESTRADA)', 18, 70);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    doc.text('• Regra Geral da Direita (Art. 31º): Em cruzamentos sem sinalização, o veículo que se', 18, 77);
    doc.text('  apresenta pela direita tem prioridade absoluta.', 18, 82);
    doc.text('• Paragem Obrigatória no STOP (Sinal B2): Imobilização TOTAL das rodas antes da linha', 18, 88);
    doc.text('  transversal, mesmo sem veículos visíveis.', 18, 93);
    doc.text('• Rotundas: Quem circula dentro da rotunda tem prioridade sobre quem vai entrar.', 18, 99);
    doc.text('  Sinalize sempre antes de sair.', 18, 104);

    // Section 2: Pegadinhas mais frequentes
    doc.setFillColor(254, 242, 242);
    doc.roundedRect(14, 115, 182, 60, 3, 3, 'F');

    doc.setTextColor(220, 38, 38);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('2. AS 5 PEGADINHAS MAIS COMUNS NOS TESTES DO INATRO', 18, 123);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    doc.text('1. "O veículo que vai em frente perde a prioridade se o da direita virar?"', 18, 130);
    doc.text('   -> FALSO: A regra da direita mantém-se sempre, independentemente da direção.', 18, 135);
    doc.text('2. "Ultrapassar pela direita é sempre estritamente proibido?"', 18, 142);
    doc.text('   -> NÃO: É permitido ultrapassar pela direita veículo que assinala viragem à esquerda.', 18, 147);
    doc.text('3. "Qual a diferença entre Paragem e Estacionamento?"', 18, 154);
    doc.text('   -> Paragem é apenas o tempo estritamente necessário para entrada/saída de pessoas.', 18, 159);
    doc.text('4. "Luz amarela no semáforo:" Obriga a parar, salvo se não for seguro fazê-lo.', 18, 166);

    // Section 3: Velocidades Oficiais
    doc.setFillColor(240, 253, 250);
    doc.roundedRect(14, 180, 182, 42, 3, 3, 'F');

    doc.setTextColor(13, 148, 136);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('3. LIMITES DE VELOCIDADE OFICIAIS EM MOÇAMBIQUE', 18, 188);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    doc.text('• Dentro das Localidades: 60 km/h para ligeiros sem reboque', 18, 196);
    doc.text('• Fora das Localidades: 100 km/h para veículos ligeiros', 18, 202);
    doc.text('• Zonas Escolares e Hospitalares: Moderação especial (velocidade recomendada: 30-40 km/h)', 18, 208);
    doc.text('• Veículos pesados de mercadorias: 80 km/h fora das localidades', 18, 214);

    // Footer note
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(8);
    doc.text('Material Digital Autorizado - Suporte: AUTOEXAME.MZ | Exames Resolvidos', 14, 275);
    doc.text('Página 1 de 1 • Acesso Vitalício', 150, 275);

    const safeName = name ? name.trim().replace(/\s+/g, '_') : 'Estudante';
    doc.save(`Guia_Exames_Resolvidos_MZ_${safeName}.pdf`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#091122] border-2 border-sky-500/40 rounded-3xl shadow-2xl shadow-black p-6 sm:p-8 my-8 text-slate-100">
        {/* Close button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-left mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950 px-2.5 py-0.5 rounded border border-sky-800/60">
              Checkout Seguro Moçambique
            </span>
            <span className="text-xs text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Protegido
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk',sans-serif]">
            {step === 'form' && 'Finalizar Aquisição do Guia'}
            {step === 'instructions' && 'Instruções de Pagamento (197 MT)'}
            {step === 'success' && 'Acesso Liberado com Sucesso!'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {step === 'form' && 'Preencha seus dados para receber o PDF no telemóvel'}
            {step === 'instructions' && 'Envie 197 MT para ativar seu envio imediato'}
            {step === 'success' && 'Seu material já está disponível para download e estudo'}
          </p>
        </div>

        {/* STEP 1: FORM */}
        {step === 'form' && (
          <form onSubmit={handleProceedToPayment} className="space-y-4">
            {/* Price tag banner */}
            <div className="bg-sky-950/40 border border-sky-500/30 rounded-xl p-3 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-300 block">Total a Pagar Hoje:</span>
                <span className="text-xl font-extrabold text-white">197 Meticais</span>
              </div>
              <span className="text-[11px] font-bold text-sky-300 bg-sky-900/60 px-2.5 py-1 rounded-full border border-sky-700">
                Acesso Vitalício + Bónus
              </span>
            </div>

            {/* Input Name */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1">
                Seu Nome Completo *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Albino Cossa"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
              />
            </div>

            {/* Input Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-1">
                Número de Telemóvel *
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-700 bg-slate-800 text-slate-300 text-xs font-bold">
                  +258
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="84 / 85 / 86 / 87 123 4567"
                  className="w-full bg-slate-900 border border-slate-700 rounded-r-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">
                Número do titular para confirmação do pagamento.
              </span>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-200 mb-2">
                Escolha a Forma de Pagamento:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMethod('mpesa')}
                  className={`cursor-pointer p-3.5 rounded-xl border text-xs font-bold text-center transition-all ${
                    method === 'mpesa'
                      ? 'bg-rose-950/80 border-rose-500 text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="block text-rose-400 font-extrabold text-sm">M-Pesa</span>
                  <span className="text-[10px] opacity-80">Vodacom</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMethod('emola')}
                  className={`cursor-pointer p-3.5 rounded-xl border text-xs font-bold text-center transition-all ${
                    method === 'emola'
                      ? 'bg-amber-950/80 border-amber-500 text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="block text-amber-400 font-extrabold text-sm">e-Mola</span>
                  <span className="text-[10px] opacity-80">Movitel</span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="cursor-pointer w-full mt-3 py-3.5 px-6 rounded-xl font-extrabold text-sm bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-lg shadow-sky-500/20 active:scale-98 flex items-center justify-center gap-2"
            >
              <span>Ver Instruções de Pagamento</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* STEP 2: INSTRUCTIONS */}
        {step === 'instructions' && (
          <div className="space-y-4">
            {/* Payment Box */}
            <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-5 space-y-3">
              {method === 'mpesa' && (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-rose-400">PAGAMENTO VIA M-PESA</span>
                    <span className="text-xs font-mono font-bold text-white">Valor: 197 MT</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <p>1. No seu telemóvel, marque <strong>*150#</strong></p>
                    <p>2. Selecione a opção <strong>Transferir Dinheiro</strong></p>
                    <p>3. Digite o número do agente oficial:</p>
                    
                    <div className="flex items-center justify-between bg-black/50 p-2.5 rounded-lg border border-slate-800">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase block">Número M-Pesa</span>
                        <span className="text-sm font-mono font-bold text-sky-300">84 555 1970</span>
                        <span className="text-[10px] text-slate-400 block">Titular: AutoExame MZ</span>
                      </div>
                      <button
                        onClick={() => handleCopyNumber('845551970')}
                        className="cursor-pointer px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-white flex items-center gap-1 border border-slate-700"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>

                    <p>4. Digite o valor exato: <strong>197 MT</strong> e confirme com o seu PIN.</p>
                  </div>
                </>
              )}

              {method === 'emola' && (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-amber-400">PAGAMENTO VIA E-MOLA</span>
                    <span className="text-xs font-mono font-bold text-white">Valor: 197 MT</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <p>1. No seu telemóvel, marque <strong>*898#</strong></p>
                    <p>2. Selecione a opção <strong>Transferir</strong></p>
                    <p>3. Digite o número e-Mola oficial:</p>

                    <div className="flex items-center justify-between bg-black/50 p-2.5 rounded-lg border border-slate-800">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase block">Número e-Mola</span>
                        <span className="text-sm font-mono font-bold text-amber-300">86 444 1970</span>
                        <span className="text-[10px] text-slate-400 block">Titular: AutoExame MZ</span>
                      </div>
                      <button
                        onClick={() => handleCopyNumber('864441970')}
                        className="cursor-pointer px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-white flex items-center gap-1 border border-slate-700"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>

                    <p>4. Digite o valor: <strong>197 MT</strong> e insira o seu PIN de segurança.</p>
                  </div>
                </>
              )}
            </div>

            {/* Reassurance Alert */}
            <div className="p-3 bg-sky-950/30 border border-sky-800/40 rounded-xl flex items-start gap-2 text-xs text-sky-200">
              <AlertCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>
                Assim que concluir a transferência, clique no botão verde abaixo para ativar o seu download imediato no ecrã.
              </span>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep('form')}
                className="cursor-pointer w-1/3 py-3 rounded-xl font-semibold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={handleConfirmPaid}
                className="cursor-pointer w-2/3 py-3 px-4 rounded-xl font-extrabold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/20 active:scale-98 flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Já Paguei! Liberar Material</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: SUCCESS & IMMEDIATE DOWNLOAD */}
        {step === 'success' && (
          <div className="space-y-4 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-lg font-bold text-white">
                Pagamento Registado com Sucesso!
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto">
                Obrigado, <strong>{name || 'Estudante'}</strong>. O seu Guia de Exames Resolvidos está pronto para ser descarregado agora mesmo.
              </p>
            </div>

            {/* Direct Download Action */}
            <div className="p-4 bg-slate-900 border border-sky-500/40 rounded-2xl text-left space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400">DOWNLOAD IMEDIATO</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-700">
                  Pronto no Ecrã
                </span>
              </div>

              <p className="text-xs text-slate-300">
                Pode descarregar a sua cópia digital diretamente para o seu telemóvel ou computador agora:
              </p>

              <button
                onClick={handleDownloadSampleGuide}
                className="cursor-pointer w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-md shadow-sky-500/30 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Descarregar Guia Completo Agora (PDF)</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="cursor-pointer text-xs text-slate-400 hover:text-white underline pt-2 block mx-auto"
            >
              Fechar e Continuar a Navegar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
