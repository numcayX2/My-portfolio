export default function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <p className="label-latin text-muted uppercase">
      {index} / {title}
    </p>
  );
}
