function init() {
	addFrmOverlayLogic();
	addControllerLogic();
	addFrameset();
	addActions();
	addGestures(document);
}

function addGestures(element) {
	element.addEventListener("swiped", function (e) {});

	element.addEventListener("swiped-left", function (e) {
		var currentFrame = document.querySelector("iframe.active");
		if (currentFrame && currentFrame.nextSibling) {
			currentFrame.classList.remove("active");
			currentFrame.nextSibling.classList.add("active");
		}
	});

	element.addEventListener("swiped-right", function (e) {
		var currentFrame = document.querySelector("iframe.active");
		if (currentFrame && currentFrame.previousSibling) {
			currentFrame.classList.remove("active");
			currentFrame.previousSibling.classList.add("active");
		}
	});

	element.addEventListener("swiped-up", function (e) {});

	element.addEventListener("swiped-down", function (e) {});
}

function addActions() {
	document.getElementById("btnAdd").addEventListener("click", function (e) {
		addFrameset();
	});
	document
		.getElementById("btnRemove")
		.addEventListener("click", function (e) {
			removeFrameset();
		});
}

function readTextFile(file) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				var allText = rawFile.responseText;
			}
		}
	};
	rawFile.send(null);
}

function addControllerLogic() {
	document
		.getElementById("txtUrl")
		.addEventListener("dblclick", function (e) {
			if (this.value !== "") {
				if (this.value == "load") {
					document.querySelector("iframe.active").src =
						"data:text/html;charset=utf-8," +
						escape(readTextFile("/files/firefox.xml"));
				} else {
					document.querySelector("iframe.active").src = this.value;
					document
						.getElementById("frmOverlay")
						.classList.remove("hide");
					document
						.querySelector("framesetcontroller")
						.classList.remove("show");
					document
						.querySelector("framesetcontroller")
						.classList.add("hide");
					this.value = "";
				}
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
		document.querySelector("iframe.active").classList.remove("active");
	}

	var newIFrameIndex = document.getElementsByTagName("iframe").length + 1;

	var framesetcontainer = document.getElementsByTagName(
		"framesetcontainer"
	)[0];

	var frmHtmlPreviewId = "frmHtmlPreview" + newIFrameIndex;
	var iframe = document.createElement("iframe");
	iframe.setAttribute("data-idx", newIFrameIndex);
	iframe.id = frmHtmlPreviewId;
	iframe.className = "html-preview active";
	framesetcontainer.appendChild(iframe);
}

function removeFrameset() {
	var frameToDelete = document.querySelector("iframe.active");
	if (frameToDelete !== undefined) {
		document.querySelector("iframe.active").remove();
		if (document.getElementsByTagName("iframe").length) {
			document
				.getElementsByTagName("iframe")
				[
					document.getElementsByTagName("iframe").length - 1
				].classList.add("active");
		}
	}
}
