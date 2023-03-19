export const mocks = {
  productos: [
    {
      title: 'Bebida energética',
      descripcion: 'Maravillosa bebida energética para refrescarte despues de los duros entrenamientos',
      photo: '',
      price: '2.50',
    },
    {
      title: 'Raqueta de pádel',
      descripcion: 'Raqueta para los mejores partidos y las mejores victorias',
      photo: '',
      price: '20.99',
    },
    {
      title: 'Shaker de proteínas',
      descripcion: 'Puedes ser la envidia de todos los del gimnasio con este shaker',
      photo: '',
      price: '5.50',
    },
    {
      title: 'Balón de fútbol',
      descripcion: 'Balón para jugar como los mejores de la historia, dotado de la mayor tecnología y el mejor diseño',
      photo: '',
      price: '19.99',
    },
  ],
  instalaciones: [
    {
      title: 'Pista de pádel',
      descripcion: 'Para aquellos aficionados al pádel, nuestra pista representa nuestra gran pasión por el deporte. Disfruta de nuestra pista de exclusivo diseño construida con los mejores materiales',
      photo: 'https://www.padeladdict.com/wp-content/uploads/2022/10/wilson-se-asocia-con-padel-galis-para-construir-pistas-de-padel-en-todo-el-mundo-portada-1024x582.jpg',
    },
    {
      title: 'Campo de fútbol',
      descripcion: 'Si lo tuyo es el fútbol puedes disfrutar de una de los mejores campos de la ciudad, césped de primera calidad y máxima iluminación para que juegues como un profesional ',
      photo: 'https://aguimes.es/wp-content/uploads/2020/09/Campo-Municipal-de-Futbol-de-Las-Rosas-scaled.jpg',
    },
    {
      title: 'Piscina climatizada',
      descripcion: 'Piscina climatizada para aquellos fanáticos de la natación',
      photo: 'https://barbastro.org/images/areas/deportes/Piscina_climatizada_Large.jpg',
    },
    {
      title: 'Pista de baloncesto',
      descripcion: 'Pista para jugar con amigos o con tu equipo profesional, dotada de las mejores prestaciones y materiales',
      photo: 'https://metropoliabierta.elespanol.com/uploads/s1/13/48/28/6/cancha-footlocker.jpeg',
    },
  ],
  usuarios: [
    {
      email: 'prueba@gmail.com',
      password: 'prueba',
      reservas: [
        {
          instalacion: 'Pista de pádel',
          hora: '15:30',
        }
      ],
      pedidos: [
        {
          id: '001',
          productos: [
            'Bebida energética', 'Raqueta de pádel'
          ],
          pvpTotal: '23.49',
        },
        {
          id: '002',
          productos: [
            'Shaker de proteínas', 'Raqueta de pádel'
          ],
          pvpTotal: '26.49'
        }
      ]
    }
  ],

}
