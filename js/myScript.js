function hitung(operator) {
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);

    switch (operator) {
        case 'btn_tambah':
            if (isNaN(a1) || isNaN(a2)){
                alert("Please type a number!!")
            } else {
                var total = a1 + a2; 
                frm.hasil.value = total; //penempatan hasil 
            }
            break;
        case 'btn_kurang':
            if (isNaN(a1) || isNaN(a2)){
                alert("Please type a number!!")
            } else {
                var total = a1 - a2; 
                frm.hasil.value = total; //penempatan hasil 
            }
            break;
        case 'btn_bagi':
            if (isNaN(a1) || isNaN(a2)){
                alert("Please type a number!!")
            } else {
                var total = a1 / a2; 
                frm.hasil.value = total; //penempatan hasil 
            }
            break;
        case 'btn_kali':
            if (isNaN(a1) || isNaN(a2)){
                alert("Please type a number!!")
            } else {
                var total = a1 * a2; 
                frm.hasil.value = total; //penempatan hasil 
            }
            break;
        case 'btn_pangkat':
            if (isNaN(a1) || isNaN(a2)){
                alert("Please type a number!!")
            } else {
                total = Math.pow(a1, a2); 
                frm.hasil.value = total; //penempatan hasil 
            }
            break;
    
        default:
            break;
    }

}
