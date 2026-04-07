
const BASE = 140; // Base color multiplier for categories

let categories = {};

let activeCategories = [];

const xmark = '<svg xmlns="http://www.w3.org/2000/svg" class="category-x" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>'

const allItems =
[
    "Önskelista",
    [
        [
            "Marinblå half zip tröja",
            "Fin tröja att ha hemma och på jobb! Gärna storlek S.",
            "https://johnhenric.com/se/navy-blue-half-zip-sweater-regular-fit-a03154-06?gad_source=1&gad_campaignid=20989013020&gclid=CjwKCAjwyYPOBhBxEiwAgpT8P4AYadEgmvGt6RVqu9upMOsu5Xo4yJuRvTZX0P0aMOHy4RG8G7Ll1xoCjooQAvD_BwE",
            "https://imgproxy.johnhenric.com/preset:sharp/resize:fit:1250/gravity:nowe/quality:80/aHR0cHM6Ly9qb2huaGVucmljLmNlbnRyYWNkbi5uZXQvY2xpZW50L2R5bmFtaWMvaW1hZ2VzLzM0NTdfMTI5NTRlOGVjNi1hMDMxNTQtMDYtNi1vcmlnaW5hbC5qcGc=",
            true,
            "Kläder",
            "899"

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
            "CCM Halsskydd",
            "Halsskydd för hockeyspel.",
            "https://www.xxl.se/ccm-pro-neck-guard-26-27-halsskydd-svart/p/1105049_1_Style?",
            "https://cdn.xxl.se/filespin/8049fbdaf68a4066a84a9537062a735d?quality=75&bgcolor=efefef&resize=640%2C640",
            true,
            "Hockey",
            "399",
        ],
        [
            "Läslampa",
            "Uppladdningsbar läslampa med klämfäste.",
            "https://www.adlibris.com/sv/produkt/laslampa-uppladdningsbar-med-klamfaste-led-bla-47763251?article=P47763251",
            "https://media.adlibris.com/images/d9ccb1b1-a00a-4171-9334-bc0cb9811ce4/laslampa-uppladdningsbar-med-klamfaste-led-bla.jpg?w=2048",
            false,
            "Prylar",
            "199",
        ],
        [
            "Fotogendriven stormlykta",
            "Fotogendriven stormlykta för friluftsliv eller för ljus vid strömavbrott. Färg/märke spelar ingen roll så länge den är någorlunda rejäl! (Det behöver inte ens vara från denna specifika affären!)",
            "https://www.bagarenochkocken.se/p/feuerhand-baby-special-276-fotogenlykta-zink_79397/",
            "https://media.enad.io/20dccf88-6cf1-4912-a8a3-40dbcf6e8e0f/79397_1.jpg?width=1200",
            false,
            "Beredskap",
            "449",
            "499"
        ],
        [
            "Vattendunkar 25L",
            "25-litersdunkar för krisberedskap. Gärna 2 stycken! Spelar ingen roll vilket märke eller affär så länge de är rejäla!",
            "https://www.bauhaus.se/vattendunk-25l?channable=06ff20696400313037313631303f&srsltid=AfmBOorobxGMtgnbQP9dRfnxrr2VJNLEUu2Ji7B2gaVnU3QC9mqiapvIS1Y",
            "https://www.bauhaus.se/media/catalog/product/cache/3e7b8fe327b7b9553ccec016d3f9a411/4/6/46834573-6dbb-4961-9393-3789bcc706a4.jpg",
            true,
            "Beredskap",
            "179",
        ],

[
            "Träningskeps Under Armour",
            "Träningskeps från Under Armour med justerbar storlek och bra vädring, gärna svart!",
            "https://www.hockeystore.se/sv/articles/1.489.73040/under-armour-keps-launch-adjustable?gad_source=1&gad_campaignid=17178704124&gbraid=0AAAAADANGptp2Mp7watTpfjWDJgG9ff7X&gclid=Cj0KCQjwkMjOBhC5ARIsADIdb3fpth1Kzy28WnfO4ji881c9grUEOcraZ9U95amoRNo_KO3uiGb9F34aAikkEALw_wcB",
            "https://03.cdn37.se/3OL/images/2.609287/under-armour-keps-launch-adjustable.jpeg",
            false,
            "Kläder",
            "209", 
"349"
        ],

[
            "Knivslip",
            "En knivslip från Anders och Petter så att vi kan vässa våra köksknivar!",
            "https://www.cervera.se/produkt/anders-petter-classic-knivslip-21x7-5-cm-svart-rostfritt-stal",
            "https://cervera.cdn-norce.tech/798ea256-2370-4fbd-a075-a9aa17c5011b.jpeg?mode=Pad&quality=75&format=webp&width=496&height=496",
            true,
            "Prylar",
            "229", 
"183"
        ],

[
            "Apple Pencil",
            "En penna till vår iPad så att man kan rita/skriva på ipaden, passar bra för digitala teckningar och anteckningar. Länken leder till en begagnad variant.",
            "https://www.refurbed.se/p/apple-pencil-2-gen/?co=se&lang=sv&utm_cluster=gradeA&utm_content=apple-pencil-2-gen&utm_group=apple-pencil-2-gen&ad_price=835.00&utm_campaign=SE%20-%20PMax%20-%20Index&utm_medium=cpc&utm_source=google&gad_source=1&gad_campaignid=20476406562&gbraid=0AAAAApd6hTvfHEJrMWcmR7du_9sVTZS-V&gclid=Cj0KCQjwkMjOBhC5ARIsADIdb3eQCa1P0b_-cKgyI5Ga7iQ3QjcYh9Mfu61z7CRjk3LZC3M4fQXJMzgaAih5EALw_wcB",
            "https://files.refurbed.com/pi/apple-pencil-2-gen-1690279641.jpg",
            false,
            "Prylar",
            "835", 
        ],

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
