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
        //Африка
        if (e.srcElement.attributes.id.nodeValue == "topic1__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Це найбільша річка Африканського континенту</p>";
            let innerHTML_h3 = "<h3>Ніл</h3>";
            
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;

        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question2") {
            let innerHTML_h2 = "<h2>Запитання 2 </h2>";
            let innerHTML_P = "<p>Цей вулкан - найвища точка континенту.</p>";
            let innerHTML_h3 = "<h3>Кіліманджаро</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question3") {
            let innerHTML_h2 = "<h2>Запитання 3 </h2>";
            let innerHTML_P = "<p>Саме це місто сучасна столиця Єгипту.</p>";
            let innerHTML_h3 = "<h3>Каїр</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question4") {
            let innerHTML_h2 = "<h2>Запитання 4 </h2>";
            let innerHTML_P = "<p>Саме ця піраміда є найвищою.</p>";
            let innerHTML_h3 = "<h3>Піраміда Хеопса (Хуфу), 140 м.</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question5") {
            let innerHTML_h2 = "<h2>Запитання 5 </h2>";
            let innerHTML_P = "<p>Це найбільший водоспад Африки, який був відкритий британським дослідником Девідом Лівінгстоном у 19 ст.</p>";
            let innerHTML_h3 = "<h3>Водоспад Вікторія</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Замки Закарпаття
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Саме цей замок має легенду про Погань Діву.</p>";
            let innerHTML_h3 = "<h3>Невицький замок</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Саме у цьому замку розміщується найбільший краєзнавчий музей Закарпатської області.</p>";
            let innerHTML_h3 = "<h3>Ужгородський замок</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Обороною цього замку впродовж 1685-1688 рр. керувала жінка Ілона Зріні.</p>";
            let innerHTML_h3 = "<h3>Замок Паланок</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>За легендою цей замок зруйнувала блискавка, що влучила до порохової вежі.</p>";
            let innerHTML_h3 = "<h3>Хустський замок</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>За легендою цей замок збудували представники таємничого ордену Тамплієрів.</p>";
            let innerHTML_h3 = "<h3>Замок у с. Середнє</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Різдвяні традиції народів світу
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>У Норвегії переконані, що в ніч на Різдво, по небу літає нечиста сила. Тому у хаті ховають...Що? .</p>";
            let innerHTML_h3 = "<h3>Мітлу</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>У Англії та Америці дім прикрашають омелою. Якщо під омелою стануть двоє, вони повинні...Що зробити? .</p>";
            let innerHTML_h3 = "<h3>Поцілуватися</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>У Німеччині на різдвяних ярмарках, цей персонаж казки Гофмана є найпопулярнішим сувеніром.</p>";
            let innerHTML_h3 = "<h3>Лускунчик</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Баббо Натале - саме так називають Санта Клауса у цій європейській країні.</p>";
            let innerHTML_h3 = "<h3>Італія</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>У цій країні Різдво припадає на літо, люди збираються на пляжі а Санта прибуває на дошці для серфингу.</p>";
            let innerHTML_h3 = "<h3>Австралія</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Відомі жінки
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Ця жінка зображена на одній з гривневих банкнот.</p>";
            let innerHTML_h3 = "<h3>Леся Українка.</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Це єдина княгиня в історії Київської Русі.</p>";
            let innerHTML_h3 = "<h3>Поштові марки.</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Саме ця жінка була матір'ю Каїна та Авеля.</p>";
            let innerHTML_h3 = "<h3>Єва</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Ця жінка найдовше правила Об'єднаним Британським королівством.</p>";
            let innerHTML_h3 = "<h3>Королева Єлизаветта ІІ</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Полонянка Настя Лісовська нам більше відома під цим іменем.</p>";
            let innerHTML_h3 = "<h3>Роксолана</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Коти
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Це найвідоміший український кіт, герой інстаграму та багатьох мемів.</p>";
            let innerHTML_h3 = "<h3>Кіт Степан</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Цей кіт умів посміхатися та зникати по частинах.</p>";
            let innerHTML_h3 = "<h3>Чеширський кіт</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>У коміксах про цього супергероя можна зустріти жінку-кішку.</p>";
            let innerHTML_h3 = "<h3>Бетмен</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Найпоширенішим варіантом казки про нього стала версія Шарля Перро.</p>";
            let innerHTML_h3 = "<h3>Кіт у чоботях</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Це і порода безшерстих котів, і пам'ятка давньоєгипетської архітектури</p>";
            let innerHTML_h3 = "<h3>Сфінкс</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Морська тема
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>У це море впадає річка Дністер.</p>";
            let innerHTML_h3 = "<h3>Чорне море</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Попри свою назву, все ж у цьому морі водяться різні організми. Яке це море?</p>";
            let innerHTML_h3 = "<h3>Мертве</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Коли моряки перетинають екватор, вони святкують день цього римського бога.</p>";
            let innerHTML_h3 = "<h3>День Нептуна</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Незважаючи на те, що його називають морем, це найбільше озеро на Землі</p>";
            let innerHTML_h3 = "<h3>Каспійське море</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>У цього моря немає берегів.</p>";
            let innerHTML_h3 = "<h3>Сарагасове</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Сонячна система
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Це перша планета Сонячної системи.</p>";
            let innerHTML_h3 = "<h3>Меркурій</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Офіційно з 2006 року у Сонячній системі саме стільки планет.</p>";
            let innerHTML_h3 = "<h3>8</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Цю планету Сонячної системи називають червоною</p>";
            let innerHTML_h3 = "<h3>Марс</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Саме це явище можна спостерігати, коли місяць перебуває між Сонцем і Землею.</p>";
            let innerHTML_h3 = "<h3>Сонячне затемнення</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Саме стільки природніх спутників має Венера.</p>";
            let innerHTML_h3 = "<h3>0</h3>";
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
