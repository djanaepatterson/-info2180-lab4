window.onload = function(){
    var searchButton = document.querySelector("button");
    searchButton.addEventListener('click', manageClick);
    var query = document.querySelector("hero");
    var resultContainer = document.querySelector(".result");
    var httpRequest = new XMLHttpRequest();
    
    function manageClick(clicked){
        clicked.preventDefault();
        var url = "superheroes.php?query=" + query.value;
        httpRequest.onreadystatechange = fetch;
        httpRequest.open('GET', url, true);
        httpRequest.send();
    }
    function fetch(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                var response = httpRequest.responseText;
                resultContainer.innerHTML = response;
            }
            else{
                resultContainer.innerHTML = "ERROR: INVAID REQUEST";
            }
        }
    }
}
