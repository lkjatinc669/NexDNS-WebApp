import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, tileVariants } from '../constants';
import axios from 'axios';

const Dashboard = () => {

    const data = {
        username: "bunny",
        servers: 5
    }
    const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());
    const [universalTime, setUniversalTime] = useState(new Date().toUTCString().split(' ')[4]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLocalTime(new Date().toLocaleTimeString());
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setUniversalTime(new Date().toUTCString().split(' ')[4]);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const [count, setCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev < 300) {
                    return prev + Math.floor(Math.random() * 10);
                } else {
                    prev = "300+"
                }
                clearInterval(interval); // Stop at 100
                return prev;
            });
        }, 5); // Adjust speed by changing interval (in ms)

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    const [isDnsServerOnline, setDnsServerOnline] = useState(false);

    useEffect(() => {
        const link = "http://localhost:6690/net-utils/dns-server-status"
        const interval = setInterval(() => {
            axios.post(link)
                .then((res) => {
                    setDnsServerOnline(res.data.status)
                })
                .catch((err) => setDnsServerOnline(false))
        }, 5000);

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" variants={containerVariants}
            initial="hidden"
            animate="show">
            <motion.div variants={tileVariants} className="col-span-1 sm:col-span-2 row-span-2 sm:row-span-2 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl text-gray-800 dark:text-white">
                <h2 className="text-3xl font-extrabold mb-1">Hello, {data.username}</h2>
                <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Administrator</p>
            </motion.div>

            <motion.div variants={tileVariants} className="bg-white dark:bg-gray-800 row-span-2 rounded-2xl p-4 shadow hover:scale-105 transition transform duration-200 flex items-center justify-center flex-col">
                <motion.div
                    className="text-4xl font-semibold mb-1 ml-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [-20, 0] }} // Scroll down animation
                    transition={{ duration: 0.1 }}
                >
                    {count}
                </motion.div>
                <span className="text-xl text-gray-500 pl-2 dark:text-gray-400">Active Servers</span>
            </motion.div>

            <motion.div variants={tileVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <p className="text-5xl text-gray-800 dark:text-white pr-2">{localTime}</p>

                <div className="flex flex-col items-end text-sm text-gray-500 dark:text-gray-400">
                    <span>IST</span>
                    <span>+05:30</span>
                </div>
            </motion.div>


            <motion.div variants={tileVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <p className="text-5xl text-gray-800 dark:text-white pr-2">{universalTime}</p>

                <div className="flex flex-col items-end text-sm text-gray-500 dark:text-gray-400">
                    <span>GMT</span>
                    <span>+00:00</span>
                </div>
            </motion.div>



            <motion.div variants={tileVariants} className="bg-white dark:bg-gray-800 col-span-2 row-span-6 rounded-2xl p-4 shadow transition">
                <h3 className="text-xl font-semibold mb-2">Network Information</h3>
                <table className="min-w-full bg-gray-800">
                    <thead className="text-white border-b border-t border-gray-500">
                        <tr>
                            <th className="py-2">Parameter</th>
                            <th className="py-2">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="py-2 border-b border-gray-500">
                            <td className="py-2 text-center">IP Address</td>
                            <td className="py-2 text-center">192.168.43.1</td>
                        </tr>
                        <tr className="py-2 border-b border-gray-500">
                            <td className="py-2 text-center">MAC Address</td>
                            <td className="py-2 text-center">23:23:23:23:23</td>
                        </tr>
                        <tr className="py-2 border-b border-gray-500">
                            <td className="py-2 text-center">Net Mask</td>
                            <td className="py-2 text-center">255.0.0.0</td>
                        </tr>
                    </tbody>
                </table>
            </motion.div>

            <motion.div variants={tileVariants} className="bg-white dark:bg-gray-800 rounded-2xl row-span-3 p-4 shadow hover:scale-105 transition">
                <h3 className="font-semibold text-gray-700 dark:text-white">NexDNS Server Status</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{isDnsServerOnline ? "Ture" : "False"}</p>
            </motion.div>

            <motion.div variants={tileVariants} className="bg-white dark:bg-gray-800 rounded-2xl row-span-3 p-4 shadow hover:scale-105 transition">
                <h3 className="font-semibold text-gray-700 dark:text-white">NexDNS Server Status</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">View usage reports.</p>
            </motion.div>

            <motion.div variants={tileVariants} className="bg-white dark:bg-gray-800 rounded-2xl row-span-3 p-4 shadow hover:scale-105 transition">
                <h3 className="font-semibold text-gray-700 dark:text-white">NexDNS Server Status</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">View usage reports.</p>
            </motion.div>

            <motion.div variants={tileVariants} className="bg-white dark:bg-gray-800 rounded-2xl row-span-3 p-4 shadow hover:scale-105 transition">
                <h3 className="font-semibold text-gray-700 dark:text-white">NexDNS Server Status</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">View usage reports.</p>
            </motion.div>


        </motion.div>
    )
}

export default Dashboard