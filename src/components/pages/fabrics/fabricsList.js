const fabricsList = [
    {
        name: 'Black',
        image: 'fabrics/DSC_0573_Original.jpg',
        colors: ['black'],
        limited: true,
    },
    {
        name: 'Faux Denim',
        image: 'fabrics/DSC_0562_Original.jpg',
        colors: ['blue', 'grey', 'black'],
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
        name: 'Pale Blue',
        image: 'fabrics/DSC_0561_Original.jpg',
        colors: ['blue'],
        limited: false,
    },
    {
        name: 'Light Blue',
        image: 'fabrics/DSC_0566_Original.jpg',
        colors: ['blue'],
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
        colors: ['blue', 'green'],
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
        name: 'Pink',
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
        limited: true,
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
        limited: true,
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
        name: 'Pink Fleur-de-lis',
        image: 'fabrics/IMG_0399.jpg',
        colors: ['pink', 'white'],
        limited: true,
    },
    {
        name: 'Small Gold Flowers',
        image: 'fabrics/IMG_0387.jpg',
        colors: ['yellow', 'brown'],
        limited: false,
    },
    {
        name: 'Small Floral',
        image: 'fabrics/IMG_0389.jpg',
        colors: ['yellow', 'brown'],
        limited: false,
    },
    {
        name: 'Pink Gingham',
        image: 'fabrics/IMG_0398.jpg',
        colors: ['pink', 'white'],
        limited: true,
    },
    {
        name: 'Yellow Gingham',
        image: 'fabrics/IMG_0390.jpg',
        colors: ['yellow', 'grey'],
        limited: false,
    },
    {
        name: 'Thin Multicolor Stripes',
        image: 'fabrics/IMG_0397.jpg',
        colors: ['red', 'yellow', 'green', 'blue', 'purple', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Thick Multicolor Strips',
        image: 'fabrics/IMG_0418.jpg',
        colors: ['red', 'yellow', 'green', 'purple', 'white', 'rainbow'],
        limited: true,
    },
    {
        name: 'Purple & Pink Zigzags',
        image: 'fabrics/IMG_0428.jpg',
        colors: ['purple', 'pink'],
        limited: false,
    },
    {
        name: 'Orange & Navy Squiggles',
        image: 'fabrics/IMG_0443.jpg',
        colors: ['orange', 'blue', 'white'],
        limited: false,
    },
    {
        name: 'Orange & Navy Diamonds',
        image: 'fabrics/IMG_0444.jpg',
        colors: ['orange', 'blue', 'white'],
        limited: false,
    },
    {
        name: 'Stars & Moons',
        image: 'fabrics/IMG_0388.jpg',
        colors: ['yellow', 'grey'],
        limited: false,
    },
    {
        name: 'Green Flowers',
        image: 'fabrics/IMG_0445.jpg',
        colors: ['green', 'white'],
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
        colors: ['brown', 'white'],
        limited: false,
    },
    {
        name: 'Multicolor Dandelions',
        image: 'fabrics/IMG_0419.jpg',
        colors: ['pink', 'orange', 'yellow', 'blue', 'brown', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Yellow Dandelions',
        image: 'fabrics/IMG_0423.jpg',
        colors: ['yellow', 'brown'],
        limited: false,
    },
    {
        name: 'Pink Hawaiian',
        image: 'fabrics/IMG_0402.jpg',
        colors: ['pink', 'white'],
        limited: true,
    },
    {
        name: 'Red Hawaiian',
        image: 'fabrics/IMG_0400.jpg',
        colors: ['red', 'white'],
        limited: true,
    },
    {
        name: 'Grey Paisley',
        image: 'fabrics/IMG_0403.jpg',
        colors: ['grey', 'white', 'black'],
        limited: true,
    },
    {
        name: 'Green Paisley',
        image: 'fabrics/IMG_0404.jpg',
        colors: ['green', 'white', 'black'],
        limited: true,
    },
    {
        name: 'Deep Purple Paisley',
        image: 'fabrics/IMG_0405.jpg',
        colors: ['purple', 'white', 'black'],
        limited: true,
    },
    {
        name: 'Light Purple Paisley',
        image: 'fabrics/IMG_0406.jpg',
        colors: ['purple', 'white', 'black'],
        limited: true,
    },
    {
        name: 'Blue Floral Paisley',
        image: 'fabrics/IMG_0415.jpg',
        colors: ['blue', 'green', 'brown', 'rainbow'],
        limited: false,
    },
    {
        name: 'Light Blue Bouquets',
        image: 'fabrics/IMG_0407.jpg',
        colors: ['blue', 'pink', 'white', 'green', 'rainbow'],
        limited: false,
    },
    {
        name: 'Teal Diamonds',
        image: 'fabrics/IMG_0408.jpg',
        colors: ['blue', 'green', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Navy Spring',
        image: 'fabrics/IMG_0409.jpg',
        colors: ['blue', 'green', 'orange', 'pink', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Navy Floral',
        image: 'fabrics/IMG_0411.jpg',
        colors: ['blue', 'yellow', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Owls & Butterflies',
        image: 'fabrics/IMG_0412.jpg',
        colors: ['red', 'blue', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Cool Grey Floral',
        image: 'fabrics/IMG_0413.jpg',
        colors: ['blue', 'white'],
        limited: false,
    },
    {
        name: 'Bird Circles',
        image: 'fabrics/IMG_0410.jpg',
        colors: ['blue', 'white', 'pink', 'yellow', 'green', 'rainbow'],
        limited: false,
    },
    {
        name: 'Teal Hummingbirds',
        image: 'fabrics/IMG_0417.jpg',
        colors: ['brown', 'white', 'blue'],
        limited: false,
    },
    {
        name: 'Red & Blue Birds',
        image: 'fabrics/IMG_0441.jpg',
        colors: ['blue', 'red', 'brown', 'white', 'orange', 'rainbow'],
        limited: true,
    },
    {
        name: 'Flowers',
        image: 'fabrics/IMG_0424.jpg',
        colors: ['yellow', 'brown', 'purple', 'pink', 'red', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Flowers & Birds',
        image: 'fabrics/IMG_0422.jpg',
        colors: ['brown', 'red', 'pink', 'blue', 'yellow', 'green', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Light Nature Motif',
        image: 'fabrics/IMG_0421.jpg',
        colors: ['pink', 'red', 'brown', 'white', 'yellow', 'rainbow'],
        limited: false,
    },
    {
        name: 'Pale Pink Flowers',
        image: 'fabrics/IMG_0420.jpg',
        colors: ['pink', 'brown', 'white', 'blue'],
        limited: false,
    },
    {
        name: 'Pink Elegance',
        image: 'fabrics/IMG_0429.jpg',
        colors: ['pink', 'brown', 'white'],
        limited: false,
    },
    {
        name: 'Chandeliers',
        image: 'fabrics/IMG_0426.jpg',
        colors: ['pink', 'brown'],
        limited: false,
    },
    {
        name: 'Feather Swirls',
        image: 'fabrics/IMG_0427.jpg',
        colors: ['black', 'brown', 'pink', 'purple', 'green', 'blue', 'rainbow'],
        limited: false,
    },
    {
        name: 'Galaxy',
        image: 'fabrics/IMG_0438.jpg',
        colors: ['blue', 'pink', 'yellow', 'black', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Camouflage Lizards',
        image: 'fabrics/IMG_0442.jpg',
        colors: ['red', 'blue', 'brown', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Red Paws & Bones',
        image: 'fabrics/IMG_0401.jpg',
        colors: ['red', 'white', 'black'],
        limited: true,
    },
    {
        name: 'Pastel Ladybugs',
        image: 'fabrics/IMG_0430.jpg',
        colors: ['pink', 'blue', 'yellow', 'brown', 'grey', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Unicorns',
        image: 'fabrics/IMG_0431.jpg',
        colors: ['blue', 'green', 'brown', 'white', 'grey', 'rainbow'],
        limited: false,
    },
    {
        name: 'Dr. Suess',
        image: 'fabrics/IMG_0433.jpg',
        colors: ['white', 'yellow', 'brown', 'green', 'red', 'blue', 'pink', 'black', 'orange', 'rainbow'],
        limited: false,
    },
    {
        name: 'Robots & Rockets',
        image: 'fabrics/IMG_0434.jpg',
        colors: ['white', 'red', 'blue', 'green', 'yellow', 'rainbow'],
        limited: false,
    },
    {
        name: 'Tinker Bell',
        image: 'fabrics/IMG_0432.jpg',
        colors: ['green', 'blue', 'pink', 'purple', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Acorns & Leaves',
        image: 'fabrics/IMG_0425.jpg',
        colors: ['brown', 'red', 'white', 'rainbow'],
        limited: false,
    },
    {
        name: 'Coffee',
        image: 'fabrics/IMG_0435.jpg',
        colors: ['brown', 'white', 'black'],
        limited: true,
    },
    {
        name: 'Seashells',
        image: 'fabrics/IMG_0436.jpg',
        colors: ['blue', 'brown', 'yellow', 'orange', 'rainbow'],
        limited: true,
    },
    {
        name: 'Architecture & Nature',
        image: 'fabrics/IMG_0437.jpg',
        colors: ['brown', 'orange', 'yellow', 'black', 'green', 'rainbow'],
        limited: false,
    },
    {
        name: 'Buttons',
        image: 'fabrics/IMG_0439.jpg',
        colors: ['blue', 'pink', 'red', 'brown', 'yellow', 'rainbow'],
        limited: false,
    },
    {
        name: 'Dark Nature',
        image: 'fabrics/IMG_0440.jpg',
        colors: ['black', 'blue', 'yellow', 'pink', 'white', 'red', 'rainbow'],
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
        
        
        Buttons
        
        Black nature
    
        
        Orange diamonds
        
        Green ... */
];

export default fabricsList;