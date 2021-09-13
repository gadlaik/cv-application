import React from "react";

export default function Overview(props) {
  return (
    <div id={"overview"} className={"hide"}>
      <ul id={"cv-overview"}>
        <h2>About me</h2>
        <li className={"overview-item"}>{props.cvInfo.name}</li>
        <li className={"overview-item"}>{props.cvInfo.email}</li>
        <li className={"overview-item"}>{props.cvInfo.phone}</li>

        <br />
        <br />

        <h2>Education</h2>
        <li className={"overview-item"}>{props.cvInfo.school}</li>
        <li className={"overview-item"}>{props.cvInfo.degree}</li>
        <li className={"overview-item"}>
          Graduated in {props.cvInfo.gradDate}
        </li>

        <br />
        <br />

        <h2>Experience</h2>
        <li className={"overview-item"}>Worked for: {props.cvInfo.company}</li>
        <li className={"overview-item"}>Job title: {props.cvInfo.title}</li>
        <li className={"overview-item"}>Job Task: {props.cvInfo.tasks}</li>
        <li className={"overview-item"}>
          Working periods: {props.cvInfo.period}
        </li>
      </ul>
      <div
        id={"edit-cv"}
        onClick={() => {
          document.getElementById("cv-form").style.display = "flex";
          document.getElementById("overview").classList.add("hide");
        }}
      ></div>
    </div>
  );
}
