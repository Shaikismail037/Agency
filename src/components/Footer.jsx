import { navLink } from "./constants"
const Footer = () => {
    const filteredLinks = navLink.filter(item => item.path === 'about' || item.path === 'services' || item.path === 'contact' || item.path === 'portfolio');
  return (


<footer className="bg-181818 ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline"></a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
    {filteredLinks.map((item) => (
            <li key={item.path}>
              <a href={`#${item.path}`} className="hover:underline me-4 md:me-6">
                {item.link}
              </a>
            </li>
          ))}
    </ul>
    </div>
</footer>

  )
}

export default Footer