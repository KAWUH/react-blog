import React from 'react'

export default function Tags(props) {
  const location = props.location;

  if(location == "inMainContentArticle") {
    return (
      <div className="tags-MCA">tags inMainContentArticle</div>
    )
  }
  else {
    return (
      <div className="tags-CA">tags notMainContentArticle</div>
    )
  }

  
}
