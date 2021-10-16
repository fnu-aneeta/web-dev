const PostItem = (posts) => {
    return(`
<div class="row mt-1">
     <div class="col-1">
    <img src=${posts.avatarIcon} class="rounded-circle img-fluid" width="55px"/>
    </div>
     <div class="col-11">
       <div class="wd-name fw-bold">${posts.userName}
       <i class="fas fa-check-circle text-detail-color">&nbsp;</i>
        <span class="wd-author-handle fw-normal">${posts.handle} &middot; ${posts.time} 
         <i class="fa fa-ellipsis-h float-end"></i></span>
       </div>
        <p class="wd-main-content">${posts.body}</p>
    </div>
</div>
     <div class = "card border-left border-right wd-card-rounded-border wd-color-card-body">
                    <img src = ${posts.linkImage}
                         class="card-img-top wd-card-image-border">
                        
         <div class = "card-body ${posts.linkBody ? '' : 'd-none'}">
             <div class = "card-title">
                         <h6 class = "text-detail-color">${posts.linkTitle}</h6>
                         <h7 class = "fw-normal">${posts.linkBody}</h7>
                         <i class="fas fa-link" style="width: 33rem;">&nbsp;${posts.linkText}</i>
         
             </div>
         </div>
     </div>
       
        <div class="wd-icons">
            <div class="wd-icon-distant">
                <a class="wd-text-link" href = "#">
                    <i class="far fa-comment"></i></a>
                <span class="wd-numbers">${posts.replies}</span>
            </div>
            <div class="wd-icon-distant">
                <a class="wd-text-link" href = "#">
                    <i class="fas fa-retweet"></i></a>
                <span class="wd-numbers">${posts.retweets}</span></div>
            <div class="wd-icon-distant">
                <a class="wd-text-link" href = "#">
                    <i class="fa fa-heart wd-icon-heart" aria-hidden="true"></i></a>
                <span class="wd-numbers">${posts.favs}</span></div>
            <div class="wd-icon-distant">
                <a class="wd-text-link" href = "#">
                    <i class="fas fa-upload"></i></a>
                <span class="wd-numbers"></span></div>
                 
        </div>
    <br/>    
    <br/>    
      <hr> 
    

    `);
}
export default PostItem;



