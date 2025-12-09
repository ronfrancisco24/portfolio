
interface SkillCard {
    img?: string;
    label?: string;
    description?: string;
}

export default function SkillCard({
  label = 'Start',
  description = '',
  img = '',
}: SkillCard) {
  return (
    <div className="text-white border-4 border-solid rounded-2xl border-[#686D76] ">
      <div className="p-16 flex justify-center flex-col">
        <img src={img} className="h-40 my-5 "/>
        <h1 className="text-center text-2xl my-3">{label}</h1>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
}


