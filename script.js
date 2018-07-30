let companies = [
    {
        name : "Adidas",
        founded : "Founded, August 1949 as Adidas",
        readMore : "https://en.wikipedia.org/wiki/Adidas",
        imgUrl : "adidas2.jpg",
        about : "Adidas, designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world,"

    },
    {
        name : "Nike, Inc",
        founded : "Founded, January 25, 1964",
        readMore : "https://en.wikipedia.org/wiki/Nike,_Inc.",
        imgUrl : "nike.png",
        about : "Nike is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services."
    },
    {
        name : "Intel",
        founded : "Founded, July 18, 1968",
        readMore : "https://en.wikipedia.org/wiki/Intel",
        imgUrl : "intel.jpg",
        about : "Intel is an American multinational corporation and technology company "
    },
    {
        name : "Samsung",
        founded : "Founded, 1 March 1938",
        readMore : "https://en.wikipedia.org/wiki/Samsung",
        imgUrl : "samsung.png",
        about : "Samsung was, from 1938 it was the group diversified into areas including food processing, textiles, insurance, securities and retail. Samsung entered the electronics industry in the late 1960s. "
    },
    {
        name : "Microsoft",
        founded : "Founded, April 4, 1975",
        readMore : "https://en.wikipedia.org/wiki/Microsoft",
        imgUrl : "microsoft.jpg",
        about : "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports and sells computer software, "
    },{
        name : "IBM",
        founded : "Founded, June 16, 1911",
        readMore : "https://en.wikipedia.org/wiki/IBM",
        imgUrl : "ibm.jpg",
        about : "The International Business Machines Corporation (IBM) is an American multinational technology company, IBM manufactures and markets computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology "
    },{
        name : "Giorgio Armani",
        founded : "Founded, 1975.",
        readMore : "https://en.wikipedia.org/wiki/Armani",
        imgUrl : "armani.png",
        about : "Giorgio Armani is an Italian fashion house founded by Giorgio Armani which designs, manufactures, distributes and retails haute couture, ready-to-wear, leather goods, shoes, watches, jewelry, accessories, eyewear, cosmetics and home interiors. "
    },
]
function initialize(){
    let companiesGroupEl = document.querySelector("#companies-list");
    for(let i = 0 ; i < companies.length; i++){
        companiesGroupEl.innerHTML += `
        <div class="img-div" 
            style="background-image: url('images/${companies[i].imgUrl}')" onclick="changeComp(${i})">
            <p class="company-text" > ${companies[i].name} </p>
        </div>
        

        `
    }
}
function changeComp(compIndex){
    document.querySelector("#company-name").innerHTML = companies[compIndex].name;
    document.querySelector("#company-dis").innerHTML = companies[compIndex].founded;
    document.querySelector("#company-info").innerHTML = companies[compIndex].about;
    document.querySelector("#company-img").style["background-image"] = `url(images/${companies[compIndex].imgUrl})`;
    document.querySelector("#company-link a").href = companies[compIndex].readMore;
    
    
    
}