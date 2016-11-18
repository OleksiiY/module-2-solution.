(function(){
  'use strict'

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)

ToBuyController.$inject=['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];


function ToBuyController(ShoppingListCheckOffService){
  /*Displaying the list of items 1st Controller*/
 var showList=this;
 showList.items=ShoppingListCheckOffService.toDisplayItems();
 showList.isShow = function(index){
  /*Adding message if an array is empty*/
  var length=showList.items.length;
    if (length<1){
      return true;
        }else{
      return false;
      }
 };

};

function AlreadyBoughtController(ShoppingListCheckOffService){
  var transfer=this;
  transfer.transferItem=function(index){
    transfer.items=ShoppingListCheckOffService.toDisplayItems();
    transfer.items=ShoppingListCheckOffService.transferItems(index);

  };
/*Hides message if length of array is 0*/
  this.isHidden=function(val){
    var countElem=ShoppingListCheckOffService.checkItems(val);
     if(countElem<1){
       return true;
     }else {
       return false;
     }
  };

};

function ShoppingListCheckOffService(){
  var service=this;
  var boughtItems=[];
  var items=[
    {
      name:'jacket',
      quantity:'1'
    },
    {
      name:'coats',
      quantity:'2'
    },
    {
      name:'shoes',
      quantity:'4'
    },
    {
      name:'braclet',
      quantity:'33'
    },
    {
      name:'tickets',
      quantity:'5'
    },
    {
      name:'car',
      quantity:'1'
    },
    {
      name:'cake',
      quantity:'3'
    },
    {
      name:'movies',
      quantity:'4'
    },
    {
      name:'books',
      quantity:'5'
    },
    {
      name:'flowers',
      quantity:'1'
    }
  ];

  service.toDisplayItems=function(){
    return items;
  };

  service.transferItems=function(index){
    var addedItem=items.splice(index,1);
        boughtItems.push(addedItem[0]);
    return boughtItems;
  };
  service.checkItems=function(val){
    val=boughtItems.length;
    return val;
  };

}


})();
