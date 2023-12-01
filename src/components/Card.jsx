/* eslint-disable react/prop-types */
const Card = ({portada,titulo, año, descripcion, images, logos,nets, links,isDark}) => {
  const dark = isDark;
  return (
    <>
        <div className="proyecto">
            <img src={portada} alt="" />
            <h3>{titulo} <span>{año}</span></h3>
            <p>{descripcion}</p>
            <div className="iconos">
              {
                
                  images.map((element,index) => {
                      return <>
                        <div className="icono" key={index} >
                            <img src={element} alt="" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip Content"/>
                        </div>
                            </>;
                    })
              
                }
            </div>
            <div className="links2">
              <div className="links2-inner">
              <img src={logos[0]} alt="" />
              <p><a data-theme={isDark ? "color-withe" : ""} href={links[0]} target="_blank" rel="noreferrer"> {nets[0]}</a></p>
              </div>
              <div className="links2-inner">
                {
                    links[1] !== "" ? <>
                    <img src={logos[1]} alt="" />
                    <p><a data-theme={isDark ? "color-withe" : ""} href={links[1]} target="_blank" rel="noreferrer"> {nets[1]} </a></p>
                    </> : <></>
                }
              
              </div>
            </div>
          </div>
    
    </>
  )
}

export default Card