var prodRows = document.getElementById("tbodyRows") ;

var prodRequest ;

var prodData ;

var sortOrder = "D" ;

var table = ""





function changetable(){
	switch (prodtype.value) {
		case "protein":
		prodRequest = new XMLHttpRequest( ) ;
		prodRequest.open("GET", "table/protein.json");
		prodRequest.send() ;
		break;
		
		case "pre":
		prodRequest = new XMLHttpRequest( ) ;
		prodRequest.open("GET", "table/pre.json");
		prodRequest.send() ;
		break;
		
		case "bcaa":
		prodRequest = new XMLHttpRequest( ) ;
		prodRequest.open("GET", "table/bcaa.json");
		prodRequest.send() ;
		break;
		
		case "pump":
		prodRequest = new XMLHttpRequest( ) ;
		prodRequest.open("GET", "table/pump.json");
		prodRequest.send() ;
		break;
		
		case "post":
		prodRequest = new XMLHttpRequest( ) ;
		prodRequest.open("GET", "table/post.json");
		prodRequest.send() ;
		break;
		
		case "vitamin":
		prodRequest = new XMLHttpRequest( ) ;
		prodRequest.open("GET", "table/vitamin.json");
		prodRequest.send() ;
		break;
		
		case "fat":
		prodRequest = new XMLHttpRequest( ) ;
		prodRequest.open("GET", "table/fat.json");
		prodRequest.send() ;
		break;
}
	
	
	
	
	
	
	/*
	if (prodtype.value == "protein"){
		prodRequest = new XMLHttpRequest( ) ;
		prodRequest.open("GET", "protein.json");
		prodRequest.send() ;
	}
	else if (prodtype.value == "pre"){
		prodRequest = new XMLHttpRequest( ) ;
		prodRequest.open("GET", "pre.json");
		prodRequest.send() ;
}
*/
}

function loadtable()
{
	prodData = JSON.parse(prodRequest.responseText) ;

	renderTable(prodData) ;

}
	

function renderTable(data)
    {
        var prodRowData = "";

        for (i = 0; i<data.length; i++)
            {
                prodRowData += "<tr><td id='prodID"+i+"'>" + data[i].prodID + "</td><td>" + "<img src=" +data[i].prodImg+ ">" + "</td><td id='prodName"+i+"'>" + data[i].prodName + "</td><td>" + data[i].prodPrice;
			}

			
	    prodRows.innerHTML = prodRowData ;
    }

//use to comfirm user qty not useable right now
/*function confirmQty( )
{
	var products = []
	var cusproducts = []
	
	for (i = 0; i < 10; i++){
		var p = document.getElementById("ProdQty" + i).value;
	
	if(p > 0)
	{
		products += document.getElementById("prodName"+i).innerText + ": Qty " + p + "\n";
		cusproducts += "ProdID: " + document.getElementById("prodID"+i).innerText + " Qty: " + p + ", ";
	}
	}
	 if (products > "" && products != null)
    {
if (confirm("Are you sure you want to order the following: \n"  + products)){
alert("Thank you for purchasing our product. \nThis order has been place." ) ;
	localStorage.setItem("cusProducts", JSON.stringify(cusproducts))
}
else{
}
     	}
}
*/
function sortByID()
{
    if (sortOrder == "A")  
    {
        prodData.sort(function(a,b)
        {
            return a.prodID - b.prodID ;
        } ) ;
        sortOrder = "D" ;
    }
    else    
    {
        prodData.sort(function(a,b)
        {
            return b.prodID - a.prodID ;
        }) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}

function sortByName()
{
    if (sortOrder == "A")   
    {
        prodData.sort(function(a,b)
        {
            if (a.prodName < b.prodName)
            {
                return -1 ;
            }
        } ) ;
        sortOrder = "D" ;
    }
    else    
    {
        prodData.sort(function(a,b)
        {
            if (a.prodName > b.prodName) 
            {
                return -1  
            }
        } ) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}

function sortByPrice()
{
   if (sortOrder == "A")   
    {
        prodData.sort(function(a,b)
        {
            return a.prodPrice - b.prodPrice ;
        } ) ;
        sortOrder = "D" ;
    }
    else    
    {
        prodData.sort(function(a,b)
        {
            return b.prodPrice - a.prodPrice ;
        }) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}
