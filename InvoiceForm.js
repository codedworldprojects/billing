var invoiceForm = angular.module("InvoiceForm", []);

invoiceForm.controller("InvoiceCtrl", ["$scope", function($scope){
    $scope.model = {};
    $scope.model.products = [];

    var init = function(){
        $scope.data=  [{"agence":"CTM","secteur":"Safi","statutImp":"operationnel"}];
        $scope.addProduct();
    };

    $scope.exportToPDF = function(){
        var pdf = new jsPDF('p', 'pt', 'letter');  
        var canvas = pdf.canvas  
        canvas.height = 72 * 15;  
        canvas.width = 72 * 15;  
        var html = jQuery("#PdfDiv").html();  
        var options = {  
            pagesplit: true  
        };  
        html2pdf(html, pdf, function(pdf) {  
            pdf.save('RequisationForm.pdf');  
        }); 
    };

    $scope.addProduct = function(){
        var product = {
            productCode: "",
            productName: "",
            hsnCode: "",
            quantity: "",
            rate: "",
            discount: "",
            volume: "",
            volumeType: ""
        };
        $scope.model.products.push(product);
    };

    $scope.removeProduct = function(product){
        var index = $scope.model.products.indexOf(product);
        $scope.model.products.splice(index, 1); 
    };

    init();
}]);
