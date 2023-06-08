const newFormHandler = async (event) => {
  event.preventDefault();

  const Name = document.querySelector("#character-name").value.trim();
  const Age = document.querySelector("#character-age").value.trim();
  const Race = document.querySelector("#character-race").value.trim();
  const Height = document.querySelector("#character-height").value.trim();
  const Weight = document.querySelector("#character-weight").value.trim();
  const Gender = document.querySelector("#character-gender").value.trim();
  const Story = document.querySelector("#character-story").value.trim();

  if (Name && Story) {
    const response = await fetch(`/api/characters`, {
      method: "POST",
      body: JSON.stringify({ Name, Age, Race, Height, Weight, Gender, Story }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create character");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/characters/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete character");
    }
  }
};

document
  .querySelector(".new-character-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".character-list")
  .addEventListener("click", delButtonHandler);
