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
        <li className={"overview-item"}>{props.cvInfo.education}</li>
        <li className={"overview-item"}>{props.cvInfo.gradDate}</li>

        <br />
        <br />

        <h2>Experience</h2>
        <li className={"overview-item"}>{props.cvInfo.company}</li>
        <li className={"overview-item"}>{props.cvInfo.title}</li>
        <li className={"overview-item"}>{props.cvInfo.tasks}</li>
        <li className={"overview-item"}>{props.cvInfo.period}</li>
      </ul>
    </div>
  );
}
