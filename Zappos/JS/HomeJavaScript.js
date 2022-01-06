
//Get Element
var searchBox=document.getElementById("searchBox")
var NewBtn=document.getElementById("New-Btn")
var WomenBtn=document.getElementById("Women-Btn")
var MenBtn=document.getElementById("Men-Btn")
var kidsBtn=document.getElementById("kids-Btn")
var DepartmentsBtn=document.getElementById("Departments-Btn")
var BrandsBtn=document.getElementById("Brands-Btn")
var SaleBtn=document.getElementById("Sale-Btn")
var ClothingBtn=document.getElementById("Clothing-Btn")

var EmailAddressBox=document.getElementById("EmailAddressBox");

var iconNew=document.getElementById("down-icon-New");
var iconWomen=document.getElementById("down-icon-Women");
var iconMen=document.getElementById("down-icon-Men");
var iconkids=document.getElementById("down-icon-kids");
var iconDepartments=document.getElementById("down-icon-Departments");
var iconBrands=document.getElementById("down-icon-Brands");
var iconSale=document.getElementById("down-icon-Sale");
var iconClothing=document.getElementById("down-icon-Clothing");

//Open Category //Do it by For Later
var Categorys=document.querySelectorAll(".Category");
var NewCategorys=document.getElementById("New-Category");
var WomenCategorys=document.getElementById("Women-Category");
var MenCategorys=document.getElementById("Men-Category");
var KidsCategorys=document.getElementById("Kids-Category");
var DepartmentsCategorys=document.getElementById("Departments-Category");
var BrandsCategorys=document.getElementById("Brands-Category");
var SaleCategorys=document.getElementById("Sale-Category");
var ClothingCategorys=document.getElementById("Clothing-Category");


var card=document.getElementById("btn-cart")
//var IconClose=document.querySelectorAll(".fa-times")
var IconClose=document.querySelectorAll(".fa-times")
var overlay=document.querySelector(".overlay")
var btnSearch=document.querySelector("#btn-search")

var Advertis=document.querySelectorAll(".Adv")
var ArrowLeft=document.querySelector(".fa-chevron-left")

var ArrowRight=document.querySelector(".fa-chevron-right")

// var Advertising=document.querySelector("#Advertising-Style")

//Footer Action

var footerbtn = document.getElementById("SignUpToDayBtn");
var takeSurveyBtn=document.getElementById("takeSurvey");


var TimeOfSetAdv;
//Add Event to Element
NewBtn.addEventListener("click",ShowNew)
//
//item.addEventListener("click",CloseAll())

for(let item of IconClose){
    item.addEventListener("click",CloseAll)
}

WomenBtn.addEventListener("click",ShowWomen)

MenBtn.addEventListener("click",ShowMen)

kidsBtn.addEventListener("click",Showkids)

DepartmentsBtn.addEventListener("click",ShowDepartments)

BrandsBtn.addEventListener("click",ShowBrands)

SaleBtn.addEventListener("click",ShowSale)

ClothingBtn.addEventListener("click",ShowClothing)


card.addEventListener("mouseover",zoom)
card.addEventListener("mouseout",back)


btnSearch.addEventListener("mouseover",ChangeBtnStyle)
btnSearch.addEventListener("mouseout",BackBtnStyle)

ArrowLeft.addEventListener("click",SlideLeft)
ArrowRight.addEventListener("click",SlideRight)

btnSearch.addEventListener("mouseover",ChangeBtnStyle)
btnSearch.addEventListener("mouseout",BackBtnStyle)

//footer btn Events
footerbtn.addEventListener("mouseover",function(){
    footerbtn.style.backgroundColor="#fff"
    footerbtn.style.color="#0c042b"
})
footerbtn.addEventListener("mouseout",function(){
    footerbtn.style.backgroundColor="transparent"
    footerbtn.style.color="#fff"
})

takeSurveyBtn.addEventListener("mouseover",function(){
    takeSurveyBtn.style.backgroundColor="#fff"
    takeSurveyBtn.style.color="#0c042b"
})
takeSurveyBtn.addEventListener("mouseout",function(){
    takeSurveyBtn.style.backgroundColor="transparent"
    takeSurveyBtn.style.color="#fff"
})

EmailAddressBox.addEventListener("focus",function(){
    document.getElementById("Div-EmailBox").style.border="3px dotted #fff"
})
EmailAddressBox.addEventListener("blur",function(){
    document.getElementById("Div-EmailBox").style.border=""
})

document.getElementById("searchBox").addEventListener("focus",function(){
    document.getElementById("itemSearch").style.border="3px dotted #0d6efd"
})
document.getElementById("searchBox").addEventListener("blur",function(){
    document.getElementById("itemSearch").style.border=""
})


