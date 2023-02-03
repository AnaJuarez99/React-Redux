import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


function footer() {
  return (
    <div>
    <footer className="bg-light py-3">
      <div className="container">
        <p className="text-center">&copy; {new Date().getFullYear()} Copyright: Ana Juarez Garcia</p>
      </div>
    </footer>

    </div>
  )
}

export default footer