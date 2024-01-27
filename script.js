//ハンバーガーマニューの表示・非表示を切り替える関数

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// toggleMenu関数はハンバーガーメニューがクリックされた時に呼び出される関数です。

// document.querySelector('.nav-links') は、クラスが .nav-links である要素を検索します。これはナビゲーションメニューを指します。

//　classList.toggle('show')　は、要素のクラスリストに 'show'というクラスがない場合は追加し、すでに存在する場合は削除します。これにより、ナビゲーションメニューの表示・非表示が切り替わります。


//スライドショーの制御

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const slideTexts = document.querySelectorAll('.slide-text');

    //for ループ

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slideTexts[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }


    slides[slideIndex - 1].style.display = 'block';
    slideTexts[slideIndex - 1].style.display = 'block';

    setTimeout(showSlides, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides();
})





