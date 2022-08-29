import config from './config';

const getSrc = (
    imageObject,
    width,
    height,
) => `${config.api.url}/image/${width}x${height}/${imageObject.id}.${imageObject.extension}`;

const FlotiqImage = {
    getSrc,
};

export default FlotiqImage;
