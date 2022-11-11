const Button = ({showTab}) => {
  function handleClick(type) {
    alert('hi')
  }
  return (
      <button onClick={handleClick}>
          {showTab}
      </button>
  )
}

export const Sections = () => {
    return (
        <div className="">
            <ul className="inline-grid grid-cols-2 gap-4">
              <li>
                <Button 
                  showTab={'about'}/>
              </li>
              <li>
                <Button 
                  showTab={'counter'}/>
              </li>
            </ul>
          </div>
    )
}