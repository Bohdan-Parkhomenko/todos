import React from "react";
import './stiles.css'

const LINKS = [
    {
        link: "https://www.w3schools.com",
        img: "bg1.jpg",
    },
    {
        link: "https://www.w3schools.com",
        img: "bg2.jpg",
    },
    {
        link: "https://www.w3schools.com",
        img: "bg3.jpg",
    }
]

const RegisterItem = ({href, src}) => {
    return (
        <li>
            <a className="photo-in-circle" href={href}>
                <img src={src} alt="HTML tutorial"/>
            </a>
        </li>
    )
}

const RegisterWith = ({
    label = "label",
}) => {

    return (
        <div className="text-move-to-center padding-top-default">
            <p className="text-default text-primary">{label}</p>
            <ul className="padding-top-default">
                {LINKS.map((item) => <RegisterItem {...item} />)}
            </ul>
        </div>
    )
};

export default RegisterWith;