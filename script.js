// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
    // Өөрчлөлтөнд тэсвэртэй болгох
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn"
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        // Domstrings-рүү хандаж болох Public Service
        getDOMstrings: function () {
            return DOMstrings;
        }
    }
})();
// Санхүүтэй ажиллах контроллер
var financeController = (function () {

})();
// Холбогч контроллер
var appController = (function (uiController, financeController) {

    var DOM = uiController.getDOMstrings();
    var ctrlAddItem = function () {
        // 1. Оруулах өгөгдлийг дэлгэцээс авна
        console.log(uiController.getInput());
        // 2. Олж авсан өгөгдлөө санхүүгийн контроллер луу дамжуулж тэнд хадгална

        // 3. Олж авсан өгөгдлүүдээ тохирох хэсэгт нь гаргана

        // 4. Төсвийг тооцоолно

        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана
    }

    document.querySelector(DOM.addBtn).addEventListener('click', function () {
        ctrlAddItem();
    });
    document.addEventListener('keypress', function (event) {
        // event.which -> for old fashioned browser
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(uiController, financeController);