export const IMAGE = {
    OnBoardingFirst: require('./Images/firstimg.jpeg'),
    OnBoardingSecond: require('./Images/secondimg.jpeg'),
    OnBoardingThird: require('./Images/thirdimg.jpeg'),
    FacebookIcon: require('./Images/facebookicon.png'),
    AppleIcon: require('./Images/appleicon.png'),
    GoogleIcon: require('./Images/googleicon.png'),
    Iconaddtherate: require('./Images/@img.png'),
    LockIcon: require('./Images/lockicon.png'),
    PhoneIcon: require('./Images/Phoneicon.png'),
    ProfileIcon: require('./Images/profileicon.png'),
    EmojiIcon: require('./Images/emojiicon.png'),
    HomeIcon: require('./Images/homeicon.png'),
    RightIcon: require('./Images/righticon.png'),
    CameraIcon: require('./Images/cameraicon.png'),
    BackIcon: require('./Images/backicon.png'),
    LocationIcon: require('./Images/locationicon.png'),
    BussinessIcon: require('./Images/bussinessicon.png'),
    

   
}
export const COLORS = {
    Green:'#000000',
    Black:'#000000',
    Yellow:'#E9C4AE',
    White:' #FFFFFF',
    
}
export const TEXT = {

    SlidFirst:"Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain.",
    SlidSecond:"Our team of delivery drivers will make sure your orders are picked up on time and promptly delivered to your customers.",
    SlidThird:"We love the earth and know you do too! Join us in reducing our local carbon footprint one order at a time. ",

}
export const font = {
    bold:'Poppins-Bold',
    normal:'Poppins-Regular',
    semibold:'Poppins-SemiBold',
    medium:' Poppins-Medium',
    black:'Poppins-Black'
    
}

 

export const wp =(Value)=>{
    return Dimensions.get('window').width/100*Value
}
export const hp =(Value)=>{
    return Dimensions.get('window').height/100*Value
}