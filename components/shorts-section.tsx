"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Eye, ThumbsUp, MessageCircle } from "lucide-react"

export function ShortsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const scrollAmount = 424 // card width (400) + gap (24)
    if (direction === "right") {
      container.scrollTo({ left: container.scrollLeft + scrollAmount, behavior: "smooth" })
    } else {
      container.scrollTo({ left: container.scrollLeft - scrollAmount, behavior: "smooth" })
    }
  }

  const shorts = [
    {
      title: "Шульман о своем муже",
      views: "907K",
      likes: "12K",
      comments: "759",
      bgColor: "#b0b0b0",
      thumbnail: "https://img.youtube.com/vi/GzhWtOpzNaM/maxresdefault.jpg",
      url: "https://youtu.be/GzhWtOpzNaM",
    },
    {
      title: "Шульман о том, как узнать провинциала",
      views: "137K",
      likes: "3K",
      comments: "200",
      bgColor: "#9e9e9e",
      thumbnail: "https://img.youtube.com/vi/NZSvEL5Koec/maxresdefault.jpg",
      url: "https://youtu.be/NZSvEL5Koec",
    },
    {
      title: "Шульман: Петербург хотят стереть",
      views: "121K",
      likes: "2.8K",
      comments: "387",
      bgColor: "#c8c8c8",
      thumbnail: "https://img.youtube.com/vi/CnL4XUPugek/maxresdefault.jpg",
      url: "https://youtu.be/CnL4XUPugek",
    },
    {
      title: "Шульман про Венедиктова",
      views: "87K",
      likes: "1.5K",
      comments: "67",
      bgColor: "#a8a8a8",
      thumbnail: "https://img.youtube.com/vi/guH5DVvSjHc/maxresdefault.jpg",
      url: "https://youtu.be/guH5DVvSjHc",
    },
    {
      title: "«Екатерина Михайловна, вам помочь?»",
      views: "79K",
      likes: "1.8K",
      comments: "98",
      bgColor: "#bdbdbd",
      thumbnail: "https://img.youtube.com/vi/ZrAwR095XkY/maxresdefault.jpg",
      url: "https://youtu.be/ZrAwR095XkY",
    },
    {
      title: "Шульман о своей молодости",
      views: "56K",
      likes: "1.4K",
      comments: "50",
      bgColor: "#d4d4d4",
      thumbnail: "https://img.youtube.com/vi/b7_mgxTc7Lw/maxresdefault.jpg",
      url: "https://youtu.be/b7_mgxTc7Lw",
    },
    {
      title: "Шульман про страх перемен",
      views: "34K",
      likes: "1.2K",
      comments: "89",
      bgColor: "#b8b8b8",
      thumbnail: "https://img.youtube.com/vi/P5WBwsBnTcQ/maxresdefault.jpg",
      url: "https://youtu.be/P5WBwsBnTcQ",
    },
    {
      title: "Россия — страна детдомовцев?",
      views: "18K",
      likes: "577",
      comments: "33",
      bgColor: "#acacac",
      thumbnail: "https://img.youtube.com/vi/_lr71Z4FLn4/maxresdefault.jpg",
      url: "https://youtu.be/_lr71Z4FLn4",
    },
    {
      title: "Шульман о своих политических амбициях",
      views: "15K",
      likes: "525",
      comments: "49",
      bgColor: "#c0c0c0",
      thumbnail: "https://img.youtube.com/vi/GRHET0B6lm4/maxresdefault.jpg",
      url: "https://youtu.be/GRHET0B6lm4",
    },
    {
      title: "Шульман о политологах",
      views: "15K",
      likes: "303",
      comments: "14",
      bgColor: "#b4b4b4",
      thumbnail: "https://img.youtube.com/vi/GmPwJ8XfUhk/maxresdefault.jpg",
      url: "https://youtu.be/GmPwJ8XfUhk",
    },
    {
      title: "Шульман о смене режима",
      views: "13K",
      likes: "291",
      comments: "14",
      bgColor: "#a0a0a0",
      thumbnail: "https://img.youtube.com/vi/OTUYf-XikVs/maxresdefault.jpg",
      url: "https://youtu.be/OTUYf-XikVs",
    },
    {
      title: "Шульман о мобильности в России",
      views: "12K",
      likes: "321",
      comments: "7",
      bgColor: "#c4c4c4",
      thumbnail: "https://img.youtube.com/vi/tMRy1D16nos/maxresdefault.jpg",
      url: "https://youtu.be/tMRy1D16nos",
    },
    {
      title: "Шульман про свой культ личности",
      views: "10K",
      likes: "322",
      comments: "19",
      bgColor: "#b0b0b0",
      thumbnail: "https://img.youtube.com/vi/4-EWXEvslMU/maxresdefault.jpg",
      url: "https://youtu.be/4-EWXEvslMU",
    },
    {
      title: "Шульман про объединение оппозиции",
      views: "8.2K",
      likes: "215",
      comments: "7",
      bgColor: "#9a9a9a",
      thumbnail: "https://img.youtube.com/vi/njsBdaaQgFk/maxresdefault.jpg",
      url: "https://youtu.be/njsBdaaQgFk",
    },
  ]

  const renderCard = (short: typeof shorts[number], index: number, setKey: string) => {
    const content = (
      <>
        <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-300" style={{ backgroundColor: short.bgColor }}>
          {short.thumbnail && (
            <img
              src={short.thumbnail}
              alt={short.title}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
          {/* Stats overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
            <div className="flex items-center gap-6 text-white text-xl font-semibold">
              <span className="flex items-center gap-2">
                <Eye className="w-6 h-6" />
                {short.views}
              </span>
              <span className="flex items-center gap-2">
                <ThumbsUp className="w-6 h-6" />
                {short.likes}
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                {short.comments}
              </span>
            </div>
          </div>
        </div>
        <h3 className="font-sans text-2xl font-semibold mt-4 line-clamp-2">{short.title}</h3>
      </>
    )

    return (
      <div key={`${setKey}-${index}`} className="flex-shrink-0 w-[400px]">
        {short.url ? (
          <a
            href={short.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-pointer"
          >
            {content}
          </a>
        ) : (
          <div className="group">
            {content}
          </div>
        )}
      </div>
    )
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 leading-tight text-balance"
          >
            Shorts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto"
          >
            Short-form vertical content that captures attention and drives engagement.
          </motion.p>
        </div>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 border-2 border-border hover:border-accent shadow-lg flex items-center justify-center transition-all hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 border-2 border-border hover:border-accent shadow-lg flex items-center justify-center transition-all hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="relative flex">
            {/* Multiple sets for seamless infinite scroll */}
            {Array.from({ length: 8 }).map((_, setIndex) => (
              <div
                key={`set-${setIndex}`}
                className={`flex gap-6 animate-scroll-shorts${setIndex > 0 ? ' ml-6' : ''}`}
                aria-hidden={setIndex > 0 ? "true" : undefined}
              >
                {shorts.map((short, index) => renderCard(short, index, `set${setIndex}`))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
