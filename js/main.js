document.addEventListener('DOMContentLoaded', function(){
    const shareBtn1 = document.querySelector('.share-btn');
    const shareBtn2 = document.querySelector('.share-btn2');
    const authorBox = document.querySelector('.author-box');
    const popup = document.querySelector('.popup')


    const showPopup = () => {
        popup.classList.remove('popup-hide')
    }
    const hidePopup = () => {
        popup.classList.add('popup-hide')
    }

    shareBtn1.addEventListener('click', showPopup)
    shareBtn2.addEventListener('click', hidePopup)
})