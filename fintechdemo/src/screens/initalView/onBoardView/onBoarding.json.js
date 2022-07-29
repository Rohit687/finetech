import { ImageSource, LanguageText } from "../../../resource";

export const onBoardList = [
    {
        title: LanguageText('onBoard').list[0].title,
        desc: LanguageText('onBoard').list[0].desc,
        imageName: ImageSource.onboarding1,
        isLight: false
    },
    {
        title: LanguageText('onBoard').list[1].title,
        desc: LanguageText('onBoard').list[1].desc,
        imageName: ImageSource.onboarding2,
        isLight: true
    },
    {
        title: LanguageText('onBoard').list[2].title,
        desc: LanguageText('onBoard').list[2].desc,
        imageName: ImageSource.onboarding1,
        isLight: false
    }
];

