import { ServerIcon } from "lucide-react";
import { useState } from "react";

export default function LoginNetwork() {
    const [activeTab, setActiveTab] = useState("server");

    return (
        <div>
            <ServerIcon className="color-red"/> 
        </div>
    )
}

export function DualLoginTabs() {
  const [activeTab, setActiveTab] = useState("server");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <button
            onClick={() => setActiveTab("server")}
            className={`w-1/2 py-2 text-center font-medium text-sm ${
              activeTab === "server"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Server Login
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`w-1/2 py-2 text-center font-medium text-sm ${
              activeTab === "admin"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Admin Login
          </button>
        </div>

        {/* Login Forms */}
        {activeTab === "server" && (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Server ID</label>
              <input
                type="text"
                placeholder="Enter Server ID"
                className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all duration-200"
            >
              Login as Server
            </button>
          </form>
        )}

        {activeTab === "admin" && (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Admin Email</label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all duration-200"
            >
              Login as Admin
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
