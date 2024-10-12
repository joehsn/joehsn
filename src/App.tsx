import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lead, typographyVariants } from "@/components/ui/typography";
import Avatar from "@/components/avatar";
import { cn } from "@/lib/utils";

function App() {
  return (
    <>
      <Navbar />
      <section className="px-4">
        <div className="container mx-auto my-20 flex flex-col-reverse items-center gap-y-16 sm:flex-row md:my-32">
          <div>
            <div
              className={cn(
                typographyVariants({
                  variant: "h1",
                }),
                "leading-snug",
              )}
            >
              Hello there! 👋
              <br />
              I&apos;m Youssef Hassan
            </div>
            <Lead className="mt-6 w-full sm:w-[80%]">
              A self-taught front-end developer who lives for turning ideas into
              awesome websites.
            </Lead>
          </div>
          <Avatar className="h-full w-64 sm:w-96 lg:mx-auto" />
        </div>
      </section>
      <Footer />
      </>
  );
}

export default App;
