import { Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";

const LibreBaskerville = Libre_Baskerville({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const BPImperialItalic = localFont({
  src: "../assets/BpImperial/bpimperial.italic.otf",
  style: "italic",
  weight: "700",
});

export { BPImperialItalic, LibreBaskerville };
