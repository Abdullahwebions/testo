const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <h2 class="logo">HanaStore</h2>
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">الكروت</li>
                    <li><a href="#" class="footer-links">أعراس</a></li>
                    <li><a href="#" class="footer-links">خطوبة</a></li>
                    <li><a href="#" class="footer-links">حفلات تخرج</a></li>
                    <li><a href="#" class="footer-links">اعياد ميلاد</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">الهدايا</li>
                    <li><a href="#" class="footer-links">أفراح</a></li>
                    <li><a href="#" class="footer-links">أعياد ميلاد</a></li>
                    <li><a href="#" class="footer-links">شخصية</a></li>
                    <li><a href="#" class="footer-links">مٌناسبات</a></li>
                </ul>
            </div>
        </div>

        <p class="footer-title">عن حانة...</p>
        <p class="info">حانه عبارة عن متجر هدايا تحديدآ في اليمن يوجد خدمة توصيل لباقي المٌحافضات, لدى متجر حانه الكثير من المنتجات المتنوعة من الهدايا إلى  الكروت بإنواعها وتنسيقات فريدة حسب الطلب لمٌختلف المٌناسبات وتصميم أغلفة متنوعة حسب الطلب على أغلفة الهواتف والكتب والدفاتر.</p>
        <p class="info">للتواصل على الإيميل - hansstore@gmail.com</p>
        <p class="info">للتواصل على واتساب - 739562912</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="socail-link">موقع المطور</a>
                <a href="#" class="socail-link">الدعم الفني</a>
            </div>
            <div>
                <a href="#" class="socail-link">أنستقرام</a>
                <a href="#" class="socail-link">تويتر</a>
                <a href="#" class="socail-link">فيسببوك</a>
            </div>
        </div>
        <p class="footer-credit">Hanastore - 2023 ©</p>
    `;
}

createFooter();