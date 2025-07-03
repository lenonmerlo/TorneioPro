import jsPDF from 'jspdf';

export function exportarChavesParaPDF({ titulo = 'Chaves Sorteadas - Torneio Oficial', chaves }) {
  const doc = new jsPDF();

  const logo = new Image();
  logo.src = '/assets/logo-torneiopro.png';
  doc.addImage(logo, 'PNG', 10, 10, 20, 20); // (img, type, x, y, w, h)

  let y = 22;

  doc.setFontSize(16);
  doc.setTextColor(30, 58, 138); // azul escuro
  doc.text(titulo, 35, y);
  y += 14;

  Object.entries(chaves).forEach(([tipo, grupos]) => {
    doc.setFontSize(14);
    doc.setTextColor(75, 85, 99); // cinza escuro
    doc.text(tipo, 14, y);
    y += 8;

    Object.entries(grupos).forEach(([chave, equipes]) => {
      doc.setFontSize(13);
      doc.setTextColor(30, 41, 59);
      doc.text(`Chave ${chave}`, 16, y);
      y += 7;

      equipes.forEach((equipe, idx) => {
        doc.setFontSize(12);
        doc.setTextColor(55, 65, 81);
        doc.text(`- ${equipe.nome || `Time ${idx + 1}`}`, 18, y);
        y += 6;

        equipe.atletas.forEach((a) => {
          doc.text(`   • ${a.nome}`, 22, y);
          y += 5;
        });

        y += 4;

        if (y > 270) {
          doc.addPage();
          y = 20;
        }
      });

      y += 6;
    });

    y += 8;
  });

  doc.save(titulo.toLowerCase().replace(/\s+/g, '_') + '.pdf');
}
