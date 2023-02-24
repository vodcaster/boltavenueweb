import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useState, useEffect } from "react";
import { storage } from "../firebase-config";

const ImageCard = ({ image }) => {
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, image);

  function getImages() {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }
  useEffect(() => {
    getImages();
  }, []);
  return imageList.map((url) => {
    return <img src={url} />;
  });
};
export default ImageCard;
