import { Button } from './Button'

export const Sections = ({onClick}) => {
    return (
        <div className="">
            <ul className="inline-grid grid-cols-2 gap-4">
              <li>
                <Button 
                  text={'more'}
                  onClick={() => {
                    onClick('information about the anticpated product launch', false)
                  }}
                  />
              </li>
              <li>
                <Button 
                  text={'counter'}
                  onClick={() => {
                    onClick(null, true)
                  }}
                  />
              </li>
            </ul>
          </div>
    )
}