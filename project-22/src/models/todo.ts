import { v4 as uuidv4 } from "uuid";

export default class Todo {
  constructor(text: string) {
    this.id = uuidv4();
    this.text = text;
  }

  id: string;
  text: string;
}
