import ColourfulText from "@/components/ui/colourful-text";

export function ColourfulTextDemo() {
  return (
    <div className="w-full px-4 md:px-8">
      <h1 className="w-full max-w-7xl mx-auto text-2xl md:text-5xl lg:text-7xl font-bold text-black text-center font-sans leading-tight">
        Powering <ColourfulText text="Learning" /> <br />
        for Modern Teams <br /> & <ColourfulText text="Future Leaders" />
      </h1>
    </div>
  );
}
