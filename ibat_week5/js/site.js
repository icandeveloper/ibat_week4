/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    
    var savedMsg = localStorage.getItem('savedMsg');
    
    if ( savedMsg != null ){
        
        $('#tbMessage').val(savedMsg);
    }
    
    $('#btnMessage').on("click", function () {

        var msg = $('#tbMessage').val();

        $('#messagePage').append(msg);
        
        localStorage.setItem('savedMsg',msg);
        
        var currentDate = new Date();

        $('#messageDate').append(currentDate);

    });
    
    $('#btnRemoveData').on("click", function () {
        
        $('#tbMessage').val('');
        
        localStorage.removeItem('savedMsg');
        
        return null;

    });
    
    $('#form').submit(function (e) {e.preventDefault();});

});