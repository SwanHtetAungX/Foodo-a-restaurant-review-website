"user strict";
const FnbitemsDB=require("../models/fnbitemsDB");
    
var fnbitemsDB=new FnbitemsDB();
function getAllFnBitems(request,respond){
    fnbitemsDB.getAllFnBitems(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
    
}
function searchFnbItems(request,respond){
    var search=request.body.searchTerm;
    fnbitemsDB.searchFnbItems(search,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    })
}
module.exports={getAllFnBitems,searchFnbItems};