for(let Advertising of Advertis){
    Advertising.addEventListener("mouseover",SlidingStop)
    Advertising.addEventListener("mouseout",SlidingPlay)
}


function ShowNew(){
    this.preventDefault
    iconNew.style.transform="rotate(-180deg)";
    if(NewBtn.getAttribute("data-click")==0){
        HideMen()
        HideBrands()
        HideClothing()
        HideDepartments()
        HideSale()
        Hidekids()
        HideWomen()
        overlay.style.display="block"
        NewCategorys.style.display="block";
        NewBtn.setAttribute("data-click","1");
    }
    else{
        HideNew()
    }
}

function HideNew(){
    NewCategorys.style.display="none"
    overlay.style.display="none"

    iconNew.style.transform="rotate(360deg)";
    NewBtn.setAttribute("data-click","0");
}

function ShowWomen(){
    this.preventDefault
    iconWomen.style.transform="rotate(-180deg)";
    if(WomenBtn.getAttribute("data-click")==0){
        HideMen()
        HideNew()
        HideBrands()
        HideClothing()
        HideDepartments()
        HideSale()
        Hidekids()
        overlay.style.display="block"
        WomenCategorys.style.display="block";
        WomenBtn.setAttribute("data-click","1");
    }
    else{
        HideWomen()
    }
}

function HideWomen(){
    WomenCategorys.style.display="none"
    overlay.style.display="none"

    iconWomen.style.transform="rotate(360deg)";
    WomenBtn.setAttribute("data-click","0");
}

function ShowMen(){
    this.preventDefault
    iconMen.style.transform="rotate(-180deg)";
    if(MenBtn.getAttribute("data-click")==0){
        HideNew()
        HideBrands()
        HideClothing()
        HideDepartments()
        HideSale()
        Hidekids()
        HideWomen()
        overlay.style.display="block"
        MenCategorys.style.display="block";
        MenBtn.setAttribute("data-click","1");
    }
    else{
        HideMen()
    }
}

function HideMen(){
    MenCategorys.style.display="none"
    overlay.style.display="none"

    iconMen.style.transform="rotate(360deg)";
    NewBtn.setAttribute("data-click","0");
}

function Showkids(){
    this.preventDefault
    iconkids.style.transform="rotate(-180deg)";
    if(kidsBtn.getAttribute("data-click")==0){
        HideMen()
        HideNew()
        HideBrands()
        HideClothing()
        HideDepartments()
        HideSale()
        HideWomen()
        overlay.style.display="block"
        KidsCategorys.style.display="block";
        kidsBtn.setAttribute("data-click","1");
    }
    else{
        Hidekids()
    }
}

function Hidekids(){
    KidsCategorys.style.display="none"
    overlay.style.display="none"

    iconkids.style.transform="rotate(360deg)";
    kidsBtn.setAttribute("data-click","0");
}

function ShowDepartments(){
    this.preventDefault
    iconDepartments.style.transform="rotate(-180deg)";
    if(DepartmentsBtn.getAttribute("data-click")==0){
        HideMen()
        HideNew()
        HideBrands()
        HideClothing()
        HideSale()
        Hidekids()
        HideWomen()
        overlay.style.display="block"
        DepartmentsCategorys.style.display="block";
        DepartmentsBtn.setAttribute("data-click","1");
    }
    else{
        HideDepartments()
    }
}

function HideDepartments(){
    DepartmentsCategorys.style.display="none"
    overlay.style.display="none"

    iconDepartments.style.transform="rotate(360deg)";
    DepartmentsBtn.setAttribute("data-click","0");
}

function ShowBrands(){
    this.preventDefault
    iconBrands.style.transform="rotate(-180deg)";
    if(BrandsBtn.getAttribute("data-click")==0){
        HideMen()
        HideNew()
        HideClothing()
        HideDepartments()
        HideSale()
        Hidekids()
        HideWomen()
        overlay.style.display="block"
        BrandsCategorys.style.display="block";
        BrandsBtn.setAttribute("data-click","1");
    }
    else{
        HideBrands()
    }
}

function HideBrands(){
    BrandsCategorys.style.display="none"
    overlay.style.display="none"

    iconBrands.style.transform="rotate(360deg)";
    BrandsBtn.setAttribute("data-click","0");
}

function ShowSale(){
    this.preventDefault
    iconSale.style.transform="rotate(-180deg)";
    if(SaleBtn.getAttribute("data-click")==0){
        HideMen()
        HideNew()
        HideBrands()
        HideClothing()
        HideDepartments()
        Hidekids()
        HideWomen()
        overlay.style.display="block"
        SaleCategorys.style.display="block";
        SaleBtn.setAttribute("data-click","1");
    }
    else{
        HideSale()
    }
}

