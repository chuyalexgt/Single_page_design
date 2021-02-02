import getData from "../utils/getData"
import fullfill from "../icons/fullfill.svg"
const Home = async ()=>{     //Esto es un template y es muy parecido a lo que se utiliza en react
    const characters = await getData()
    console.log(characters)
    const view = `                                 
    <div class="Characters">
        ${characters.results.map(character => `
        <article class="character-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}">
                <h2 class= "character-name">${character.name}</h2>
                <img id="fullfill" src="${fullfill}" alt="">
            </a>
        </article>
        `).join("")}
    </div>
    `
    return view
}

export default Home