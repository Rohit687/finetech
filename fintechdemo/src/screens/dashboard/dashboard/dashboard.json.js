import { colors } from "../../../constant/colors";
import { AllIconsType, iconConstant, LanguageText } from "../../../resource";

export const allTransactions = [
    {
        name: 'Adeboye Usman',
        status: 1,
        price: 200000,
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
        name: 'Adeboye Usman',
        status: 2,
        price: 11000,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'
    },
    {
        name: 'Mercy Usman',
        status: 3,
        price: 10000,
        image: 'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png'
    },
    {
        name: 'Onome Usman',
        status: 2,
        price: 100,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU'
    },
    {
        name: 'Kingsley Usman',
        status: 2,
        price: 4024,
        image: 'https://ianbotham.com/wp-content/uploads/2018/05/user-avatar-6.png'
    },
    {
        name: 'Adeboye Popoola',
        status: 1,
        price: 200000,
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
        name: 'Mercy Popoola',
        status: 1,
        price: 342421,
        image: 'https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=2000'
    },
    {
        name: 'Onome Popoola',
        status: 1,
        price: 23414,
        image: 'https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000'
    },
    {
        name: 'Kingsley Popoola',
        status: 1,
        price: 652342,
        image: 'https://www.postplanner.com/hs-fs/hub/513577/file-2886416984-png/blog-files/facebook-profile-pic-vs-cover-photo-sq.png?width=250&height=250&name=facebook-profile-pic-vs-cover-photo-sq.png'
    }
];

export const dashboardKey = {
    header:'header',
    transaction:'transaction'
}

const iconSize = 12;
export const transationStatusById = (id) => {
    switch (id) {
        case 1:
            return {
                color: colors.received,
                title: LanguageText('transactions').received,
                icon: {
                    vectorName: AllIconsType.featherIcons,
                    name: iconConstant.featherReceived,
                    size: iconSize
                }
            }
        case 2:
            return {
                color: colors.failed,
                title: LanguageText('transactions').failed,
                icon: {
                    vectorName: AllIconsType.materialCommunityIcons,
                    name: iconConstant.materialCommunityIconsfailed,
                    size: 14
                }
            }
        case 3:
            return {
                color: colors.sent,
                title: LanguageText('transactions').sent,
                icon: {
                    vectorName: AllIconsType.featherIcons,
                    name: iconConstant.featherReceived,
                    size: iconSize
                }
            }
    }
}