import { Language } from '../../locales/resources'

export const defaultAppLanguage: Language = Language.English
export const availableLanguages: Array<{
  id: Language
  title: string
}> = [
  {
    id: Language.English,
    title: 'English',
  },
  {
    id: Language.Spanish,
    title: 'Español',
  },
  {
    id: Language.Chinese,
    title: '简体中文',
  },
]
