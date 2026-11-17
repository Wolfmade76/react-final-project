
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <section id="nav">
            <div className="container">
                <div className="row">

                    <div className="title__name--container">
                        <h2 className="title__name">
                            Wolf's Cinema
                        </h2>
                    </div>

                    <div className="search__movie--container">

                        <h1 className="movie__search">
                            Search Movies
                        </h1>

                        <div className="search__bar--container">
                            <input
                                className="search__bar"
                                type="text"
                                id="searchInput"
                                />

                            <FontAwesomeIcon icon="magnifying-glass" />
                        </div>

                    </div>

                    <div className="nav__link--container">
                        <div className="nav__links">
                            <div className="nav__link">
                                <Link to="/">Home</Link>
                                <Link to="/movies">Movies</Link>
                                <Link to="/contact">Contact</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}