const add_space = function (string){
    if (string === ''){
        return "&nbsp"
    } else {
        return "[" + string + "]"
    }
}



const main_menu_populate = function () {
    const main = document.getElementById("main_container");
    main.innerHTML = ''
    main.setAttribute("class", "text-center")
    for (let index = 0; index < main_menu.length; ++index){
        let element = document.createElement("button");
        element.innerHTML = '<span class="main_menu">' + main_menu[index]['name'] + '</span>'
        element.disabled = main_menu[index]['is_disabled'];
        element.setAttribute("type", "button")
        element.setAttribute("class", "btn m-1 border border-0")
        element.setAttribute("onclick", main_menu[index]['onclick'])
        element.setAttribute("style", "color: white; height: 50px; width: 150px; background: linear-gradient(to bottom right, " + gradients_array[index][0] + ", " + gradients_array[index][1] + ")")
        //element.style.backgroundImage = "url(./pics/" + index + ".png)"
        //element.style.backgroundSize = "150px 70px"
        document.getElementById("main_container").append(element)
    }
};

const articulation = function(){
    empty_div()
    back_button("main_menu_populate")
    for (let index = 0; index < articulation_array.length; ++index){
        let element_container = document.createElement("button");
        console.log(articulation_array[index]['details'])
        let el_type = "<div><h4>" + articulation_array[index]['type'] + "</h4></div>"
        let el__sound = "<small>" + add_space(articulation_array[index]['sound']) + "</small>"
        let el_details = "<small>" + add_space(articulation_array[index]['details']) + "</small>"
        element_container.innerHTML = el_details + el_type + el__sound
        element_container.setAttribute("onclick", "certain_sound('"+index+"')")
        element_container.setAttribute("type", "button")
        element_container.setAttribute("class", "btn btn-sm btn-outline-warning m-1")
        element_container.setAttribute("style", "width: 30%")
        document.getElementById("main_container").append(element_container)
    }
    back_button("main_menu_populate")
}

const vowels = function () {
    empty_div()
    back_button("main_menu_populate")
    for (let index = 0; index < vowels_array.length; ++index) {
        let element_container = document.createElement("button");
        element_container.innerHTML = "<div>" + vowels_array[index]['type'] + "</div>"
        element_container.setAttribute("onclick", "certain_vowel('" + index + "')")
        element_container.setAttribute("type", "button")
        element_container.setAttribute("class", "btn btn-outline-warning m-1")
        element_container.setAttribute("style", "width: 30%")
        document.getElementById("main_container").append(element_container)
    }

    back_button("main_menu_populate")
}



function certain_sound(sound){
    let entries = articulation_array[sound]['entries']
    console.log(entries)
    empty_div()
    back_button("articulation")

    for (let index = 0; index < entries.length; ++index){
        let element = document.createElement("p");
        element.innerHTML = entries[index] + '<hr>'
        element.setAttribute("class", "px-1 lead text-warning")
        element.disabled = true;
        document.getElementById("main_container").append(element)
        }

    let back_button1 = document.createElement("div")
    back_button("articulation")
}

function certain_vowel(vowel){
    let entries = vowels_array[vowel]['entries']
    const main = document.getElementById("main_container");
    console.log(entries)
    empty_div()
    back_button("vowels")
    for (let index = 0; index < entries.length; ++index){
        let element = document.createElement("p");
        let el_hr = document.createElement("hr")
        el_hr.setAttribute("class", "m-0 text-warning")
        element.innerHTML = entries[index]
        element.setAttribute("class", "mx-2 my-0 lead text-warning")
        element.disabled = true;
        document.getElementById("main_container").append(element)
        document.getElementById("main_container").append(el_hr)
    }
    let back_button1 = document.createElement("div")
    back_button("vowels")
}

function proverbs(){
    empty_div()
    back_button("main_menu_populate")
    for (let index = 0; index < proverbs_array.length; ++index) {
        let element_container = document.createElement("div");
        element_container.innerHTML = "<div class='card-body'>" +
            "<h5 class=\"card-text\">" +proverbs_array[index]['proverb'] + "</h5><hr>" +
            "<p>"+proverbs_array[index]['meaning']+"</p>" +
            "</div>"
        element_container.setAttribute("class", "card text-bg-dark mb-3")
        document.getElementById("main_container").append(element_container)
    }
}

function idioms(){
    empty_div()
    back_button("main_menu_populate")
    for (let index = 0; index < idioms_array.length; ++index) {
        let element_container = document.createElement("div");
        element_container.innerHTML = "<div class='card-body'>" +
            "<h5 class=\"card-text\">" + idioms_array[index]['idiom'] + "</h5><hr>" +
            "<p>"+idioms_array[index]['meaning']+"</p>" +
            "</div>"
        element_container.setAttribute("class", "card text-bg-dark mb-3")
        document.getElementById("main_container").append(element_container)
    }
}

function emotions(){
    empty_div()
    back_button("main_menu_populate")
    for (let index = 0; index < emotions_array.length; ++index) {
        let element_container = document.createElement("div");
        let emotions = ""
        for (let emo = 0; emo < emotions_array[index]['entries'].length; ++emo) {
            emotions = emotions + '<p>' + emotions_array[index]['entries'][emo] + '</p>'
        }
        element_container.innerHTML = "<div class='card-body'>" +
            "<h5 class=\"card-text\">" + emotions_array[index]['emotion'] + "</h5><hr>" +
            emotions +
            "</div>"
        element_container.setAttribute("class", "card text-bg-dark mb-3")
        document.getElementById("main_container").append(element_container)
    }
    back_button("main_menu_populate")
}

function sentences(){
    empty_div()
    back_button("main_menu_populate")
    for (let index = 0; index < sentences_array.length; ++index) {
        let element_container = document.createElement("div");
        element_container.innerHTML = "<div class='card-body'>" +
            "<p class=\"card-text\">" + sentences_array[index] + "</p></div>"
        element_container.s
        etAttribute("class", "card text-bg-dark mb-3")
        document.getElementById("main_container").append(element_container)
    }
    back_button("main_menu_populate")
}

function synonyms(){
    empty_div()
    back_button("main_menu_populate")
    for (let index = 0; index < synonyms_array.length; ++index) {
        let element_container = document.createElement("div");
        element_container.innerHTML = "<div class='card-body'>" +
            "<p class=\"card-text\">" + synonyms_array[index] + "</p></div>"
        element_container.setAttribute("class", "card text-bg-dark mb-3")
        document.getElementById("main_container").append(element_container)
    }
    back_button("main_menu_populate")
}

function metaphors(){
    empty_div()
    back_button("main_menu_populate")
    for (let index = 0; index < metaphors_array.length; ++index) {
        let element_container = document.createElement("div");
        element_container.innerHTML = "<div class='card-body'>" +
            "<p class=\"card-text\">" + metaphors_array[index] + "</p></div>"
        element_container.setAttribute("class", "card text-bg-dark mb-3")
        document.getElementById("main_container").append(element_container)
    }
    back_button("main_menu_populate")
}

back_button = function (where){
    let back_button = document.createElement("div")
    back_button.setAttribute("class", "my-3")
    back_button.innerHTML = "<button class='btn btn-outline-secondary' onclick='"+ where + "()'><i class=\"bi bi-backspace-fill\"></i> BACK</button>"

    document.getElementById("main_container").append(back_button)
}

empty_div = function (){
    const main = document.getElementById("main_container");
    main.removeAttribute("class")
    main.innerHTML = ''
    window.scrollTo(0, 0);
}


