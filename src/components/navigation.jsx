export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src="img/soplica/soplica_logo.jpg" className="img-responsive" alt="" />{" "}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#page-top' className='page-scroll'>
                Nuestro Vodka
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Historia
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Sabores
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Cocteles
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Equipo
              </a>
            </li>

            <li>
              <a href='#contact' className='page-scroll'>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
