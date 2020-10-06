// returns string of html where 'btn:' strings are converted into <button> elements
export const parseHtmlButtons = (str: string) =>
  str.replace(
    /btn:<a href=\"(.*)\">(.+)<\/a>/gim,
    `<a href="$1" target="_blank" rel="nofollow,noindex"><button class="btn" type="button">$2</button></a>`
  );
