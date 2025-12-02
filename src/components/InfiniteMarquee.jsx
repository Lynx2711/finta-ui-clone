import React from 'react'

const InfiniteMarquee = (
  {
    children,
    speed = 30,
    pauseOnHover = true,
    gap = "gap-12",
    direction = "left",
    className = ''

  }
) => {
  return (
    <>
    <div className={`overflow-hidden ${className} flex`}> 
      <div
      className=
        {`
        flex ${gap}
        ${direction === "right" ? "animate-marquee-reverse" : "animate-marquee"}
        ${pauseOnHover ? "hover:animation-paused" : ""
        }
        `} 
          style={{ "--duration": `${speed}s` }}
        >
{[...children, ...children].map((child, i) => (
  <div key={i} className="flex shrink-0 items-center justify-center">
    {/* Assuming child is an <img> or contains one */}
    <div className="w-20 h-20 flex items-center justify-center">
      {React.cloneElement(child, {
        className: `${child.props.className || ''} object-contain w-full h-full`
      })}
    </div>
  </div>
))}

      </div>
      </div>
      </>
  )}
export default InfiniteMarquee
