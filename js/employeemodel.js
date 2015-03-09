/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI

function employee (id,fn,ln,sal) {
    
    this.id = ko.observable(id);
    this.firstName = ko.observable(fn);
    this.lastName = ko.observable(ln);
    this.salary = ko.observable(sal);

}

function AppViewModel() {
    
    this.title = "Testing";
    
    /*this.employees = ko.observableArray([
        
        new employee('1','Bert','Berlington','100'),
        new employee('2','Charles','Charlesforth','200'),
        new employee('3','Denise','Dentiste','300')
        
    ]);*/
    
    this.employees = ko.observableArray([
        
        {id: 1, firstName: 'Bert', lastName: 'Berlington', salary: 100},
        {id: 2, firstName: 'Charles', lastName: 'Charlesforth', salary: 200},
        {id: 3, firstName: 'Denise', lastName: 'Dentiste', salary: 300}
        
    ]);
    
    this.selectedEmployee = ko.observable(2);
    this.firstName = ko.observable();
    this.lastName = ko.observable();
    this.salary = ko.observable();
    
    this.add = function (){
        
        var fn = this.firstName();
        var ln = this.lastName();
        var sal = this.salary();
        
        this.employees.push({firstName:fn,lastName:ln,salary:sal});
        
        this.firstName('');
        this.lastName('');
        this.salary('');
        
    };
    
    
    
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

