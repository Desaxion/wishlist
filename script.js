
const BASE = 140; // Base color multiplier for categories

let categories = {};

let activeCategories = [];

const xmark = '<svg xmlns="http://www.w3.org/2000/svg" class="category-x" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>'

const allItems = 
[    
    "Secret Santa",
    [
        // Title
        // Desc
        // Link
        // Image
        // avaliableInStore
        // Category
        // Price
        // Sale price (opt)
    [
            "The Fall of Gondolin - J.R.R. Tolkien",
            "Bok av Tolkien. Historier om vad som händer tusentals år innan Sagan om Ringen.",
            "https://www.adlibris.com/sv/bok/fall-of-gondolin-9780008503970",
            "https://www.adlibris.com/images/9780008503970/fall-of-gondolin.jpg",
            true,
            "Böcker",
            "114"
        ],
        [
            "Strumpor - Tre Kronor",
            "Strumpor för spel både på hemma och bortaplan med världens bästa hockeylag.",
            "https://trekronorshop.se/accessoarer-vrigt/96092-2-pack-socks-tre-kronor-home-away-yellow-navy",
            "https://images.neh.com/upload/test//high/TRE2535.jpg?v=1277557823",
            false,
            "Kläder",
            "149"
        ],
        [
            "Lego Nissan Skyline GT-R",
            "Cool legobil som jag länge velat ha, från filmen Fast & Furious.",
            "https://www.ahlens.se/produkter/barn/speed-champions-fast-furious-nissan-skyline-gt-r-r34-76917-a042b031-3368-47b3-a7ba-830d41636834?srsltid=AfmBOor0tpJ8kpLyptZAGQQw7em92iRAmSj4h3uYl8avhKWa3-PGYagOd0s",
            "https://res.cloudinary.com/dxxvmvvyj/image/upload/t_ahlens-transformations-bg-removed/c_pad,w_1170,h_1690/f_auto/q_auto/v1/products/bg_removed/65/83/29/65832916_1.jpg?_a=BAVAZGID0",
            true,
            "Prylar",
            "299",
            "225"
        ],
    [
            "MacKenzie Step Blade Guard Skridskoskydd",
            "Ordentliga skridskoskydd som går att gå i. Smidigare att använda än de skydd jag har på mina skridskor nu.",
            "https://www.xxl.se/mackenzie-step-blade-guard-24-25-skridskoskydd-vit/p/1233021_1_Style",
            "https://www.xxl.se/filespin/de081a09fceb4ebf8d7ff53c380d79eb?quality=75&bgcolor=efefef&resize=1200%2C1200",
            true,
            "Hockey",
            "119"
        ],
        [
            "Bidrag till Stadsmissionen",
            "Vissa har det inte lika bra som vi, därför får ni gärna ge ett bidrag till Göteborgs Stadsmission så att lite julglädje kan spridas till de som inte har råd med det själva.",
            "https://www.stadsmissionen.org/ge-stod/ge-direkt/",
            "https://www.stadsmissionen.org/app/uploads/Utvald_bild_ny-logga-750-%C3%97-400-px.png",
            false,
            "Övrigt",
            "Valfritt belopp"
        ]
    ],
    "Julönskelista",
    [
        [
            "Vi och dom - Bengt Jangefeldt",
            "En bok som beskriver det geopolitiska läget utifrån ett ryskt perspektiv, för att lättare sätta deras beslut och handlingar i ett sammanhang.",
            "https://www.adlibris.com/sv/bok/vi-och-dom-bengt-jangfeldt-om-ryssland-som-ide-9789146240327",
            "https://www.adlibris.com/images/9789146240327/vi-och-dom-bengt-jangfeldt-om-ryssland-som-ide.jpg",
            true,
            "Böcker",
            "216"
        ],
        [
            "Kaffekvarn - Modern House",
            "En kaffekvarn att mala kaffebönor i, för ett färskare kaffe på morgonen! Man måste såklart inte mala allt kaffe här, men kan vara kul att testa!",
            "https://www.cervera.se/produkt/modern-house-lundi-kaffekvarn-12-cm?gad_source=1&gad_campaignid=21180807259&gclid=CjwKCAiA3L_JBhAlEiwAlcWO53Ciosrlm79r7quHdlL-6w_eFcgbjpgddJUOT3n3fkI_bM_X5d-C7BoCgh8QAvD_BwE",
            "https://cervera.cdn-norce.tech/7a4a4d43-8fd1-493e-8697-f5ada610e761.jpeg?mode=Pad&quality=75&format=webp&width=640&height=640",
            true,
            "Prylar",
            "499",
            "299"
        ],
        [
            "D'Addario Phosphor Bronze EJ16 12-53 Gitarrsträngar",
            "Stålsträngar för min gitarr med en varm och klar ton.",
            "https://www.mug.se/collections/alla-akustiska-strangar/products/ej16-12-53-phosphor-bronze",
            "https://www.mug.se/cdn/shop/files/preview2_1024x1024@2x.jpg?v=1764702511",
            true,
            "Prylar",
            "139",
        ],
        [
            "Patagonia Retro Fleece Väst",
            "Fleeceväst från patagonia, helst i färgen New Navy w/ Sunken Blue",
            "https://eu.patagonia.com/se/en/product/mens-retro-pile-fleece-vest/22821.html?dwvar_22821_color=NNSU&_gl=1*kz9bzs*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA3L_JBhAlEiwAlcWO58_jDibWAciQKaKiSou5AFR9Tfuyo1tmD8PQzjTHBkZn_-5nBLnl7RoCY7AQAvD_BwE&gclsrc=aw.ds",
            "https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw4af74f70/images/hi-res/22821_NNSU.jpg?sw=1400&sh=1400&sfrm=png&q=90&bgcolor=f3f4ef",
            false,
            "Kläder",
            "1399",
        ],
        [
            "Secret Hitler",
            "Ett brädspel som går ut på att i hemlighet rösta igenom sina egna polycier, och hindra fascisterna från att få igenom sin politik.",
            "https://www.webhallen.com/se/product/358442-Secret-Hitler-Eng?utm_source=google&utm_medium=cpc&utm_campaign=Pmax%20%7C%20Price_Under_3000&gad_source=1&gad_campaignid=21025599808&gclid=CjwKCAiA3L_JBhAlEiwAlcWO5_Is7a8T3_wKbLMJSW-jia2AiM1RskkGGgnyfXVHuzLR0pi0AMRvTRoCJZ8QAvD_BwE",
            "https://www.webhallen.com/images/screenshot/252802?trim",
            true,
            "Prylar",
            "699",
        ],
        [
”Bidrag till hockeyutrustning”,
”Jag vill gärna köpa egna hockeybyxor/damasker/klubba/axelskydd, men detta kan kosta en del. Önskar mig därför ett bidrag till utrustning. Länken nedan leder inte till något.”,
window.location.href,
”https://www.foretagshockey.com/wp-content/uploads/2020/09/is-hockey-utrustning.jpg”,
false,
”Hockey”,
”Valfritt belopp”
],
[
”JAS 39 Gripen A modellbyggsats”,
”En byggsats för en plastmodell av JAS Gripen, mysigt att pyssla med på jullovet!”,
”https://leksaksbilar.se/sv/products/jas-39-a-gripen-plastbyggsats-2638-italeri-148?gad_source=1&gad_campaignid=19688127772&gclid=Cj0KCQiA_8TJBhDNARIsAPX5qxSUzGcpcBsJZuOGB333HE9R3d9FbFfTsdb2jOXIbA8xa4lyp3gOW24aApQ5EALw_wcB”,
”https://d3dnwnveix5428.cloudfront.net/eyJrZXkiOiJzdG9yZV9mNmVlMWY5ZS03Zjc0LTQwYWQtODg3MC03YmVhMjA2ODE1MTBcL2ltYWdlc1wvaDZrNDNmRnd0a3FCVXBJckxlOGNBTXJiMHl3TEZHaXdUTkxhN0t2Vi53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDI0LCJoZWlnaHQiOjEwMjQsImZpdCI6Imluc2lkZSJ9fX0=”,
false,
”Prylar”,
”349”
]
    ]
    
];

