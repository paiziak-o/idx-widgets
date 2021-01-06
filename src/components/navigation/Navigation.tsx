import React, { FC } from 'react';
import './navigation.scss'

type Nav = {
  url: string;
  text: string;
};

const navs: Nav[] = [
  {
    url: '/link-1',
    text: 'Link 1',
  },
  {
    url: '/link-2',
    text: 'Link 2',
  },
  {
    url: '/link-3',
    text: 'Link 3',
  },
  {
    url: '/link-4',
    text: 'Link 4',
  },
  {
    url: '/link-5',
    text: 'Link 5',
  },
  {
    url: '/link-6',
    text: 'Link 6',
  },
  {
    url: '/link-7',
    text: 'Link 7',
  },
];

const Navigation: FC = () => {
  return (<ul className="navigation">
    {navs.map((nav: Nav) => (
      <li className="item"><a href={nav.url}>{nav.text}</a></li>
    ))}
  </ul>);
};

export default Navigation;
