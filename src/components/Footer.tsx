import React from 'react';

import { useTranslation } from 'react-i18next';

type Props = {}

function Footer({ }: Props) {
    const [t, i18n] = useTranslation("global");

    return (
        <footer className="flex flex-col lg:block bg-slate-200 dark:bg-slate-960 text-slate-965 dark:text-slate-100 p-3 font-sans">

            <p className="float-right rtl:float-left">&#128513;{t("footer.smile")}</p>

            <p className="flex">
                {t("footer.made with")}
                <span className="mx-1">
                    <img src="https://emojicdn.elk.sh/%F0%9F%A9%B5" alt="" width="20" />
                </span>
            </p>

        </footer>
    )
}

export default Footer