function filterCategories(cat){
    let a = document.getElementById("active-categories");
    //let i = document.getElementById("items");
    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        isActive = false;
        for(let x = 0; x < activeCategories.length; x++){
            if(item.classList.contains(activeCategories[x])){
                item.style.display = 'flex';
                isActive = true;
                break;
            } 
        }
        if(!isActive){
            item.style.display = "none";
        }
        if(activeCategories.length == 0){
            item.style.display = "flex";
        }
    })

    if(activeCategories.length > 0){
        a.style.padding = "0.5rem";
    } else {
        a.style.padding = "0rem"
    }
}



function setSelectedPage(id) {
    //console.log(id)
    let hrefCut = window.location.href.split("?=");
    if(hrefCut.length > 1 && hrefCut[1] != id){
        window.history.pushState({},"","?=" + id);
    } else if(hrefCut.length < 2 ){
        window.history.pushState({},"","?=" + id);
    }


    let allPages = document.querySelectorAll(".page");
    let titles = document.querySelectorAll(".page-title");
    //selected = document.getElementById(id);
    for(let i = 0; i < allPages.length; i++){
        //console.log(allPages[i].querySelector(".item").id)
        //console.log(allPages[i].id != id);

        if(allPages[i].id != id){
            if(allPages[i].classList.contains("selected")){
                allPages[i].classList.remove("selected");
            }
            if(titles[i].classList.contains("selected")){
                titles[i].classList.remove("selected");
            }
        }else {
            allPages[i].classList.add("selected");
            titles[i].classList.add("selected")
        }

    }
}

