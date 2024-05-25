import { IFAQCard } from "@/utils/interfaces";
import { useState } from "react";

const FAQCard = ({ text, title, isActive, handleToggle }: IFAQCard): JSX.Element => {
    const [isRotating, setIsRotating] = useState<boolean>(false);

    // Fonction pour la rotation de l'icône
    const handleImageClick = () => {
        setIsRotating(true);
        setTimeout(() => {
            setIsRotating(false);
            console.log("rotation terminée");
        }, 100);
    };

    return (
        <article
            className={`FAQ-card flex w-full rounded-xl cursor-pointer ${isActive ? "sticky-open" : "sticky-close"} ${isActive ? "border-2 border-green01 items-start gap-12 p-10" : "items-center justify-between py-5 md:py-6 px-8 md:px-10"}`}
            onClick={() => { handleToggle && handleToggle(); handleImageClick(); }}
        >
            <div className={`header w-11/12 md:w-full ${isActive && "flex flex-col gap-5"}`}>
                <h3 className="text-lg md:text-2xl text-blue01 calSans">{title}</h3>
                <p className={`text-blue02 ${isActive ? "flex" : "hidden"}`}>{text}</p>
            </div>
            <img
                src={`${process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_PATH : ""}/icons/${isActive ? "chevron-circle-down.svg" : "chevron-circle-right.svg"}`}
                className={`w-12 md:w-auto cursor-pointer absolute right-0 md:relative hidden md:flex ${isRotating ? "rotate" : ""}`}
                alt="Chevron Icon"
            />
            <img
                src={`${process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_PATH : ""}/icons/chevron-circle-right.svg`}
                className={`w-12 md:w-auto cursor-pointer absolute right-0 mr-8 md:relative md:hidden ${isActive && "md:hidden"} ${isRotating ? "rotate-respons" : ""}`}
                alt="Chevron Icon"
            />
        </article>
    );
};

export default FAQCard;
