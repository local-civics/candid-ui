/**
 * fqdn helper
 * @param url
 * @param path
 */
export const fqdn = (url?: string, path?: string) => {
  if(!url){
    return ""
  }

  if(url.endsWith("/")){
    url = url.substring(0, url.length - 1)
  }

  if(url.startsWith("https://") || url.startsWith("http://")){
    return `${url}${path||""}`
  }

  return `${window.location.origin}${url}${path||""}`
}