import baseAsset from "stores/I18NStore/locales/en/baseAsset";
import booksImg from "assets/images/books.png";
import animalsAsset from "stores/I18NStore/locales/en/animalsAsset";
import animalsImg from "assets/images/animals.png";

export const wordSets = [
  {
    id: 1,
    name: "Base asset",
    words: baseAsset,
    image: booksImg,
  },
  {
    id: 2,
    name: "Animals",
    words: animalsAsset,
    image: animalsImg,
  },
];
