function removeThis(obj) {
    console.log(obj.parentElement);
    console.log(typeof obj.parentElement.noteName);
    // document.removeChild(obj.parentElement);
    obj.parentElement.remove();
}
