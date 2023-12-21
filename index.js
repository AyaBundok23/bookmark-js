var siteName = document.getElementById('siteName') ;
var websiteUrl = document.getElementById('websiteUrl') ;
var tbody = document.getElementById('tbody');

 

 if(localStorage.getItem('websiteData') !== null) {
    var allWebsites = JSON.parse(localStorage.getItem('websiteData'))
    displayTable();
 } else {
    var allWebsites = [] ;
 }



function createWebsite() {
    
    var Website = {
        websiteName : siteName.value ,
        websiteUrl : websiteUrl.value

    }

    allWebsites.push(Website)
    localStorage.setItem('websiteData' , JSON.stringify(allWebsites))
    retriveWebsite()
}


var trs = '';
function retriveWebsite(){  
var lastIndex = allWebsites.length -1;
       trs = `  <tr>
                    <td>${lastIndex}</td>
                    <td>${allWebsites[lastIndex].websiteName}</td>
                  
                    <td> <button class="btn  button ">
                    <a href= "${allWebsites[lastIndex].websiteUrl}" target = "_blank">
                    <i class="fa-solid fa-eye"></i> Visit
                    </a>
                    </button>
                    </td>
 
                    <td> <button onclick ='deleteWebsite(${lastIndex})'  class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i> Delete
                    </button>
                </td>
     </tr>
`
   tbody.innerHTML += trs
} 


function displayTable() {
    var trs = ''
    for(var i = 1; i< allWebsites.length ; i++) {
        trs += `  <tr>
        <td>${i}</td>
        <td>${allWebsites[i].websiteName}</td>
      
        <td> <button class="btn  button">
        <a href= "${allWebsites[i].websiteUrl}" target = "_blank">
        <i class="fa-solid fa-eye"></i> Visit
        </a>
        </button>
        </td>

        <td><button onclick ='deleteWebsite(${i})'    class="btn btn-danger">
        <i class="fa-solid fa-trash"></i> Delete
        </button>
    </td>
</tr>
`
    }
  tbody.innerHTML = trs;
}

function deleteWebsite(index) {
    allWebsites.splice(index , 1)   
    displayTable() ; 
    localStorage.setItem('websiteData' , JSON.stringify(allWebsites)) // set new products in localstorage

}