function HideSale(){
    SaleCategorys.style.display="none"
    overlay.style.display="none"

    iconSale.style.transform="rotate(360deg)";
    SaleBtn.setAttribute("data-click","0");
}

function ShowClothing(){
    this.preventDefault
    iconClothing.style.transform="rotate(-180deg)";
    if(ClothingBtn.getAttribute("data-click")==0){
        HideMen()
        HideNew()
        HideBrands()
        HideDepartments()
        HideSale()
        Hidekids()
        HideWomen()
        overlay.style.display="block"
        ClothingCategorys.style.display="block";
        ClothingBtn.setAttribute("data-click","1");
    }
    else{
        HideClothing()
    }
}

function HideClothing(){
    ClothingCategorys.style.display="none"
    overlay.style.display="none"

    iconClothing.style.transform="rotate(360deg)";
    ClothingBtn.setAttribute("data-click","0");
}

function CloseAll(){
    HideMen()
    HideNew()
    HideBrands()
    HideClothing()
    HideDepartments()
    HideSale()
    Hidekids()
    HideWomen()
}

function zoom(){
    card.style.color="#035d59"
    card.style.backgroundColor="#c3f4aa"
    card.style.borderColor="#c3f4aa"
    var car=document.getElementsByClassName("fa-shopping-cart")[0]
    car.style.fontSize="23px";
}

function back(){
    card.style.color="#035d59"
    card.style.backgroundColor="#fff"
    card.style.borderColor="#a7e688"
    var car=document.getElementsByClassName("fa-shopping-cart")[0]
    car.style.fontSize="15px";
}

function ChangeBtnStyle(){
    btnSearch.style.backgroundColor="#b3d4fc"
    btnSearch.style.color="#0c042b"
}

function BackBtnStyle(){
    btnSearch.style.backgroundColor="#0c042b"
    btnSearch.style.color="#fff"

}

let i = 0,j=Advertis.length,Item;
TimeOfSetAdv=setInterval(function(){
    AdvertisSlider()
}, 2700);

function AdvertisSlider(){
    // if(i == 0) {
    //     Advertis[i].style.display = 'block';

    // } else if(i == Advertis.length ) {
    //     Advertis[i - 1].style.display = 'none';
    //     Advertis[0].style.display = 'block';
    //   i = 0;
    // } else {
    //     Advertis[i - 1].style.display = 'none';
    //     Advertis[i].style.display = 'block';
    // }
    Item=i%3
    if(Item==0){
        Advertis[2].style.display = 'none';
        Advertis[Item].style.display = 'block';

        ArrowRight.style.display="block"
        ArrowLeft.style.display="none"

    }else{
        if(Item==2){
            ArrowLeft.style.display="block"
            ArrowRight.style.display="none"
        }else{
            ArrowLeft.style.display="block"
            ArrowRight.style.display="block"
        }
        Advertis[Item-1].style.display = 'none';
        Advertis[Item].style.display = 'block';

    }
    i++;
    if(i==Advertis.length){
        i=0
    }
}

function AdvertisReversSlider(){
    Item=j%3
    if(Item==0){
        Advertis[Item].style.display = 'none';
        Advertis[2].style.display = 'block';
        ArrowLeft.style.display="block"
        ArrowRight.style.display="none"
    }else{
        if(Item==0){
            ArrowLeft.style.display="none"
            ArrowRight.style.display="block"
        }else{
            ArrowLeft.style.display="block"
            ArrowRight.style.display="block"
        }
        Advertis[Item].style.display = 'none';
        Advertis[Item - 1].style.display = 'block';
    }
    j--;
    if(j==0){
        j=Advertis.length
    }
}

function SlideLeft(){
    clearInterval(TimeOfSetAdv)
    for(let it of Advertis){
        it.style.display = 'none';
    }
    AdvertisSlider()
    TimeOfSetAdv=setInterval(AdvertisSlider,2700)
}

function SlideRight(){

    clearInterval(TimeOfSetAdv)
    for(let it of Advertis){
        it.style.display = 'none';
    }
    AdvertisReversSlider()
    TimeOfSetAdv=setInterval(AdvertisSlider,2700)
}

function SlidingStop(){
    console.log("Her Stop")
    clearInterval(TimeOfSetAdv)
}

function SlidingPlay(){
    console.log("Her Play")
    TimeOfSetAdv=setInterval(AdvertisSlider,2700)
}
