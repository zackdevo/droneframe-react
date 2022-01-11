import Ghost from "./images/drone-6.jpeg"
import Navic2 from "./images/drone-14.jpeg"
import Navic3 from "./images/drone-15.jpeg"
import Resy from "./images/drone-7.jpeg"
import Air2Z from "./images/air2Z.jpg"
import Expire3 from "./images/expire3.jpg"

import Case from "./images/case.jpg"
import Battery from "./images/battery.jpg"
import Bundle from "./images/bundle.jpg"
import ExtensionKit from "./images/extensionKit.jpg"
import Camera from "./images/camera.jpg"

let products = [
    {
        drones: [{
            id: 1,
            name: "Ghost 6 Pro V3 Plus",
            price: 1999.9,
            description: "Capturez des images hautes définitions grâce à sa caméra embarquée.",
            url: `${Ghost}`

        },
        {
            id: 2,
            name: "Navic 3 Pro",
            price: 1499.99,
            description: "Explorez le monde librement avec son détecteur d'obstacles dernière génération.",
            url: `${Navic2}`
        },
        {
            id: 3,
            name: "Navic 2 Zoom",
            price: 1199.99,
            description: "Ne manquez aucun détails avec son super zoom optique amélioré trop bien.",
            url: `${Navic3}`
        },
        {
            id: 4,
            name: "Resy Pro V2",
            price: 1799.99,
            description: "Capturez dans des endroits à température basse grâce à son alliage résistant.",
            url: `${Resy}`
        },
        {
            id: 5,
            name: "Air 2Z",
            price: 1119.99,
            description: "Emmenez le partout où vous allez grâce à sa taille réduite.",
            url: `${Air2Z}`
        },
        {
            id: 6,
            name: "Expire Pro 3",
            price: 3499.99,
            description: "Le drone ultime pour vous mettre bien avec sa caméra RTX 4530p et sa nouvelle technologie Oméga Cracked qui permet de détecter les obstacles et de faire des trucs stylés genre prendre des vidéos et tout.",
            url: `${Expire3}`
        }],

        equipements: [{
            id: 7,
            name: "Caméra 1440p Navic",
            price: 499,
            description: "La caméra détachable pour s'adapter à toute la gamme Navic.",
            url: `${Camera}`
        }, {
            id: 8,
            name: "2 Batteries 440W",
            price: 199,
            description: "Lot de deux batteries pour plus de temps de capture.",
            url: `${Battery}`
        }, {
            id: 9,
            name: "Boitier de transport",
            price: 70,
            description: "Boitier de transport ergoomique pour un confort accru.",
            url: `${Case}`
        }, {
            id: 10,
            name: "Kit d'extension Resy Pro 3",
            price: 50,
            description: "Kit d'extension parcequ'on a jamais assez d'accessoires cool.",
            url: `${ExtensionKit}`
        },
        {
            id: 11,
            name: "Package Expire Pro 3",
            price: 999,
            description: "Tous les accessoires pour optimiser les capacités de votre Expire Pro 3.",
            url: `${Bundle}`
        },],
    }
]

export function getProducts() {
    return products
}

export function getProduct(id) {
    return products.find(
        product => product.id === id
    )
}
