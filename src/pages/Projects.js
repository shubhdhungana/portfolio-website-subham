import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const Projects = () => {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="#3e497a">


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Projects</h3>

        <p style={{ background: "#fff", padding: "15px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
          <strong>React Todo App</strong>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              Live Deployed Link: <a href="https://react-todolist-liard.vercel.app/" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://react-todolist-liard.vercel.app/</a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              Github: <a href="https://github.com/shubhdhungana/react-todolist" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://github.com/shubhdhungana/react-todolist</a>
            </li>
          </ul>
        </p>

        <p style={{ background: "#fff", padding: "15px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
          <strong>Kathmandu Pizza Food Site</strong>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              Live Deployed Link: <a href="https://kathmandu-pizza.vercel.app/" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://kathmandu-pizza.vercel.app/</a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              Github: <a href="https://github.com/shubhdhungana/kathmandu-pizza" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://github.com/shubhdhungana/kathmandu-pizza</a>
            </li>
          </ul>
        </p>

        <p style={{ background: "#fff", padding: "15px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
          <strong>Nike Brand Page Using React Js</strong>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              Live Deployed Link: <a href="https://nike-brand-page-ecru.vercel.app/" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://nike-brand-page-ecru.vercel.app/</a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              Github: <a href="https://github.com/shubhdhungana/nike-brand-page" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://github.com/shubhdhungana/nike-brand-page</a>
            </li>
          </ul>
        </p>

        <p style={{ background: "#fff", padding: "15px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
          <strong>Other Projects in my GitHub</strong>
          <br />
          Github: <a href="https://github.com/shubhdhungana/" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://github.com/shubhdhungana/</a>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
  )
}

export default Projects