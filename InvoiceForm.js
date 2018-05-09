var invoiceForm = angular.module("InvoiceForm", []);

invoiceForm.controller("InvoiceCtrl", ["$scope", function($scope){

    var init = function(){
        $scope.data=  [{"agence":"CTM","secteur":"Safi","statutImp":"operationnel"}];
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
    }

    init();
}]);