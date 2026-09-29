function discount() {
    let price = document.getElementById("price").value;
    if (price >= 200) {

        if (price * 0.15 <= 100) {
            price = price - (price * 0.15);
            alert("السعر بعد الخصم " + price)
        } else {
            price = price - (price * 0.08);
            alert("السعر بعد الخصم " + price)
        }



    }else {
        alert(" السعر كما هو " + price)
    }
}
