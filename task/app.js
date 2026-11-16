function fakeBin(x){
    // 1. x ni array korinishiga  otkazish - split

    // 2. for off
    // 3. map
fakeBin('123456712938498')


function fakeBin(x ){
    return x.split('').map(el => el >= 5 ? 1 : 0).join('')
}









