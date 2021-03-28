import { makeAutoObservable } from "mobx";
import { generateUUID } from "utils";

class WordSet {
  public id: string;

  public name: string;

  public checked: boolean;

  public words: string[];

  constructor(data: Pick<WordSet, "name" | "words" | "checked">) {
    this.id = generateUUID();
    this.name = data.name;
    this.checked = data.checked || false;
    this.words = data.words || [];

    makeAutoObservable(this);
  }

  get exampleWords(): string[] {
    return this.words.filter((_, i) => i < 3);
  }

  public toggleCheck = () => {
    this.checked = !this.checked;
  };
}

export default WordSet;
