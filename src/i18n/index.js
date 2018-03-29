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

const defaultLanguage = en;

export default function(language) {
  i18next.init({
    lng: language,
    resources: languages[language] || defaultLanguage,
  });
}
