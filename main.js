var wrapperBanner = document.createElement('a'),
	elementImg = document.createElement('img'),
	elementHome = document.getElementById('block-glr-view-secciones-grilla-principal-home');

	wrapperBanner.setAttribute("href", "http://www.elpopular.pe/actualidad-y-policiales/francisco"); 
	elementImg.setAttribute("src","papa-popular.png");

	wrapperBanner.appendChild(elementImg);

	
	wrapperBanner.insertBefore(elementHome,wrapperBanner);


console.log(elementHome);