function removeCategory(cat, element){
    let c = document.getElementById("categories");
    activeCategories.splice(activeCategories.indexOf("category-" + cat),1);
    let newlyAddedCategory = document.createElement("div");
    newlyAddedCategory.innerHTML = element.innerText;
    newlyAddedCategory.classList.add("category");
    newlyAddedCategory.classList.add("highish-weight");
    newlyAddedCategory.classList.add("category-" + cat);
    newlyAddedCategory.style.backgroundColor = categories[cat].toString();
    newlyAddedCategory.addEventListener('click', function(){addCategory(cat,newlyAddedCategory)})
    c.append(newlyAddedCategory);
    element.remove()
    filterCategories();
}

function addCategory(cat,element){
    let a = document.getElementById("active-categories");


    let newlyAddedCategory = document.createElement("div");
    newlyAddedCategory.innerHTML = element.innerText + xmark ;
    newlyAddedCategory.classList.add("category");
    newlyAddedCategory.classList.add("highish-weight");
    newlyAddedCategory.classList.add("category-" + cat);
    newlyAddedCategory.style.backgroundColor = categories[cat].toString();
    a.append(newlyAddedCategory);
    activeCategories.push("category-" + cat);

    element.remove()
    
    let pages = 

    newlyAddedCategory.addEventListener('click', function(){removeCategory(cat,newlyAddedCategory)})

    // Add eventlistener to the active category
    filterCategories()
}

