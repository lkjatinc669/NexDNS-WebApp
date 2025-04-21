import React from 'react'

const Dashboard = () => {
    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="col-span-1 sm:col-span-2 row-span-2 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-2xl p-6 shadow-lg">
                <h2 class="text-xl font-bold mb-2">Welcome Back</h2>
                <p class="text-sm">Track your system status and updates here.</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow hover:scale-105 transition">
                <h3 class="font-semibold text-gray-700 dark:text-white">Devices</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Manage your hardware.</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow hover:scale-105 transition">
                <h3 class="font-semibold text-gray-700 dark:text-white">Network</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">DNS & Firewall rules.</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow hover:scale-105 transition">
                <h3 class="font-semibold text-gray-700 dark:text-white">Settings</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Customize your app.</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow hover:scale-105 transition">
                <h3 class="font-semibold text-gray-700 dark:text-white">Analytics</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">View usage reports.</p>
            </div>
        </div>


    )
}

export default Dashboard