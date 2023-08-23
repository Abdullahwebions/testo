const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <h2 class="brand-logo">HanaStore</h2>

            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="ابحث...">
                    <button class="search-btn">بحث</button>
                </div>
                <a>
                    <i class="uil uil-user-circle" id="user-img"></i>
                    <div class="login-logout-popup hide">
                        <p class="account-info">بأسم</p>
                        <button class="btn" id="user-btn">تسجيل الخروج</button>
                    </div>
                </a>
                <a href="#"><i class="uil uil-shopping-cart-alt"></i></a>
            </div>
        </div>

        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">الصفحة الرئيسية</a></li>
            <li class="link-item"><a href="#secpre" class="link">الهدايا</a></li>
            <li class="link-item"><a href="#secpre" class="link">الكروت</a></li>
            <li class="link-item"><a href="#" class="link">الأكواب</a></li>
            <li class="link-item"><a href="#" class="link">البكسات</a></li>
        </ul>
    `;
}

createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        popuptext.innerHTML = `${user.namee}`;
        actionBtn.innerHTML = `تسجيل الخروج`;
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else{
        popuptext.innerHTML = `سجل الدخول للتسوق`;
        actionBtn.innerHTML = `تسجيل الدخول`;
        actionBtn.addEventListener('click', () => {
            location.href = `/login`;
        })
    }
}


