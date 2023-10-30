import { CardWidget } from "../CartWidget/CardWidget"

export const NavBar = () => {
  return (
    <div>
        <h2> Videoland Post </h2>

        <ul>
            <li>
                <a href=""> Noticias </a>
            </li>

            <li>
                <a href=""> Videojuegos </a>
            </li>

            <li>
                <a href=""> Plataformas </a>
            </li>

            <li>
                <a href=""> Contacto </a>
            </li>
        </ul>
        
        <CardWidget />
    </div>
  )
}
