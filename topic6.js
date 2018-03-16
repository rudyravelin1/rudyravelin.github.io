function buildPage() {
    
    var heading = document.createElement("h2");
    var headingtext = document.createTextNode("Visitors are Welcome!!!");
    heading.appendChild(headingtext);
    document.body.appendChild(heading);
    
    var heading2 = document.createElement("h1");
    var headingtext2 = document.createTextNode("DOM Manipulation! Just a simple page");
    heading2.appendChild(headingtext2);
    document.body.appendChild(heading2);
    
    var image = document.createElement("img");
    image.setAttribute("src", "http://flagpictures.org/downloads/print/haiti2.jpg");
    image.setAttribute("width", "50%");
    image.setAttribute("height", "25%");
    document.body.appendChild(image);
    
    var divParent = document.createElement("div");
    divParent.setAttribute("id", "parent");
    document.body.append(divParent);
    
    var paragraph1 = document.createElement("p");
    paragraph1.setAttribute("id", "p1");
    var text1 = document.createTextNode("The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.");
    paragraph1.appendChild(text1);
    divParent.appendChild(paragraph1);
    
    var paragraph2 = document.createElement("p");
    paragraph2.setAttribute("id", "p2");
    var text2 = document.createTextNode("With the Document Object Model, programmers can build documents, navigate their structure, and add, modify, or delete elements and content. Anything found in an HTML or XML document can be accessed, changed, deleted, or added using the Document Object Model, with a few exceptions - in particular, the DOM interfaces for the XML internal and external subsets have not yet been specified.");
    paragraph2.appendChild(text2);
    divParent.appendChild(paragraph2);
    
    var paragraph3 = document.createElement("p");
    paragraph3.setAttribute("id", "p3")
    var text3 = document.createTextNode("Duis venenatis semper diam in efficitur. Nullam lorem felis, venenatis vel laoreet et, vestibulum nec urna. Ut finibus aliquet lorem sed aliquam. Nullam eu justo lacus. Sed vel rhoncus turpis. Quisque faucibus libero lorem. Cras rhoncus dignissim lacus id imperdiet. Morbi nec convallis ipsum, ac pharetra felis. Mauris ut dui placerat dui tempor scelerisque nec id risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi posuere vitae odio at auctor. Integer eget auctor nunc. Quisque fringilla justo at risus fringilla, a rhoncus dui pulvinar. Nulla semper enim vitae ligula consequat, placerat consectetur quam iaculis. Curabitur ut est tellus.");
    paragraph3.appendChild(text3);
    divParent.appendChild(paragraph3);
    
    var divButton = document.createElement("div");
    divButton.setAttribute("class", "button-container");
    document.body.appendChild(divButton);
    
    var removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("onclick", "removeElement()");
    var buttonText = document.createTextNode("Remove Element");
    removeButton.appendChild(buttonText);
    divButton.appendChild(removeButton);
    
    var insertButton = document.createElement("button");
    insertButton.setAttribute("type", "button");
    insertButton.setAttribute("onclick", "insertElement()");
    var buttonText2 = document.createTextNode("Insert Element");
    insertButton.appendChild(buttonText2);
    divButton.appendChild(insertButton);
    
    var resetButton = document.createElement("button");
    resetButton.setAttribute("type", "button");
    resetButton.setAttribute("onclick", "location.reload()");
    var buttonText3 = document.createTextNode("Reset");
    resetButton.appendChild(buttonText3);
    divButton.appendChild(resetButton);
    
    var homeButton = document.createElement("button");
    homeButton.setAttribute("type", "button");
    homeButton.setAttribute("onclick", "window.location.href='topics.html'");
    var buttonText4 = document.createTextNode("Home");
    homeButton.appendChild(buttonText4);
    divButton.appendChild(homeButton);
}

function removeElement() {
    var parent = document.getElementById("parent");
    var child = document.getElementById("p3");
    parent.removeChild(child);   
}

function insertElement() {
    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", "p4");
    var text = document.createTextNode("Thank you for insert me!!!");
    paragraph.appendChild(text);
    
    var parent = document.getElementById("parent");
    var child = document.getElementById("p2");
    parent.insertBefore(paragraph, child);
}