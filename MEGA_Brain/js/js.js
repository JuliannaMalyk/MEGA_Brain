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
        //незвичні зображення на прапорах
        if (e.srcElement.attributes.id.nodeValue == "topic1__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>На прапорі цієї європейської країни можна побачити ключі від воріт раю.</p>";
            let innerHTML_h3 = "<h3>Ватикан</h3>";
            
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;

        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question2") {
            let innerHTML_h2 = "<h2>Запитання 2 </h2>";
            let innerHTML_P = "<p>На прапорі цієї європейської острівної держави можна побачити її географічне зображення.</p>";
            let innerHTML_h3 = "<h3>Кіпр</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question3") {
            let innerHTML_h2 = "<h2>Запитання 3 </h2>";
            let innerHTML_P = "<p>На прапорі цієї азійської країни, де дуже чисте повітря, зображено велетенського дракона.</p>";
            let innerHTML_h3 = "<h3>Бутан</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question4") {
            let innerHTML_h2 = "<h2>Запитання 4 </h2>";
            let innerHTML_P = "<p>На прапорі цієї азійської країни можна побачити зображення найбільшого культового комплексу у світі Ангкор-Ват.</p>";
            let innerHTML_h3 = "<h3>Камбоджа</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic1__question5") {
            let innerHTML_h2 = "<h2>Запитання 5 </h2>";
            let innerHTML_P = "<p>На прапорі цієї африканської країни можна побачити автомат Калашникова.</p>";
            let innerHTML_h3 = "<h3>Мозамбік</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //сузір'я
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Саме стільки є зодіакальних сузір'їв. </p>";
            let innerHTML_h3 = "<h3>12</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Саме під цим зодіакальним сузір'ям народився Тарас Шевченко.</p>";
            let innerHTML_h3 = "<h3>Риби</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Саме в цьому сузір'ї можна побачити полярну зірку.</p>";
            let innerHTML_h3 = "<h3>Мала Ведмедиця</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Це сузір'я названо на честь двох братів - Кастора та Полідевка.</p>";
            let innerHTML_h3 = "<h3>Близнюки</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic2__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Саме це сузір'я можна побачити на прапорі Нової Зеландії.</p>";
            let innerHTML_h3 = "<h3>Сузір'я Південний Хрест</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //шахи
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Саме стільки клітинок на шаховій дошці.</p>";
            let innerHTML_h3 = "<h3>64</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Саме у цій країні вигадали шахи.</p>";
            let innerHTML_h3 = "<h3>Індія</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Саме так називається нічия у шахах.</p>";
            let innerHTML_h3 = "<h3>Пат</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Цю шахову фігуру у деяких країнах називають єпископом.</p>";
            let innerHTML_h3 = "<h3>Слон</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic3__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Він отримав 50 точок для Гріффіндору за найкращу шахову партію.</p>";
            let innerHTML_h3 = "<h3>Рон Візлі</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Колекціонування
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Саме це колекціонують медальєристи.</p>";
            let innerHTML_h3 = "<h3>Медалі (ордени).</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Саме це колекціонують філателісти.</p>";
            let innerHTML_h3 = "<h3>Поштові марки.</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Саме це колекціонують нумізмати.</p>";
            let innerHTML_h3 = "<h3>Монети</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Саме це колекціонують серпентафіли.</p>";
            let innerHTML_h3 = "<h3>Змії</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic4__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Саме це колекціонують стилофіли.</p>";
            let innerHTML_h3 = "<h3>Олівці</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Пішохідний туризм
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Цей вузол використовують як самостраховку для проходження етапу спуск\підйом спортивним способом? .</p>";
            let innerHTML_h3 = "<h3>Схоплюючий\Австрійський схоплюючий</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Цей вузол використовують для зв'язування прусіка.</p>";
            let innerHTML_h3 = "<h3>Грейпвайн</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Цей вузол є одним з найдавніших в історії, його називають 'король вузлів'.</p>";
            let innerHTML_h3 = "<h3>Булінь</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Саме так називається етап, проходження якого відбувається перпендикулярно до схилу.</p>";
            let innerHTML_h3 = "<h3>Траверс</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic5__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Як розшифровується ІСС?</p>";
            let innerHTML_h3 = "<h3>Індивідуальна система страхування</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Вулкани
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Цей вулкан знищив відоме місто Помпеї.</p>";
            let innerHTML_h3 = "<h3>Везувій</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Цей вулкан є найвищою вершиною Африки.</p>";
            let innerHTML_h3 = "<h3>Кіліманджаро</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Неподалік від Ужгорода знаходиться згаслий кратер цього вулкану.</p>";
            let innerHTML_h3 = "<h3>Анталовецька поляна</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p> Гора Олімп є згаслим і найбільшим вулканом у Сонячній системі, на якій планеті?</p>";
            let innerHTML_h3 = "<h3>Марс (висота Олімпу 26 км.)</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic6__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Вулкан 'Еребус', як не дивно, знаходиться саме на цьому материку.</p>";
            let innerHTML_h3 = "<h3>Антарктида</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        //Українські традиції
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question1") {
            let innerHTML_h2 = "<h2>Запитання 1</h2>";
            let innerHTML_P = "<p>Так називають традиційний весільний обрядовий хліб.</p>";
            let innerHTML_h3 = "<h3>Коровай</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question2") {
            let innerHTML_h2 = "<h2>Запитання 2</h2>";
            let innerHTML_P = "<p>Зібрані трави у цей день вважалися особливо цінними у народній магії.</p>";
            let innerHTML_h3 = "<h3>В ніч на Івана Купала</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question3") {
            let innerHTML_h2 = "<h2>Запитання 3</h2>";
            let innerHTML_P = "<p>Який напій, найчастіше готували до столу на Святвечір?</p>";
            let innerHTML_h3 = "<h3>Узвар</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question4") {
            let innerHTML_h2 = "<h2>Запитання 4</h2>";
            let innerHTML_P = "<p>Як називається хліб, що пекли спеціально для Андріївських вечорниць?</p>";
            let innerHTML_h3 = "<h3>Калита</h3>";
            modalContent.innerHTML = innerHTML_h2 + innerHTML_P;
            answerText.innerHTML = innerHTML_h3;
        } 
        else if (e.srcElement.attributes.id.nodeValue == "topic7__question5") {
            let innerHTML_h2 = "<h2>Запитання 5</h2>";
            let innerHTML_P = "<p>Саме так називалась поминальна кутя українців.</p>";
            let innerHTML_h3 = "<h3>Коливо</h3>";
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
