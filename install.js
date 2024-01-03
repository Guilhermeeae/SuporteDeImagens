// install.js

// Importa as funcoes de suporte para cada tipo de imagem
import { supportPNG } from './png.js';
import { supportJPEG } from './jpeg.js';
import { supportJPG } from './jpg.js';
import { supportWEB } from './web.js';
import { identifyImage } from './idn.js';

// FunÃ§Ã£o principal para instalaÃ§Ã£o e execuÃ§Ã£o
function install(imageData) {
    // Identifica o tipo da imagem usando idn.js
    const imageType = identifyImage(imageData);

    // Chama a funÃ§Ã£o de suporte correspondente com base no tipo da imagem
    switch (imageType) {
        case 'png.js':
            supportPNG(imageData);
            break;
        case 'jpeg.js':
            supportJPEG(imageData);
            break;
        case 'jpg.js':
            supportJPG(imageData);
            break;
        case 'web.js':
            supportWEB(imageData);
            break;
        default:
            console.error('Tipo de imagem não suportado.');
    }
}

// Exemplo: Chama a funÃ§Ã£o install com um objeto de imagem para teste
const sampleImageData = { type: 'png' };
install(sampleImageData);