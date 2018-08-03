const history = {
  push(path) {
    window.location.hash = `#${path}`;
  },
  replace(path) {
    const hashIndex = window.location.href.indexOf("#");

    window.location.replace(
      window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + "#" + path
    );
  }
}
export default history;