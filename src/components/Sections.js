import { Button } from './Button'

export const Sections = ({onClick}) => {
    return (
        <div className="">
            <ul className="inline-grid grid-cols-2 gap-4">
              <li>
                <Button 
                  text={'about'}
                  onClick={onClick}
                  />
              </li>
              <li>
                <Button 
                  text={'counter'}
                  onClick={onClick}
                  />
              </li>
            </ul>
          </div>
    )
}