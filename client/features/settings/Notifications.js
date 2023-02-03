/* eslint-disable no-unused-vars */
import React from "react";
import { Checkbox } from "@material-tailwind/react"

const Notifications = () => {
    return(
    <div className="w-full shadow-md m-8 flex flex-col p-4 py-2 rounded">
        <h1 className="font-bold text-3xl text-stone-500">Notifications</h1>
        <h1 className="text-xl text-stone-500 border-b-4 border-honey m-2 mt-0 py-4">Choose when we contact you.</h1>
        <div id="notifs-from-us" className="w-full border-b border-honey py-4 ml-2">
            <h2 className="font-bold text-xl text-stone-500 mt-2">Notifications from us</h2>
            <h4 className="text-stone-500 mb-2">Receive the latest news and updates from us.</h4>
            <div className="flex flex-row"><Checkbox defaultChecked /> <h4 className="text-stone-500 font-bold pt-2">News & Updates</h4></div>
            <h4 className="text-stone-500 ml-2">News about feature and rating updates.</h4>
            <div className="flex flex-row"><Checkbox defaultChecked /> <h4 className="text-stone-500 font-bold pt-2">Tips & Tutorials</h4></div>
            <h4 className="text-stone-500 ml-2">Tips on getting more out of epitoME and boosting your ratings.</h4>
            <div className="flex flex-row"><Checkbox defaultChecked /> <h4 className="text-stone-500 font-bold pt-2">User Research</h4></div>
            <h4 className="text-stone-500 ml-2">Get involved in our testing programs or participate in user experience surveys.</h4>
        </div>
        <div id="followers" className="w-full border-b border-honey py-4 ml-2">
            <h2 className="font-bold text-xl text-stone-500 mt-2">Followers</h2>
            <h4 className="text-stone-500 mb-2">These are notifications for new followers.</h4>
            <div className="flex flex-row"><Checkbox /> <h4 className="text-stone-500 font-bold pt-2">Do not notify me</h4></div>
            <div className="flex flex-row"><Checkbox /> <h4 className="text-stone-500 font-bold pt-2">Important followers only</h4></div>
            <h4 className="text-stone-500 ml-2">Only notify me if someone rated 4 stars or above follows me.</h4>
            <div className="flex flex-row"><Checkbox defaultChecked /> <h4 className="text-stone-500 font-bold pt-2">All Followers</h4></div>
            <h4 className="text-stone-500 ml-2">Notify me for all new followers.</h4>
        </div>
        <div id="comments" className="w-full border-b border-honey py-4 ml-2">
            <h2 className="font-bold text-xl text-stone-500 mt-2">Comments</h2>
            <h4 className="text-stone-500 mb-2">These are notifications for comments on your posts and replies to your comments.</h4>
            <div className="flex flex-row"><Checkbox /> <h4 className="text-stone-500 font-bold pt-2">Do not notify me</h4></div>
            <div className="flex flex-row"><Checkbox /> <h4 className="text-stone-500 font-bold pt-2">Mentions only</h4></div>
            <h4 className="text-stone-500 ml-2">Only notify me if I'm mentioned in a comment.</h4>
            <div className="flex flex-row"><Checkbox /> <h4 className="text-stone-500 font-bold pt-2">Important comments only</h4></div>
            <h4 className="text-stone-500 ml-2">Only notify me if someone rated 4 stars or above comments on one of my posts or mentions me.</h4>
            <div className="flex flex-row"><Checkbox defaultChecked /> <h4 className="text-stone-500 font-bold pt-2">All Comments</h4></div>
            <h4 className="text-stone-500 ml-2">Notify me for all comments on my posts.</h4>
        </div>
        <div id="likes" className="w-full border-b border-honey py-4 ml-2">
            <h2 className="font-bold text-xl text-stone-500 mt-2">Likes</h2>
            <h4 className="text-stone-500 mb-2">These are notifications for likes on your posts.</h4>
            <div className="flex flex-row"><Checkbox /> <h4 className="text-stone-500 font-bold pt-2">Do not notify me</h4></div>
            <div className="flex flex-row"><Checkbox /> <h4 className="text-stone-500 font-bold pt-2">Important likes only</h4></div>
            <h4 className="text-stone-500 ml-2">Only notify me if someone rated 4 stars or above likes one of my posts.</h4>
            <div className="flex flex-row"><Checkbox defaultChecked /> <h4 className="text-stone-500 font-bold pt-2">All Comments</h4></div>
            <h4 className="text-stone-500 ml-2">Notify me for all comments on my posts.</h4>
        </div>
        <div id="reminders" className="w-full border-b border-honey py-4 ml-2 mb-2">
            <h2 className="font-bold text-xl text-stone-500 mt-2">Reminders</h2>
            <h4 className="text-stone-500 mb-2">These are notifications to remind you of updates you might have missed.</h4>
            <div className="flex flex-row"><Checkbox /> <h4 className="text-stone-500 font-bold pt-2">Do not notify me</h4></div>
            <div className="flex flex-row"><Checkbox /> <h4 className="text-stone-500 font-bold pt-2">Important reminders only</h4></div>
            <h4 className="text-stone-500 ml-2">Only notify me if the reminder is tagged as important.</h4>
            <div className="flex flex-row"><Checkbox defaultChecked /> <h4 className="text-stone-500 font-bold pt-2">All Reminders</h4></div>
            <h4 className="text-stone-500 ml-2">Notify me for all reminders.</h4>
        </div>
    </div>
    );
};

export default Notifications;