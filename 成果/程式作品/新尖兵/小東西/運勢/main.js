const lucknumber1 = document.getElementById('lucknumber');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
// .story ,前面的.代表class , 而前面是#則代表 (??)

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const storyText = '你幸運的今天花是 insertx:\
 顏色是:inserty:  方位是:insertz:  \
 寶石是:inserta:  \
 星座是 :insertb: \
 數字是:insertc:  \
快哉問占卜大師給你幸福一生';

const insertX = ['羊齒蕨','仙人掌','紫玫瑰','非洲紫羅蘭','風信子','蕾絲花','紫耀蘭','金魚花','秋牡丹','雛菊','櫻花','牽牛花','馬蹄聖','•月見草','月光花','百合','曇花','茉莉','•睡蓮','夜來香','洋桔梗'];
const insertY = ['紅','白','黄','藍','紫','橙','黑','粉紅','綠'];
const insertZ = ['東','西','南','北'];
const insertA = ['石榴石','白水晶','茶晶','黑曜石','粉晶','髮晶','綠幽靈','碧璽','海藍寶','橄欖石','紫水晶'];
const insertB = ['牡羊座','金牛座','雙子座','巨蟹座','獅子座','處女座','天秤座','天螺座','射手座','摩羯座','水瓶座','雙魚座'];

randomize.addEventListener('click', result);

function result(){
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    const aItem = randomValueFromArray(insertA);
    const bItem = randomValueFromArray(insertB);
    const cItem = parseFloat(Math.floor(Math.random()*99));

newStory = newStory.replaceAll('insertx:', xItem);
newStory = newStory.replaceAll('inserty:', yItem);
newStory = newStory.replaceAll('insertz:', zItem);
newStory = newStory.replaceAll('inserta:', aItem);
newStory = newStory.replaceAll('insertb:', bItem);
newStory = newStory.replaceAll('insertc:', cItem);

story.textContent = newStory;
story.style.visibility = "visible";
}
