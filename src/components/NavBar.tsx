import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "./shared/Icon";

const NavBar: React.FC = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        
        event.preventDefault();

        if (!search)
            return

        navigate(`/search?q=${search}`);

        setSearch("");
    }

    return (
        <nav id="navbar">

            <h1>

                <Link to={"/"}> <Icon name="movie"></Icon>MoviesLib</Link>

            </h1>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Busque um filme"
                    onChange={(event: any) =>
                        setSearch(event.target.value)}
                    value={search}
                />

                <button type="submit">

                    <Icon name="search" />

                </button>

            </form>

        </nav>
    )
}

export default NavBar