import React from 'react';
import {
  Css3Original,
  GitOriginalWordmark,
  Html5Original,
  JavascriptOriginal,
  ReactOriginal,
  TailwindcssPlainWordmark,
  TypescriptOriginal,
  JavaOriginalWordmark,
  PhpOriginal,
  PythonOriginal,
  MysqlOriginalWordmark
} from 'devicons-react';
import { useTranslation } from 'react-i18next';

type Props = {}

function Skills({ }: Props) {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="skills">
      <div className="flex flex-col mt-4">
        <h1 className="px-4 text-2xl">{t("content.skills")}</h1>

        <div className="w-full overflow-x-scroll overflow-y-hidden md:overflow-x-auto md:flex md:justify-center">
          <div className="flex flex-row text-7xl skills mt-4 py-3 w-fit">
            <Html5Original className="mx-2 text-white dark:text-black" />
            <Css3Original className="mx-2 text-white dark:text-black" />
            <JavascriptOriginal className="mx-2 text-white dark:text-black" />
            <JavaOriginalWordmark className="mx-2 text-white dark:text-black" />
            <PhpOriginal className="mx-2 text-white dark:text-black" />
            <PythonOriginal className="mx-2 text-white dark:text-black" />
            <TypescriptOriginal className="mx-2 text-white dark:text-black" />
            <ReactOriginal className="mx-2 text-white dark:text-black" />
            <TailwindcssPlainWordmark className="mx-2 text-white dark:text-black" />
            <MysqlOriginalWordmark className="mx-2 text-white dark:text-black" />
            <GitOriginalWordmark className="mx-2 text-white dark:text-black" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills