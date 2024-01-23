import { VideoType } from "../pages/MainPage";

export const initialVideoSrc =
  "https://media.istockphoto.com/id/1392123838/es/v%C3%ADdeo/alimentaci%C3%B3n-de-desplazamiento-manual-en-el-tel%C3%A9fono-inteligente-con-pantalla-verde-mock-up.mp4?s=mp4-640x640-is&k=20&c=SZIcYR4LoKZjrzBfNEGA3uAbtvj5CLx-uRKnMcYERxw=";

export const finalVideoSrc =
  "https://media.istockphoto.com/id/1392123838/es/v%C3%ADdeo/alimentaci%C3%B3n-de-desplazamiento-manual-en-el-tel%C3%A9fono-inteligente-con-pantalla-verde-mock-up.mp4?s=mp4-640x640-is&k=20&c=SZIcYR4LoKZjrzBfNEGA3uAbtvj5CLx-uRKnMcYERxw=";

export const fakeVideos: VideoType[] = [
  {
    index: 0,
    src: "https://cdn-user.veed.io/render/f9501c8a-ea10-4fe7-8463-29c720b092db.mp4",
    profilePic:
      "https://microbiology.ucr.edu/sites/default/files/styles/form_preview/public/blank-profile-pic.png?itok=4teBBoet",
    caption:
      "Aunque a ti no te gustan tanto los patos, pero evidentemente a mi sí.",
    username: "duck_lover_365",
    comments: [
      {
        username: "colacados",
        comment: "Estos seríamos tú y yo @tosa <3",
        date: "1 d",
        likes: 687,
      },
      {
        username: "ducky_ducky",
        comment:
          "A mí también me gustan los patos. Ojalá tuviera a alguien con quien compartir este vídeo",
        date: "5 d",
        likes: 12,
      },
    ],
  },
  {
    index: 1,
    src: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/608537596426649600/7c47ebc3b6a3056f8d4d218e8347ee98.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240123%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240123T215555Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=1b821394efbf2060269a872f2520600dbfea44060b15dd67657c816ba8473c0c",
    profilePic:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    caption:
      "Este me hace gracia sin más. A VER SI TE CREÍAS QUE TODO IBAN A SER COSAS QUE TE GUSTARAN A TI.",
    username: "default_username",
    comments: [
      {
        username: "monkey",
        comment:
          "Me siento identificado... Así iba yo a todos mis exámenes. Pero no me ha ido tan mal en la vida después de todo. Ahora soy tik toker y hago vídeos en directo fingiendo ser un robot.",
        date: "2 d",
        likes: 66,
      },
      {
        username: "Pablo Alborán",
        comment: "Buena canción de fondo, ¿quién la canta?",
        date: "9 d",
        likes: 1,
      },
    ],
  },
  {
    index: 2,
    src: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/608537596426649600/59fdcbb29420a646f331f9067ef91196.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240123%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240123T215513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=33f920e05938212c2f142b0cebf0d752228f3f33a3184a15ec9e152f43bb45e0",
    profilePic:
      "https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
    caption: "Tú con tu futura hija",
    username: "wolf138",
    comments: [
      {
        username: "tosa",
        comment:
          "Eso serás tú que eres un bruto. Yo a mi hija no la dejaré que se acerque a una escoba hasta que tenga 18 años.",
        date: "6 d",
        likes: -80,
      },
    ],
  },
  {
    index: 3,
    src: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/608537596426649600/07578efa616ec6d89f0543d50a0bd11c.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240123%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240123T215433Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=383cbc69271fa3a26572ce57097d7792edf73a997376a8cf6850b34ef4a123a3",
    profilePic:
      "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg",
    caption: "javascript html css react nodejs deploy php mysql",
    username: "Perro Programador",
    comments: [
      {
        username: "tosa",
        comment: "ya ves 😭😭😭",
        date: "6 d",
        likes: 55,
      },
      {
        username: "edgarflores425",
        comment:
          "Las mujeres son todas unas zopencas que no saben de nada. Solo saben quejarse. Que se vayan a la cocina! Eso le dije a mi última novia por allá en 1986, la última vez que tuve contacto con una fémina.",
        date: "5 d",
        likes: 999,
      },
    ],
  },
  {
    index: 4,
    src: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/608537596426649600/6bd4b27b1fbc4166a88c6168e6df382c.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240123%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240123T215400Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=f3face7519a5ac08bece36379ca1674a76378e8eabfbea12ca300d6629f77c8a",
    profilePic:
      "https://st2.depositphotos.com/2559749/11304/v/450/depositphotos_113040644-stock-illustration-flat-icon-isolate-on-white.jpg",
    caption:
      "Mi vida fue muy complicada. Cuando nací, ninguno de mis padres estaba ahí. Mi padre me castigaba sin electricidad.",
    username: "perry_the_platypus",
    comments: [
      {
        username: "perry",
        comment:
          "I like platypuses. They're my favorite animal. I like them more than I like my own family.",
        date: "6 d",
        likes: 99,
      },
      {
        username: "perry_the_platypus",
        comment: "I like you too, Perry.",
        date: "5 d",
        likes: 100,
      },
      {
        username: "perry_lover",
        comment: "I also like platypuses. They're fascinating animals.",
        date: "5 d",
        likes: 74,
      },
      {
        username: "platypus_lover",
        comment: "I would love to be a platypus. They're so cute.",
        date: "5 d",
        likes: 12,
      },
      {
        username: "platypus_enthusiast",
        comment: "I like platypuses too. I have a platypus tattoo.",
        date: "3 d",
        likes: 88,
      },
      {
        username: "platypus_fan",
        comment:
          "I became a platypus after watching this video. I am transespecie. A transplatypus if you will.",
        date: "3 d",
        likes: 999,
      },
      {
        username: "platypus_queen",
        comment:
          "I'm the platypus queen. I rule over all the platypuses in the world.",
        date: "1 d",
        likes: 72,
      },
      {
        username: "platypus_king",
        comment:
          "I'm the platypus king. I rule over all the platypuses in the world, except for the platypus queen.",
        date: "1 d",
        likes: 73,
      },
    ],
  },
  {
    index: 5,
    src: "https://cdn-user.veed.io/render/63ac9686-6f94-463c-9eef-ea3ea6a76473.mp4",
    profilePic:
      "https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png",
    caption:
      "Quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack",
    username: "quack_quack_quack",
    comments: [
      {
        username: "quack_quack_quack",
        comment:
          "Quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack",
        date: "6 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment: "Quack quack quack quack quack quack quack quack quack quack",
        date: "5 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment: "Quack quack quack quack",
        date: "4 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment: "Quack quack quack quack quack quack",
        date: "3 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment:
          "Quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack",
        date: "2 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment: "Quack quack quack quack quack quack quack quack quack quack",
        date: "1 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment:
          "Quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack ",
        date: "1 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment: "Quack.",
        date: "1 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment:
          "Quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack",
        date: "1 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment:
          "Quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack",
        date: "6 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment: "Quack quack quack quack quack quack quack quack quack quack",
        date: "5 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment: "Quack quack quack quack",
        date: "4 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment: "Quack quack quack quack quack quack",
        date: "3 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment:
          "Quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack",
        date: "2 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment: "Quack quack quack quack quack quack quack quack quack quack",
        date: "1 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment:
          "Quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack ",
        date: "1 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment: "Quack.",
        date: "1 d",
        likes: 999,
      },
      {
        username: "quack_quack_quack",
        comment:
          "Quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack",
        date: "1 d",
        likes: 999,
      },
    ],
  },
  {
    index: 6,
    src: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/608537596426649600/81c844f71b335fd4dbf678e6818c258a.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240123%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240123T215236Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=312b5bb6601c9dbdf7163978c48cb61af6776f84a18fe97edf930d5b3940fc14",
    profilePic:
      "https://microbiology.ucr.edu/sites/default/files/styles/form_preview/public/blank-profile-pic.png?itok=4teBBoet",
    caption: "Cámaras en directo captan a Marta saliendo del garaje.",
    username: "radar.trafico",
    comments: [
      {
        username: "colacados",
        comment: "Ya sabía yo que tanta cólera al volante al final...",
        date: "6 d",
        likes: 67,
      },
      {
        username: "tosa",
        comment:
          "Ese día estaba nerviosa porque me habían dicho que iba a tomar patatas medianas en lugar de grandes 😭😭😭😭😭",
        date: "5 d",
        likes: 44,
      },
    ],
  },
  {
    index: 7,
    src: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/608537596426649600/26c827ce8f749d02f4f387372c03eeee.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240123%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240123T215142Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=89d0cf1206942bc4bdd336a6be834d23264c2c2868bbe0c2878417bb4c50d3bc",
    profilePic:
      "https://microbiology.ucr.edu/sites/default/files/styles/form_preview/public/blank-profile-pic.png?itok=4teBBoet",
    caption: "It's your baby's first snow day!",
    username: "tik_tok_biological_clock",
    comments: [
      {
        username: "tosa",
        comment: "QUIERO UNOOOO 😭😭😭 Me muero.",
        date: "6 d",
        likes: 522,
      },
      {
        username: "edgarflores425",
        comment: "Like por el bebé",
        date: "5 d",
        likes: 12,
      },
    ],
  },
  {
    index: 8,
    src: "https://gemootest.s3.us-east-2.amazonaws.com/s/res/608537596426649600/211803d2fb7c6708396a5456850f6b57.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240123%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240123T215616Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=d014716a37442a8d2291cea3dae46c219f6840626d0a31ac6fd60ccb182b110b",
    profilePic:
      "https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png",
    caption: "Taylor si tocara música buena de verdad",
    username: "colacados",
    comments: [
      {
        username: "colacados",
        comment: "Esta muchacha sí que sabe cantar.",
        date: "6 d",
        likes: 55,
      },
      {
        username: "tosa",
        comment:
          "No había escuchado esta canción de Taylor hasta ahora. Como la de `You're losing me`, que tampoco la escuché en su momento. ¿Seré una verdadera swiftie?",
        date: "5 d",
        likes: 24,
      },
      {
        username: "mexican_wey",
        comment:
          "Ay qué vergas esta canción está bien chida la recontraverga de la madre",
        date: "3 d",
        likes: 224,
      },
    ],
  },
];
