import React from 'react';

export const MenuHeader = ({ classNameWrap, options = [] }) => {
  return (
    <ul className={classNameWrap}>
      {options.map((item, index) => (
        <li key={index}>
          <a target={item.target} href={item.link}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
