import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faFileVideo } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'


export default function NewAnnouncement(){
    


    return(
        <div className="grid grid-cols-1 gap-0 h-60 w-96">
            <div className="flex justify-between items-center">
                <h1 className="text-red-600 text-sm font-semibold">Create a new announcement</h1>
                <button className="bg-blue-600 p-1 px-2 rounded-2xl text-white"> publish</button>
                 </div>
            <div className="">
                <textarea name="announcement"  placeholder="what's new?" className="rounded-xl p-2 w-full h-full"></textarea>
            </div>
            <div className="bg-blue-500 flex justify-between items-center">
                <div className="text-white text-sm font-semibold">Add to your post</div>
                <div className="flex gap-4 px-4">
                <FontAwesomeIcon icon={faImage} />
                <FontAwesomeIcon icon={faFileVideo} />
                <FontAwesomeIcon icon={faIdBadge} />
                <FontAwesomeIcon icon={faFaceSmile} />
                </div>
            </div>

        </div>
    );
}