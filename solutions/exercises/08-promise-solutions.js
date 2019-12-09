const getBooksApi = () => {
  return new Promise(resolve => {
    window.setTimeout(() => {
      return resolve({
        category: "books",
        subCategory: "graphic novels",
        data: [
          {
            id: "0c8cb1b2",
            title: "Berlin",
            authors: ["Jason Lutes"],
            image:
              "https://images-na.ssl-images-amazon.com/images/I/51DhbDeVIVL._SX388_BO1,204,203,200_.jpg"
          },
          {
            id: "cb195709",
            title: "Hey, Kiddo",
            authors: ["Jarrett J. Krosoczka"],
            image:
              "https://images-na.ssl-images-amazon.com/images/I/517I7YRvHBL._SX351_BO1,204,203,200_.jpg"
          },
          {
            id: "77ae31c1",
            title: "On a Sunbeam",
            authors: ["Tillie Walden"],
            image:
              "https://images-na.ssl-images-amazon.com/images/I/51Ukxxbo-mL._SX359_BO1,204,203,200_.jpg"
          }
        ]
      });
    }, 50);
  });
};

let data; // Do not change this line.
getBooksApi().then(response => (data = response.data));

module.exports = {
  getBooksApi,
  getData: () => data
};
