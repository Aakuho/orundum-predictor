import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="bg-orundum text-white text-xs flex justify-between items-center p-1">
      <p className="flex flex-wrap gap-1">
        follow me on twitter{' '}
        <a
          href="https://twitter.com/aakuho"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          @aakuho
        </a>{' '}
        shameless pluuuuuuuug
      </p>
      <p className="text-right">also updates or something</p>
    </div>
  );
};

export default Header;