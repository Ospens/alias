import baseAsset from "stores/I18NStore/locales/ru/baseAsset";
import booksImg from "assets/images/books.png";
import animalsAsset from "stores/I18NStore/locales/ru/animalsAsset";
import animalsImg from "assets/images/animals.png";

export const wordSets = [
  {
    id: 1,
    name: "Базовый набор",
    words: baseAsset,
    image: booksImg,
  },
  {
    id: 2,
    name: "Животные",
    words: animalsAsset,
    image: animalsImg,
  },
];
