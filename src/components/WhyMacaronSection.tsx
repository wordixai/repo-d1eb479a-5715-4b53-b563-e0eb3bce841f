const WhyMacaronSection = () => {
  const features = [
    {
      title: "Macaron 是你的个人代理",
      description: "Macaron 的目的不是让你更努力工作，而是帮助你生活得更好。你的生活最为重要。",
      bgImage: "/assets/image/why-macaron/bg1.svg",
      decoration: "/assets/image/why-macaron/decoration1.png",
      textColor: "#42036C",
      reverse: false
    },
    {
      title: "你的 Macaron 是真正独特的",
      description: "通过个人测试和深度记忆，Macaron 与你共同成长，并记住重要的事，就像真正的朋友一样。",
      bgImage: "/assets/image/why-macaron/bg2.svg",
      decoration: "/assets/image/why-macaron/decoration2.png",
      textColor: "#950200",
      reverse: true
    },
    {
      title: "没有演示，只有真正的解决方案",
      description: "Macaron 构建你真正需要的实用工具。只需一个简单的请求，无需繁琐调整。",
      bgImage: "/assets/image/why-macaron/bg3.svg",
      decoration: "/assets/image/why-macaron/decoration3.png",
      textColor: "#695A00",
      reverse: false
    }
  ];

  return (
    <section className="w-full pt-12 pb-0 md:py-24">
      <div className="max-w-7xl mx-auto md:px-4">
        <div className="text-center mb-12 md:mb-16 p-8">
          <h2 className="text-4xl md:text-5xl font-serif text-[#161615] mb-4">为什么选择 Macaron</h2>
          <p className="text-lg md:text-xl text-[#595856] max-w-2xl mx-auto">
            其他 AI 助手帮助你工作。Macaron 帮助你生活得更好。
          </p>
        </div>
        
        <div className="md:space-y-6 max-w-[960px] md:mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`md:h-[279px] w-full rounded-none md:rounded-2xl bg-cover bg-center flex ${
                feature.reverse ? 'md:flex-row-reverse md:pr-10' : 'md:flex-row md:pl-10'
              } flex-col items-center justify-between gap-6 md:gap-8`}
              style={{ backgroundImage: `url("${feature.bgImage}")` }}
            >
              <div className="flex-1 px-8 pt-10 md:pt-0" style={{ color: feature.textColor }}>
                <h3 className="text-xl font-semibold mb-3 leading-[30px]">{feature.title}</h3>
                <p className="text-lg leading-[1.6] opacity-60">{feature.description}</p>
              </div>
              <div 
                className="w-[414px] md:h-full h-[278px] bg-contain bg-no-repeat bg-bottom rounded-lg" 
                style={{ backgroundImage: `url(${feature.decoration})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMacaronSection;