import { v4 as uuidv4 } from "uuid";

const generateID = (prefix?: string): string =>
  `${prefix ? `${prefix}-` : ""}${uuidv4()}`;

export default generateID;
