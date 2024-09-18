import { useEffect, useState } from 'react'

import { getImages } from './services/api'
import { SearchBar } from './components/SearchBar/SearchBar'
import {ImageGallery} from './components/ImageGallery/ImageGallery'
import {Loader} from './components/Loader/Loader'
import {LoadMoreBtn} from './components/LoadMoreBtn/LoadMoreBtn'
import {ImageModal} from './components/ImageModal/ImageModal'
import {ErrorMessage} from './components/ErrorMessage/ErrorMessage';
import { Image, OpenModal } from './types'

const App = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>('');
  const [modalAlt, setModalAlt] = useState<string>('');

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const { results, total_pages } = await getImages(query, page);
        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [page, query]);

  const handleSubmit = (value: string) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsVisible(false);
    setIsEmpty(false);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal: OpenModal = (url, alt) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalUrl('');
    setModalAlt('');
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (<ImageGallery images={images} openModal={openModal}/>)}
      {isVisible && (<LoadMoreBtn onClick={loadMore} disabled={loading}>{loading ? 'Loading' : 'Load more'}</LoadMoreBtn>)}
      {loading && <Loader />}
      {error && <ErrorMessage message="An error occurred. Please try again later." />}
      {isEmpty && (<ErrorMessage message="No results found" />)}
      <ImageModal
        modalIsOpen={showModal}
        closeModal={closeModal}
        src={modalUrl}
        alt={modalAlt}
      />
    </>
  )
}

export default App
