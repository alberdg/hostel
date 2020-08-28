export const SEARCH_BUTTON = '#search-button';
export const THEME = {
  overrides: {
    MuiInputBase: {
      input: {
        borderBottomColor: '#FFFFFF !important'
        // .. other styling that you want
      }
    }
  },
  palette: {
    primary: {
      main: '#0096c7' //8AC926
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#ED254E'
    },
    white: {
      main: '#FFFFFF',
    },
    grey: {
      main: '#FBFCFF',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
};

export const ROOMS = [
  {
    _id: 1,
    picture: 'https://lh3.googleusercontent.com/proxy/l_wLw-nqEmmO6w-S6JfgPyIt-I5Rg2QpZANSpxd0xmtYAyM3ZfCaxcbAQHv6giJ_TXznTGCjdGso8MlllgHcNCW6aA84Myliw8RF0Bgd-o_HCuPvqAeMcBfbAA4',
    title: 'Room 1',
    subtitle: 'First floor, 2 beds, shared bathroom',
    beds: 2,
    ensuiteBathroom: false,
    price: 30,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    _id: 2,
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR91YDkkDl8ffbHc53_lqFypzSAItfTy4MF5w&usqp=CAU',
    title: 'Room 2',
    subtitle: 'First floor, 3 beds, shared bathroom',
    beds: 3,
    ensuiteBathroom: false,
    price: 45,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    _id: 3,
    picture: 'https://pix10.agoda.net/hotelImages/406/4063221/4063221_18022813480062438784.jpg?s=1024x768',
    title: 'Room 3',
    subtitle: 'First floor, 1 King side bed, ensuite bathroom',
    beds: 1,
    ensuiteBathroom: true,
    price: 45,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    _id: 4,
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSqGeaAzeyW8JFH5gwutQvDDk8VoGyaqZ81g&usqp=CAU',
    title: 'Room 4',
    subtitle: 'Second floor, 1 bed, shared bathroom',
    beds: 1,
    ensuiteBathroom: false,
    price: 15,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    _id: 5,
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR91YDkkDl8ffbHc53_lqFypzSAItfTy4MF5w&usqp=CAU',
    title: 'Room 5',
    subtitle: 'Second floor, 3 beds, shared bathroom',
    beds: 3,
    ensuiteBathroom: false,
    price: 45,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    _id: 6,
    picture: 'https://pix10.agoda.net/hotelImages/406/4063221/4063221_18022813480062438784.jpg?s=1024x768',
    title: 'Room 6',
    subtitle: 'Second floor, 1 Kingsize bed, ensuite bathroom',
    beds: 1,
    ensuiteBathroom: true,
    price: 45,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    _id: 7,
    picture: 'https://lh3.googleusercontent.com/proxy/l_wLw-nqEmmO6w-S6JfgPyIt-I5Rg2QpZANSpxd0xmtYAyM3ZfCaxcbAQHv6giJ_TXznTGCjdGso8MlllgHcNCW6aA84Myliw8RF0Bgd-o_HCuPvqAeMcBfbAA4',
    title: 'Room 7',
    subtitle: 'Third Floor, 2 beds, shared bathroom',
    beds: 2,
    ensuiteBathroom: false,
    price: 30,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    _id: 8,
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR91YDkkDl8ffbHc53_lqFypzSAItfTy4MF5w&usqp=CAU',
    title: 'Room 8',
    subtitle: 'First floor, 3 beds, shared bathroom',
    beds: 3,
    ensuiteBathroom: false,
    price: 45,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    _id: 9,
    picture: 'https://elf.acomodeo.com/i/620x480/b26ab24ba21b88a057d3f2a96f45b367edcc31d0d127c6472e1fb6bab794b422',
    title: 'Junior Suite',
    subtitle: 'Second floor, 1 Kingsize beds, ensuite bathroom',
    beds: 1,
    ensuiteBathroom: true,
    price: 60,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
];
