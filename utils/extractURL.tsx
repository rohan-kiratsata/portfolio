/**
 * Function to extract domain name from URL
 * @param url The URL from which the domain needs to be extracted.
 * @returns The extracted domain name or undefined if URL is invalid
 */

export function extractDomain(url: string): string | undefined {
  let domain: string | undefined;
  try {
    domain = new URL(url).hostname;
    // Removes `wwww` from the url
    if (domain.startsWith("www.")) {
      domain.slice(4);
    }
  } catch (error) {
    console.error("Invalid URL:", error);
  }
  return domain;
}
