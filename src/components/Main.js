import React from "react"

export default function Main () {
    return (
        <div className="main">
            <h1 className="name">Eddie Snow A</h1>
            <p className="profession">software developer</p>
            <p className="github-link">https://github.com/eddie-snow</p>
            <div className="buttons">
                <button className="button-email"> Email</button>
                <button className="button-website">Website</button>
            </div>
            <h2 className="about">About</h2>
            <p className="about-text">
                I am a software developer with partical interest
                in making things simple, learn more and developing fun projects.
                I try to kep up with securty and best practices, and am always looking
                for new things to learn
            </p>
            <h2 className="interest">Interest</h2>
            <p className="interest-text">
                Anime expert. Cinema scholar. Gamer. Youtube
                fanatic. Manga Author. Entrepreneur. book geek. Pop 
                culture ninja. Pizza fanatic.
            </p>
            {/* <!icons to be inplemented later, trouble doing so with react at this time */}
        </div>
    )
}