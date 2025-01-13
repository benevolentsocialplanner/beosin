import langMap from '../lang.json';

type Objects = { [key: string]: string };

// 替换占位变量函数
const replaceKeys = (text: string, formats?: Objects) => {
  if (!formats) return text;
  const keys = Object.keys(formats);
  for (let i = 0; i < keys.length; i++) {
    text = text.replace(`{${keys[i]}}`, formats[keys[i]]);
  }
  return text;
};

export const useLang = () => {
  const { locale } = useI18n();
  return function lg(text: keyof typeof langMap, params?: Objects) {
    if (typeof text !== 'string') return '';
    text = text.trim() as keyof typeof langMap;
    if (!langMap[text] || !locale.value) return replaceKeys(text, params);
    return replaceKeys(langMap[text][locale.value] || text, params);
  };
};
