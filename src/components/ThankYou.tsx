import React from 'react';

import { useTranslation } from 'react-i18next';

interface ThankYouProps { }

function ThankYou() {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="flex flex-col lg:inline-flex items-center gap-4 px-4 w-full normal-case" id="thankyou">
      <div className="flex flex-row justify-center text-5xl">
        <div className="text-black dark:text-white">
          <h2 className="text-sm md:text-base lg:text-xl inline-flex items-center text-left">{t("content.thankyou")}</h2>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
