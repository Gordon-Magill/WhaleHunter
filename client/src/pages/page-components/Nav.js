import React from "react";

export default function Nav() {
  return (
    <nav className="navigation">
          <ul>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/harbor">Harbor</a></li>
              <li><a href="/battle">Battle</a></li>
              <li><a href="/logout">LogOut</a></li>
          </ul>
    </nav>
  );
}
