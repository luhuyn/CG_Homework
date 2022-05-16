function calYear() {
    let year = document.getElementById("year").value
    let lunaryear = "Lunar Year: "
    let can = year % 10
    let chi = year % 12
    switch(can) {
        case 0: {
            lunaryear += "Canh "
        }
        break
        case 1: {
            lunaryear += "Tân "
        }
        break
        case 2: {
            lunaryear += "Nhâm "
        }
        break
        case 3: {
            lunaryear += "Quý "
        }
        break
        case 4: {
            lunaryear += "Giáp "
        }
        break
        case 5: {
            lunaryear += "Ất "
        }
        break
        case 6: {
            lunaryear += "Bính "
        }
        break
        case 7: {
            lunaryear += "Đinh "
        }
        break
        case 8: {
            lunaryear += "Mậu "
        }
        break
        case 9: {
            lunaryear += "Kỷ "
        }
        break
    }

    switch(chi) {
        case 0: {
            lunaryear += "Thân"
        }
        break
        case 1: {
            lunaryear += "Dậu"
        }
        break
        case 2: {
            lunaryear += "Tuất"
        }
        break
        case 3: {
            lunaryear += "Hợi"
        }
        break
        case 4: {
            lunaryear += "Tý"
        }
        break
        case 5: {
            lunaryear += "Sửu"
        }
        break
        case 6: {
            lunaryear += "Dần"
        }
        break
        case 7: {
            lunaryear += "Mão"
        }
        break
        case 8: {
            lunaryear += "Thìn"
        }
        break
        case 9: {
            lunaryear += "Tị"
        }
        break
        case 10: {
            lunaryear += "Ngọ"
        }
        break
        case 11: {
            lunaryear += "Mùi"
        }
        break
    }
    document.getElementById("result").innerHTML = lunaryear
}