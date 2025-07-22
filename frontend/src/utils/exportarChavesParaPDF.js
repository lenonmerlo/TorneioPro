import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

function carregarImagem(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

export async function exportarChavesParaPDF({ titulo = 'Chaves Sorteadas - Torneio Amador', chaves }) {
  try {
    console.log('Iniciando exportação para PDF. Chaves recebidas:', chaves);
    const doc = new jsPDF();

    // Carrega a imagem do logo (aguardando o carregamento)
    const logo = await carregarImagem('/assets/logo-torneiopro.png');
    doc.addImage(logo, 'PNG', 14, 10, 20, 20);

    let y = 22;

    doc.setFontSize(16);
    doc.setTextColor(30, 58, 138);
    doc.text(titulo, 40, y);
    y += 14;

    // Itera sobre as chaves
    Object.entries(chaves).forEach(([tipo, grupos]) => {
      console.log(`Processando tipo de chave: ${tipo}, Grupos:`, grupos);
      if (!Array.isArray(grupos)) {
        console.warn(`Grupos para o tipo ${tipo} não é um array. Pulando.`);
        return;
      }

      doc.setFontSize(14);
      doc.setTextColor(75, 85, 99);
      doc.text(`Chave ${tipo}`, 14, y);
      y += 6;

      const tableBody = [];

      grupos.forEach((equipe, idx) => {
        console.log(`Processando equipe ${idx}:`, equipe);
        if (!Array.isArray(equipe?.atletas)) {
          console.warn(`Atletas para a equipe ${equipe?.nome || 'desconhecida'} não é um array. Pulando.`);
          return;
        }

        equipe.atletas.forEach((atleta) => {
          if (typeof atleta?.nome === 'string') {
            tableBody.push([
              `Time ${idx + 1}`,
              atleta.nome,
              atleta.genero || '-',
              atleta.nivel || '-',
            ]);
          } else {
            console.warn('Atleta sem nome válido:', atleta);
          }
        });
      });

      console.log('Table Body para ' + tipo + ':', tableBody);

      if (tableBody.length > 0) {
        autoTable(doc, {
          head: [['Time', 'Nome', 'Gênero', 'Nível']],
          body: tableBody,
          startY: y,
          theme: 'striped',
          styles: { fontSize: 10 },
          headStyles: { fillColor: [30, 58, 138], textColor: 255 },
          margin: { left: 14, right: 14 },
        });

        y = doc.lastAutoTable.finalY + 10;
      } else {
        doc.setFontSize(12);
        doc.setTextColor(200, 0, 0);
        doc.text('Nenhum atleta encontrado nesta chave.', 14, y);
        y += 10;
      }
    });

    doc.save(titulo.toLowerCase().replace(/\s+/g, '_') + '.pdf');
    console.log('PDF gerado com sucesso!');
  } catch (err) {
    console.error('Erro ao gerar PDF:', err);
    alert('Erro ao gerar o PDF.');
  }
}