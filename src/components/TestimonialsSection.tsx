const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "带着长长的待办清单来到校园，Macaron 五分钟内就为我构建了一个课程助手和俱乐部查找器——突然间，这个学期感觉不再压抑。",
      bgColor: "#eade39",
      textColor: "#000000",
      avatar: "https://macaron.im/assets/image/avatar-1.jpg",
      align: "left"
    },
    {
      text: "我想学做饭但害怕半途而废；Macaron 为我制作了一个初学者烹饪日记，两周后我可以自己做三道菜。",
      bgColor: "#ff5816",
      textColor: "#ffffff",
      avatar: "https://macaron.im/assets/image/avatar-2.jpg",
      align: "right"
    },
    {
      text: "在回家之前，它记得我的猫 Tequila 一周前的事，并问我是否很快会见到她。这样的记忆让我感到特别。",
      bgColor: "#8ca72b",
      textColor: "#ffffff",
      avatar: "https://macaron.im/assets/image/avatar-1.jpg",
      align: "left"
    },
    {
      text: "我说它听起来太呆板，然后它立刻转换成像个亲密的朋友聊天。一个与我一起成长的 AI 真是奇妙。",
      bgColor: "#ff98a2",
      textColor: "rgba(0, 0, 0, 0.7)",
      avatar: "https://macaron.im/assets/image/avatar-2.jpg",
      align: "right"
    },
    {
      text: "有一天我说我累了，它用文字奉上一杯茉莉花茶。那种温柔的关怀真的感动了我。",
      bgColor: "#eade39",
      textColor: "#55000b",
      avatar: "https://macaron.im/assets/image/avatar-1.jpg",
      align: "left"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#f9f7f2]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#161615] mb-4">第一手印象</h2>
          <p className="text-lg md:text-xl text-[#595856] max-w-2xl mx-auto">
            与我们 AI 合作伙伴合作的思想家和创作者的真实反馈
          </p>
        </div>
        
        <div className="space-y-8 mb-16 relative px-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`relative max-w-[329px] md:max-w-[500px] lg:max-w-[621px] ${
                testimonial.align === 'left' ? 'mr-auto ml-2' : 'ml-auto mr-2'
              } mb-8`}
            >
              <div 
                className={`px-5 py-4 rounded-2xl relative shadow-sm ${
                  testimonial.align === 'left' ? 'ml-14' : 'mr-14'
                }`}
                style={{ backgroundColor: testimonial.bgColor }}
              >
                <p 
                  className="text-base leading-relaxed font-normal" 
                  style={{ color: testimonial.textColor }}
                >
                  {testimonial.text}
                </p>
                <div 
                  className={`absolute -bottom-4 ${testimonial.align === 'left' ? 'left-0' : 'right-0'} w-2 h-2 rounded-full`}
                  style={{ backgroundColor: testimonial.bgColor }}
                />
                <div 
                  className={`absolute -bottom-1 ${testimonial.align === 'left' ? 'left-2' : 'right-2'} w-3 h-3 rounded-full`}
                  style={{ backgroundColor: testimonial.bgColor }}
                />
              </div>
              <div className={`absolute -bottom-4 ${testimonial.align === 'left' ? 'left-0' : 'right-0'} w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full shadow-md border-2 border-white`}>
                <img 
                  src={testimonial.avatar} 
                  alt="" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="44" viewBox="0 0 12 44" fill="none">
            <circle cx="6" cy="6" r="6" fill="#FC4C53"></circle>
            <circle cx="6" cy="26" r="4" fill="#FC4C53"></circle>
            <circle cx="6" cy="42" r="2" fill="#FC4C53"></circle>
          </svg>
        </div>
        
        <div className="text-center">
          <p className="text-2xl text-[#ff586a] font-normal leading-snug">
            我们期待听到你与 Macaron 的故事。
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;