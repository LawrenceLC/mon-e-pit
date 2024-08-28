import React from "react";

export default function Home() {
  return (
    <main className="flex bg-Background min-h-screen flex-col items-center pt-6">
      <div className="flex w-full flex-row items-center flex-nowrap justify-center shadow-xl p-6 h-96 ">
        <div className="pr-6 pl-6 ">
          <h1 className="font-thin tracking-wider inline">Lighten</h1>
          <h1 className="font-normal inline"> the</h1>
          <h1 className="font-bold tracking-tight inline"> load.</h1>
          <h1>Mo&apos; money mo&apos; problems.</h1>
          <button className="btn "> Give it to me</button>
        </div>
        <div className="pr-6 justify-start">
          <iframe
            src="https://www.youtube-nocookie.com/embed/1ei9IWJtb6w?si=uoqVG-pUAjjHPX3p"
            allowFullScreen="true"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="flex w-full flex-row items-center flex-nowrap justify-center shadow-xl p-6 h-96 ">
        <div>
          <h1>Research indicates that the average U.K citizen earns money.</h1>
          <h1 className="inline">Together, we can </h1>
          <h1 className="inline font-bold ">change that</h1>
          <h1 className="inline">.</h1>
        </div>
      </div>
    </main>
  );
}
