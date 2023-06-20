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
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        }
    }
})();
// Холбогч контроллер
var appController = (function (uiController, financeController) {

    // Хэрэглэгчийн өгсөн утгыг iuController-оос авч addBtn-ыг ажилуулах
    var ctrlAddItem = function () {
        // 1. Оруулах өгөгдлийг дэлгэцээс авна
        console.log(uiController.getInput());
        // 2. Олж авсан өгөгдлөө санхүүгийн контроллер луу дамжуулж тэнд хадгална

        // 3. Олж авсан өгөгдлүүдээ тохирох хэсэгт нь гаргана

        // 4. Төсвийг тооцоолно

        // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана
    }
    // EventListener нэмэх функц
    var setupEventListeners = function () {
        var DOM = uiController.getDOMstrings();
        document.querySelector(DOM.addBtn).addEventListener('click', function () {
            ctrlAddItem();
        });
        document.addEventListener('keypress', function (event) {
            // event.which -> for old fashioned browser
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    }

    return {
        init: function () {
            console.log('Application started...');
            setupEventListeners();

        }
    }
})(uiController, financeController);

appController.init();