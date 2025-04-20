import { useState } from "react";

export default function JoinNetwork() {
    const [activeTab, setActiveTab] = useState("server");

    return (
        <div>
            <ServerIcon className="color-red"/> 
        </div>
    )
}