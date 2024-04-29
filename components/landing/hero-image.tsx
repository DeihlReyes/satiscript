import Image from 'next/image'
import heroImage from '@/public/assets/landpage.png'
import diamond from '@/public/assets/diamond.png'
import hexagon from '@/public/assets/hexagon.png'
import hexagonOutlined from '@/public/assets/hexagon-outline.png'

const HeroImage = () => {
  return (
    <div className="relative w-full lg:mt-[33%] hidden lg:block">
      {/* Position the heroImage absolutely within the relative container */}
      <Image className="absolute right-0 bottom-0" src={heroImage} width={600} height={600} alt="hero" />

      {/* Position the diamond absolutely within the relative container */}
      <Image className="absolute left-[15px] bottom-[200px] animate-bounce-slow delay-1000" src={diamond} width={25} height={25} alt="diamond" />

      <div className='absolute left-[460px] bottom-[340px] w-[14px] h-[14px] bg-[#44e2d5] rounded-full animate-bounce-slow delay-95'></div>

      <div className='absolute left-[483px] bottom-[330px] w-3 h-3 border-[#44e2d5] border-solid border-[3.5px] rounded-full  animate-bounce-slow delay-115'></div>

      <div className='absolute left-[477px] bottom-[300px] w-5 h-5 bg-[#44e2d5] rounded-full animate-bounce-slow delay-135'></div>

      {/* Position the hexagon absolutely within the relative container */}
      <Image className="absolute left-[480px] bottom-[240px] animate-bounce-slow delay-155" src={hexagon} width={35} height={35} alt="hexagon" />
      
      <div className='absolute left-[485px] bottom-[200px] w-3 h-3 bg-[#82edd2] rounded-full animate-bounce-slow delay-175'></div>
      {/* Position the outlined hexagon absolutely within the relative container */}
      <Image className="absolute left-[527px] bottom-[220px] animate-bounce-slow delay-195" src={hexagonOutlined} width={15} height={15} alt="hexagonOutlined" />

    </div>
  )
}


export default HeroImage