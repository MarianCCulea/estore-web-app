import { useEffect, useRef, useState } from 'react';

function Dropdown({ title, opened, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const getContentHeight = () => {
    if (contentRef.current) {
      return isOpen ? `${contentRef.current.offsetHeight}px` : '0px';
    }
    return '0px';
  };

  useEffect(() => {
    if (opened) {
      getContentHeight();
      handleClick();
    }
  }, []);

  return (
    <li className="my-2 bg-white shadow-lg">
      <h2
        onClick={handleClick}
        className="flex flex-row items-center justify-between p-3 font-semibold cursor-pointer"
      >
        <span>{title}</span>
        <svg
          className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        className="overflow-hidden transition-all duration-500 border-l-2 border-purple-600 max-h-0"
        style={{ maxHeight: getContentHeight() }}
      >
        <div ref={contentRef} className="p-3 text-gray-900">
          {children}
        </div>
      </div>
    </li>
  );
}

export default Dropdown;
