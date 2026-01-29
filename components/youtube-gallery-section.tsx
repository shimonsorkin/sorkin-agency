"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Eye, ThumbsUp, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"

export function YouTubeGallerySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 850 // Scroll roughly two cards at a time
      const currentScroll = container.scrollLeft
      const maxScroll = container.scrollWidth - container.clientWidth

      if (direction === "right" && currentScroll >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" })
      } else if (direction === "left" && currentScroll <= 10) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" })
      } else {
        const targetScroll = direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount
        container.scrollTo({ left: targetScroll, behavior: "smooth" })
      }
    }
  }

  const videos = [
    {
      id: "idaZ2e4PScU",
      title: "Украина разрабатывает дроны. Они достанут до Кремля — военный аналитик Ян Матвеев",
      thumbnail: "https://img.youtube.com/vi/idaZ2e4PScU/maxresdefault.jpg",
      views: "82K",
      likes: "5.1K",
      comments: "579",
      isViral: false,
      url: "https://youtu.be/idaZ2e4PScU",
    },
    {
      id: "6gIBhBT6WpY",
      title: "Вторая волна мобилизации будет еще хуже — Майкл Наки",
      thumbnail: "https://img.youtube.com/vi/6gIBhBT6WpY/maxresdefault.jpg",
      views: "619K",
      likes: "25K",
      comments: "2.5K",
      isViral: false,
      url: "https://youtu.be/6gIBhBT6WpY",
    },
    {
      id: "SY6W_1fwIdA",
      title: "Путин хочет, чтобы вы умирали за «Единую Россию» — Аббас Галлямов",
      thumbnail: "https://img.youtube.com/vi/SY6W_1fwIdA/maxresdefault.jpg",
      views: "103K",
      likes: "6.3K",
      comments: "691",
      isViral: false,
      url: "https://youtu.be/SY6W_1fwIdA",
    },
    {
      id: "slu3jZJNWDI",
      title: "Кремль выдумывает победы для Путина — военный аналитик Ян Матвеев",
      thumbnail: "https://img.youtube.com/vi/slu3jZJNWDI/maxresdefault.jpg",
      views: "173K",
      likes: "7.9K",
      comments: "705",
      isViral: false,
      url: "https://youtu.be/slu3jZJNWDI",
    },
    {
      id: "Fy8yN9u0Ha0",
      title: "Путин изолировался от правды — политолог Аббас Галлямов",
      thumbnail: "https://img.youtube.com/vi/Fy8yN9u0Ha0/maxresdefault.jpg",
      views: "383K",
      likes: "17K",
      comments: "1.8K",
      isViral: false,
      url: "https://youtu.be/Fy8yN9u0Ha0",
    },
    {
      id: "4IVa9R9fNdY",
      title: "Рубль стремительно падает. Что будет дальше? Экономист Сергей Алексашенко",
      thumbnail: "https://img.youtube.com/vi/4IVa9R9fNdY/maxresdefault.jpg",
      views: "758K",
      likes: "22K",
      comments: "1.7K",
      isViral: false,
      url: "https://youtu.be/4IVa9R9fNdY",
    },
    {
      id: "O5EeqWgLDMM",
      title: "Путин — лузер года. Политолог Майкл Наки",
      thumbnail: "https://img.youtube.com/vi/O5EeqWgLDMM/maxresdefault.jpg",
      views: "425K",
      likes: "19K",
      comments: "1.4K",
      isViral: false,
      url: "https://youtu.be/O5EeqWgLDMM",
    },
    {
      id: "6fjs_HVzpqY",
      title: "Зимой Путин попытается взять Киев? Военный аналитик Ян Матвеев",
      thumbnail: "https://img.youtube.com/vi/6fjs_HVzpqY/maxresdefault.jpg",
      views: "155K",
      likes: "7.6K",
      comments: "778",
      isViral: false,
      url: "https://youtu.be/6fjs_HVzpqY",
    },
    {
      id: "RG2jC21zsVQ",
      title: "Какова реальная стоимость рубля? Экономист Сергей Алексашенко",
      thumbnail: "https://img.youtube.com/vi/RG2jC21zsVQ/maxresdefault.jpg",
      views: "1M",
      likes: "30K",
      comments: "3.1K",
      isViral: true,
      url: "https://youtu.be/RG2jC21zsVQ",
    },
    {
      id: "3MtCoqTqPW0",
      title: "Как будут судить военных преступников? Отвечает адвокат Илья Новиков",
      thumbnail: "https://img.youtube.com/vi/3MtCoqTqPW0/maxresdefault.jpg",
      views: "494K",
      likes: "21K",
      comments: "1.3K",
      isViral: false,
      url: "https://youtu.be/3MtCoqTqPW0",
    },
    {
      id: "28B5-KHcJNM",
      title: "Российские нефть и газ больше никому не нужны — Михаил Крутихин",
      thumbnail: "https://img.youtube.com/vi/28B5-KHcJNM/maxresdefault.jpg",
      views: "443K",
      likes: "16K",
      comments: "1.9K",
      isViral: false,
      url: "https://youtu.be/28B5-KHcJNM",
    },
    {
      id: "1ntwS8jEDp0",
      title: "Империя погибает — Виктор Шендерович",
      thumbnail: "https://img.youtube.com/vi/1ntwS8jEDp0/maxresdefault.jpg",
      views: "615K",
      likes: "28K",
      comments: "3K",
      isViral: false,
      url: "https://youtu.be/1ntwS8jEDp0",
    },
    {
      id: "I7CyJmumIIA",
      title: "Кадыров отдаст жизнь за Путина — Тумсо Абдурахманов",
      thumbnail: "https://img.youtube.com/vi/I7CyJmumIIA/maxresdefault.jpg",
      views: "514K",
      likes: "14K",
      comments: "2.6K",
      isViral: false,
      url: "https://youtu.be/I7CyJmumIIA",
    },
    {
      id: "E9uTCm_tSBw",
      title: "Два триллиона из бюджета России на «ДНР» — Сергей Алексашенко",
      thumbnail: "https://img.youtube.com/vi/E9uTCm_tSBw/maxresdefault.jpg",
      views: "495K",
      likes: "20K",
      comments: "2.1K",
      isViral: false,
      url: "https://youtu.be/E9uTCm_tSBw",
    },
    {
      id: "lROB_gmRFEk",
      title: "Роль ФСБ в войне с Украиной — Андрей Солдатов",
      thumbnail: "https://img.youtube.com/vi/lROB_gmRFEk/maxresdefault.jpg",
      views: "265K",
      likes: "11K",
      comments: "451",
      isViral: false,
      url: "https://youtu.be/lROB_gmRFEk",
    },
    {
      id: "f_gmMqsfi9g",
      title: "Путинская элита думает, что убивает безнаказанно — Михаил Подоляк",
      thumbnail: "https://img.youtube.com/vi/f_gmMqsfi9g/maxresdefault.jpg",
      views: "764K",
      likes: "37K",
      comments: "3.8K",
      isViral: false,
      url: "https://youtu.be/f_gmMqsfi9g",
    },
    {
      id: "41ohaMfL68s",
      title: "Бюджет России будет разворован — Евгений Чичваркин",
      thumbnail: "https://img.youtube.com/vi/41ohaMfL68s/maxresdefault.jpg",
      views: "608K",
      likes: "28K",
      comments: "1.6K",
      isViral: false,
      url: "https://youtu.be/41ohaMfL68s",
    },
    {
      id: "eB0SMcbAu74",
      title: "Путин уничтожил российский автопром — Сергей Асланян",
      thumbnail: "https://img.youtube.com/vi/eB0SMcbAu74/maxresdefault.jpg",
      views: "1.8M",
      likes: "60K",
      comments: "6.9K",
      isViral: true,
      url: "https://youtu.be/eB0SMcbAu74",
    },
    {
      id: "-Oy7zy0o4-M",
      title: "Война — это огромный удар по экономике — Сергей Гуриев",
      thumbnail: "https://img.youtube.com/vi/-Oy7zy0o4-M/maxresdefault.jpg",
      views: "769K",
      likes: "29K",
      comments: "1.8K",
      isViral: false,
      url: "https://youtu.be/-Oy7zy0o4-M",
    },
    {
      id: "4wkfQ8UKjVE",
      title: "У Путина нет шансов победить в этой войне — Руслан Левиев",
      thumbnail: "https://img.youtube.com/vi/4wkfQ8UKjVE/maxresdefault.jpg",
      views: "484K",
      likes: "26K",
      comments: "2.7K",
      isViral: false,
      url: "https://youtu.be/4wkfQ8UKjVE",
    },
    {
      id: "14PxXFV70KM",
      title: "Путин уничтожает Россию — Марк Фейгин",
      thumbnail: "https://img.youtube.com/vi/14PxXFV70KM/maxresdefault.jpg",
      views: "290K",
      likes: "16K",
      comments: "925",
      isViral: false,
      url: "https://youtu.be/14PxXFV70KM",
    },
    {
      id: "9c0NQG16sSM",
      title: "Путин разорил Россию — экономист Олег Ицхоки",
      thumbnail: "https://img.youtube.com/vi/9c0NQG16sSM/maxresdefault.jpg",
      views: "638K",
      likes: "25K",
      comments: "2.6K",
      isViral: false,
      url: "https://youtu.be/9c0NQG16sSM",
    },
    {
      id: "w4ki1u8jhQg",
      title: "Путин приказал вербовать зэков на войну — Ольга Романова",
      thumbnail: "https://img.youtube.com/vi/w4ki1u8jhQg/maxresdefault.jpg",
      views: "400K",
      likes: "22K",
      comments: "1.7K",
      isViral: false,
      url: "https://youtu.be/w4ki1u8jhQg",
    },
    {
      id: "N2SuhYzUzCY",
      title: "Путин не выиграет эту войну — Руслан Левиев",
      thumbnail: "https://img.youtube.com/vi/N2SuhYzUzCY/maxresdefault.jpg",
      views: "241K",
      likes: "12K",
      comments: "2K",
      isViral: false,
      url: "https://youtu.be/N2SuhYzUzCY",
    },
    {
      id: "vOZ4GV7bPjQ",
      title: "У Путина нет будущего — Сергей Пархоменко",
      thumbnail: "https://img.youtube.com/vi/vOZ4GV7bPjQ/maxresdefault.jpg",
      views: "306K",
      likes: "17K",
      comments: "2K",
      isViral: false,
      url: "https://youtu.be/vOZ4GV7bPjQ",
    },
    {
      id: "cLVRHbZNbJQ",
      title: "Кадыров уходит в отставку? Итоги правления чеченского диктатора",
      thumbnail: "https://img.youtube.com/vi/cLVRHbZNbJQ/maxresdefault.jpg",
      views: "718K",
      likes: "18K",
      comments: "2.3K",
      isViral: false,
      url: "https://youtu.be/cLVRHbZNbJQ",
    },
    {
      id: "ijU-WNVihRQ",
      title: "Москвичи протестуют против войны — политолог Галлямов",
      thumbnail: "https://img.youtube.com/vi/ijU-WNVihRQ/maxresdefault.jpg",
      views: "226K",
      likes: "11K",
      comments: "1.2K",
      isViral: false,
      url: "https://youtu.be/ijU-WNVihRQ",
    },
    {
      id: "zZU6_5RYNQo",
      title: "Украинские войска наступают. Путина застали врасплох — Руслан Левиев",
      thumbnail: "https://img.youtube.com/vi/zZU6_5RYNQo/maxresdefault.jpg",
      views: "671K",
      likes: "30K",
      comments: "3.1K",
      isViral: false,
      url: "https://youtu.be/zZU6_5RYNQo",
    },
    {
      id: "xWpaROKe7h8",
      title: "Люди устали от Путина и пропаганды — Виктор Шендерович",
      thumbnail: "https://img.youtube.com/vi/xWpaROKe7h8/maxresdefault.jpg",
      views: "743K",
      likes: "30K",
      comments: "2.6K",
      isViral: false,
      url: "https://youtu.be/xWpaROKe7h8",
    },
    {
      id: "W7gqJPRvq4E",
      title: "Референдумы Путину не помогут — Марк Фейгин",
      thumbnail: "https://img.youtube.com/vi/W7gqJPRvq4E/maxresdefault.jpg",
      views: "196K",
      likes: "11K",
      comments: "898",
      isViral: false,
      url: "https://youtu.be/W7gqJPRvq4E",
    },
    {
      id: "n6Cu94_srTM",
      title: "Есть ли у Путина деньги на мобилизацию? Отвечает экономист",
      thumbnail: "https://img.youtube.com/vi/n6Cu94_srTM/maxresdefault.jpg",
      views: "571K",
      likes: "19K",
      comments: "1.6K",
      isViral: false,
      url: "https://youtu.be/n6Cu94_srTM",
    },
    {
      id: "Yo47kT9ALNU",
      title: "Вся правда о мобилизации. Военный эксперт Ян Матвеев",
      thumbnail: "https://img.youtube.com/vi/Yo47kT9ALNU/maxresdefault.jpg",
      views: "1.1M",
      likes: "32K",
      comments: "4K",
      isViral: true,
      url: "https://youtu.be/Yo47kT9ALNU",
    },
    {
      id: "h6jAsKM4XRg",
      title: "Мобилизация — это катастрофа. Экономист Олег Ицхоки",
      thumbnail: "https://img.youtube.com/vi/h6jAsKM4XRg/maxresdefault.jpg",
      views: "776K",
      likes: "31K",
      comments: "2.7K",
      isViral: false,
      url: "https://youtu.be/h6jAsKM4XRg",
    },
    {
      id: "iIR4R8O7Y3g",
      title: "Путин полностью потерял контроль — политолог Аббас Галлямов",
      thumbnail: "https://img.youtube.com/vi/iIR4R8O7Y3g/maxresdefault.jpg",
      views: "1M",
      likes: "35K",
      comments: "2.8K",
      isViral: true,
      url: "https://youtu.be/iIR4R8O7Y3g",
    },
    {
      id: "7IwvNIx_fzg",
      title: "Готов ли Путин к ядерной войне? — Майкл Наки",
      thumbnail: "https://img.youtube.com/vi/7IwvNIx_fzg/maxresdefault.jpg",
      views: "431K",
      likes: "18K",
      comments: "1.6K",
      isViral: false,
      url: "https://youtu.be/7IwvNIx_fzg",
    },
    {
      id: "anKR48qVJvY",
      title: "Кто взорвал Крымский мост? Отвечает военный эксперт Ян Матвеев",
      thumbnail: "https://img.youtube.com/vi/anKR48qVJvY/maxresdefault.jpg",
      views: "931K",
      likes: "24K",
      comments: "3.3K",
      isViral: false,
      url: "https://youtu.be/anKR48qVJvY",
    },
    {
      id: "xnTwoM07Nhk",
      title: "Удары по Киеву. Путин мстит за Крымский мост — Ян Матвеев",
      thumbnail: "https://img.youtube.com/vi/xnTwoM07Nhk/maxresdefault.jpg",
      views: "535K",
      likes: "16K",
      comments: "3.3K",
      isViral: false,
      url: "https://youtu.be/xnTwoM07Nhk",
    },
    {
      id: "5EL8AV-tadA",
      title: "Мобилизованных кинули на войну без подготовки. Многие уже погибли — Ян Матвеев",
      thumbnail: "https://img.youtube.com/vi/5EL8AV-tadA/maxresdefault.jpg",
      views: "448K",
      likes: "15K",
      comments: "1.9K",
      isViral: false,
      url: "https://youtu.be/5EL8AV-tadA",
    },
    {
      id: "6qEOmNxJpkw",
      title: "Путин принес войну в Россию. Взрываются военные самолеты — Ян Матвеев",
      thumbnail: "https://img.youtube.com/vi/6qEOmNxJpkw/maxresdefault.jpg",
      views: "305K",
      likes: "11K",
      comments: "1.4K",
      isViral: false,
      url: "https://youtu.be/6qEOmNxJpkw",
    },
    {
      id: "bsNymqJqUmU",
      title: "Путин загнан в угол — Майкл Наки",
      thumbnail: "https://img.youtube.com/vi/bsNymqJqUmU/maxresdefault.jpg",
      views: "871K",
      likes: "38K",
      comments: "2.6K",
      isViral: false,
      url: "https://youtu.be/bsNymqJqUmU",
    },
    {
      id: "os4ImTpo6mM",
      title: "Пропаганда требует крови — Илья Шепелин",
      thumbnail: "https://img.youtube.com/vi/os4ImTpo6mM/maxresdefault.jpg",
      views: "232K",
      likes: "12K",
      comments: "1.1K",
      isViral: false,
      url: "https://youtu.be/os4ImTpo6mM",
    },
    {
      id: "jQV3AqX__x8",
      title: "Путин объявил военную экономику — Сергей Алексашенко",
      thumbnail: "https://img.youtube.com/vi/jQV3AqX__x8/maxresdefault.jpg",
      views: "548K",
      likes: "17K",
      comments: "1.4K",
      isViral: false,
      url: "https://youtu.be/jQV3AqX__x8",
    },
    {
      id: "bRcnG3NPYM4",
      title: "Раскол элит начался — Майкл Наки",
      thumbnail: "https://img.youtube.com/vi/bRcnG3NPYM4/maxresdefault.jpg",
      views: "1M",
      likes: "44K",
      comments: "2.5K",
      isViral: true,
      url: "https://youtu.be/bRcnG3NPYM4",
    },
    {
      id: "nAXsSA51PA4",
      title: "Мобилизованные массово погибают — военный эксперт Ян Матвеев",
      thumbnail: "https://img.youtube.com/vi/nAXsSA51PA4/maxresdefault.jpg",
      views: "667K",
      likes: "21K",
      comments: "2.9K",
      isViral: false,
      url: "https://youtu.be/nAXsSA51PA4",
    },
    {
      id: "kWZ4bQAbmbA",
      title: "Путин сдал Херсон — Майкл Наки",
      thumbnail: "https://img.youtube.com/vi/kWZ4bQAbmbA/maxresdefault.jpg",
      views: "352K",
      likes: "24K",
      comments: "1.9K",
      isViral: false,
      url: "https://youtu.be/kWZ4bQAbmbA",
    },
    {
      id: "LwRx9WMU8SM",
      title: "Он влиятельнее Шойгу и генералов",
      thumbnail: "https://img.youtube.com/vi/LwRx9WMU8SM/maxresdefault.jpg",
      views: "275K",
      likes: "9.9K",
      comments: "1.1K",
      isViral: false,
      url: "https://youtu.be/LwRx9WMU8SM",
    },
    {
      id: "WfTRdmfC8kY",
      title: "Вторая волна мобилизации будет зимой — Майкл Наки",
      thumbnail: "https://img.youtube.com/vi/WfTRdmfC8kY/maxresdefault.jpg",
      views: "1.6M",
      likes: "53K",
      comments: "5.9K",
      isViral: true,
      url: "https://youtu.be/WfTRdmfC8kY",
    },
    {
      id: "7yZ-BvEfVeM",
      title: "Итоги девяти месяцев войны. Военный аналитик Ян Матвеев",
      thumbnail: "https://img.youtube.com/vi/7yZ-BvEfVeM/maxresdefault.jpg",
      views: "197K",
      likes: "9.8K",
      comments: "1K",
      isViral: false,
      url: "https://youtu.be/7yZ-BvEfVeM",
    },
    {
      id: "yewnw5on8no",
      title: "Путин катастрофически переоценивает себя — Владимир Милов",
      thumbnail: "https://img.youtube.com/vi/yewnw5on8no/maxresdefault.jpg",
      views: "361K",
      likes: "20K",
      comments: "1.4K",
      isViral: false,
      url: "https://youtu.be/yewnw5on8no",
    },
    {
      id: "FMkOiBK7X8Q",
      title: "За олигархами началась охота. Ответят за все — Майкл Наки",
      thumbnail: "https://img.youtube.com/vi/FMkOiBK7X8Q/maxresdefault.jpg",
      views: "634K",
      likes: "28K",
      comments: "1.9K",
      isViral: false,
      url: "https://youtu.be/FMkOiBK7X8Q",
    },
    {
      id: "3lTw8C6Wcu8",
      title: "Все устали от лжи Путина — политолог Аббас Галлямов",
      thumbnail: "https://img.youtube.com/vi/3lTw8C6Wcu8/maxresdefault.jpg",
      views: "632K",
      likes: "26K",
      comments: "2.2K",
      isViral: false,
      url: "https://youtu.be/3lTw8C6Wcu8",
    },
  ]

  const handleVideoClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // Use original video order
  const sortedVideos = videos

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-8"
          >
            <div className="text-center">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent">51</div>
              <div className="text-sm sm:text-base text-muted-foreground mt-1">Episodes</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent">30M+</div>
              <div className="text-sm sm:text-base text-muted-foreground mt-1">Views</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent">1.17M+</div>
              <div className="text-sm sm:text-base text-muted-foreground mt-1">Likes</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent">108K+</div>
              <div className="text-sm sm:text-base text-muted-foreground mt-1">Comments</div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 leading-tight text-balance"
          >
            <span className="text-accent">30 Million Views.</span> One Channel. 8 Months.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto"
          >
            In May 2022, I pitched a weekly political analysis show to Alexei Navalny, got a yes, and built it from scratch — hosting and producing every episode for eight months.
          </motion.p>
        </div>
      </div>

        {/* Auto-scrolling Gallery */}
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
            className="overflow-x-auto scrollbar-hide group/gallery"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="relative flex"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
            {/* First set of videos */}
            <div className="flex gap-6 animate-scroll-videos">
              {sortedVideos.map((video, index) => (
                <div key={`set1-${index}`} className="flex-shrink-0 w-[400px]">
                  <div
                    onClick={() => handleVideoClick(video.url)}
                    className="group cursor-pointer"
                  >
                    <div className="relative bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                      {/* Viral Badge */}
                      {video.isViral && (
                        <div className="absolute top-4 left-4 z-10 px-4 py-1.5 bg-accent text-white text-xs font-bold rounded-full shadow-lg">
                          1M+ VIEWS
                        </div>
                      )}

                      {/* Thumbnail */}
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        />

                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-accent/90 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg">
                            <Play className="w-9 h-9 text-white ml-1 fill-current" />
                          </div>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="p-8">
                        <h3 className="font-sans text-lg font-medium mb-6 line-clamp-2 min-h-[3.5rem]">
                          {video.title}
                        </h3>

                        {/* Stats - BOLD AND PROMINENT */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <Eye className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                            <div className="font-serif text-3xl font-bold text-foreground">{video.views}</div>
                            <div className="text-xs text-muted-foreground mt-1">Views</div>
                          </div>
                          <div className="text-center">
                            <ThumbsUp className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                            <div className="font-serif text-3xl font-bold text-foreground">{video.likes}</div>
                            <div className="text-xs text-muted-foreground mt-1">Likes</div>
                          </div>
                          <div className="text-center">
                            <MessageCircle className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                            <div className="font-serif text-3xl font-bold text-foreground">{video.comments}</div>
                            <div className="text-xs text-muted-foreground mt-1">Comments</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-6 animate-scroll-videos ml-6" aria-hidden="true">
              {sortedVideos.map((video, index) => (
                <div key={`set2-${index}`} className="flex-shrink-0 w-[400px]">
                  <div
                    onClick={() => handleVideoClick(video.url)}
                    className="group cursor-pointer"
                  >
                    <div className="relative bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                      {/* Viral Badge */}
                      {video.isViral && (
                        <div className="absolute top-4 left-4 z-10 px-4 py-1.5 bg-accent text-white text-xs font-bold rounded-full shadow-lg">
                          1M+ VIEWS
                        </div>
                      )}

                      {/* Thumbnail */}
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        />

                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-accent/90 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg">
                            <Play className="w-9 h-9 text-white ml-1 fill-current" />
                          </div>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="p-8">
                        <h3 className="font-sans text-lg font-medium mb-6 line-clamp-2 min-h-[3.5rem]">
                          {video.title}
                        </h3>

                        {/* Stats - BOLD AND PROMINENT */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <Eye className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                            <div className="font-serif text-3xl font-bold text-foreground">{video.views}</div>
                            <div className="text-xs text-muted-foreground mt-1">Views</div>
                          </div>
                          <div className="text-center">
                            <ThumbsUp className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                            <div className="font-serif text-3xl font-bold text-foreground">{video.likes}</div>
                            <div className="text-xs text-muted-foreground mt-1">Likes</div>
                          </div>
                          <div className="text-center">
                            <MessageCircle className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                            <div className="font-serif text-3xl font-bold text-foreground">{video.comments}</div>
                            <div className="text-xs text-muted-foreground mt-1">Comments</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}
