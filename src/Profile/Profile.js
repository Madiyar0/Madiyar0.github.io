
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './Posts/MyPosts';
import MyPostsContainer from './Posts/MyPostsContainer';


const Profile = (props) => {
    return (  
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
            Eto profile
        </div>
    )
}

export default Profile;