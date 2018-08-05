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
  let results = null;
  const _keys = [];
  const keys = nowPath.split('/').map(val => '/' + val).filter((_, index) => index > 0);
  if(!keys.length) return null; 
  const keys2 = keys.reduce((val, total) => {
    _keys.push(val);
    return total = val + total;
  })
  _keys.push(keys2);

  _keys.some(val => {
    const re = pathToRegexp(path);
    const _results = re.exec(val);
    console.log(path, _results, val)
    if(_results) {
      results = _results;
      return true;
    }
  })
  
  return results;
}