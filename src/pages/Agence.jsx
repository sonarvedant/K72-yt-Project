import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const imageArray = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=480&h=640&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=480&h=640&q=80',
]

const Agence = () => {
  const containerRef = useRef(null)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    imageArray.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: '#page1',
        start: 'top top',
        end: 'bottom bottom',
        pin: imageDivRef.current,
        pinSpacing: false,
        scrub: 0.5,
        onUpdate: (self) => {
          const index = Math.min(
            Math.floor(self.progress * imageArray.length),
            imageArray.length - 1
          )
          if (imageRef.current && imageRef.current.src !== imageArray[index]) {
            imageRef.current.src = imageArray[index]
          }
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="parent bg-black text-white selection:bg-white selection:text-black">
      <div id="page1" className="relative min-h-[260vh]">
         <div
          ref={imageDivRef}
          className="absolute top-[20vh] left-[27vw] z-0 h-[28vw] w-[19vw] overflow-hidden rounded-2xl md:rounded-3xl pointer-events-none"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src={imageArray[0]}
            alt="Team member"
          />
        </div>
        <div className="relative z-9 font-[font2] select-none pointer-events-none">
          <div className="pt-[46vh] overflow-hidden">
            <h1 className="text-[20.5vw] font-black uppercase tracking-tight leading-[17.2vw] text-left px-[2vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="mt-40 p-6 lg:mt-64 lg:pl-[42%] lg:pr-16 pointer-events-auto">
            <p className="text-xl leading-relaxed lg:text-4xl font-light">
              Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros
              egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une
              histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la
              tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
              des marques influentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence