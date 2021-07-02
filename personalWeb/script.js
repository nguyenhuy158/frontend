var linkEl = document.links;

console.log(linkEl);

for (var index = 0; index < linkEl.length; index++) {
    console.log(linkEl[index]);

    linkEl[index].onclick = function (e) {
        e.preventDefault();
    };
}

let fakeApi = "http://localhost:3000/bai1";
fetch(fakeApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
    });
