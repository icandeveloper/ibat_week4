/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    
    this.firstName = ko.observable("Berb");
    this.lastName = ko.observable("Bertington");
    
    this.numOne = ko.observable(1);
    this.numTwo = ko.observable(2);
    
    // everything
    this.fullName = ko.computed(function () {
        
        return this.firstName() + " " + this.lastName();
        
    }, this);
    
    // everything
    this.total = ko.computed(function () {
        
        return parseInt(this.numOne()) + parseInt(this.numTwo());
        
    }, this);
    
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

