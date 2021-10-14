const PostSummaryListItem = (post) => {
    return(`
  <li class="list-group-item">
                 
                            <div class="row">
                                <div class="col-10">
                                    <span class="fw-normal text-color">${post.topic}</span>
                                    ${post.topic ? "<br/>" : ""}
                                    <span class="fw-bold text-detail-color">${post.userName}</span>                
                                    <i class="fas fa-check-circle"></i>
                                    <h7 i class = "text-color">&nbsp;-${post.time}</h7>
                                        ${post.title ? "<br/>" : ""}
                                    <h7 class="text-detail-color">${post.title}</h7>
                                    ${post.tweets ? "<br/>" : ""}
                                    <h7 class="fw-normal text-color">${post.tweets}</h7>
                                </div>
                                <div class="col-2">
                                    <img class="rounded img-fluid" src=${post.image}
                                         width="55px"
                                         height="55px"/>
                                </div>

                        
                        </div>
      </li>
    `);
}
export default PostSummaryListItem;