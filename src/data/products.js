const data = [
    {
     id: 1,
     name: "Alimento Royal Canin",
     price: 3574,
     discount: 30,
     category: "Todos los productos",
     description: "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
     image: "Alimento-Perros-Balanceado-Royal-Canin-Mini.jpg"
    },
    {
     id: 2,
     name: "Bandeja Sanitaria",
     price: 1679,
     discount: 25,
     category: "oferta",
     description: "nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris",
     image: "Bandeja-Sanitaria-Pañales-Paños.jpeg"
    },
    {
     id: 3,
     name: "Cama Little Arena",
     price: 4705,
     discount: 10,
     category: "oferta",
     description: "placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante",
     image: "Cama-Cocooning-Little-Arena.jpg"
    },
    {
     id: 4,
     name: "Comedero Flippy",
     price: 4063,
     discount: 0,
     category: "Todos los productos",
     description: "nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh",
     image: "Comedero-Dispenser-Alimentador-Programable.jpg"
    },
    {
     id: 5,
     name: "Correa Extensible",
     price: 2687,
     discount: 35,
     category: "oferta",
     description: "mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec",
     image: "Correa-Extensible-Ferplast-Flippy-Tech-Negra.jpg"
    },
    {
     id: 6,
     name: "Cucha Chica",
     price: 9700,
     discount: 0,
     category: "Todos los productos",
     description: "sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
     image: "Cucha-chica-Rimax_61x65x68.jpeg"
    },
    {
     id: 7,
     name: "Cucha Kenny",
     price: 7662,
     discount: 0,
     category: "Todos los productos",
     description: "elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero",
     image: "Cucha-Kenny-Plástica-Con-Techo-Extraible.jpg"
    },
    {
     id: 9,
     name: "Juguete para Gato",
     price: 3712,
     discount: 0,
     category: "Todos los productos",
     description: "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
     image: "Juguete-Interactivo-Para-Gatos-Typhon.jpeg"
    },
    {
     id: 10,
     name: "Juguete Goodbite",
     price: 3711,
     discount: 0,
     category: "Todos los productos",
     description: "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia",
     image: "Juguete-Saborizado-Goodbite-Natural Helix_Mediano.jpg"
    },
    {
     id: 11,
     name: "Litera Catego",
     price: 691,
     discount: 20,
     category: "oferta",
     description: "urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper",
     image: "Litera-Cateco-Naranja_55x42,5x20.jpg"
    },
    {
     id: 12,
     name: "Litera Magix",
     price: 2116,
     discount: 50,
     category: "oferta",
     description: "turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean",
     image: "Litera-Cerrada-Magix-Con-Manija-Para-Gatos_Estándar.jpeg"
    },
    {
     id: 13,
     name: "Moises Pet",
     price: 22039,
     discount: 0,
     category: "Todos los productos",
     description: "aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque",
     image: "Moises-WePets-Classic-Chevron_45x45x15.png"
    },
    {
     id: 14,
     name: "Pelota Fitness",
     price: 2595,
     discount: 0,
     category: "visitados recientemente",
     description: "convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo",
     image: "Pelota-Fitness-K9-Con-Doble-Soga.jpeg"
    },
    {
     id: 15,
     name: "Pelota Pawise",
     price: 4278,
     discount: 0,
     category: "visitados recientemente",
     description: "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi",
     image: "Pelota-Pawise-Para-Snacks-Giggle-Treat.jpg"
    },
    {
     id: 16,
     name: "Rascador",
     price: 731,
     discount: 0,
     category: "visitados recientemente",
     description: "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis",
     image: "Rascador-Para-Gato-En-Rampa.jpg"
    },
    {
     id: 17,
     name: "Shampoo Antiparasitario",
     price: 4278,
     discount: 0,
     category: "visitados recientemente",
     description: "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi",
     image: "Shampoo-Antiparasitario-Pulguicida-Osspret_250-Cc.jpeg"
    }
   ]

   export default data