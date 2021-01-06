/**
 * Convert sting to camel case
 * @param str
 */
const toCamelCase = (str: string) => str.replace(/-([a-z])/g, g => g[1].toUpperCase());

export default toCamelCase;