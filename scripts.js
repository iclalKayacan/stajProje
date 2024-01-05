document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.slider');
    var images = slider.querySelectorAll('img');
    var imageHeight = images[0].clientHeight; 
    var currentIndex = 0;

    function slideImage() {
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = 'translateY(-' + (imageHeight * currentIndex) + 'px)';
        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
            setTimeout(function() {
                slider.style.transition = 'none';
                slider.style.transform = 'translateY(0)';
            }, 500); 
        }
    }

    setInterval(slideImage, 3000); 
});
document.addEventListener('DOMContentLoaded', function() {
    var newsItems = document.querySelectorAll('.news-item');
    
    newsItems.forEach(function(item) {
      item.addEventListener('click', function() {
        document.querySelectorAll('.news-item').forEach(function(el) {
          el.classList.remove('active');
        });
        
        item.classList.add('active');
        
        var summary = item.querySelector('.news-summary').innerText;
        var date = item.querySelector('.news-date').innerText;
        var author = item.querySelector('.news-author').innerText;
        var mainNewsImage = item.querySelector('.news-image').src; 
    
        document.querySelector('.main-news-title').innerText = summary; 
        document.querySelector('.main-news-text').innerText = summary; 
        document.querySelector('.main-news-date').innerText = date;
        document.querySelector('.main-news-author').innerText = author;
    
        if(mainNewsImage) {
          document.querySelector('.main-news-image').src = mainNewsImage;
          document.querySelector('.main-news-image').style.display = 'block'; 
        }
      });
    });
  });
  function updateMainNews(imageSrc, title, summary) {
    document.querySelector('.main-news-image').src = imageSrc;
    document.querySelector('.main-news-title').innerText = title;
    document.querySelector('.main-news-text').innerText = summary;
  }
  
function changeMainImage(imageSrc) {
  var mainImage = document.getElementById('mainImage');
  mainImage.src = imageSrc;
}

function changeContent(section) {
  var contentArea = document.getElementById('contentArea');
  switch(section) {
    case 'uretim':
      contentArea.innerHTML = '<h1>ÜRETİM İÇERİĞİ</h1>';
      break;
    case 'sektorler':
      contentArea.innerHTML = '<h1>SEKTÖRLER İÇERİĞİ</h1>';
      break;
      case 'urunler':
        contentArea.innerHTML = '<h1>ÜRÜNLER İÇERİĞİ</h1>';
        break;
  }
  var menuItems = document.querySelectorAll('.vertical-menu .menu-item');
  menuItems.forEach(function(item) {
    item.classList.remove('active');
  });
  event.target.classList.add('active');
}

function changeContent(contentId) {
  var contents = document.querySelectorAll('.content-section');
  contents.forEach(function(content) {
    content.style.display = 'none';
  });

  var activeContent = document.getElementById(contentId);
  activeContent.style.display = 'block';

  var menuItems = document.querySelectorAll('.vertical-menu .menu-item');
  menuItems.forEach(function(item) {
    item.classList.remove('active');
  });

  event.target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  var menuIcon = document.querySelector('.menu-icon');
  var mobileMenu = document.querySelector('.mobile-menu');
  var menuClose = document.querySelector('.menu-close');

  menuIcon.addEventListener('click', function () {
      mobileMenu.classList.add('open');
  });

  menuClose.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
  });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  document.querySelector('.slider').style.transform = `translateY(-${currentIndex * 100}%)`;
  setInterval(nextSlide, 3000);
}



document.addEventListener('DOMContentLoaded', function() {
  var menuButton = document.querySelector('.hamburger-menu');
  var navigationMenu = document.querySelector('.navigation-menu');

  menuButton.addEventListener('click', function() {
    navigationMenu.classList.toggle('open');
  });
});





  
  
  