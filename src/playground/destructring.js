// const book = {
//     title: 'Ege is Your Enemy',
//     author: 'Ryan',
//     publisher: {
//         name: 'penguin'
//     }
// };

// const { name: PublisherName = 'Self-Published' } = book.publisher;
// console.log(PublisherName);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemname, s, m, l] = item;

console.log(`The medium ${itemname} costs ${m}.`);
