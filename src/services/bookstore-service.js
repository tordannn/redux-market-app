export default class BookstoreService {

    data = [
        {
            id: 1,
            title: "Clean Code",
            author: 'Robert Cecil Martin',
            price: 34,
            coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWN_owQtBKfgNUbQRq51jIPLcvyC5anNjHq0P-RKN2uGv-xfcM'
        },
        {
            id: 2,
            title: "Code Complete",
            author: 'Steve McConnell',
            price: 45,
            coverImage: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQP799LJmnpKVZJzAHpsU-1baLsnLdEmF0HE4L-p-qB8f9W6R7y'
        }
    ];


    getBooks() {

        return new Promise((resolve, reject) => {
             setTimeout(() => {
                 if(Math.random() > 0.75) {
                     reject(new Error('Books are currently unavailable'))
                 }
                 else {
                     resolve(this.data)
                 }
             }, 1000)
    }
    )
    }
}