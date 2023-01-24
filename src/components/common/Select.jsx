import React, { useState } from "react";
import styled from "styled-components";
import { useDetectClickOutside } from "react-detect-click-outside";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import useFontStore from "../../stores/fontStore";

export const Select = () => {
  const afont = useFontStore((state) => state.font);
  const setFont = useFontStore((state) => state.setFont);

  const items = [
    { text: "Sans Serif", font: "--font-inter" },
    { text: "Serif", font: "--font-lora" },
    { text: "Mono", font: "--font-inconsolata" },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    text: "Sans Serif",
    font: "--font-inter",
  });
  const ref = useDetectClickOutside({ onTriggered: () => setOpen(false) });

  return (
    <Container selected={selected} open={open} ref={ref}>
      <label onClick={() => setOpen(!open)} tabIndex="0">
        <span>{selected.text}</span>
        <img src={arrowDown} />
      </label>

      {open && (
        <ul>
          {items.map(({ text, font }) => (
            <li
              key={text}
              onClick={() => {
                setSelected({ text, font });
                setFont(font);
                setOpen(false);
              }}
            >
              <Span font={font}>{text}</Span>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 18.3rem;
  position: relative;

  label {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.color.globalText};
    font-family: ${({ theme }) => `var(${theme.font})`};
    user-select: none;
    cursor: pointer;

    img {
      transition: all 0.3s ease;
      transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
    }
  }

  ul {
    width: 18.3rem;
    position: absolute;
    top: calc(2.4rem + 1.8rem);
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 2.4rem;
    background-color: ${({ theme }) => theme.color.selectBg};
    box-shadow: ${({ theme }) => theme.color.selectShadow};
    border-radius: 16px;
    z-index: 1;
  }
`;

const Span = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.globalText};
  font-family: ${({ font }) => `var(${font})`};
  cursor: pointer;

  &:hover {
    color: var(--color-purple);
  }
`;
