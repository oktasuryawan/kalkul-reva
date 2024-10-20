function hitung(operator) {
    const angka1 = parseFloat(document.getElementById('angka1').value);
    const angka2 = parseFloat(document.getElementById('angka2').value);
    let result;

    if (isNaN(angka1) || isNaN(angka2)){
        hasil = `Input tidak valid`;
    }
    else{
    switch(operator) {
        case '+':
            hasil= angka1 + angka2;
            break;
        case '-':
            hasil= angka1 - angka2;
            break;
        case 'x':
           hasil = angka1 * angka2;
            break;
        case '/':
            hasil= angka2 !== 0? angka1 / angka2:`Tidak bisa dibagi 0`;
            break;
         default:
            hasil = 'Operasi tidak valid';
        }
    }
    document.getElementById('hasil').value = hasil;
}
