function autocomplete(searchBox, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    searchBox.addEventListener("input", function(e) {
        var ListOfItem, ItemInList, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        ListOfItem = document.createElement("DIV");
        ListOfItem.setAttribute("id", this.id + "autocomplete-list");
        ListOfItem.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(ListOfItem);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            ItemInList = document.createElement("DIV");
  
            ItemInList.innerHTML += `<a href='Items.html' class="Search-items"><strong>${arr[i].substr(0, val.length)} </strong> ${arr[i].substr(val.length)} </a>`;
  
            /*execute a function when someone clicks on the item value (DIV element):*/
            ItemInList.addEventListener("click", function(e) {
              OpenItemPage();
            });
            ListOfItem.appendChild(ItemInList);
          }
        }
    });
  
    function OpenItemPage(){
      window.open("/Zappos/Items.html","_self");
    }
  
  function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != searchBox) {
          x[i].parentNode.removeChild(x[i]);
        }
  
      }
  }
  
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the country names in the world:*/

  var obj = [
    "Shose",
    "Boots",
    "Heelys",
    "Suavs", 
    "OOFOS",
    "Birkenstock",
    "Native Shoes",
    "Suicoke",
    "Vans",
    "Oka-B",
    "adidas",
    "Reebok Work"
  ];
  var searchBox=document.getElementById("searchBox");
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(searchBox, obj);
  