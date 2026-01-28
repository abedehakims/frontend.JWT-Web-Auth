import React from "react";
export const TeluBlogPage = () => {
    const campusPlaces = [
        { name: 'Telkom University Jakarta Main Campus', image: 'Campus1Inside.jpg', description: 'Create and Step Ahead For The Future.' },
        { name: 'Telkom University', image: 'Campus2Outside.jpg', description: "Discover Your Prestige and Knowledge's Here." },
    ];

    return (
        <div className="telu-blog-page">
            <header>
                <h1>Telkom University</h1>
                <p>Harmony, Excellent, Integrity</p>
            </header>
            <section className="telu-places">
                {campusPlaces.map((place, index) => {
                    <div key={index} className="place-card">
                        <img src={place.image} alt={place.name} />
                        <div className="place-details">
                            <h2>{place.name}</h2>
                            <p>{place.description}</p>
                        </div>
                    </div>
                })}
            </section>
            <footer>
                <p>&copy; 2026 KitaNgoding Studio</p>
            </footer>
        </div>
    )
}

export default TeluBlogPage;