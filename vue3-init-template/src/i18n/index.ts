import { createI18n } from "vue-i18n";

// element-plus 中的语言配置
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'

// 自己的语言配置
import enLocale from './langs/en'
import zhLocale from './langs/zh-cn'

const messages = {
  'en': {
    ...enLocale,
    ...elementEnLocale
  },
  'zh-cn': {
    ...zhLocale,
    ...elementZhLocale
  }
}

/**
 * 获取当前系统使用语言字符串
 *
 * @returns zh-cn|en ...
 */
 export const getLanguage = () => {
  // 本地缓存获取
  let language = localStorage.getItem('language');
  if (language) {
    return language;
  }
  localStorage.setItem('language', 'en') // 默认语言
  return 'en';
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n