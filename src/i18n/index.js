/**
 * Created by ed on 29/03/2018.
 */

'use strict';

import i18next from 'i18next';

import en from './en.json';
import ru from './ru.json';

const languages = {
  en,
  ru,
};

const defaultLanguage = {
  lng: 'en',
  resources: en,
};

export default function init(lang) {
  const foundResources = languages[lang];
  const language = foundResources ? {
    lng: lang,
    resources: foundResources,
  } : defaultLanguage;
  i18next.init(language);
}


init(defaultLanguage.lng);
