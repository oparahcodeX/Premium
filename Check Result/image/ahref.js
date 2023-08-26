const currentLocation = location.href;
const menuItem = document.querySelectorAll('.Bg-links ul a');

const menuLength = menuItem.length;

for(var i = 0; i < menuLength; i++){
	if (menuItem [i].href === currentLocation){
		menuItem [i].className = 'active';

	}
}


