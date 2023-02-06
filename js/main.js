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
    for (let index = 0; index < main_menu.length; ++index){
        let element = document.createElement("button");
        console.log(main_menu[index])
        element.innerHTML = main_menu[index]['name']
        element.disabled = main_menu[index]['is_disabled'];
        element.setAttribute("type", "button")
        element.setAttribute("class", "btn btn m-1")
        element.setAttribute("onclick", main_menu[index]['onclick'])
        element.setAttribute("style", "color: white; height: 100px; width: 45%; background-color:" + main_menu[index]['color'])
        document.getElementById("main_container").append(element)
    }
};

const articulation = function(){
    empty_div()



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
    let back_button = document.createElement("div")
    back_button.setAttribute("class", "d-grid gap-2 mt-2")
    back_button.innerHTML = "<button class='my-2 btn btn-outline-warning btn-sm' onclick='main_menu_populate()'>BACK </button>"
    document.getElementById("main_container").append(back_button)
}

function certain_sound(sound){
    let entries = articulation_array[sound]['entries']
    console.log(entries)
    empty_div()
    let back_button = document.createElement("div")
    back_button.setAttribute("class", "d-grid gap-2 mb-5")
    back_button.innerHTML = "<button class='btn btn-outline-warning btn-sm' onclick='articulation()'>BACK</button>"
    document.getElementById("main_container").append(back_button)
    for (let index = 0; index < entries.length; ++index){
        let element = document.createElement("p");

        element.innerHTML = entries[index] + '<hr>'
        element.setAttribute("class", "lead text-warning")
        //element.setAttribute("style", "width: 40%")
        element.disabled = true;
        document.getElementById("main_container").append(element)
    }
    let back_button1 = document.createElement("div")
    back_button1.setAttribute("class", "d-grid gap-2 mt-2")
    back_button1.innerHTML = "<button class='my-2 btn btn-outline-warning btn-sm' onclick='main_menu_populate()'>BACK </button>"
    document.getElementById("main_container").append(back_button1)
}

empty_div = function (){
    const main = document.getElementById("main_container");
    main.innerHTML = ''
}


