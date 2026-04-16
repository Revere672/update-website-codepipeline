function load_style() {
    style = localStorage.getItem("style_number")
    checkbox = document.getElementById("switch")
    if (style == null) {
        style = "style1.css"
    }

    if (checkbox != null) {
        if (style == "style1.css") {
            checkbox.checked = false
        }
        else {
            checkbox.checked = true
        }
    }
    document.getElementById("css").setAttribute("href", style)
}

function change_style() {
    var checkbox = document.getElementById("switch")
    if (checkbox.checked) {
        // document.getElementById("css").setAttribute("href", "style2.css")
        localStorage.setItem("style_number", "style2.css")
        load_style()
    }
    else {
        // document.getElementById("css").setAttribute("href", "style1.css")
        localStorage.setItem("style_number", "style1.css")
        load_style()
    }
}

load_style()