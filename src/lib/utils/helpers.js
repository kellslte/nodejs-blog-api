export const slugify = function (text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const generateExcerpt = function ( text )
{
     const words = text.split(" ");
     const maxWords = 20;

     if (words.length <= maxWords) {
       return text;
     }

     const excerptWords = words.slice(0, maxWords);
     const excerpt = excerptWords.join(" ") + "...";

     return excerpt;   
};
