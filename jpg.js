// jpg.js

function supportJPG(imageData) {
    if (!imageData || !imageData.data || !imageData.width || !imageData.height) {
        console.error('Dados da imagem JPG ausentes ou invalidos);
        return;
    }

    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] = imageData.data[i] * 1.5;
        imageData.data[i + 1] = imageData.data[i + 1] * 1.5;
        imageData.data[i + 2] = imageData.data[i + 2] * 1.5;
    }
}

export { supportJPG };