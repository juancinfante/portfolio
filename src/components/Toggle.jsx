import daynight from '../assets/daynight.png'
const Toggle = ({handleChange, isChecked, isDarkImage}) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check" className='daynight-img'>
        <img src={isDarkImage} alt="" />
        </label>
    </div>
  )
}

export default Toggle