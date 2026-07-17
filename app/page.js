"use client";

import Image from "next/image";

export default function BrowserOverlay({ children }) {


  const apkDownloadLink = "/apk/app.apk";

  return (
    <div className="fixed inset-0 z-50 bg-[#0A051E] to-[#1B103A] flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-purple-700">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/logo.jpg"
            alt="Rush Arena Logo"
            width={48}
            height={48}
            className="rounded"
          />
          <span className="text-yellow-400 text-xl font-bold">Fight Zone</span>
        </div>

        <a
          href={apkDownloadLink}
          download
          className="bg-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
        >
          Update Now
        </a>
      </header>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center text-center flex-1 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          সুসংবাদ! <br />
          <span className="text-purple-400">Rush Arena এখন Fight Zone</span>
        </h1>

        <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-xl">
          চিন্তার কোনো কারণ নেই! শুধু নতুন <span className="text-white font-semibold">Fight Zone</span> অ্যাপটি ইনস্টল করুন। আপনার আগের অ্যাকাউন্ট, ব্যালেন্স এবং সকল তথ্য নিরাপদভাবেই ব্যবহার করতে পারবেন।
        </p>
        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a
            href={apkDownloadLink}
            download
            className="px-8 py-3 bg-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg transform transition hover:scale-105"
          >
            📱 Download Fight Zone
          </a>

        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-purple-400">10K+</h3>
            <p className="text-gray-400">Active Players</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-400">500+</h3>
            <p className="text-gray-400">Tournaments</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-400">৳100K+</h3>
            <p className="text-gray-400">Prize Pool</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 text-sm text-center py-4 border-t border-purple-700">
        &copy; {new Date().getFullYear()} Rush Arena. All rights reserved.
      </footer>
    </div>
  );
}
