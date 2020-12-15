function init() {
	addFrmOverlayLogic();
	addControllerLogic();
	addFrameset();
	addGestures(document);
}

function addGestures(element) {
	/*element.addEventListener("swiped", function (e) {
		console.log(e.type);
		console.log(e.target);
		console.log(e.detail);
		console.log(e.dir);
	});*/

	element.addEventListener("swiped-left", function (e) {
		console.log(e.type);
		console.log(e.target);
		console.log(e.detail);
		alert(e.type);
	});

	element.addEventListener("swiped-right", function (e) {
		console.log(e.type);
		console.log(e.target);
		console.log(e.detail);
		alert(e.type);
	});

	/*element.addEventListener("swiped-up", function (e) {
		console.log(e.type);
		console.log(e.target);
		console.log(e.detail);
		alert(e.type);
	});*/

	/*element.addEventListener("swiped-down", function (e) {
		console.log(e.type);
		console.log(e.target);
		console.log(e.detail);
		alert(e.type);
	});*/
}

function addControllerLogic() {
	document
		.getElementById("txtUrl")
		.addEventListener("dblclick", function (e) {
			if (this.value !== "") {
				document.querySelector("iframe.active").src = this.value;
				document.getElementById("frmOverlay").classList.remove("hide");
				document
					.querySelector("framesetcontroller")
					.classList.remove("show");
				document
					.querySelector("framesetcontroller")
					.classList.add("hide");
				this.value = "";
			}
		});
	document
		.getElementById("txtHtml")
		.addEventListener("dblclick", function (e) {
			if (this.value !== "") {
				document.querySelector("iframe.active").src =
					"data:text/html;charset=utf-8," + escape(this.value);
				document.getElementById("frmOverlay").classList.remove("hide");
				document
					.querySelector("framesetcontroller")
					.classList.remove("show");
				document
					.querySelector("framesetcontroller")
					.classList.add("hide");
				this.value = "";
			}
		});
}

function addFrmOverlayLogic() {
	document
		.getElementById("frmOverlay")
		.addEventListener("dblclick", function (e) {
			if (
				document
					.querySelector("framesetcontroller")
					.classList.contains("hide")
			) {
				document
					.querySelector("framesetcontroller")
					.classList.remove("hide");
				document
					.querySelector("framesetcontroller")
					.classList.add("show");
			} else {
				document
					.querySelector("framesetcontroller")
					.classList.remove("show");
				document
					.querySelector("framesetcontroller")
					.classList.add("hide");
			}
		});
}

function addFrameset() {
	if (document.getElementsByTagName("iframe").length) {
		document.getElementsByTagName("iframe").classList.remove("active");
	}

	var newIFrameIndex = document.getElementsByTagName("iframe").length + 1;

	var framesetcontainer = document.getElementsByTagName(
		"framesetcontainer"
	)[0];

	var frmHtmlPreviewId = "frmHtmlPreview" + newIFrameIndex;
	var iframe = document.createElement("iframe");
	iframe.id = frmHtmlPreviewId;
	iframe.className = "html-preview active";
	framesetcontainer.appendChild(iframe);
}
