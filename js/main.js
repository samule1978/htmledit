function init() {
	addFrameset();
	addGestures(document);
}

function addGestures(element) {
	element.addEventListener("swiped", function (e) {
		/*console.log(e.type);
		console.log(e.target);
		console.log(e.detail);
		console.log(e.dir);	*/
	});

	element.addEventListener("swiped-left", function (e) {
		/*console.log(e.type);
		console.log(e.target);
		console.log(e.detail);*/
		alert(e.type);
	});

	element.addEventListener("swiped-right", function (e) {
		/*console.log(e.type);
		console.log(e.target);
		console.log(e.detail);*/
		alert(e.type);
	});

	element.addEventListener("swiped-up", function (e) {
		/*console.log(e.type);
		console.log(e.target);
		console.log(e.detail);*/
		alert(e.type);
	});

	element.addEventListener("swiped-down", function (e) {
		/*console.log(e.type);
		console.log(e.target);
		console.log(e.detail);*/
		alert(e.type);
	});
}

function showHide() {
	if (this.classList.contains("html-edit")) {
		if (this.value !== "") {
			this.parentElement.querySelector(".html-preview").src =
				"data:text/html;charset=utf-8," + escape(this.value);

			if (this.classList.contains("show")) {
				this.classList.remove("show");
				this.classList.add("hide");
			} else {
				this.classList.remove("hide");
				this.classList.add("show");
			}

			this.parentElement
				.querySelector(".html-preview")
				.classList.remove("hide");
			this.parentElement
				.querySelector(".html-preview")
				.classList.add("show");
			this.parentElement
				.querySelector(".html-preview-overlay")
				.classList.remove("hide");
			this.parentElement
				.querySelector(".html-preview-overlay")
				.classList.add("show");
		}
	} else if (this.classList.contains("html-preview-overlay")) {
		if (this.classList.contains("show")) {
			this.parentElement
				.querySelector(".html-preview")
				.classList.add("hide");
			this.parentElement
				.querySelector(".html-preview")
				.classList.remove("show");
			this.parentElement
				.querySelector(".html-preview-overlay")
				.classList.add("hide");
			this.parentElement
				.querySelector(".html-preview-overlay")
				.classList.remove("show");

			this.parentElement
				.querySelector(".html-edit")
				.classList.remove("hide");
			this.parentElement
				.querySelector(".html-edit")
				.classList.add("show");
		}
	}
}

function addFrameset() {
	if (document.getElementsByTagName("htmlEditContainer").length) {
		document.getElementsByTagName("htmlEditContainer").style.visibility =
			"hidden";
	}

	var framesetCurrentCount = document.getElementsByTagName(
		"htmlEditContainer"
	).length;

	var htmlEditContainer = document.createElement("htmlEditContainer");

	var txtHtmlEditId = "txtHtmlEdit" + framesetCurrentCount + 1;
	var textarea = document.createElement("textarea");
	textarea.id = txtHtmlEditId;
	textarea.className = "html-edit show";
	textarea.ondblclick = showHide;
	htmlEditContainer.appendChild(textarea);

	var frmHtmlPreviewId = "frmHtmlPreview" + framesetCurrentCount + 1;
	var iframe = document.createElement("iframe");
	iframe.id = frmHtmlPreviewId;
	//iframe.src = '"javascript:&#39;&#39;;"';
	iframe.className = "html-preview hide";
	//iframe.ondblclick = showHide;
	htmlEditContainer.appendChild(iframe);

	var frmOverlayId = "frmOverlay" + framesetCurrentCount + 1;
	var frmOverlay = document.createElement("frmOverlay");
	frmOverlay.id = frmOverlayId;
	frmOverlay.className = "html-preview-overlay hide";
	frmOverlay.ondblclick = showHide;
	htmlEditContainer.appendChild(frmOverlay);

	document
		.getElementsByTagName("framesetcontainer")[0]
		.appendChild(htmlEditContainer);
}
