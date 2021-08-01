var linkEl = document.links;

console.log(linkEl);

for (var index = 0; index < linkEl.length; index++) {
    console.log(linkEl[index]);

    linkEl[index].onclick = function (e) {
        e.preventDefault();
    };
}
