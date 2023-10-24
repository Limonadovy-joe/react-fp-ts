import { ImageInfo } from 'types';
import { IMAGE_URL } from '../config';

/**
 * TODO:
 * refactor to use DI
 *
 * set env variable to use API_URL or IMG_URL
 *
 * should accept optional field imageURL and set def value
 */
export const getImageUrl = ({ imageId }: ImageInfo) =>
  IMAGE_URL + imageId + 's.jpg';
