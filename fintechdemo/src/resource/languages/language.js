import { AppConstant } from "../../constant/AppConstant";
import { en } from "./en";

export const LanguageText = (str) => {
    switch (AppConstant.getSelectedLauguage()) {
      // case 'ms':
      //   return ms[str];
      // case 'bn':
      //   return bn[str];
      // case 'id':
      //   return id[str];
      // case 'zh':
      //   return en[str];
      // case 'zhTrd':
      //   return en[str];
      default:
        return en[str];
    }
  }

