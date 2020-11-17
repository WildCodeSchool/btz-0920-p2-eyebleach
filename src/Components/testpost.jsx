/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
<div className="mainPostPageMobile">
  <div className="userNamePostMob">
    <p>{userName}</p>
    <LikeButton />
    <DownloadButton contentToDL={imageToDisplay} />
  </div>

  <div className="photoDiv">
    <img className="imgPost" src={imageToDisplay} alt={altForImgToDisplay} />
  </div>
  <div className="titleDesc">{title}</div>
  <div className="socialIcons">
    <InfoPop comments={comments} redditPostURL={redditPostURL} />
  </div>
</div>;
