import Image from "next/image";
import { useState, useEffect, useRef } from "react";


type SkillChipProps = {
  title: string;
  icon: string;
  description: string;
};

export default function SkillChip({
  title,
  icon,
  description,
}: SkillChipProps) {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setPopoverVisible(!isPopoverVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setPopoverVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-white" ref={containerRef}>
      <div
        onClick={togglePopover}
        className="hover:bg-gray-50 flex flex-row items-center justify-center px-2 pr-8 py-2 border-2 border-gray-200 text-gray-500 rounded-md shadow-sm bg-transparent hover:shadow-md hover:cursor-pointer duration-300"
      >
        {icon && (
          <Image
            alt={title}
            src={icon}
            width={15}
            height={15}
            className="mr-2"
          />
        )}
        <span className="text-xs font-semibold ">{title}</span>
      </div>

      {isPopoverVisible && (
        <div
          id="popover-company-profile"
          role="tooltip"
          className="absolute z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 w-96 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 mt-2"
        >
          <div className="p-3">
            <div className="flex">
              <div className="me-3 shrink-0">
                <a
                  href="#"
                  className="block p-2 bg-gray-100 rounded-lg dark:bg-gray-700"
                >
                  <Image alt={title} src={icon} width={25} height={25}/>
                </a>
              </div>
              <div>
                <p className="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    {title}
                  </a>
                </p>
                <p className="mb-4 text-sm">{description}</p>

                <div className="flex">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-5 py-2 me-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Voir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
