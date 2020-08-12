const fabricsList = [
    {
        name: 'Black',
        image: 'fabrics/DSC_0573_Original.jpg',
        colors: ['black'],
        limited: false,
    },
    {
        name: 'Faux Denim',
        image: 'fabrics/DSC_0562_Original.jpg',
        colors: ['grey'],
        limited: false,
    },
    {
        name: 'Grey',
        image: 'fabrics/DSC_0576_Original.jpg',
        colors: ['grey'],
        limited: false,
    },
    {
        name: 'White',
        image: 'fabrics/DSC_0570_Original.jpg',
        colors: ['white'],
        limited: false,
    },
    {
        name: 'Grey',
        image: 'fabrics/DSC_0561_Original.jpg',
        colors: ['grey'],
        limited: false,
    },
    {
        name: 'Pale Lightblue',
        image: 'fabrics/DSC_0566_Original.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Deep Blue',
        image: 'fabrics/DSC_0565_Original.jpg',
        colors: ['blue'],
        limited: false,
    },
    {
        name: 'Teal',
        image: 'fabrics/DSC_0564_Original.jpg',
        colors: ['teal'],
        limited: false,
    },
    {
        name: 'Green',
        image: 'fabrics/DSC_0568_Original.jpg',
        colors: ['green'],
        limited: false,
    },
    {
        name: 'Light Green',
        image: 'fabrics/DSC_0569_Original.jpg',
        colors: ['green'],
        limited: false,
    },
    {
        name: 'Purple',
        image: 'fabrics/DSC_0574_Original.jpg',
        colors: ['purple'],
        limited: false,
    },
    {
        name: 'Hot Pink',
        image: 'fabrics/DSC_0577_Original.jpg',
        colors: ['pink'],
        limited: false,
    },
    {
        name: 'Light Pink',
        image: 'fabrics/DSC_0575_Original.jpg',
        colors: ['pink'],
        limited: false,
    },
    {
        name: 'Black Mini Polka Dots',
        image: 'fabrics/IMG_0396.jpg',
        colors: ['black', 'white'],
        limited: false,
    },
    {
        name: 'Grey Polka Dots',
        image: 'fabrics/IMG_0392.jpg',
        colors: ['grey', 'white'],
        limited: false,
    },
    {
        name: 'Brown Polka Dots',
        image: 'fabrics/IMG_0394.jpg',
        colors: ['brown', 'white'],
        limited: false,
    },
    {
        name: 'Green Polka Dots',
        image: 'fabrics/IMG_0393.jpg',
        colors: ['green', 'white'],
        limited: false,
    },
    {
        name: 'Pink Mini Polka Dots',
        image: 'fabrics/IMG_0395.jpg',
        colors: ['pink', 'white'],
        limited: false,
    },
    {
        name: 'Pink Thingies',
        image: 'fabrics/IMG_0399.jpg',
        colors: ['pink', 'white'],
        limited: false,
    },
    {
        name: 'Small Gold Flowers',
        image: 'fabrics/IMG_0387.jpg',
        colors: ['grey', 'yellow'],
        limited: false,
    },
    {
        name: 'Small Floral',
        image: 'fabrics/IMG_0389.jpg',
        colors: ['grey', 'yellow'],
        limited: false,
    },
    {
        name: 'Pink Gingham',
        image: 'fabrics/IMG_0398.jpg',
        colors: ['pink', 'white'],
        limited: false,
    },
    {
        name: 'Yellow Gingham',
        image: 'fabrics/IMG_0390.jpg',
        colors: ['grey', 'yellow'],
        limited: false,
    },
    {
        name: 'Multicolor Stripes',
        image: 'fabrics/IMG_0397.jpg',
        colors: ['red', 'yellow', 'lightgreen', 'lightblue', 'purple', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Thick Multi Strips',
        image: 'fabrics/IMG_0418.jpg',
        colors: ['purple', 'red', 'green', 'yellow', 'white'],
        limited: false,
    },
    {
        name: 'Purple & Pink Zigzags',
        image: 'fabrics/IMG_0428.jpg',
        colors: ['purple', 'pink'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0443.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0444.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Stars & Moons',
        image: 'fabrics/IMG_0388.jpg',
        colors: ['grey', 'yellow'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0445.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Pale Floral',
        image: 'fabrics/IMG_0391.jpg',
        colors: ['brown', 'white'],
        limited: false,
    },
    {
        name: 'Brown Mandalas',
        image: 'fabrics/IMG_0416.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Multi Dandelions',
        image: 'fabrics/IMG_0419.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0423.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Pink Hawaiian',
        image: 'fabrics/IMG_0402.jpg',
        colors: ['pink', 'white'],
        limited: false,
    },
    {
        name: 'Red Hawaiian',
        image: 'fabrics/IMG_0400.jpg',
        colors: ['red', 'white'],
        limited: false,
    },
    {
        name: 'Grey Paisley',
        image: 'fabrics/IMG_0403.jpg',
        colors: ['grey', 'white', 'black'],
        limited: false,
    },
    {
        name: 'Green Paisley',
        image: 'fabrics/IMG_0404.jpg',
        colors: ['green', 'white', 'black'],
        limited: false,
    },
    {
        name: 'Deep Purple Paisley',
        image: 'fabrics/IMG_0405.jpg',
        colors: ['purple', 'white', 'black'],
        limited: false,
    },
    {
        name: 'Light Purple Paisley',
        image: 'fabrics/IMG_0406.jpg',
        colors: ['purple', 'white', 'black'],
        limited: false,
    },
    {
        name: 'Blue Paisley',
        image: 'fabrics/IMG_0415.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Light Blue Floral Bouquets',
        image: 'fabrics/IMG_0407.jpg',
        colors: ['lightblue', 'pink', 'white', 'green'],
        limited: false,
    },
    {
        name: 'Teal Diamonds',
        image: 'fabrics/IMG_0408.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Navy Spring',
        image: 'fabrics/IMG_0409.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Navy Floral',
        image: 'fabrics/IMG_0411.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Owls & Butterflies',
        image: 'fabrics/IMG_0412.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Cool Grey Floral',
        image: 'fabrics/IMG_0413.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Bird Circles',
        image: 'fabrics/IMG_0410.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Teal Hummingbirds',
        image: 'fabrics/IMG_0417.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0441.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0424.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0422.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0421.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Pale Pink Flowers',
        image: 'fabrics/IMG_0420.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0429.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0426.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0427.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0438.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0442.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Red Paws & Bones',
        image: 'fabrics/IMG_0401.jpg',
        colors: ['red', 'white', 'black'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0430.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0431.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0433.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0434.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0432.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0425.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0435.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0436.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0437.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0439.jpg',
        colors: ['lightblue'],
        limited: false,
    },
    {
        name: 'Name',
        image: 'fabrics/IMG_0440.jpg',
        colors: ['lightblue'],
        limited: false,
    },


    /*       
        Pink stripes ...
        
        ...

    Yellow dandelions
        
        Big flowers ...

    Acorns & leaves
        
        Pink & brown chandeliers ?

        Purple ...

    Pink & purple zigzags
        
        Pink ...

    Pastel ladybugs
        
        Unicorns
        
        Tinker bell
        
        Dr.Suess
        
        Robots & rockets
        
        Coffee
        
        Shells
        
        Architecture music birds math etc
        
        Galaxy
        
        Buttons
        
        Black nature
        
        Red bird blue bird
        
        Camo lizards
        
        Orange squiggles
        
        Orange diamonds
        
        Green ... */
];

export default fabricsList;