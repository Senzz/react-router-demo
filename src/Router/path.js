import warning from 'warning'
import pathToRegexp from 'path-to-regexp'

export const getPath = (url) => {
  const bool = typeof url === 'string';
  if(!bool) {
    warning(
      true,
      "getPath parameter must be a string"
    )
    return;
  }
  
  const hashIndex = url.indexOf("#");
  const path = url.slice(hashIndex + 1);
  return path;
}

export const matchPath = ({path, ...options}, {path: nowPath}) => {
  const re = pathToRegexp(path, [], options);
  const results = re.exec(nowPath)
  console.log(results);
  return results;
}