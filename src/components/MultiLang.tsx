import React from 'react';

import Dropdown from './Dropdown'

import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';

import VIE from "../assets/icon/vietnam.jpeg"
import USA from "../assets/icon/usa.jpeg"

type Props = {}

function MultiLang({ }: Props) {
    // Multi Language Functions
    const [t, i18n] = useTranslation("global");


    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        document.documentElement.className = lang;
        document.documentElement.setAttribute('lang', lang);
    };

    if (!localStorage.getItem("language")) {
        localStorage.setItem("language", "en");
    }

    if (localStorage.getItem("language") === "en") {
        document.documentElement.setAttribute('dir', "ltr");
        document.title = "Portfolio";

    } else if (localStorage.getItem("language") === "vie") {
        document.documentElement.setAttribute('dir', "ltr");
        document.title = "Portfolio";

    }

    // Dropdown values
    const options = [
        {
            value: 'EN',
            label: (
                <button
                    className="flex items-center justify-center gap-2"
                    onClick={() => handleChangeLanguage("en")}
                >
                    <p className="m-0">EN</p>
                    <img
                        src={USA}
                        className="rounded w-[50px] h-[30px] object-cover"
                        alt="USA Flag"
                        loading="lazy"
                    />
                </button>
            )
        },
        {
            value: 'VIE',
            label: (
                <button
                    className="flex items-center justify-center gap-2"
                    onClick={() => handleChangeLanguage("fa")}
                >
                    <p className="m-0">VIE</p>
                    <img
                        src={VIE}
                        className="rounded w-[50px] h-[30px] object-cover"
                        alt="Vietnam Flag"
                        loading="lazy"
                    />
                </button>
            )
        },
    ];

    return (
        <div className="text-gray-100 dark:text-white">
            <Dropdown
                options={options}
                text={<button><IoLanguage /></button>}
            />
        </div>
    )
}

export default MultiLang;