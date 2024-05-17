let libro={  
titulo:"Cien años de soledad",
autor:"Gabriel García Márquez",
genero:"Realismo mágico",
idioma:" Español",
precio:"+40.5 euros",
formato:"pasta dura",
isbn:"Varía según la edición1",
descripocion:" trata un siglo en la vida de la familia Buendía, cuyo patriarca, José Arcadio Buendía, fundó el pueblo ficticio de Macondo, en Colombia.",
estado:"nuevo",
ubicacion:"colombia macondo",
fecha_publicacion:"",
editorial:"editoriar sub americana",
dimencion:"",
peso:"400g",
paginas:"432",}

let libros =[
{
    titulo:"Cumbres borrascosas",
    paginas:456,
    autor:"Emily Bronte ",
    genero:"Tragedia",
    idioma:"Español",
    precio:"$"+50.5,
    formato:"Pasta dura",
    isbn:9780007326747,
    descripcion:"Cumbres borrascosas, una de las novelas inglesas más relevantes del<br>siglo XIX, narra la épica historia de Catherine y Heathcliff.",
    estado:"usado",
    ubicacion:"Inglaterra",
    fecha_publicacion:"diciembre"+1847,
    dimensiones:"14 x 2.8 x 21 cm",
    peso:756+"gr",
    editorial:"desconocida",
},
{
    titulo:"Jane Eyre",
    paginas:456,
    autor:"Charlotte Bronte",
    genero:"Ficción,Poesía",
    idioma:"ingles",
    precio:"$"+1.638,
    formato:"pata dura",
    isbn:9789588979519,
    descripcion:"Una de las grandes novelas de todos los tiempos.<br> La obra maestra de la literatura victoriana. Jane Eyre es una novela clásica de amor, precursora del feminismo y la psicología moderna, sobre una<br> huérfana que enfrenta su destino manifesto gracias a su inteligencia e integridad inquebrantables.",
    estado:"Nuevo",
    ubicacion:"Irlanda",
    fecha_publicacion:19+"de octubre de"+1847,
    dimensiones:"5.08 x 1.02 x 7.8 pulgadas",
    peso:50+"grs",
    editorial:"PENGUIN CLASICOS BOLSILLO"
},

{
    titulo:"+18",
    paginas:"200",
    autor:"Darlis Stefany",
    genero:"Infantil y juveni",
    idioma:"Español",
    precio:"$"+60,
    formato:"pasta balnda",
    isbn:98676546543,
    descripcion:"Una historia de amor alocada, divertida y llena de giros inesperados. Alaska Hans tiene un secreto: le encanta escribir bajo seudónimo y se ha convertido en un éxito en la plataforma JoinApp.",
    estado:"Nuevo",
    ubicacion:"No especificado",
    fecha_publicacion:"2022",
    dimensiones:"No espesificado",
    peso:"No espesificado",
    editorial:"Montena",
},
{
    titulo:"Las mil y una noches",
    paginas:159,
    autor:"Anónimo",
    genero:"Novela literaria",
    idioma:" Español",
    precio:"$"+70,
    formato:"pasta dura",
    isbn:"974522435477",
    descripcion:"Un clásico consistente en una recopilación de cuentos tradicionales de Oriente Medio, con historias como Simbad y Alí Babá y los cuarenta ladrones.",
    estado:"Nuevo",
    ubicacion:" No especificado",
    fecha_publicacion:"Siglo XVIII",
    dimensiones:"6.0 x 1.08 x 7.8 pulgadas",
    peso:55+"grs", 
    editorial:"No espesificado", 
},
{
    titulo:"Anna karenina",
    paginas:190,
    autor:"Leon Tolstoi",
    genero:"novela,Ficcion",
    idioma:"ruso",
    precio:"$"+500,
    formato:"tapa dura",
    isbn:9788484284925,
    descripcion:" La novela narra la trágica historia de Anna Karenina, una joven aristócrata que tiene un romance<br>ilícito y todas las consecuencia sociales y personales de su indiscreción.",
    estado:"nuevo",
    ubicacion:"Rusia",
    fecha_publicacion:1877,
    dimensiones:"5.0 x 1.08 x 7.8 pulgadas",
    peso:60+"grs",
    editorial:"Editorial Alma",
},

{
    titulo:"El amor en los tiempos del cólera",
    paginas:348,
    autor:"Gabriel García Márquez",
    genero:" Novela",
    idioma:"Español",
    precio:"Varía según el vendedor",
    formato:"Tapa blanda y digital",
    isbn:9780307387264,
    descripcion:"Esta novela cuenta la vida de Florentino Ariza y su amor no correspondido por Fermina Daza durante más de 50 años.",
    estado:"Nuevo o usado",
    ubicacion:" Disponible en varias librerías y plataformas online",
    fecha_publicacion:"Primera edición en 1985",
    dimensiones:"13.21 x 2.03 x 20.32 cm",
    peso:249+"g", 
    editorial:" Vintage Español",
},
{
    titulo:"Cien años de soledad",
    paginas:471,
    autor:"Gabriel García Márquez",
    genero:"Realismo mágico",
    idioma:"Español",
    precio:"Varía según el vendedor",
    formato:"Tapa blanda y digital",
    isbn:9780307474728,
    descripcion:" La obra maestra de Gabriel García Márquez narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo",
    estado:"Nuevo o usado",
    ubicacion:"Disponible en varias librerías y plataformas online",
    fecha_publicacion:"Primera edición en 1967",
    dimensiones:"13.97 x 2.54 x 20.96 cm",
    peso:" 340 g", 
    editorial:"HarperCollins", 
},
    
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
]
mostrarLibros()
function CrearLibro(libro) {
    libros.push(libro);
    
}
function EliminarLibro() {

    if (libros.length > 0) {
        return libros.pop();
      } else {
        console.log("La pila está vacía.");
      }
}
function mostrarLibros() {
    if (libros.length > 0) {
        console.log(" libros disponibles:");
        libros.forEach((libro, index) => {
          console.log(`${index + 1}: el titulo es: ${libro.titulo } autor: ${libro.autor} genero: ${libro.genero} idioma: ${libro.idioma} precio: ${libro.precio} formato: ${libro.formato} isdn: ${libro.isdn} descripcion: ${libro.descripcion} estado:${libro.estado} ubicacion: ${libro.ubicacion} fecha publicacion: ${libro.fecha_publicacion} dimensiones: ${libro.dimensiones} peso:${libro.peso} edicorial: ${libro.editorial } nunero de paginas ${libro.paginas}`);
        });
      } else {
        console.log("La pila está vacía.");
      }
    
}

    
