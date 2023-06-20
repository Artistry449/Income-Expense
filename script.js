// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {

})();
// Санхүүтэй ажиллах контроллер
var financeController = (function () {

})();
// Холбогч контроллер
var appController = (function (uiController, financeController) {

    var ctrlAddItem = function () {
        // 1. Оруулах өгөгдлийг дэлгэцээс авна

        // 2. Олж авсан өгөгдлөө санхүүгийн контроллер луу дамжуулж тэнд хадгална
        alert('hahahha');
        // 3. Олж авсан өгөгдлүүдээ тохирох хэсэгт нь гаргана

        // 4. Төсвийг тооцоолно

        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана
    }

    document.querySelector('.add__btn').addEventListener('click', function () {
        ctrlAddItem();
    });
    document.addEventListener('keypress', function (event) {
        // event.which -> for old fashioned browser
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(uiController, financeController);