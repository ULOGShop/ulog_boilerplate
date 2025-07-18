import React, {CSSProperties, ReactElement} from "react";
import {IconContext} from "react-icons";
import {IconType} from "react-icons";

import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as CiIcons from "react-icons/ci";
import * as CgIcons from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as FiIcons from "react-icons/fi";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as Hi2Icons from "react-icons/hi2";
import * as MiIcons from "react-icons/im";
import * as LiaIcons from "react-icons/lia";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as LuIcons from "react-icons/lu";
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";
import * as RxIcons from "react-icons/rx";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as SlIcons from "react-icons/sl";
import * as TbIcons from "react-icons/tb";
import * as TfiIcons from "react-icons/tfi";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";

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
        if (iconName.startsWith("Ai") && (AiIcons as any)[iconName]) {
            IconComponent = (AiIcons as any)[iconName];
        } else if (iconName.startsWith("Bs") && (BsIcons as any)[iconName]) {
            IconComponent = (BsIcons as any)[iconName];
        } else if (iconName.startsWith("Bi") && (BiIcons as any)[iconName]) {
            IconComponent = (BiIcons as any)[iconName];
        } else if (iconName.startsWith("Ci") && (CiIcons as any)[iconName]) {
            IconComponent = (CiIcons as any)[iconName];
        } else if (iconName.startsWith("Cg") && (CgIcons as any)[iconName]) {
            IconComponent = (CgIcons as any)[iconName];
        } else if (iconName.startsWith("Di") && (DiIcons as any)[iconName]) {
            IconComponent = (DiIcons as any)[iconName];
        } else if (iconName.startsWith("Fi") && (FiIcons as any)[iconName]) {
            IconComponent = (FiIcons as any)[iconName];
        } else if (iconName.startsWith("Fc") && (FcIcons as any)[iconName]) {
            IconComponent = (FcIcons as any)[iconName];
        } else if (iconName.startsWith("Fa") && (FaIcons as any)[iconName]) {
            IconComponent = (FaIcons as any)[iconName];
        } else if (iconName.startsWith("Fa6") && (Fa6Icons as any)[iconName]) {
            IconComponent = (Fa6Icons as any)[iconName];
        } else if (iconName.startsWith("Gi") && (GiIcons as any)[iconName]) {
            IconComponent = (GiIcons as any)[iconName];
        } else if (iconName.startsWith("Go") && (GoIcons as any)[iconName]) {
            IconComponent = (GoIcons as any)[iconName];
        } else if (iconName.startsWith("Gr") && (GrIcons as any)[iconName]) {
            IconComponent = (GrIcons as any)[iconName];
        } else if (iconName.startsWith("Hi") && (HiIcons as any)[iconName]) {
            IconComponent = (HiIcons as any)[iconName];
        } else if (iconName.startsWith("Hi2") && (Hi2Icons as any)[iconName]) {
            IconComponent = (Hi2Icons as any)[iconName];
        } else if (iconName.startsWith("Mi") && (MiIcons as any)[iconName]) {
            IconComponent = (MiIcons as any)[iconName];
        } else if (iconName.startsWith("Lia") && (LiaIcons as any)[iconName]) {
            IconComponent = (LiaIcons as any)[iconName];
        } else if (iconName.startsWith("Io") && (IoIcons as any)[iconName]) {
            IconComponent = (IoIcons as any)[iconName];
        } else if (iconName.startsWith("Io5") && (Io5Icons as any)[iconName]) {
            IconComponent = (Io5Icons as any)[iconName];
        } else if (iconName.startsWith("Lu") && (LuIcons as any)[iconName]) {
            IconComponent = (LuIcons as any)[iconName];
        } else if (iconName.startsWith("Md") && (MdIcons as any)[iconName]) {
            IconComponent = (MdIcons as any)[iconName];
        } else if (iconName.startsWith("Pi") && (PiIcons as any)[iconName]) {
            IconComponent = (PiIcons as any)[iconName];
        } else if (iconName.startsWith("Rx") && (RxIcons as any)[iconName]) {
            IconComponent = (RxIcons as any)[iconName];
        } else if (iconName.startsWith("Ri") && (RiIcons as any)[iconName]) {
            IconComponent = (RiIcons as any)[iconName];
        } else if (iconName.startsWith("Si") && (SiIcons as any)[iconName]) {
            IconComponent = (SiIcons as any)[iconName];
        } else if (iconName.startsWith("Sl") && (SlIcons as any)[iconName]) {
            IconComponent = (SlIcons as any)[iconName];
        } else if (iconName.startsWith("Tb") && (TbIcons as any)[iconName]) {
            IconComponent = (TbIcons as any)[iconName];
        } else if (iconName.startsWith("Tfi") && (TfiIcons as any)[iconName]) {
            IconComponent = (TfiIcons as any)[iconName];
        } else if (iconName.startsWith("Ti") && (TiIcons as any)[iconName]) {
            IconComponent = (TiIcons as any)[iconName];
        } else if (iconName.startsWith("Vsc") && (VscIcons as any)[iconName]) {
            IconComponent = (VscIcons as any)[iconName];
        } else if (iconName.startsWith("Wi") && (WiIcons as any)[iconName]) {
            IconComponent = (WiIcons as any)[iconName];
        } else {
            const prefixes = ["Ai", "Bs", "Bi", "Ci", "Cg", "Di", "Fi", "Fc", "Fa", "Fa6", "Gi", "Go", "Gr", "Hi", "Hi2", "Mi", "Lia", "Io", "Io5", "Lu", "Md", "Pi", "Rx", "Ri", "Si", "Sl", "Tb", "Tfi", "Ti", "Vsc", "Wi"];
            for (const prefix of prefixes) {
                const fullName = `${prefix}${iconName}`;
                if (prefix === "Ai" && (AiIcons as any)[fullName]) {
                    IconComponent = (AiIcons as any)[fullName];
                    break;
                } else if (prefix === "Bs" && (BsIcons as any)[fullName]) {
                    IconComponent = (BsIcons as any)[fullName];
                    break;
                } else if (prefix === "Bi" && (BiIcons as any)[fullName]) {
                    IconComponent = (BiIcons as any)[fullName];
                    break;
                } else if (prefix === "Ci" && (CiIcons as any)[fullName]) {
                    IconComponent = (CiIcons as any)[fullName];
                    break;
                } else if (prefix === "Cg" && (CgIcons as any)[fullName]) {
                    IconComponent = (CgIcons as any)[fullName];
                    break;
                } else if (prefix === "Di" && (DiIcons as any)[fullName]) {
                    IconComponent = (DiIcons as any)[fullName];
                    break;
                } else if (prefix === "Fi" && (FiIcons as any)[fullName]) {
                    IconComponent = (FiIcons as any)[fullName];
                    break;
                } else if (prefix === "Fc" && (FcIcons as any)[fullName]) {
                    IconComponent = (FcIcons as any)[fullName];
                    break;
                } else if (prefix === "Fa" && (FaIcons as any)[fullName]) {
                    IconComponent = (FaIcons as any)[fullName];
                    break;
                } else if (prefix === "Fa6" && (Fa6Icons as any)[fullName]) {
                    IconComponent = (Fa6Icons as any)[fullName];
                    break;
                } else if (prefix === "Gi" && (GiIcons as any)[fullName]) {
                    IconComponent = (GiIcons as any)[fullName];
                    break;
                } else if (prefix === "Go" && (GoIcons as any)[fullName]) {
                    IconComponent = (GoIcons as any)[fullName];
                    break;
                } else if (prefix === "Gr" && (GrIcons as any)[fullName]) {
                    IconComponent = (GrIcons as any)[fullName];
                    break;
                } else if (prefix === "Hi" && (HiIcons as any)[fullName]) {
                    IconComponent = (HiIcons as any)[fullName];
                    break;
                } else if (prefix === "Hi2" && (Hi2Icons as any)[fullName]) {
                    IconComponent = (Hi2Icons as any)[fullName];
                    break;
                } else if (prefix === "Mi" && (MiIcons as any)[fullName]) {
                    IconComponent = (MiIcons as any)[fullName];
                    break;
                } else if (prefix === "Lia" && (LiaIcons as any)[fullName]) {
                    IconComponent = (LiaIcons as any)[fullName];
                    break;
                } else if (prefix === "Io" && (IoIcons as any)[fullName]) {
                    IconComponent = (IoIcons as any)[fullName];
                    break;
                } else if (prefix === "Io5" && (Io5Icons as any)[fullName]) {
                    IconComponent = (Io5Icons as any)[fullName];
                    break;
                } else if (prefix === "Lu" && (LuIcons as any)[fullName]) {
                    IconComponent = (LuIcons as any)[fullName];
                    break;
                } else if (prefix === "Md" && (MdIcons as any)[fullName]) {
                    IconComponent = (MdIcons as any)[fullName];
                    break;
                } else if (prefix === "Pi" && (PiIcons as any)[fullName]) {
                    IconComponent = (PiIcons as any)[fullName];
                    break;
                } else if (prefix === "Rx" && (RxIcons as any)[fullName]) {
                    IconComponent = (RxIcons as any)[fullName];
                    break;
                } else if (prefix === "Ri" && (RiIcons as any)[fullName]) {
                    IconComponent = (RiIcons as any)[fullName];
                    break;
                } else if (prefix === "Si" && (SiIcons as any)[fullName]) {
                    IconComponent = (SiIcons as any)[fullName];
                    break;
                } else if (prefix === "Sl" && (SlIcons as any)[fullName]) {
                    IconComponent = (SlIcons as any)[fullName];
                    break;
                } else if (prefix === "Tb" && (TbIcons as any)[fullName]) {
                    IconComponent = (TbIcons as any)[fullName];
                    break;
                } else if (prefix === "Tfi" && (TfiIcons as any)[fullName]) {
                    IconComponent = (TfiIcons as any)[fullName];
                    break;
                } else if (prefix === "Ti" && (TiIcons as any)[fullName]) {
                    IconComponent = (TiIcons as any)[fullName];
                    break;
                } else if (prefix === "Vsc" && (VscIcons as any)[fullName]) {
                    IconComponent = (VscIcons as any)[fullName];
                    break;
                } else if (prefix === "Wi" && (WiIcons as any)[fullName]) {
                    IconComponent = (WiIcons as any)[fullName];
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