function setUpCategories() {
    const categoryAnchor = document.getElementById("categories")
    for (const [key, value] of Object.entries(categories)) {
        let categoryElement = document.createElement('div');
        categoryElement.textContent = key.toString()[0].toUpperCase() + key.toString().slice(1,key.toString().length);
        categoryElement.classList.add("category");
        categoryElement.classList.add("highish-weight");
        categoryElement.classList.add("category-" + key);
        categoryElement.style.backgroundColor = categories[key].toString();
        categoryAnchor.append(categoryElement);
        categoryElement.addEventListener('click', function(){addCategory(key,categoryElement)});

        
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    //const anchors = document.querySelectorAll(".items");
    const pages = document.getElementById("pages");
    const pagesTitles = document.getElementById("pages-titles");
    const filterHeader = document.getElementById("filter-header");
    const filterContainer = document.getElementById("filter-container");
    const filterChevron = document.getElementById("filter-arrow");
    let filterClosed = true;
    filterHeader.onclick = function(){
        filterClosed = !filterClosed;
        if(filterClosed){
            filterContainer.classList.add("closed");
            filterChevron.classList.add("closed");
        } else {
            if(filterContainer.classList.contains("closed")){
                filterContainer.classList.remove("closed");
            }
            if(filterChevron.classList.contains("closed")){
                filterChevron.classList.remove("closed");
            }
        }
    };
 // Step over the names
 for(let k = 0; k < allItems.length; k=k+2){

    let items = allItems[k + 1];
    let page = document.createElement('div');
    page.classList.add("page");
    let anchor = document.createElement('div');
    anchor.classList.add("items");
    page.id = allItems[k];
    let pageTitle = document.createElement('div');
    pageTitle.classList.add("page-title")
    pageTitle.classList.add("high-weight");
    pageTitle.classList.add("largeish-text")
    pageTitle.innerText = allItems[k];
    pageTitle.onclick = function(){ setSelectedPage(page.id);}
    pagesTitles.append(pageTitle);
    for(let i = 0; i < items.length; i++){
        //let anchor = anchors[k];

        // MAybe add dynamic page selecting

        let item = items[i];
        let img = document.createElement("img");
        img.src = item[3];
        //img.onload = function() {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add("item");
            itemDiv.classList.add("category-" + item[5].toLowerCase());

            let imageFrame = document.createElement('div');
            imageFrame.classList.add("image-frame");
            imageFrame.append(img);
            itemDiv.append(imageFrame);
            

            let title = document.createElement("h3");
            title.textContent = item[0];
            title.classList.add("item-title");
            itemDiv.append(title);

            let desc = document.createElement("h3");
            desc.textContent = item[1];
            desc.classList.add("low-weight");
            desc.classList.add("smallish-text");
            itemDiv.append(desc);

            let priceDiv = document.createElement("div");
            priceDiv.classList.add("price-container");
            let price = document.createElement("h3");
            price.textContent = item[6] + " kr"
            price.classList.add("item-price");

            

            if (item.length > 7){
                let salePrice = document.createElement("h3");
                salePrice.textContent = item[7] + " kr"; // Maybe add regex to filter numbers
                salePrice.classList.add("sale-price")
                price.classList.add("old-price");
                priceDiv.append(salePrice);
            }
            
            priceDiv.append(price);

            itemDiv.append(priceDiv);

            let buttonDiv = document.createElement("div");
            buttonDiv.classList.add("button-container");

            let buyButton = document.createElement("a");
            let buyButtonContent = document.createElement("div");
            buyButton.href = item[2];
            buyButtonContent.classList.add("buy-button-content");
            buyButton.classList.add("buy-button");
            buyButtonContent.textContent = "Köp här";
            buyButton.append(buyButtonContent);

            buttonDiv.append(buyButton)
            if(item[4]){
                let linkSubtext = document.createElement("div");
                linkSubtext.classList.add("link-subtext")
                linkSubtext.textContent = "(eller i butik)"
                linkSubtext.classList.add("small-text");
                buttonDiv.append(linkSubtext);
            }

            let category = document.createElement("div");
            category.classList.add("item-category");

            let key = item[5].toLowerCase();
            if(!(key in categories)){
                //console.log(key)
                categories[key] = "rgb(" + BASE*Math.random()+ "," + BASE*Math.random()+ "," + BASE*Math.random() + ")";
            }
                
            
            let tinyCategory = document.createElement("div");
            tinyCategory.classList.add("tiny-category");
            tinyCategory.textContent = key.toString()[0].toUpperCase() + key.toString().slice(1,key.toString().length);
            tinyCategory.style.backgroundColor = categories[key].toString();

            itemDiv.append(buttonDiv);
            itemDiv.append(tinyCategory);
            
            anchor.append(itemDiv);

            //console.log(i, items.length);


        //}
    }

    page.append(anchor);
    pages.append(page);
    if(k==0){

        requestAnimationFrame(()=>{
            let hrefCut = window.location.href.split("?=");
            if(hrefCut.length < 2){
                setSelectedPage(allItems[0]);
            } else {
                setSelectedPage(decodeURI(hrefCut[1]));
            }

        });
    }
};

    setUpCategories();


// Set selected page after all pages is setup and done. Callback maybe?

});
