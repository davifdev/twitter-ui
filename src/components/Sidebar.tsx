import "./Sidebar.css";

import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  HouseLine,
  Pencil,
  User,
} from "phosphor-react";

import { NavLink } from "react-router-dom";

import twitterLogo from "../assets/logo-twitter.svg";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="foto" />

      <nav className="main-navigation">
        <NavLink to="/">
          <HouseLine weight="fill" />
          <span>Home</span>
        </NavLink>
        <a href="#">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="#">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="#">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="#">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="#">
          <FileText />
          <span>List</span>
        </a>
        <a href="#">
          <User />
          <span>Profile</span>
        </a>
        <a href="#">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
