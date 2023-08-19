import React from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";
import { ReactComponent as ProfileIcon } from "../../svgs/profile.svg";
import { ReactComponent as BookIcon } from "../../svgs/book.svg";
import { ReactComponent as MailIcon } from "../../svgs/mail.svg";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SideBarItem = ({
  title,
  description,
  icon,
  path,
  active,
}: Props) => {
  return (
    <C.Container>
      <Link data-testid="side-bar-item" to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === "profile" && (
            <ProfileIcon
              fill="white"
              width={24}
              height={24}
              data-testid="profile-icon"
            />
          )}
          {icon === "book" && (
            <BookIcon
              fill="white"
              width={24}
              height={24}
              data-testid="book-icon"
            />
          )}
          {icon === "mail" && (
            <MailIcon
              fill="white"
              width={24}
              height={24}
              data-testid="mail-icon"
            />
          )}
        </C.IconArea>
        <C.Point data-testid="active-point" active={active} />
      </Link>
    </C.Container>
  );
};
