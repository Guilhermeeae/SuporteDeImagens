// jpeg.js

function supportJPEG(imageData) {
    if (!imageData || !imageData.data || !imageData.width || !imageData.height) {
        console.error('Dados da imagem JPEG ausentes ou invalidos);
        return;
    }

    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] = imageData.data[i] + 50;
        imageData.data[i + 1] = imageData.data[i + 1] + 50;
        imageData.data[i + 2] = imageData.data[i + 2] + 50;
    }
}

export { supportJPEG };