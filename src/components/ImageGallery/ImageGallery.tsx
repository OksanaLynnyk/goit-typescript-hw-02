import { FC } from "react";
import { Image, OpenModal } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

interface ImageGalleryProps {
  images: Image[],
  openModal: OpenModal
}

export const ImageGallery: FC<ImageGalleryProps> = ({images, openModal}) => {
  return (
    <ul className={css.listImages}>
	{images.map(({id, urls, alt_description}) => {
        return 	<li className={css.itemImages} key={id}>
        <ImageCard urls={urls} alt_description={alt_description} openModal={openModal}/>
        </li>
    })}
</ul>
  )
}
