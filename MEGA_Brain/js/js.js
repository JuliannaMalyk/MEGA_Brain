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
        //світова література
        if (e.srcElement.attributes.id.nodeValue == "topic1__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Так називають мову двох осіб у драматичному творі.</p>";
            let innerHTML_h3 = "<h3>Діалог</h3>";
            
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;

        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question2") {
            let innerHTML_h2 = "<h2>Запитання 2 </h2>";
            let innerHTML_P = "<p>Саме стільки духів Різдва з'явилось до Скруджа у творі Діккенса.</p>";
            let innerHTML_h3 = "<h3>Три</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question3") {
            let innerHTML_h2 = "<h2>Запитання 3 </h2>";
            let innerHTML_P = "<p>Ця країна є батьківщиною Ганса Крістіана Андерсена.</p>";
            let innerHTML_h3 = "<h3>Данія</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question4") {
            let innerHTML_h2 = "<h2>Запитання 4 </h2>";
            let innerHTML_P = "<p>Цьому українському гетьманові, якого оспівав Байрон, присвячено 186 гравюр, 42 картини, 22 музичні композиції, 17 літературних творів, 6 скульптур.</p>";
            let innerHTML_h3 = "<h3>Іван Мазепа</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question5") {
            let innerHTML_h2 = "<h2>Запитання 5 </h2>";
            let innerHTML_P = "<p>Таке ім'я отримала жінка, статую якої виготовив Пігмаліон, а потім закохався у неї.</p>";
            let innerHTML_h3 = "<h3>Галатея</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //голлівуд
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Цей актор зіграв головну роль у різдвяній комедії ''Сам удома''. </p>";
            let innerHTML_h3 = "<h3>Маколей Калкін</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Цей фільм Джеймса Кемерона у 1997 році отримав 11 нагород Оскар.</p>";
            let innerHTML_h3 = "<h3>''Титанік''</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Голлівуд знаходиться поблизу цього мегаполіса.</p>";
            let innerHTML_h3 = "<h3>Лос-Анджелес</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Премію американської кіноакадемії, відому як ''Оскар'', вручають з цього року.</p>";
            let innerHTML_h3 = "<h3>1929</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Фраза ''Hasta la vista'' стала популярною завдяки цьому кіногерою.</p>";
            let innerHTML_h3 = "<h3>Термінатор</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //цікаве закарпаття
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>На гербі Закарпатської області зображено цього хижака.</p>";
            let innerHTML_h3 = "<h3>Ведмідь</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Сучасний санаторій Карпати розміщений у колишній мисливській резиденції цих аристократів.</p>";
            let innerHTML_h3 = "<h3>Шенборн</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Столицею Карпатської України було саме це місто.</p>";
            let innerHTML_h3 = "<h3>Хуст</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Єпископська резиденція греко-католицької Мукачівської єпархії знаходиться у цьому місті.</p>";
            let innerHTML_h3 = "<h3>Ужгород</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Яку назву, у наш час, має місто Севлюш.</p>";
            let innerHTML_h3 = "<h3>Виноградів</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //видатні українці
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Перший президент незалежної України?</p>";
            let innerHTML_h3 = "<h3>Леонід Макарович Кравчук</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Це відомий політик, полководець, дипломат, засновник  Української козацької держави та її перший гетьман.</p>";
            let innerHTML_h3 = "<h3>Богдан Зиновій Хмельницький</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Вона відома сучасна українська поетеса-шістдесятниця, письменниця, дисидент.У 1967 році разом з Павлом Тичиною та Іваном Драчем номінована на Нобелівську премію з літератури.</p>";
            let innerHTML_h3 = "<h3>Ліна Василівна Костенко</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Він засновник друкарської справи, автор першої друкованої в Україні книги ''Апастол''.</p>";
            let innerHTML_h3 = "<h3>Іван Федоров</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Справжнє ім'я української письменниці Марко Вовчок.</p>";
            let innerHTML_h3 = "<h3>Марія Олександрівна Вілінська</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Зброя
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Це - примітивна метальна зброя австралійських аборигенів, що може поранити неуважного мисливця.</p>";
            let innerHTML_h3 = "<h3>Бумеранг</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Саме так називають діаметр каналу дула вогнепальної зброї.</p>";
            let innerHTML_h3 = "<h3>Калібр</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Коли індіанці ставали на стежку війни, вони викопували цю зброю.</p>";
            let innerHTML_h3 = "<h3>Томагавк</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Саме на нього натискають, щоб вистрілити з пістолета.</p>";
            let innerHTML_h3 = "<h3>Гачок</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Саме так називають криву турецьку шаблю.</p>";
            let innerHTML_h3 = "<h3>Ятаган</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Польща
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Це польське місто разом із Варшавою є лідером за кількістю туристів, що їх відвідують.</p>";
            let innerHTML_h3 = "<h3>Краків</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Найвища гора Польщі - Риси - знаходиться в цьому гірському хребті.</p>";
            let innerHTML_h3 = "<h3>Татри</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Саме ця річка протікає через столицю Польщі.</p>";
            let innerHTML_h3 = "<h3>Вісла</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Це найбільше польське місто на річці Одра.</p>";
            let innerHTML_h3 = "<h3>Вроцлав</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Це місто найбільший польський порт на узбережжі Балтійського моря.</p>";
            let innerHTML_h3 = "<h3>Гданськ</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //час
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Так називають проміжок часу, близький до періоду одного обертання Землі навколо Сонця.</p>";
            let innerHTML_h3 = "<h3>Рік</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Так називають проміжок часу, близький до періоду обертання Місяця навколо Землі.</p>";
            let innerHTML_h3 = "<h3>Місяць</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Так називають відрізок часу, що дорівнює 3600 секундам.</p>";
            let innerHTML_h3 = "<h3>Година</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Так називають 1/1440 частину доби.</p>";
            let innerHTML_h3 = "<h3>Хвилина</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Саме стільки секунд в одній добі.</p>";
            let innerHTML_h3 = "<h3>86400</h3>";
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