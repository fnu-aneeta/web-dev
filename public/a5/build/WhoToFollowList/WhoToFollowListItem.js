const WhoToFollowListItem = (who) => {
    return(`
                <li class="list-group-item col-color">
                    <div class="row mt-2">
                        <div class="col-2">
                            <img class="rounded-circle" src=${who.avatarIcon} width="42px" height="42px">
                        </div>
                        <div class="col-6 spacing">
                        <span class="fw-bold text-detail-color text-nowrap">${who.userName}
                        <i class="fas fa-check-circle text-detail-color">&nbsp;</i>
                        </span>
                           <br/> 
                           <br/>
                           <p class="fw-normal text-color">${who.handle}</p>
                        </div>

                        <div class="col-4">
                            <button class="btn btn-primary rounded-pill">Follow</button>
                        </div>

                    </div>
                  </li>
                
 `);
}
export default WhoToFollowListItem;