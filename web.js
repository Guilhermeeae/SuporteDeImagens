// web.js

function supportWEB(imageData) {
   
    if (!imageData || !imageData.data || !imageData.width || !imageData.height) {
        console.error('Dados da imagem no formato WEB ausentes ou invalidos);
        return;
    }
    console.log('Iniciando processamento de imagem no formato WEB...');
    
    for (let i = 0; i < imageData.data.length; i += 4) {
        // Ajusta os valores dos canais de cor (R, G, B, A) para exemplo
        imageData.data[i] = imageData.data[i] * 0.5;            // Red
        imageData.data[i + 1] = imageData.data[i + 1] * 0.5;    // Green
        imageData.data[i + 2] = imageData.data[i + 2] * 0.5;    // Blue
  
    }

    console.log('Processamento de imagem no formato WEB concluido);
}

export { supportWEB };