function sign_all() {
    let helper__iframe = document.getElementsByName("rwEdit")[0];
    let helper__iframe_window = helper__iframe.contentWindow;
    let helper__iframe_document = helper__iframe.contentDocument? helper__iframe.contentDocument: helper__iframe.contentWindow.document;
    let helper__iframe_spans = helper__iframe_document.getElementsByTagName("span");

    for (let helper__iframe_span of helper__iframe_spans) {
        if (helper__iframe_span.innerText.includes("Sub-Contractor Acceptable?")) {
            helper__iframe_span.parentElement.parentElement.getElementsByTagName("td")[1].getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].getElementsByTagName("td")[0].getElementsByTagName("input")[0].setAttribute("checked", "true");
        } else if (helper__iframe_span.innerText === "For / on behalf of Subcontractor: (Supervisor / Manager)") {
            let checkbox = helper__iframe_span.parentElement.nextElementSibling.getElementsByTagName("div")[0].getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].getElementsByTagName("td")[1].getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].getElementsByTagName("td")[0].getElementsByTagName("input")[0];
            checkbox.setAttribute("checked", "true");
            checkbox.click()
        }
    }

    helper__iframe_window.scrollTo(0, 100000000);
}

let helper__button_holder_element = document.createElement("button");
helper__button_holder_element.innerText = `SIGN ALL (sub-contractor)`;
helper__button_holder_element.style.position = "fixed";
helper__button_holder_element.style.bottom = "20px";
helper__button_holder_element.style.left = "20px";
helper__button_holder_element.style.zIndex = "999999";
helper__button_holder_element.onclick = sign_all;

document.getElementsByTagName("html")[0].appendChild(helper__button_holder_element);
