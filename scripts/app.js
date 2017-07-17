const videoService = require('./videoService.js')
videoService.loadData()
const initialState = {
  videos: [
    {
      id: 1,
      title: 'Introduction to NodeJS by Riza Fahmi',
      description: 'Dalam meetup ini akan diadakan mini-workshop bagaimana membuat aplikasi sederhana menggunakan NodeJS.  Kamu diharapkan untuk membawa laptop sendiri dan sudah menginstal nodejs di https://nodejs.org/en/ (versi 6 atau 7) di laptop kamu.  Speaker: Riza Fahmi Seorang developer yang gemar mempelajari teknologi baru dan senang berbagi dengan sesama developer dengan tujuan memberikan bimbingan untuk meningkatkan kemampuan mereka sehingga mereka dapat memiliki karir yang lebih baik atau mungkin membangun bisnis mereka sendiri.  Selain itu, ia juga adalah Curriculum Director HACKTIV8, sebuah coding bootcamp yang ia mulai dengan Ronald Ishak, dalam upaya untuk memecahkan krisis perekrutan developer yang telah menghambat pertumbuhan banyak startups teknologi di Indonesia. Melalui kurikulum mendalam selama 12-minggu, HACKTIV8 berharap dapat meningkatkan kualitas web developer dan menghubungkan mereka dengan perusahaan teknologi terbaik di negeri ini.',
      date_published: '2017-03-15',
      thumbnail: 'http://i3.ytimg.com/vi/Q41Tgy-W_7w/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Q41Tgy-W_7w'
    },
    {
      id: 2,
      title: 'Real time app with VueJS and Firebase by Septian Adhi Tama',
      description: '',
      date_published: '2017-03-28',
      thumbnail: 'http://i3.ytimg.com/vi/E4MtmE1OtXg/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=E4MtmE1OtXg'
    },
    {
      id: 3,
      title: 'Web Development With NodeJS & Express by Riza Fahmi',
      description: 'Mini Workshop: Web Development with NodeJS merupakan seminar yang akan membahas bagaimana membuat website dengan menggunakan bahasa pemrograman NodeJS.  Dalam event ini, Curriculum Director HACKTIV8, Riza Fahmi juga akan berbagi wawasan bagaimana cara mengimplementasikan teknologi-teknologi terkini ke dalam pengembangan website tersebut. #SayYesToCode',
      date_published: '2017-04-26',
      thumbnail: 'http://i3.ytimg.com/vi/D7lpojnH10s/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=D7lpojnH10s'
    },
    {
      id: 4,
      title: 'Easy React Native with Exponent by Simon Sturmer',
      description: 'Dalam REACT.ID Meetup ini kita akan membahas topik-topik menarik yang berhubungan dengan React. Kita akan berdiskusi dengan para pembicara yang memang expert dibidangnya.',
      date_published: '2017-04-12',
      thumbnail: 'http://i3.ytimg.com/vi/ApXw4J9llMQ/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=ApXw4J9llMQ'
    },
    {
      id: 5,
      title: 'Database With NodeJS: Object-Relational Mapping by Riza Fahmi',
      description: '',
      date_published: '2017-06-01',
      thumbnail: 'http://i3.ytimg.com/vi/PWhRbMsBeho/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=PWhRbMsBeho'
    }
  ]
}
