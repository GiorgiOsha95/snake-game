const mapContainer = document.querySelector(".game-container");

const moveUp = document.querySelector(".snake");
const moveLeft = document.querySelector(".snake");
const moveRight = document.querySelector(".snake");
const moveDown = document.querySelector(".snake");

function startGame(element) {
	const container = document.querySelector(".map");

	mapContainer.style.display = "block";

	if (!container) {
		console.error("No element with class 'map' found.");
		return;
	}

	// Clear any existing grid items before adding new ones
	container.innerHTML = "";

	for (let i = 0; i < 100; i++) {
		const div = document.createElement("div");
		div.classList.add("grid-item");
		div.textContent = i + 1; // Optional: to show item number
		container.appendChild(div);
	}

	snake();
}

// reset the game function needs to be fi

// function resetGame() {
//     const container = document.querySelector(".map");
//     if (!container) {
//         console.error("No element with class 'map' found.");
//         return;
//     }
//     container.innerHTML = '';
// }

function closeGame() {
	const container = document.querySelector(".map");
	if (!container) {
		console.error("No element with class 'map' found.");
		return;
	}
	container.innerHTML = "";
	mapContainer.style.display = "none";
}

async function snake() {
	const container = document.querySelector(".grid-item");

	container;
	for (let i = 0; i < 1; i++) {
		const div = document.createElement("div");
		div.classList.add("snake");
		div.textContent = i + 1; // Optional: to show item number
		container.appendChild(div);
	}
}

function moveSnake() {
    document.querySelector('.controls').addEventListener('click', (event) => {
        if (event.target ==(= moveUp)) {
            moveUp.style.top = "20px";
        } else if (event.target.classList.contains("left")) {
            moveLeft.style.left = "-20px";
        } else if (event.target.classList.contains("right")) {
            moveRight.style.right = "20px";
        } else if (event.target.classList.contains("down")) {
            moveDown.style.bottom = "-20px";
        };
    });
    console.log("test", moveUp);
}


document.querySelector(".controls").addEventListener("keydown", (event) => {
	if (event.key === "ArrowUp") {
		moveUp.top = "20px";
	} else if (event.key === "ArrowLeft") {
		moveLeft.left = "-20px";
	} else if (event.key === "ArrowRight") {
		moveRight.right = "20px";
	} else if (event.key === "ArrowDown") {
		moveDown.bottom = "-20px";
	}

    console.log("test", moveUp);
});
