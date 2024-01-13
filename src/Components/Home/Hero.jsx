import React from "react";

function Hero() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[50rem]">
            <h1 className="mb-5 sm:text-5xl text-2xl font-bold">Effortless Expense Tracking for a Smarter Financial Future.</h1>
            <button className="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
