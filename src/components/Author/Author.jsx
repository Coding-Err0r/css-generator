import React from "react";
import "./Author.css";

export default function Author() {
  return (
    <div>
      <p className="author">
        ©️{" "}
        <a href="mailto:rhine.cse@gmail.com" style={{ color: "#fff" }}>
          MD RHINEUL ISLAM
        </a>
      </p>
    </div>
  );
}
