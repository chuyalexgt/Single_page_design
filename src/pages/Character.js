import getHash from "../utils/getHash"
import getData from "../utils/getData"
import backArrow from "../icons/back.svg"

const Character = async()=>{
    const id = await getHash()
    const character = await getData(id)
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <a id = "back-menu"  href = "/"><img src= ${backArrow} alt="go back" ></a>
            <img id = "character-image"src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>
        <article class="Character-card">
            <h3><b> Episodes:</b> ${character.episode.length} </h3>
            <h3><b> Status:</b> ${character.status}</h3>
            <h3><b> Species:</b> ${character.species}</h3>
            <h3><b> Gender:</b> ${character.gender}</h3>
            <h3><b> Origin:</b> ${character.origin.name}</h3>
            <h3><b> Last Location:</b> ${character.location.name}</h3>
        </article>
    </div>
    `
    return view
}

export default Character