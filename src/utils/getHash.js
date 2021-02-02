const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/"
    // accedemos al hash del navegador  (#/1/)
    //slice(1) elimina el primer elemento del string (#)
    //toLocaleLowerCase() convierte a minusculas en caso de ue el usuario haya escrito la url en mayusculas
    // split convierte en un array tomando como separador "/" (["","1",""])
    //accedemos al elemento 1 del array que es el que necesitamos (1)

export default getHash
