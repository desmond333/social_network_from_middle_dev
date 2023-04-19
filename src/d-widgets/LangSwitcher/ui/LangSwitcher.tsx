import { FC } from "react"
import { classNames as cn } from "@/g-shared/lib/classNames/classNames"
import "./LangSwitcher.scss"
import { Button } from "@/g-shared/ui"
import { useTranslation } from "react-i18next"
import { BtnVariant } from "@/g-shared/ui/Button/types"

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  const toggleLang = async () => {
    const isCurrentLangRu = i18n.language === "ru"
    i18n.changeLanguage(isCurrentLangRu ? "en" : "ru")
  }

  return (
    <Button
      className={
        cn("lang-switcher", {}, [className])
      }
      variant={BtnVariant.OUTLINE}
      onClick={toggleLang}>
      {t("CURRENT_LANGUAGE")}
    </Button>
  )
}