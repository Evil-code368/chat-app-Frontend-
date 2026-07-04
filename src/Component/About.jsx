import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.24),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200">
                About ChatLove
              </p>
              <h1 className="mb-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Real connections made easy.
                <span className="block text-purple-300">Meet, chat, and discover people instantly.</span>
              </h1>
              <p className="mb-10 max-w-xl text-lg leading-8 text-gray-300">
                ChatLove is a modern platform built for spontaneous one-on-one conversations with people around the world. We make it simple to connect, stay anonymous if you choose, and enjoy real-time chats without the clutter.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/chat" className="inline-block w-full sm:w-auto">
                  <button className="w-full rounded-3xl bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-500">
                    Start chatting
                  </button>
                </Link>
                <Link to="/" className="inline-block w-full sm:w-auto">
                  <button className="w-full rounded-3xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10">
                    Back to home
                  </button>
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3 rounded-3xl bg-slate-900/80 px-5 py-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-2xl text-purple-200">
                  💬
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-purple-200/80">Why ChatLove</p>
                  <p className="text-lg font-semibold text-white">Fast. Friendly. Focused.</p>
                </div>
              </div>
              <div className="space-y-5 text-gray-300">
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-2xl font-semibold text-white">Instant matching</p>
                  <p className="mt-2 text-sm text-gray-400">Pair with someone new in seconds with no waiting rooms or complicated profiles.</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-2xl font-semibold text-white">Secure environment</p>
                  <p className="mt-2 text-sm text-gray-400">We keep the experience safe and respectful so conversations stay comfortable.</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-2xl font-semibold text-white">Global community</p>
                  <p className="mt-2 text-sm text-gray-400">Connect with people from many countries and backgrounds anytime, anywhere.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 text-center shadow-xl shadow-black/10">
            <p className="text-4xl font-black text-white">10K+</p>
            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-gray-400">Daily conversations</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 text-center shadow-xl shadow-black/10">
            <p className="text-4xl font-black text-white">150+</p>
            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-gray-400">Countries served</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 text-center shadow-xl shadow-black/10">
            <p className="text-4xl font-black text-white">24/7</p>
            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-gray-400">Live connections</p>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">Our mission</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Creating space for authentic conversations</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-gray-300">
                At ChatLove, we believe the best connections happen when people can meet naturally and openly. Our platform is designed to remove noise and let conversations flow, whether you're looking for a quick chat, a new friend, or a moment of human connection.
              </p>
            </div>
            <div className="space-y-5 text-gray-300">
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-lg font-semibold text-white">No profile pressure</p>
                <p className="mt-2 text-sm">Jump into a chat faster with only the basics required, so the conversation starts sooner.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-lg font-semibold text-white">Respect first</p>
                <p className="mt-2 text-sm">Every interaction is built around respectful behavior and a positive community experience.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-lg font-semibold text-white">Global discovery</p>
                <p className="mt-2 text-sm">Explore conversations with people from new cultures, perspectives, and backgrounds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
