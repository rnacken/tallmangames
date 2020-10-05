// returns string of html where 'btn:' strings are converted into <button> elements
export const parseHtmlButtons = (str: string) => {
  const htmlWithButtons = str.replace(
    /btn:<a href=\"(.*)\">(.+)<\/a>/gim,
    '<a href="$1" target="_blank" rel="nofollow,noindex"><button>$2</button></a>'
  );
  console.log(htmlWithButtons);
  return htmlWithButtons;
};
