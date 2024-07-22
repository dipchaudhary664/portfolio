interface IProps {
  title: string;
  desc: string;
}
export default function Heading({ title, desc }: IProps) {
  return (
    <div>
      <p className="font-title tracking-wider text-4xl uppercase">{title}</p>
      <p className="text-zinc-400">{desc}</p>
    </div>
  );
}
