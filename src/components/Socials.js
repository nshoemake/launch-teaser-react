import { FaTiktok, FaInstagram, FaTwitter, FaStore } from 'react-icons/fa'

export const Socials = () => {
    return (
        <div>
            <ul className="inline-grid grid-cols-4 gap-4">
              <li>
                <a href="#"><FaTiktok /></a>
              </li>
              <li>
                <a href="#"><FaInstagram /></a>
              </li>
              <li>
                <a href="#"><FaTwitter /></a>
              </li>
              <li>
                <a href="#"><FaStore /></a>
              </li>
            </ul>
          </div>
    )
}