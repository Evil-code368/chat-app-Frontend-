import React from 'react'

const Report = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 px-6 py-12 text-center">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-violet-300 sm:text-6xl">
          Report Page
        </h1>
        <p className="mb-6 text-lg font-semibold text-cyan-200">
          This feature is coming soon — stay tuned for new tools to keep your chat experience safe and smooth.
        </p>
        <p className="text-sm text-gray-400">
          We’re building a better way to report issues, manage safely, and keep conversations welcoming.
        </p>
      </div>
    </div>
  )
}

export default Report

