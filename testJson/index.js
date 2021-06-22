let url = "https://jsonplaceholder.typicode.com/todos";
let todos;

fetch(url)
    .then((response) => response.json())
    .then((json) => {
        todos = json;
        let htmls = todos.reduce((preValue, currentValue) => {
            return (
                preValue +
                `
			<li>
				<h4 class="title">${currentValue.title}</h4>
				<input type="checkbox" name="isCheck" id="checkBox" ${
                    currentValue.completed == true ? "checked" : ""
                }/>
			</li>
			`
            );
        }, "");
        // console.log(currentValue == true ? "checked" : "");
        // console.log(htmls);
        document.querySelector(".todo").innerHTML = htmls;
    });
