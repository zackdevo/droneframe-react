import Ghost from "./images/drone-6.jpeg"
import Navic2 from "./images/drone-14.jpeg"
import Navic3 from "./images/drone-15.jpeg"
import Resy from "./images/drone-7.jpeg"

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
        }],
        equipement: [{
            id: 5,
            name: "Caméra 1440p Navic",
            price: 499,
            description: "La caméra détachable pour s'adapter à toute la gamme Navic."
        }, {
            id: 6,
            name: "2 Batteries 440W",
            price: 199,
            description: "Lot de deux batteries pour plus de temps de capture"
        }, {
            id: 7,
            name: "Boitier de transport",
            price: 70,
            description: "Boitier de transport ergoomique pour un confort accru."
        }, {
            id: 8,
            name: "Kit d'extension Resy Pro 3",
            price: 50,
            description: "Kit d'extension parceque voilà aller."
        }],
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
