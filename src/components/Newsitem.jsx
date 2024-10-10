// import React from 'react'

// const Newsitem = ({title, description, src , url}) => {
//   return (
//     <div className="card" style={{maxWidth:"345px"}}>
//   <img src={src} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title}</h5>
//     <p className="card-text">{description}</p>
//     <a href={url} className="btn btn-primary">Read More</a>
//   </div>
// </div>
//   )
// }

// export default Newsitem

import React from 'react'
// import PropTypes from 'prop-types'

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 m-auto" style={{ maxWidth: "395px" }}>
      <img src={src} style={{height:"170px", width:"320px"}} className="card-img-top" alt={title || "news image"} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,70):""}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  )
}

// Newsitem.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
// }

export default Newsitem
