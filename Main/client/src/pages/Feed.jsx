import "../css/activityfeed.css"


const Feed = () => {
    return (
        <div class="feed-container">

        <div class="card-header dashboard-post">
           <h4 class="card-title post-title">justinboston 
            <img src="https://i.etsystatic.com/27832863/r/il/235ba8/4020975763/il_fullxfull.4020975763_8slx.jpg" class="avatar"></img>
            </h4>
            <div class="card-body post-body">
            <p class="card-body post-content">
                Location: The Square<br />
                Time: 6pm<br />
                Hobby: Drinking
            </p>
            <p class="card-text post-author">Posted by <span class="post-username">justinboston</span> at 11:59pm</p>
            </div>
        </div>

        <div class="card-header dashboard-post">
           <h4 class="card-title post-title">SongBirdCode
           <img src="https://ih1.redbubble.net/image.424244235.8518/raf,750x1000,075,t,101010:01c5ca27c6.u2.jpg" class="avatar"></img>
           </h4>
            <div class="card-body post-body">
            <p class="card-body post-content">
                Location: Public Safety<br />
                Time: 8pm<br />
                Weapon: Chancleta
            </p>
            <p class="card-text post-author">Posted by <span class="post-username">SongBirdCode</span> at 11:59pm</p>
            </div>
        </div>        

        <div class="card-header dashboard-post">
           <h4 class="card-title post-title">katvela24
           <img src="https://i.etsystatic.com/27832863/r/il/235ba8/4020975763/il_fullxfull.4020975763_8slx.jpg" class="avatar"></img>
           </h4>
            <div class="card-body post-body">
            <p class="card-body post-content">
                Location: Prentis Cafe<br />
                Time: 2pm<br />
                Hobby: Coding
            </p>
            <p class="card-text post-author">Posted by <span class="post-username">katvela24</span> at 11:59pm</p>
            </div>        
        </div>   

        <div class="card-header dashboard-post">
           <h4 class="card-title post-title">kitasauce
           <img src="https://ih1.redbubble.net/image.424244235.8518/raf,750x1000,075,t,101010:01c5ca27c6.u2.jpg" class="avatar"></img>
           </h4>
            <div class="card-body post-body">
            <p class="card-body post-content">
                Location: Science Center<br />
                Time: 4pm<br />
                Weapon: Baseball Bat
            </p>
            <p class="card-text post-author">Posted by <span class="post-username">kitasauce</span> at 11:59pm</p>
            </div>        
        </div>       
        
    </div>
    )
}
export default Feed