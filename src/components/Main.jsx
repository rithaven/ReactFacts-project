import React from "react"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "bg-[#282D35]  marker:text-[#61DAFB] bg-back text-white grid items-center p-16 shadow-md z-[1]" : "bg-[#ffffff]  text-[#2B283A] grid items-center p-16 shadow-md z-[1]"}>
            <h1 className="text-3xl md:text-5xl ">Fun facts about React</h1>
            <ul className="max-w-4xl mt-8 list-disc ml-14 ">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}