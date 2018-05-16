var invoiceForm = angular.module("InvoiceForm", []);

invoiceForm.controller("InvoiceCtrl", ["$scope", function ($scope) {
    $scope.model = {};
    $scope.model.products = [];
    $scope.model.quantity = {
        drums: 0,
        cartons: 0,
        buckets: 0,
        liters: 0,
        bags: 0,
        total: 0
    };
    $scope.model.subTotal = 0;

    var init = function () {
        $scope.data = [{ "agence": "CTM", "secteur": "Safi", "statutImp": "operationnel" }];
        $scope.addProduct();
    };

    $scope.exportToPDF = function () {
        var pdf = new jsPDF('p', 'pt', 'letter');
        var canvas = pdf.canvas
        canvas.height = 72 * 15;
        canvas.width = 72 * 15;
        var html = jQuery("#PdfDiv").html();
        var options = {
            pagesplit: true
        };
        html2pdf(html, pdf, function (pdf) {
            pdf.save('RequisationForm.pdf');
        });
    };

    $scope.addProduct = function () {
        var product = {
            productCode: "",
            productName: "",
            hsnCode: "",
            quantity: 0,
            rate: 0,
            discount: 0,
            volume: 0,
            volumeType: ""
        };
        $scope.model.products.push(product);
    };

    $scope.removeProduct = function (product) {
        var index = $scope.model.products.indexOf(product);
        $scope.model.products.splice(index, 1);
    };

    $scope.quantityCalculation = function () {
        $scope.model.subTotal = 0;
        $scope.model.quantity = {
            drums: 0,
            cartons: 0,
            buckets: 0,
            liters: 0,
            bags: 0,
            total: 0
        };
        angular.forEach($scope.model.products, function (value, key) {
            if (value.volumeType && value.quantity) {
                $scope.model.subTotal += value.quantity * value.rate;

                switch (value.volumeType) {
                    case "drums": $scope.model.quantity.drums += value.quantity;
                        $scope.model.quantity.total += value.quantity;
                        break;
                    case "cartons": $scope.model.quantity.cartons += value.quantity;
                        $scope.model.quantity.total += value.quantity;
                        break;
                    case "buckets": $scope.model.quantity.buckets += value.quantity;
                        $scope.model.quantity.total += value.quantity;
                        break;
                    case "liters": $scope.model.quantity.liters += value.quantity;
                        $scope.model.quantity.total += value.quantity;
                        break;
                    case "bags": $scope.model.quantity.bags += value.quantity;
                        $scope.model.quantity.total += value.quantity;
                        break;
                }
            }
        });
    };

    init();
}]);
