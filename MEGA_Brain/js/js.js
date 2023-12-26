let modal = document.querySelector(".modal");
let modalBox = document.querySelector(".modal__box");
let openQuestion = document.querySelectorAll(".question");
let closeQuestion = document.querySelector(".modal__close-btn");
let modalContent = document.querySelector(".modal__content");
let answer = document.querySelector(".answer__btn");
let answerText = document.querySelector(".answer__text");


answer.addEventListener("click",function() {
    answerText.classList.add("open");
});

openQuestion.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        //Іспанія
        if (e.srcElement.attributes.id.nodeValue == "topic1__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Іспанія розташована на цьому європейському півострові.</p>";
            let innerHTML_h3 = "<h3>Піренейський</h3>";
            
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;

        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question2") {
            let innerHTML_h2 = "<h2>Запитання 2 </h2>";
            let innerHTML_P = "<p>Це столиця Іспанії.</p>";
            let innerHTML_h3 = "<h3>Мадрид</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question3") {
            let innerHTML_h2 = "<h2>Запитання 3 </h2>";
            let innerHTML_P = "<p>Саме стільки літер має слово Іспанія, у пеекладі на англійську мову..</p>";
            let innerHTML_h3 = "<h3>5 (Spain)</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question4") {
            let innerHTML_h2 = "<h2>Запитання 4 </h2>";
            let innerHTML_P = "<p>Це відомий, та не найгуманніший, традиційний вид дозвілля у іспанців.</p>";
            let innerHTML_h3 = "<h3>Корида</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question5") {
            let innerHTML_h2 = "<h2>Запитання 5 </h2>";
            let innerHTML_P = "<p>Саме у цьому місті знаходиться відомий архітектурних об'єкт Саграда Фамілія..</p>";
            let innerHTML_h3 = "<h3>Барселона</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Компютери
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Цей елемент комп'ютера має навіть 'свій килимок'.</p>";
            let innerHTML_h3 = "<h3>Мишка</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Вісім біт складають..?.</p>";
            let innerHTML_h3 = "<h3>1 байт</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Саме його по іншому називають лептоп.</p>";
            let innerHTML_h3 = "<h3>Ноутбук</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Так по іншому називають жорсткий диск компютера.</p>";
            let innerHTML_h3 = "<h3>Вінчестер</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>І пітон, і ада, і алгол - це..?.</p>";
            let innerHTML_h3 = "<h3>Мови програмування</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Леви
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Лев належить до цієї родини хижаків.</p>";
            let innerHTML_h3 = "<h3>Котячі</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Це українське місто називають ще містом Лева</p>";
            let innerHTML_h3 = "<h3>Львів</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Це ім'я мав товариш Тімона і Пумби.</p>";
            let innerHTML_h3 = "<h3>Сімба</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Саме цей князь заснував місто Львів, і зробив його столицею свого князівства.</p>";
            let innerHTML_h3 = "<h3>Лев Данилович</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Саме так називають родину левів, що складається з одного самця та кількох самиць.</p>";
            let innerHTML_h3 = "<h3>Прайд</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //3 літери
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Саме в цьому жанрі виконує свої пісні Емінем.</p>";
            let innerHTML_h3 = "<h3>Реп</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Це персонаж казки 'Мауглі'.</p>";
            let innerHTML_h3 = "<h3>Каа.</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Саме так називають дводольний віршований розмір</p>";
            let innerHTML_h3 = "<h3>Ямб</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Саме так звали брата Ромула.</p>";
            let innerHTML_h3 = "<h3>Рем</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Саме так називається партія у тенісі.</p>";
            let innerHTML_h3 = "<h3>Сет</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //від А до А
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Саме ця річка найповноводніша у світі.</p>";
            let innerHTML_h3 = "<h3>Амазонка</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Саме так називають полярний регіон земної кулі, що розташований на північ від полярного круга.</p>";
            let innerHTML_h3 = "<h3>Арктика</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Саме так називається міфічний зниклий острів-дежава.</p>";
            let innerHTML_h3 = "<h3>Атлантида</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Ця країна, Південної Америки, отримала свою назву через легенду про великі поклади срібла на своїй території.</p>";
            let innerHTML_h3 = "<h3>Аргентина</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Столицею цього американського штату є місто Фенікс</p>";
            let innerHTML_h3 = "<h3>Арізона</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Вулиці Ужгорода
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Це головна пішохідна вулиця міста.</p>";
            let innerHTML_h3 = "<h3>Корзо</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Ця вулиця носить прізвище аристократів, що у середньовіччі володіли замком майже 400 років.</p>";
            let innerHTML_h3 = "<h3>вул. Другеттів</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Це найдовша вулиця Ужгорода, що закінчується на території сусідньої країни.</p>";
            let innerHTML_h3 = "<h3>вул. Собранецька</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Найкоротша вулиця, яку неофіційно називали вулицею 'першого поцілунку', майже повністю складається з...чого?</p>";
            let innerHTML_h3 = "<h3>Сходинок (вулиця Замкові сходи)</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>На цій вулиці, що носить прізвище чеського письменнка знаходяться середньовічні винні підвали та ботанічний сад.</p>";
            let innerHTML_h3 = "<h3>вул. Ольбрахта</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Полтавська область
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Полтавська область майже повність знаходиться на Правобережній чи Лівоборежній Україні?.</p>";
            let innerHTML_h3 = "<h3>на Лівобережній</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Саме у цьому селі Полтавської області відбуваються події розповіді 'Ніч перед Різдвом'.</p>";
            let innerHTML_h3 = "<h3>Диканька</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Це найвідоміший ярмарок в Україні, відбувається поблизу цього села на Полтавщині.</p>";
            let innerHTML_h3 = "<h3>Сорочинський</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>У Полтаві знаходиться пам'ятник цій тварині, яку названо 'одвічною годувальницею українського народу'.</p>";
            let innerHTML_h3 = "<h3>Свині</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>За переказами, назва цього міста на полтавщині походить від того, що тут було зручно проводити мирні переговори та укладати угоди.</p>";
            let innerHTML_h3 = "<h3>Миргород</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else {
            let innerHTML_h2 = "<h2>Запитання</h2>";
            let innerHTML_P = "<p>Питання у розробці.</p>";
            let innerHTML_h3 = "<h3>...</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        }

        modal.classList.add("open");
        modalBox.classList.add("open");    
        
        const redButton = document.getElementById(e.srcElement.attributes.id.nodeValue);
        redButton.classList.add("red");
       
    })
});


//document.getElementById("open-modal-btn").addEventListener("click",function(){
//  document.getElementById("my-modal").classList.add("open")
//})

document.getElementById("close-my-modal-btn").addEventListener("click", function () {
   document.getElementById("my-modal").classList.remove("open")
});
document.getElementById("close-my-modal-btn").addEventListener("click", function () {
    answerText.classList.remove("open");
    answerText.innerHTML ="";
});


document.addEventListener('click', (e) => {
    if (e.target === modal) {
       modal.classList.remove("open");
       modalBox.classList.remove("open");
       answerText.classList.remove("open");
       answerText.innerHTML ="";
 }
});
