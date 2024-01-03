// png.js

function supportPNG(imageData) {
    if (!imageData || !imageData.data || !imageData.width || !imageData.height) {
        console.error('Dados da imagem PNG ausentes ou invalidos);
        return;
    }

    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] = 255 - imageData.data[i];
        imageData.data[i + 1] = 255 - imageData.data[i + 1];
        imageData.data[i + 2] = 255 - imageData.data[i + 2];
    }
}

export { supportPNG };