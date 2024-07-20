const name = document.getElementById("name");
const nameText = document.getElementById("nameText");

name.addEventListener("input", function() {
  nameText.textContent = name.value;
});

const desc = document.getElementById("desc");
const descText = document.getElementById("descText");

desc.addEventListener("input", function() {
  descText.textContent = desc.value;
});

const imgPickerURL = document.getElementById("imgPickerURL");
const img = document.getElementById("img");

imgPickerURL.addEventListener("input", function() {
  img.src = imgPickerURL.value;
});

window.onload = function() {

		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');


		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var imageType = /image.*/;

			if (file.type.match(imageType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					fileDisplayArea.innerHTML = "";

					img.src = reader.result;

					fileDisplayArea.appendChild(img);
				}

				reader.readAsDataURL(file);	
			} else {
				fileDisplayArea.innerHTML = "File not supported!"
			}
		});

}