const removeTags = text =>
  text?.toString().replace(/<\/?[\w\s]*>|<.+[\W]>/g, '');

export default removeTags;
