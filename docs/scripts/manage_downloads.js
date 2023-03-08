const container = document.getElementById("container");
const programName = "Movie-Manager";

function createDownload(json) {
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    let span = document.createElement("span");
    let div = document.createElement("div");
    let version = document.createElement("p");
    let log = document.createElement("div");
    let changes = document.createElement("p");

    div.classList.add("download-link");
    span.classList.add("date");
    listItem.classList.add("downloads-item");
    log.classList.add("change-log");


    version.innerHTML = "v" + json.version;
    link.href = "";
    link.setAttribute("download", json.location);
    link.download = programName + "_v" + json.version + ".jar";
    span.innerHTML = "Uploaded: " + json.date;
    changes.innerHTML = "<b>Change log</b>: <br>" + json.log;

    div.appendChild(version);
    link.appendChild(div);
    log.appendChild(changes);
    listItem.appendChild(link);
    listItem.appendChild(span);
    listItem.appendChild(log);


    container.appendChild(listItem);
}

function loadDownloads() {
    for (let i = 0; i < versions.length; i++) {
        createDownload(versions[i]);
        console.log(versions[i]);
    }
}
