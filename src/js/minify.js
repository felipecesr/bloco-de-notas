const minify = str => str.replace(/>\s+|\s+</g, m => m.trim());

export default minify;
