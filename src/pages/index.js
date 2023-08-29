import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/med12.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import "../styles/Home.module.css";
import openGraph from '../../public/ogImage.png';


export default function Home() {

  return (
    <>
      <Head>
        <title>MedCode</title>
        <meta property="og:title" content="MedCode|Software Developer" />
        <meta property="og:image" content={openGraph}/>
        <link rel="icon" href="/group.ico" />
        <meta
          name="description"
          content="Explore MedCode software developer portfolio and 
        discover the latest webapp projects and software engineering articles 
        Showcase your skills as a full-stack developer and Web development, and software engineer,Application development,Back-end development,Python,JavaScript,java,HTML ,CSS, C++,Coding,make money online, business online "
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.medcode.dev/" />
        <meta property="og:title" content="MedCode|Software Developer" />
        <meta
          property="og:description"
          content="Explore MedCode software developer portfolio and  discover the latest webapp projects and software engineering articles  Showcase your skills as a full-stack developer and Web development, and software engineer,Application development,Back-end development,Python,JavaScript,java,HTML ,CSS, C++,Coding,make money online, business online "
        />
        <meta property="og:image" content={openGraph}/>
        {/* Twitter */}
     
        <meta property="twitter:url" content="https://www.medcode.dev/" />
        <meta property="twitter:title" content="MedCode|Software Developer" />
        <meta
          property="twitter:description"
          content="Explore MedCode software developer portfolio and  discover the latest webapp projects "
        />

        <meta
          property="twitter:image"
          content="../../public/images/ogImage.png"
        />
          
        <meta property="twitter:image" content="/_next/static/media/ogImage.ca8db346.png" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="med_dakir"
                className="w-[600px] mb-12 h-auto ml-10 md:inline-block md:w-full sm:ml-2"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center sm:mt-[-50px]">
              <AnimatedText
                text="Hi, my Name is Med..."
                className="!text-3xl text-[#c3a29f] font-dance !text-left 
                xl:!text-2xl lg:!text-center lg:!text=2xl md:!text-2xl sm:!text-xl
                "
              />{" "}
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                "
              />
              <p className="my-4 text-base font-normal md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in web
                development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="https://www.vivacode.dev/contactMe/"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="med_dakir" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
