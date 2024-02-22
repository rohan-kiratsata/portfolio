/**
 * Generates unique ID to use all over the application with option to add custom prefix
 *
 * @param {string} [prefix] - Optional  prefix for ID
 * @returns {string} - generated ID
 * @dependencies - uuid, https://www.npmjs.com/package/uuid
 *
 */

import { v4 as uuidv4 } from "uuid";

const generateID = (prefix?: string): string =>
  `${prefix ? `${prefix}-` : ""}${uuidv4()}`;

export default generateID;
