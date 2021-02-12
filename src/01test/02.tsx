


type SitiType  ={
    title: string
    countryTitle: string
}
type AdressType = {
    streetTitle: string
    city: SitiType
}
type technologiesType = {
    id: number
    title: string
}
type SydentType= {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    technologies: Array<technologiesType>
}


const studen: SydentType = {
    id: 1,
    name: "sergey",
    age: 28,
    isActive: true,
    adress: {
        streetTitle: "pulihova 23",
        city: {
            title: "minsk",
            countryTitle: "belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "html",
        },
        {
            id: 1,
            title: "css",
        },
        {
            id: 2,
            title: "react",
        }

    ]
}
console.log(studen.technologies[2].title)
console.log(studen.adress.city)
console.log(studen.adress.city.countryTitle)
console.log(studen.technologies[0].title)