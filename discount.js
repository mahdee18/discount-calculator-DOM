// Get 30% discount
document.getElementById('btn-discount').addEventListener('click', function () {
    const priceInput = document.getElementById('price-input')
    const priceInputString = priceInput.value;
    const inputPrice = parseFloat(priceInputString)
    const showInput = document.getElementById('input-amount')
    showInput.innerText = inputPrice;
    // Discount
    const discount = inputPrice * 0.3;
    const discountPrice = inputPrice - discount;
    const showDiscountPrice = document.getElementById('discount-price')
    showDiscountPrice.innerText = discountPrice;
})

// Get promo code
document.getElementById('btn-promo').addEventListener('click', function () {
    const couponInput = document.getElementById('promo-input')
    if (couponInput.value === 'DIS30') {
        const discountInput = document.getElementById('coupon-input')
        const discountString = discountInput.innerText;
        const discountPrice = parseFloat(discountString)

        // Discount
        const discount = discountPrice * 0.3;
        const couponDiscount = discountPrice - discount;
        const showDiscountPrice = document.getElementById('discount')
        showDiscountPrice.innerText = couponDiscount;
    }
    else if(couponInput.value === ''){
        const mainPrice = document.getElementById('coupon-input')
        const mainPriceString = mainPrice.innerText;
        const mainPriceStr = parseFloat(mainPriceString)
        const disPrice = document.getElementById('discount')
        mainPriceStr.innerText = disPrice
    }

})