/** Display words in overflow-hidden masks, scrubbed open on scroll.
 *  Server-rendered from real text, so the heading reads normally without JS and to assistive tech. */
export default function SplitWords({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`}>
          {index > 0 ? " " : null}
          <span className="split-mask">
            <span data-word className="split-word">
              {word}
            </span>
          </span>
        </span>
      ))}
    </>
  );
}
