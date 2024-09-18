import { FC } from 'react';
import { Image, OpenModal } from '../../types';
import css from './ImageCard.module.css'

interface ImageCardProps extends Omit<Image, 'id'> {
  openModal: OpenModal;
}

const ImageCard: FC<ImageCardProps> = ({urls, alt_description, openModal}) => {
  return (
    <div className={css.imgWrap}>
        <img className={css.imageCard} src={urls.small} alt={alt_description} onClick={() => openModal(urls.regular, alt_description)}/>
    </div>
  )
}

export default ImageCard