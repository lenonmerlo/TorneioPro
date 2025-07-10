// exportarChavesParaPDF.js

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export function exportarChavesParaPDF({ titulo = 'Chaves Sorteadas - Torneio Amador', chaves }) {
  const doc = new jsPDF();

  const logo = new Image();
  logo.src = '/assets/logo-torneiopro.png';
  doc.addImage(logo, 'PNG', 10, 10, 20, 20);

  let y = 22;

  doc.setFontSize(16);
  doc.setTextColor(30, 58, 138);
  doc.text(titulo, 35, y);
  y += 14;

  Object.entries(chaves).forEach(([chave, grupos]) => {
    doc.setFontSize(14);
    doc.setTextColor(75, 85, 99);
    doc.text(`Chave ${chave}`, 14, y);
    y += 6;

    const tableBody = [];

    grupos.forEach((equipe, idx) => {
      if (!Array.isArray(equipe?.atletas)) return;

      equipe.atletas.forEach((atleta, aIdx) => {
        if (typeof atleta?.nome === 'string') {
          tableBody.push([
            `Time ${idx + 1}`,
            atleta.nome,
            atleta.genero,
            atleta.nivel
          ]);
        }
      });
    });

    autoTable(doc, {
      head: [['Time', 'Nome', 'Gênero', 'Nível']],
      body: tableBody,
      startY: y,
      theme: 'striped',
      styles: { fontSize: 10 },
      headStyles: { fillColor: [30, 58, 138], textColor: 255 },
      margin: { left: 14, right: 14 }
    });

    y = doc.lastAutoTable.finalY + 10;
  });

  doc.save(titulo.toLowerCase().replace(/\s+/g, '_') + '.pdf');
}
