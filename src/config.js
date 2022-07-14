const basePath = process.cwd();
const {MODE} = require(`${basePath}/constants/blend_mode.js`);
const {NETWORK} = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "GoblinDick.WTF";
const description = "2500个GoblinDickWTF Free Mint, Join GoblinDick Partyyy!  we go all the way, hey! \"we can turn anything GoblinDick\" *giggle*";
const baseUri = "ipfs://QmZ3wAXhEq5KM5xSBPaDBt1KGtbws4mKQttMrD9T2ZstUJ";
// ipfs://QmWqGxpw9zu9UzcWVVSrV3bxSywRNPQxXEgZ3dfJu8bF5ox
const solanaMetadata = {
    symbol: "YC",
    seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    external_url: "https://www.youtube.com/c/hashlipsnft",
    creators: [
        {
            address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
            share: 100,
        },
    ],
};

// If you have selected Solana then the collection starts from 0 automatically
// const layerConfigurations = [
//
//     {
//         growEditionSizeTo: 2500,
//         layersOrder: [
//             {name: "Background"},
//             {name: "Body"},
//             {name: "Clothing"},
//             {name: "Ear"},
//             {name: "Head"},
//             {name: "Right eye"},
//             {name: "Left eye"},
//             {name: "Mouth"},
//             {name: "Nose"},
//         ],
//
//     }
// ];

const layerConfigurations = [


    {
        // 1Background
        // 2Body
        // 3Clothing
        // 4Ear
        // 5Head
        // 6Right eye
        // 7Left eye
        // 8Mouth
        // 9Nose
        growEditionSizeTo: 68,
        layersOrder: [
            {name: "Background"},
            {name: "Body"},
            {name: "Clothing"},
            {name: "Ear"},
            {name: "Head"},
            {name: "Right eye"},
            {name: "Left eye"},
            {name: "Mouth"},
            {name: "Nose"},
        ],

    },
    {
        growEditionSizeTo: 69,
        layersOrder: [
            {name: "Egg"},
        ]
    },
    {
        // 1Background
        // 2Body
        // 3Clothing
        // 4Ear
        // 5Head
        // 6Right eye
        // 7Left eye
        // 8Mouth
        // 9Nose
        growEditionSizeTo: 2500,
        layersOrder: [
            {name: "Background"},
            {name: "Body"},
            {name: "Clothing"},
            {name: "Ear"},
            {name: "Head"},
            {name: "Right eye"},
            {name: "Left eye"},
            {name: "Mouth"},
            {name: "Nose"},
        ],

    },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
    width: 2048,
    height: 2048,
    smoothing: false,
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500,
};

const text = {
    only: false,
    color: "#ffffff",
    size: 20,
    xGap: 40,
    yGap: 40,
    align: "left",
    baseline: "top",
    weight: "regular",
    family: "Courier",
    spacer: " => ",
};

const pixelFormat = {
    ratio: 2 / 128,
};

const background = {
    generate: true,
    brightness: "80%",
    static: false,
    default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: "preview.png",
};

const preview_gif = {
    numberOfImages: 5,
    order: "ASC", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: "preview.gif",
};

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
    preview,
    shuffleLayerConfigurations,
    debugLogs,
    extraMetadata,
    pixelFormat,
    text,
    namePrefix,
    network,
    solanaMetadata,
    gif,
    preview_gif,
};
