import React, {CSSProperties, ReactElement} from "react";
import {IconContext} from "react-icons";
import {IconType} from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io5";
import * as BiIcons from "react-icons/bi";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";

export type IconAnimation = | "spin" | "spinPulse" | "spinReverse" | "pulse" | "beat" | "fade" | "beatFade" | "bounce" | "shake";

export interface LibIconProps {
    icon: React.ReactElement | IconType | string;
    animation?: IconAnimation;
    size?: string;
    color?: string;
    className?: string;
    style?: CSSProperties;
    fixedWidth?: boolean;
}

const LibIcon: React.FC<LibIconProps> = ({icon, animation, size, color, className, style, fixedWidth}) => {
    const animationStyle: CSSProperties = {};
    if (animation) {
        switch (animation) {
            case "spin":
                animationStyle.animation = "spin 2s linear infinite";
                break;
            case "spinPulse":
                animationStyle.animation = "spin 1s steps(8) infinite";
                break;
            case "spinReverse":
                animationStyle.animation = "spin 2s linear infinite reverse";
                break;
            case "pulse":
                animationStyle.animation = "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite";
                break;
            case "beat":
                animationStyle.animation = "beat 0.75s ease-in-out infinite";
                break;
            case "fade":
                animationStyle.animation = "fade 2s ease-in-out infinite";
                break;
            case "beatFade":
                animationStyle.animation = "beatFade 2s ease-in-out infinite";
                break;
            case "bounce":
                animationStyle.animation = "bounce 1s ease-in-out infinite";
                break;
            case "shake":
                animationStyle.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) infinite";
                break;
        }
    }
    if (fixedWidth) {
        animationStyle.width = "1.25em";
        animationStyle.textAlign = "center";
    }
    const combinedStyle = {...style, ...animationStyle};
    const contextValue = {size: size || "1em", color: color, className: className, style: combinedStyle};
    let iconElement: ReactElement;
    if (typeof icon === "string") {
        const iconName = icon.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/^[a-z]/, (g) => g.toUpperCase());
        let IconComponent: IconType | null = null;
        if (iconName.startsWith("Fa") && (FaIcons as any)[iconName]) {
            IconComponent = (FaIcons as any)[iconName];
        } else if (iconName.startsWith("Fi") && (FiIcons as any)[iconName]) {
            IconComponent = (FiIcons as any)[iconName];
        } else if (iconName.startsWith("Io") && (IoIcons as any)[iconName]) {
            IconComponent = (IoIcons as any)[iconName];
        } else if (iconName.startsWith("Bi") && (BiIcons as any)[iconName]) {
            IconComponent = (BiIcons as any)[iconName];
        } else if (iconName.startsWith("Tb") && (TbIcons as any)[iconName]) {
            IconComponent = (TbIcons as any)[iconName];
        } else if (iconName.startsWith("Md") && (MdIcons as any)[iconName]) {
            IconComponent = (MdIcons as any)[iconName];
        } else {
            const prefixes = ["Fa", "Fi", "Io", "Bi", "Tb", "Md"];
            for (const prefix of prefixes) {
                const fullName = `${prefix}${iconName}`;
                if (prefix === "Fa" && (FaIcons as any)[fullName]) {
                    IconComponent = (FaIcons as any)[fullName];
                    break;
                } else if (prefix === "Fi" && (FiIcons as any)[fullName]) {
                    IconComponent = (FiIcons as any)[fullName];
                    break;
                } else if (prefix === "Io" && (IoIcons as any)[fullName]) {
                    IconComponent = (IoIcons as any)[fullName];
                    break;
                } else if (prefix === "Bi" && (BiIcons as any)[fullName]) {
                    IconComponent = (BiIcons as any)[fullName];
                    break;
                } else if (prefix === "Tb" && (TbIcons as any)[fullName]) {
                    IconComponent = (TbIcons as any)[fullName];
                    break;
                } else if (prefix === "Md" && (MdIcons as any)[fullName]) {
                    IconComponent = (MdIcons as any)[fullName];
                    break;
                }
            }
        }
        iconElement = IconComponent ? <IconComponent/> : <span>{icon}</span>;
    } else if (React.isValidElement(icon)) {
        iconElement = icon;
    } else if (typeof icon === "function") {
        const IconComponent = icon;
        iconElement = <IconComponent/>;
    } else {
        iconElement = <span>?</span>;
    }
    return (
        <IconContext.Provider value={contextValue}>{iconElement}</IconContext.Provider>
    );
};

const addAnimationStyles = () => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
        @keyframes spin {
            0% {transform: rotate(0deg)}
            100% {transform: rotate(360deg)}
        }
        @keyframes pulse {
            0%, 100% {opacity: 1}
            50% {opacity: 0.5}
        }
        @keyframes beat {
            0%, 100% {transform: scale(1)}
            50% {transform: scale(1.2)}
        }
        @keyframes fade {
            0%, 100% {opacity: 1}
            50% {opacity: 0.4}
        }
        @keyframes beatFade {
            0%, 100% {opacity: 1; transform: scale(1)}
            50% {opacity: 0.4; transform: scale(1.2)}
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0)}
            50% {transform: translateY(-5px)}
        }
        @keyframes shake {
            10%, 90% {transform: translate3d(-1px, 0, 0)}
            20%, 80% {transform: translate3d(2px, 0, 0)}
            30%, 50%, 70% {transform: translate3d(-4px, 0, 0)}
            40%, 60% {transform: translate3d(4px, 0, 0)}
        }
    `;
    document.head.appendChild(styleElement);
};

if (typeof window !== "undefined") {
    addAnimationStyles();
}

export default LibIcon;