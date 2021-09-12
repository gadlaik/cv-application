import React from "react";

export default function Form(props) {
  function nextBtn(e) {
    e.preventDefault();

    if (e.target.parentElement.parentElement.id === "general-info") {
      document.getElementById("general-info").classList.remove("show");
      document.getElementById("edu-info").classList.add("show");
    } else if (e.target.parentElement.parentElement.id === "edu-info") {
      document.getElementById("edu-info").classList.remove("show");
      document.getElementById("exp-info").classList.add("show");
    }
  }

  function backBtn(e) {
    e.preventDefault();

    if (e.target.parentElement.parentElement.id === "edu-info") {
      document.getElementById("edu-info").classList.remove("show");
      document.getElementById("general-info").classList.add("show");
    } else if (e.target.parentElement.parentElement.id === "exp-info") {
      document.getElementById("exp-info").classList.remove("show");
      document.getElementById("edu-info").classList.add("show");
    }
  }

  return (
    <form>
      <ul id={"general-info"} className={"show"}>
        <h3>General Info</h3>
        <hr />
        <li>
          <label htmlFor={"name"}>Name:</label>{" "}
          <input id={"name"} type="text" />
        </li>
        <li>
          <label htmlFor={"email"}>Email:</label>{" "}
          <input id={"email"} type="email" />
        </li>
        <li>
          <label htmlFor={"phone"}>Phone:</label>{" "}
          <input id={"phone"} type="text" />
        </li>

        <div id={"nav-btns"}>
          <button id={"next"} onClick={nextBtn}>
            NEXT
          </button>
        </div>
      </ul>

      <ul id={"edu-info"}>
        <h3>Education</h3>
        <hr />
        <li>
          <label htmlFor={"school-name"}>School Name:</label>{" "}
          <input id={"school-name"} type="text" />
        </li>
        <li>
          <label htmlFor={"degree"}>Title of Study:</label>{" "}
          <input id={"degree"} type="email" />
        </li>
        <li>
          <label htmlFor={"grad-date"}>Graduation Date:</label>{" "}
          <input id={"grad-date"} type="text" />
        </li>

        <div id={"nav-btns"}>
          <button id={"back"} onClick={backBtn}>
            BACK
          </button>
          <button id={"next"} onClick={nextBtn}>
            NEXT
          </button>
        </div>
      </ul>

      <ul id={"exp-info"}>
        <h3>Experience</h3>
        <hr />
        <li>
          <label htmlFor={"company"}>Company Names:</label>{" "}
          <input id={"company"} type="text" />
        </li>
        <li>
          <label htmlFor={"title"}>Position Titles:</label>{" "}
          <input id={"title"} type="email" />
        </li>
        <li>
          <label htmlFor={"tasks"}>Main Tasks of Your Jobs:</label>{" "}
          <textarea rows={4} id={"tasks"} type="text" />
        </li>
        <li>
          <label htmlFor={"period"}>
            Work Periods for Companies You Worked for:
          </label>
          <textarea rows={4} id={"period"} type="text" />
        </li>

        <div id={"nav-btns"}>
          <button id={"back"} onClick={backBtn}>
            BACK
          </button>
          <button type="submit" id={"submit-form"}>
            Finish
          </button>
        </div>
      </ul>
    </form>
  );
}
